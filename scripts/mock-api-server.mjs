// mock-api-server.mjs
// Standalone mock server supporting REST, E-Commerce, OAuth 2.0, SOAP 1.2, and GraphQL
import http from 'http';
import { parse as parseUrl } from 'url';

const PORT = 5050;

// In-memory data store
const books = new Map();
const products = new Map();
const orders = new Map();

// Seed initial book
books.set('9781227', {
  book_name: 'Learn Postman Testing',
  isbn: '9781',
  aisle: '227',
  author: 'John Doe'
});

// Seed initial product
products.set('prod_101', {
  productId: 'prod_101',
  productName: 'Campus Automation Textbook',
  price: 45,
  category: 'Education'
});

function readBody(req) {
  return new Promise((resolve) => {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => resolve(body));
  });
}

const server = http.createServer(async (req, res) => {
  const parsed = parseUrl(req.url, true);
  const pathname = parsed.pathname;
  const method = req.method;

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, SOAPAction');

  if (method === 'OPTIONS') {
    res.writeHead(200);
    return res.end();
  }

  // 1. Health check
  if (pathname === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ status: 'UP', service: 'Campus Test API Suite' }));
  }

  // 1a. Campus Catalog
  if (pathname === '/v1/catalog') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({
      institution: 'Apex Campus Global Platform',
      academic_year: '2026-2027',
      total_courses: 4,
      courses: [
        { code: 'CS101', title: 'Foundations of Computer Systems', department: 'Computer Science', credits: 4, status: 'Active' },
        { code: 'CS204', title: 'Data Structures and Algorithms', department: 'Computer Science', credits: 4, status: 'Active' },
        { code: 'QA301', title: 'Agentic API Automation and Quality', department: 'Software Engineering', credits: 3, status: 'Active' },
        { code: 'EE210', title: 'Digital Logic and Microprocessors', department: 'Electrical Engineering', credits: 4, status: 'Active' }
      ]
    }));
  }

  // 1b. Mock UN SDG Goals
  if (pathname.includes('/SDGAPI/v1/sdg/Goal/List')) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify([
      { goal: '1', title: 'No Poverty' },
      { goal: '2', title: 'Zero Hunger' },
      { goal: '4', title: 'Quality Education' }
    ]));
  }

  // 1c. Mock Status checks
  if (pathname.includes('/status/200')) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return res.end('OK');
  }
  if (pathname.includes('/status/404')) {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ error: 'Not Found', message: 'Requested campus resource does not exist' }));
  }
  if (pathname.includes('/status/500')) {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ error: 'Internal Server Error', message: 'Database connection pool exhausted' }));
  }

  // 1d. Mock JSONPlaceholder /posts
  if (pathname.includes('/posts') && method === 'POST') {
    res.writeHead(201, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ id: 101, title: 'API Testing on Campus', body: 'Decoupled REST microservices' }));
  }

  // 2. REST Campus Library: AddBook (POST /v1/books)
  if (pathname === '/v1/books' && method === 'POST') {
    const raw = await readBody(req);
    try {
      const data = JSON.parse(raw);
      const id = `${data.isbn}${data.aisle}`;
      if (books.has(id)) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ Msg: 'Book Already Exists' }));
      }
      books.set(id, {
        book_name: data.name,
        isbn: data.isbn,
        aisle: data.aisle,
        author: data.author
      });
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ msg: 'successfully added', Msg: 'successfully added', ID: id }));
    } catch {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: 'Malformed JSON payload' }));
    }
  }

  // 3. REST Campus Library: GetBook (GET /v1/books?id=... or ?category=science)
  if (pathname === '/v1/books' && method === 'GET') {
    if (parsed.query.category === 'science') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify([{
        book_name: 'Science & Cosmos',
        isbn: '9781',
        aisle: '101',
        author: 'Carl Sagan',
        category: 'science'
      }]));
    }
    const id = parsed.query.id;
    if (!id || !books.has(id)) {
      // If books is empty or default query, return the default book
      const defaultBook = {
        book_name: 'Learn Postman Testing',
        isbn: '9781',
        aisle: '227',
        author: 'John Doe'
      };
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify([defaultBook]));
    }
    const b = books.get(id);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify([{
      book_name: b.book_name,
      isbn: b.isbn,
      aisle: b.aisle,
      author: b.author
    }]));
  }

  // 4. REST Campus Library: DeleteBook (POST /v1/books/delete)
  if (pathname === '/v1/books/delete' && method === 'POST') {
    const raw = await readBody(req);
    try {
      const data = JSON.parse(raw);
      if (books.has(data.ID)) {
        books.delete(data.ID);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ msg: 'book is successfully deleted' }));
      }
      res.writeHead(404, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ msg: 'book not found' }));
    } catch {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: 'Invalid JSON' }));
    }
  }

  // 5. REST Campus Library: Department Audit (GET /v1/departments/audit)
  if (pathname === '/v1/departments/audit' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({
      department: 'Computer Science and Engineering',
      curriculum_year: 2026,
      budget: { total_allocated: 275 },
      books: [
        {
          id: 'BK-101',
          title: 'Postman Architecture Patterns',
          author: 'Akshat Sinha',
          price: 55,
          copies: 5,
          tags: ['testing', 'automation']
        }
      ]
    }));
  }

  // 6. E-Commerce: Login (POST /v1/auth/login)
  if (pathname === '/v1/auth/login' && method === 'POST') {
    const raw = await readBody(req);
    try {
      const creds = JSON.parse(raw);
      if (creds.userEmail && creds.userPassword) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({
          token: 'jwt_mock_session_token_xyz987654321',
          userId: 'usr_86202703',
          message: 'login successfully'
        }));
      }
    } catch {}
    res.writeHead(400, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ message: 'Invalid credentials' }));
  }

  // 7. E-Commerce: Create Product (POST /v1/store/products)
  if (pathname === '/v1/store/products' && method === 'POST') {
    const auth = req.headers['authorization'] || '';
    if (!auth.includes('mock_session_token')) {
      res.writeHead(401, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ message: 'Access Denied: Missing or invalid token' }));
    }
    const raw = await readBody(req);
    let pName = 'Campus Product';
    if (raw.includes('productName')) {
      const match = raw.match(/productName[^\n]*\n\s*([^\r\n]+)/) || raw.match(/"productName"\s*:\s*"([^"]+)"/);
      if (match) pName = match[1].trim();
    }
    const pid = 'prod_' + Math.floor(1000 + Math.random() * 9000);
    products.set(pid, { productId: pid, productName: pName, price: 49.99 });
    res.writeHead(201, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({
      productId: pid,
      message: 'product added successfully'
    }));
  }

  // 8. E-Commerce: Create Order (POST /v1/store/orders)
  if (pathname === '/v1/store/orders' && method === 'POST') {
    const auth = req.headers['authorization'] || '';
    if (!auth.includes('mock_session_token')) {
      res.writeHead(401, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ message: 'Access Denied' }));
    }
    const raw = await readBody(req);
    try {
      const data = JSON.parse(raw);
      const oid = 'ord_' + Math.floor(1000 + Math.random() * 9000);
      orders.set(oid, {
        orderId: oid,
        productId: data.productId,
        country: data.country || 'India',
        productName: products.get(data.productId)?.productName || 'Campus Item'
      });
      res.writeHead(201, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({
        orders: [oid],
        productOrderId: [oid],
        message: 'Order Placed Successfully'
      }));
    } catch {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ message: 'Bad request' }));
    }
  }

  // 9. E-Commerce: View Order Details (GET /v1/store/orders?id=...)
  if (pathname === '/v1/store/orders' && method === 'GET') {
    const auth = req.headers['authorization'] || '';
    if (!auth.includes('mock_session_token')) {
      res.writeHead(401, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ message: 'Access Denied' }));
    }
    const oid = parsed.query.id;
    const ord = orders.get(oid) || { orderId: oid, productName: 'Campus Item', price: 49.99 };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({
      data: {
        _id: oid,
        orderById: 'usr_86202703',
        productName: ord.productName,
        country: ord.country || 'India',
        message: 'Orders fetched successfully'
      }
    }));
  }

  // 10. E-Commerce: Delete Product (DELETE /v1/store/products/:id)
  if (pathname.startsWith('/v1/store/products/') && method === 'DELETE') {
    const pid = pathname.split('/').pop();
    products.delete(pid);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ message: 'Product Deleted Successfully' }));
  }

  // 11. E-Commerce: Delete Order (DELETE /v1/store/orders/:id)
  if (pathname.startsWith('/v1/store/orders/') && method === 'DELETE') {
    const oid = pathname.split('/').pop();
    orders.delete(oid);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ message: 'Order Deleted Successfully' }));
  }

  // 12. OAuth 2.0: Authorize Endpoint (GET /oauth/authorize)
  if (pathname === '/oauth/authorize' && method === 'GET') {
    const q = parsed.query;
    if (q.response_type === 'code' && q.client_id && q.redirect_uri) {
      const code = 'authcode_' + Math.random().toString(36).substring(2, 12);
      const redirectWithCode = `${q.redirect_uri}?code=${code}&state=${q.state || 'none'}`;
      res.writeHead(302, { 'Location': redirectWithCode });
      return res.end();
    }
    res.writeHead(400, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ error: 'invalid_request', error_description: 'Missing mandatory OAuth parameters' }));
  }

  // 13. OAuth 2.0: Token Endpoint (POST /oauth/token or POST /oauth/v2/token)
  if ((pathname === '/oauth/token' || pathname === '/oauth/v2/token') && method === 'POST') {
    const raw = await readBody(req);
    let params = {};
    if (req.headers['content-type']?.includes('json')) {
      try { params = JSON.parse(raw); } catch {}
    } else {
      const q = new URLSearchParams(raw);
      for (const [k, v] of q.entries()) params[k] = v;
    }
    // Also merge query string if passed there
    params = { ...parsed.query, ...params };

    if (params.grant_type === 'authorization_code' || params.grant_type === 'client_credentials') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({
        access_token: 'campus_bearer_token_' + Math.random().toString(36).substring(2, 14),
        token_type: 'Bearer',
        expires_in: 3600,
        scope: params.scope || 'read:catalog write:loans'
      }));
    }
    res.writeHead(400, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ error: 'unsupported_grant_type' }));
  }

  // 14. SOAP 1.2: Number Conversion (POST /soap/NumberConversion or POST /webservicesserver/NumberConversion.wso)
  if (pathname.includes('NumberConversion') && method === 'POST') {
    const raw = await readBody(req);
    const contentType = req.headers['content-type'] || '';
    
    // Check SOAP 1.2 content type
    if (!contentType.includes('soap+xml') && !contentType.includes('text/xml')) {
      res.writeHead(415, { 'Content-Type': 'application/soap+xml; charset=utf-8' });
      return res.end(`<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope">
  <soap:Body>
    <soap:Fault>
      <soap:Code><soap:Value>soap:Sender</soap:Value></soap:Code>
      <soap:Reason><soap:Text xml:lang="en">Unsupported Media Type: Expected application/soap+xml</soap:Text></soap:Reason>
    </soap:Fault>
  </soap:Body>
</soap:Envelope>`);
    }

    if (raw.includes('NumberToWords')) {
      const match = raw.match(/<ubiNum>(\d+)<\/ubiNum>/);
      const num = match ? match[1] : '400';
      const word = num === '400' ? 'four hundred' : num === '500' ? 'five hundred' : `number ${num}`;
      res.writeHead(200, { 'Content-Type': 'application/soap+xml; charset=utf-8' });
      return res.end(`<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope">
  <soap:Body>
    <m:NumberToWordsResponse xmlns:m="http://www.dataaccess.com/webservicesserver/">
      <m:NumberToWordsResult>${word}</m:NumberToWordsResult>
    </m:NumberToWordsResponse>
  </soap:Body>
</soap:Envelope>`);
    }

    if (raw.includes('NumberToDollars')) {
      const match = raw.match(/<dNum>([^<]+)<\/dNum>/);
      const num = match ? match[1] : '123';
      const dollars = num === '123' ? 'one hundred and twenty three dollars' : `${num} dollars`;
      res.writeHead(200, { 'Content-Type': 'application/soap+xml; charset=utf-8' });
      return res.end(`<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope">
  <soap:Body>
    <m:NumberToDollarsResponse xmlns:m="http://www.dataaccess.com/webservicesserver/">
      <m:NumberToDollarsResult>${dollars}</m:NumberToDollarsResult>
    </m:NumberToDollarsResponse>
  </soap:Body>
</soap:Envelope>`);
    }

    res.writeHead(200, { 'Content-Type': 'application/soap+xml; charset=utf-8' });
    return res.end(`<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope">
  <soap:Body><Response>OK</Response></soap:Body>
</soap:Envelope>`);
  }

  // 15. GraphQL Endpoint (POST /graphql)
  if (pathname === '/graphql' && method === 'POST') {
    const raw = await readBody(req);
    let payload = {};
    try { payload = JSON.parse(raw); } catch {}
    const query = payload.query || '';
    const vars = payload.variables || {};

    // 15a. Mutation: createLocation / createCharacter / createEpisode
    if (query.includes('mutation')) {
      const locId = Math.floor(10 + Math.random() * 90);
      const charId = Math.floor(10 + Math.random() * 90);
      const epId = Math.floor(10 + Math.random() * 90);

      const data = {};
      if (query.includes('createLocation')) {
        data.createLocation = { id: locId };
      }
      if (query.includes('createCharacter')) {
        data.createCharacter = { id: charId };
      }
      if (query.includes('createEpisode')) {
        data.createEpisode = { id: epId };
      }
      if (query.includes('deleteLocations')) {
        data.deleteLocations = { locations_deleted: 2 };
      }
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ data }));
    }

    // 15b. Query: character / student / location / episodes
    const data = {};
    if (query.includes('character') || query.includes('student')) {
      data.character = {
        name: 'Akshat Research Scholar',
        gender: 'Male',
        status: 'Active',
        id: vars.characterId || 8
      };
    }
    if (query.includes('location')) {
      data.location = {
        name: 'University Innovation Campus',
        dimension: 'North Wing Lab 4'
      };
    }
    if (query.includes('episode') || query.includes('courses')) {
      data.episode = {
        name: 'Cloud API Automation Seminar',
        air_date: '2026-09-21',
        episode: 'EP-101'
      };
    }
    if (query.includes('characters') || query.includes('students')) {
      data.characters = {
        info: { count: 1 },
        results: [{ name: 'Akshat Research Scholar', type: 'Faculty' }]
      };
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ data }));
  }

  // 16. Fallback
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Endpoint Not Found', path: pathname }));
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Mock API Test Server running on http://0.0.0.0:${PORT}`);
});
