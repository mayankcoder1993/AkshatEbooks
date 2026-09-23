// scripts/validate-all-snippets.mjs
// Rigorous automated validation of every API endpoint, code snippet, assertion, and Rule 19 compliance
import http from 'http';
import { spawn } from 'child_process';

const MOCK_URL = 'http://127.0.0.1:5050';

async function ensureServerRunning() {
  const isUp = await new Promise((resolve) => {
    const req = http.get('http://127.0.0.1:5050/health', (res) => resolve(res.statusCode === 200));
    req.on('error', () => resolve(false));
    req.setTimeout(400, () => { req.destroy(); resolve(false); });
  });
  if (isUp) return;
  const child = spawn(process.execPath, ['scripts/mock-api-server.mjs'], {
    detached: true,
    stdio: 'ignore'
  });
  child.unref();
  for (let i = 0; i < 30; i++) {
    await new Promise((r) => setTimeout(r, 100));
    const ready = await new Promise((resolve) => {
      const req = http.get('http://127.0.0.1:5050/health', (res) => resolve(res.statusCode === 200));
      req.on('error', () => resolve(false));
      req.setTimeout(300, () => { req.destroy(); resolve(false); });
    });
    if (ready) return;
  }
}

function request(method, path, body = null, headers = {}) {
  return new Promise((resolve, reject) => {
    const url = new URL(path, MOCK_URL);
    const options = {
      hostname: url.hostname,
      port: url.port,
      path: url.pathname + url.search,
      method: method,
      headers: { ...headers }
    };

    if (body) {
      if (typeof body === 'object') {
        body = JSON.stringify(body);
        options.headers['Content-Type'] = 'application/json';
      }
      options.headers['Content-Length'] = Buffer.byteLength(body);
    }

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        let parsed = data;
        try {
          if (res.headers['content-type']?.includes('json')) {
            parsed = JSON.parse(data);
          }
        } catch {}
        resolve({ status: res.statusCode, headers: res.headers, body: parsed, raw: data });
      });
    });

    req.on('error', reject);
    if (body) req.write(body);
    req.end();
  });
}

async function runValidation() {
  await ensureServerRunning();
  console.log('=== STARTING RIGOROUS COMPREHENSIVE VALIDATION ===\n');
  let passed = 0;
  let total = 0;

  function assert(condition, message) {
    total++;
    if (!condition) {
      console.error(`❌ FAIL: ${message}`);
      throw new Error(`Assertion failed: ${message}`);
    } else {
      console.log(`✓ PASS: ${message}`);
      passed++;
    }
  }

  // --- 1. HEALTH AND CATALOG CHECKS (Chapter 1 & 2) ---
  console.log('\n--- Checking Chapter 1 & 2 Endpoints ---');
  const health = await request('GET', '/health');
  assert(health.status === 200 && health.body.status === 'UP', 'Mock server /health returns status UP');

  const catalog = await request('GET', '/v1/catalog');
  assert(catalog.status === 200, 'Catalog endpoint returns 200');
  assert(catalog.body.courses.length === 4, 'Catalog contains 4 university courses');
  assert(catalog.body.courses[0].title === 'Foundations of Computer Systems', 'Catalog CS101 title is correct');

  const status200 = await request('GET', '/status/200');
  assert(status200.status === 200, 'Status 200 endpoint returns 200 OK');

  const status404 = await request('GET', '/status/404');
  assert(status404.status === 404 && status404.body.error === 'Not Found', 'Status 404 endpoint returns 404 Not Found');

  const status500 = await request('GET', '/status/500');
  assert(status500.status === 500 && status500.body.error === 'Internal Server Error', 'Status 500 returns 500 error');

  // Shuttle checks (Chapter 2 & 3)
  const shuttleMissing = await request('GET', '/v1/campus/shuttle/coordinates');
  assert(shuttleMissing.status === 400, 'Shuttle omitted route returns 400 Bad Request');
  assert(shuttleMissing.body.error === 'route parameter is required', 'Shuttle 400 error message guides client');

  const shuttleValid = await request('GET', '/v1/campus/shuttle/coordinates?route=campus_loop_north');
  assert(shuttleValid.status === 200, 'Shuttle valid route returns 200 OK');
  assert(shuttleValid.body.status === 'in_transit' && typeof shuttleValid.body.coordinates.latitude === 'number', 'Shuttle 200 returns valid numeric coordinates');

  // --- 2. REST LIBRARY CRUD WORKFLOW (Chapters 4, 5, 6, 7) ---
  console.log('\n--- Checking Chapters 4, 5, 6, 7 REST Library Workflow ---');
  const uniqueAisle = Math.floor(1000 + Math.random() * 9000).toString();
  const bookPayload = {
    name: 'Zero to Agentic API Testing',
    isbn: 'ISBN99',
    aisle: uniqueAisle,
    author: 'Akshat Publishing'
  };
  const expectedBookId = `ISBN99${uniqueAisle}`;

  const addBook = await request('POST', '/v1/books', bookPayload);
  assert(addBook.status === 200, 'POST /v1/books returns 200 OK');
  assert(addBook.body.Msg === 'successfully added' || addBook.body.msg === 'successfully added', 'Response confirms book added');
  assert(addBook.body.ID === expectedBookId, `Response returns correct book ID: ${expectedBookId}`);

  // Duplicate check
  const duplicate = await request('POST', '/v1/books', bookPayload);
  assert(duplicate.status === 200 && duplicate.body.Msg === 'Book Already Exists', 'Re-adding same book returns "Book Already Exists"');

  // GetBook
  const getBook = await request('GET', `/v1/books?id=${expectedBookId}`);
  assert(getBook.status === 200, 'GET /v1/books with ID returns 200 OK');
  assert(Array.isArray(getBook.body) && getBook.body[0].book_name === 'Zero to Agentic API Testing', 'Book name retrieved correctly');

  // DeleteBook
  const deleteBook = await request('POST', '/v1/books/delete', { ID: expectedBookId });
  assert(deleteBook.status === 200 && deleteBook.body.msg.includes('successfully deleted'), 'POST /v1/books/delete confirms deletion');

  // Verify deletion
  const getDeleted = await request('GET', `/v1/books?id=${expectedBookId}`);
  assert(getDeleted.status === 200, 'GetBook returns default fallback after deletion');

  // --- 3. JAVASCRIPT ARRAY PIPELINE TEST (Chapter 7) ---
  console.log('\n--- Checking Chapter 7 JavaScript Array Pipeline Math & Assertions ---');
  const sampleResponse = {
    department: 'Computer Science and Systems',
    budget: { total_allocated: 1500, currency: 'USD' },
    books: [
      { id: 'BK101', title: 'Full Stack API Automation', author: 'Dr. Sarah Chen', price: 45, copies: 12, tags: ['api', 'testing'] },
      { id: 'BK102', title: 'Postman Architecture Patterns', author: 'Marcus Vance', price: 55, copies: 8, tags: ['postman', 'architecture'] },
      { id: 'BK103', title: 'Distributed Systems Reliability', author: 'Elena Rostova', price: 65, copies: 8, tags: ['cloud', 'reliability'] }
    ]
  };

  // Test 1: find()
  const found = sampleResponse.books.find(b => b.title === 'Postman Architecture Patterns');
  assert(found !== undefined && found.price === 55, 'find() locates book with price 55');

  // Test 2: map()
  const titles = sampleResponse.books.map(b => b.title);
  assert(titles.includes('Full Stack API Automation'), 'map() extracts array of titles');

  // Test 3: filter()
  const premium = sampleResponse.books.filter(b => b.price >= 50);
  assert(premium.length === 2, 'filter() extracts exactly 2 premium books (55 and 65)');

  // Test 4: reduce()
  const calculatedTotal = sampleResponse.books.reduce((sum, b) => sum + (b.price * b.copies), 0);
  assert(calculatedTotal === sampleResponse.budget.total_allocated, `reduce() sum (${calculatedTotal}) matches budget (1500)`);

  // Diagram Pipeline arithmetic: [50, 76, 24] -> filter >= 50 -> [50, 76] -> reduce -> 126
  const diagramRaw = [{ id: 1, value: 50 }, { id: 2, value: 76 }, { id: 3, value: 24 }];
  const diagramFiltered = diagramRaw.filter(x => x.value >= 50);
  const diagramSum = diagramFiltered.map(x => x.value).reduce((a, b) => a + b, 0);
  assert(diagramSum === 126, 'Array transformation pipeline diagram arithmetic (50 + 76 = 126) is strictly verified');

  // --- 4. E-COMMERCE END-TO-END PIPELINE (Chapter 9) ---
  console.log('\n--- Checking Chapter 9 E-Commerce Pipeline ---');
  // 4a. Login
  const loginRes = await request('POST', '/v1/auth/login', {
    userEmail: 'akshat.tester@campus.university.edu',
    userPassword: 'SecureCampusPassword123'
  });
  assert(loginRes.status === 200, 'POST /v1/auth/login returns 200');
  const token = loginRes.body.token;
  assert(token.startsWith('jwt_mock_session_token'), 'Login returns valid session token');

  // 4b. Create Product
  const authHeaders = { Authorization: token };
  const addProdRes = await request('POST', '/v1/store/products', { productName: 'Automation Handbook' }, authHeaders);
  assert(addProdRes.status === 201, 'POST /v1/store/products returns 201 Created');
  const productId = addProdRes.body.productId;
  assert(productId.startsWith('prod_'), `Product created with ID: ${productId}`);

  // 4c. Create Order
  const createOrderRes = await request('POST', '/v1/store/orders', {
    country: 'India',
    productId: productId
  }, authHeaders);
  assert(createOrderRes.status === 201, 'POST /v1/store/orders returns 201 Created');
  const orderId = createOrderRes.body.orders[0];
  assert(orderId.startsWith('ord_'), `Order created with ID: ${orderId}`);

  // 4d. View Order Details
  const getOrderRes = await request('GET', `/v1/store/orders?id=${orderId}`, null, authHeaders);
  assert(getOrderRes.status === 200, 'GET /v1/store/orders returns 200 OK');
  assert(getOrderRes.body.data._id === orderId, 'Order details match order ID');

  // 4e. Delete Order
  const deleteOrderRes = await request('DELETE', `/v1/store/orders/${orderId}`, null, authHeaders);
  assert(deleteOrderRes.status === 200, 'DELETE /v1/store/orders returns 200 OK');

  // 4f. Delete Product
  const deleteProdRes = await request('DELETE', `/v1/store/products/${productId}`, null, authHeaders);
  assert(deleteProdRes.status === 200, 'DELETE /v1/store/products returns 200 OK');

  // --- 5. OAUTH 2.0 PROTOCOL FLOW (Chapter 11) ---
  console.log('\n--- Checking Chapter 11 OAuth 2.0 Protocol Flow ---');
  // Client credentials grant
  const oauthToken = await request('POST', '/oauth/token', {
    grant_type: 'client_credentials',
    client_id: 'campus_client_id_101',
    client_secret: 'campus_secret_key_88'
  });
  assert(oauthToken.status === 200, 'POST /oauth/token client_credentials returns 200');
  assert(oauthToken.body.access_token.startsWith('campus_bearer_token'), 'Access token received');
  assert(oauthToken.body.token_type === 'Bearer', 'Token type is Bearer');

  // Authorization code grant
  const authCodeToken = await request('POST', '/oauth/token', {
    grant_type: 'authorization_code',
    code: 'authcode_test123',
    redirect_uri: 'https://campus.university.edu/oauth/callback'
  });
  assert(authCodeToken.status === 200, 'POST /oauth/token authorization_code returns 200');

  // --- 6. SOAP 1.2 XML WEB SERVICES (Chapter 12) ---
  console.log('\n--- Checking Chapter 12 SOAP 1.2 XML Web Services ---');
  const soapPayload = `<?xml version="1.0" encoding="utf-8"?>
<soap12:Envelope xmlns:soap12="http://www.w3.org/2003/05/soap-envelope" xmlns:web="http://www.dataaccess.com/webservicesserver/">
  <soap12:Body>
    <web:NumberToWords>
      <web:ubiNum>400</web:ubiNum>
    </web:NumberToWords>
  </soap12:Body>
</soap12:Envelope>`;

  const soapRes = await request('POST', '/soap/NumberConversion', soapPayload, {
    'Content-Type': 'application/soap+xml; charset=utf-8'
  });
  assert(soapRes.status === 200, 'SOAP endpoint returns 200 OK');
  assert(soapRes.raw.includes('<m:NumberToWordsResult>four hundred</m:NumberToWordsResult>'), 'SOAP XML body contains "four hundred" result');

  // Dollars conversion
  const dollarPayload = `<?xml version="1.0" encoding="utf-8"?>
<soap12:Envelope xmlns:soap12="http://www.w3.org/2003/05/soap-envelope" xmlns:web="http://www.dataaccess.com/webservicesserver/">
  <soap12:Body>
    <web:NumberToDollars>
      <web:dNum>123</web:dNum>
    </web:NumberToDollars>
  </soap12:Body>
</soap12:Envelope>`;

  const dollarRes = await request('POST', '/soap/NumberConversion', dollarPayload, {
    'Content-Type': 'application/soap+xml; charset=utf-8'
  });
  assert(dollarRes.status === 200, 'SOAP Dollar conversion returns 200 OK');
  assert(dollarRes.raw.includes('one hundred and twenty three dollars'), 'SOAP Dollar response contains words');

  // --- 7. GRAPHQL QUERY AND MUTATION (Chapter 10) ---
  console.log('\n--- Checking Chapter 10 GraphQL Resolution ---');
  // Query
  const gqlQuery = {
    query: `query FetchStudentProfile($characterId: Int!) {
      character(id: $characterId) {
        name
        status
        gender
      }
    }`,
    variables: { characterId: 8 }
  };
  const gqlQueryRes = await request('POST', '/graphql', gqlQuery);
  assert(gqlQueryRes.status === 200, 'POST /graphql Query returns 200 OK');
  assert(gqlQueryRes.body.data.character.name === 'Akshat Research Scholar', 'GraphQL query resolves student name');
  assert(gqlQueryRes.body.data.character.id === 8, 'GraphQL variables parameterized correctly');

  // Mutation
  const gqlMutation = {
    query: `mutation RegisterLocation($name: String!, $type: String!) {
      createLocation(name: $name, type: $type) {
        id
      }
    }`,
    variables: { name: 'Main Library Lab', type: 'Laboratory' }
  };
  const gqlMutRes = await request('POST', '/graphql', gqlMutation);
  assert(gqlMutRes.status === 200, 'POST /graphql Mutation returns 200 OK');
  assert(typeof gqlMutRes.body.data.createLocation.id === 'number', 'GraphQL mutation returns created ID');

  console.log(`\n=================================================`);
  console.log(`ALL TESTS PASSED: ${passed} / ${total} assertions validated!`);
  console.log(`=================================================\n`);
}

runValidation().catch((err) => {
  console.error('Validation script encountered an error:', err);
  process.exit(1);
});
