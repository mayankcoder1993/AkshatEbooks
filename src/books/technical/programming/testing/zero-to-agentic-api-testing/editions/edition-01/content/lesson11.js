import oauth2Img from '../assets/oauth2-handshake-flow.jpg'

export const lesson11 = {
  id: 'oauth-token-auth',
  icon: '',
  title: 'OAuth 2.0 and Modern Token Authentication',
  shortTitle: 'OAuth 2.0 and Auth',
  subtitle: 'The four roles, Authorization Code grant handshake, automated token exchange scripts, global variables, and Bearer token chaining.',
  tags: ['OAuth 2.0', 'Security', 'Bearer Tokens', 'Authentication', 'Handshake'],
  blocks: [
    {
      type: 'mission-hud',
      mission: 'Mission 3: Hardening for Enterprise Production and CI CD',
      phase: 'Phase 3 of 5: OAuth 2.0 Security Protocols',
      rank: 'Rank: Enterprise Identity Architect',
      status: 'ACTIVE'
    },
    {
      type: 'mission-tracker',
      badge: 'MISSION 3 PROGRESS · STEP 3 OF 5',
      title: 'Continuing Mission 3: Mastering Enterprise Token Security',
      text: 'Having simulated microservices with mock servers and schema contracts, we encounter enterprise security gateways. High value APIs never accept raw username and password credentials directly in request bodies. Instead, modern microservices enforce OAuth 2.0 token based authorization. Across this chapter, we master the industry standard protocol: dissecting the four roles, executing the Authorization Code grant handshake, inspecting the mandatory parameters for both authorization code and access token requests, automating token retrieval in test scripts, and chaining Bearer tokens into secured requests.',
    },
    {
      type: 'heading',
      text: 'Step 1: Why Modern APIs Rely on OAuth 2.0',
    },
    {
      type: 'paragraph',
      text: 'Imagine checking into a hotel or your college dorm hostel. The receptionist does not hand you the master brass key that opens every door on campus. Instead, they issue a plastic keycard that only unlocks your specific room and automatically expires at checkout time.',
    },
    {
      type: 'paragraph',
      text: 'This is the core purpose of **OAuth 2.0**. It is an open authorization standard that lets applications access protected user resources without ever seeing or storing the user private account password.',
    },
    {
      type: 'paragraph',
      text: 'In our campus library automation project, faculty members and researchers access a restricted digital archive containing rare manuscripts and sensitive academic data. The university cannot allow catalog apps or student portals to store raw campus passwords. If a third party app suffers a security breach, every user credentials would be compromised. Instead, the campus identity provider authenticates the user on a dedicated login screen and issues a temporary digital keycard: a Bearer access token valid for one hour with strictly scoped read permissions.',
    },
    {
      type: 'callout',
      variant: 'note',
      title: 'Authentication vs Authorization: The Crucial Distinction',
      paragraphs: [
        '• Authentication (AuthN): Answers the question: "Who are you?" Proving identity by providing credentials such as a username, password, or biometric face scan.',
        '• Authorization (AuthZ): Answers the question: "What permissions do you have?" Granting access to specific resources, such as reading an order history or editing profile pictures.',
        '• OAuth 2.0 is strictly an authorization framework designed to grant scoped permissions through digital access tokens.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 2: The Four Roles in the OAuth 2.0 Architecture',
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'SECURITY ARCHITECTURE',
      title: 'OAuth 2.0 Security Architecture: The Four Party Token Handshake',
      text: 'OAuth 2.0 delegates authority across four distinct participants: the Resource Owner (the student), the Client Application (our web or mobile interface), the Authorization Server (campus identity login), and the Resource Server (the protected library microservice). Access tokens expire automatically, protecting university resources without exposing student credentials.',
      src: oauth2Img,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/oauth2-handshake-flow.jpg',
      w: 1408,
      h: 768,
      alt: 'OAuth 2.0 architecture diagram illustrating Client Application, Resource Owner User, Authorization Server, and Resource Server with four step token exchange.',
      caption: 'The four participants and handshake flow of the OAuth 2.0 Authorization Code grant.',
      points: [
        'Step 1 (Authorization Request): The user logs in at the Authorization Server and consents to permissions requested by the Client Application.',
        'Step 2 (Authorization Code Issuance): The Authorization Server validates the user and redirects back to the client callback URL with a temporary authorization code.',
        'Step 3 (Access Token Retrieval): The client application submits a secure backend POST request exchanging the code and client secret for an access token.',
        'Step 4 (Bearer Token API Call): The client injects the access token into the Authorization header to retrieve protected student data from the Resource Server.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 3: The Detailed OAuth 2.0 Contract Specification',
    },
    {
      type: 'paragraph',
      text: 'In enterprise testing, QA engineers must know the exact contract parameters required by identity servers. The Authorization Code grant relies on two distinct HTTP requests:',
    },
    {
      type: 'comparison',
      title: 'OAuth 2.0 Two Step Handshake Contract',
      columns: ['Contract Field', 'Request 1: Get Authorization Code', 'Request 2: Get Access Token'],
      rows: [
        ['HTTP Method', 'GET (User Browser Redirect)', 'POST (Direct Client to Server Call)'],
        ['Target Endpoint', 'Authorization Server URL (`https://auth.campuslibrary.org/oauth/authorize`)', 'Access Token URL (`https://auth.campuslibrary.org/oauth/token`)'],
        ['Mandatory Parameters', '`client_id`, `redirect_uri`, `response_type=code`, `scope`, `state`', '`grant_type=authorization_code`, `code`, `client_id`, `client_secret`, `redirect_uri`'],
        ['Transport Location', 'URL Query Parameters', 'Request Body (x www form urlencoded or JSON)'],
        ['Returned Output', 'One time temporary `code` in callback URL query string', 'JSON payload containing `access_token`, `token_type`, and `expires_in`'],
      ],
    },
    {
      type: 'heading',
      text: 'Step 4: Request 1: Fetching the Temporary Authorization Code',
    },
    {
      type: 'paragraph',
      text: 'The first request sends the user browser to the campus identity provider. Notice the query parameters appended to the URL:',
    },
    {
      type: 'code',
      filename: 'get-authorization-code.txt',
      lines: [
        'GET https://auth.campuslibrary.org/oauth/authorize?',
        '  response_type=code&',
        '  client_id=campus-library-web-client&',
        '  redirect_uri=https://campus.university.edu/oauth/callback&',
        '  scope=read:catalog%20write:loans&',
        '  state=xyzSecurityString789 HTTP/1.1',
      ],
    },
    {
      type: 'callout',
      variant: 'note',
      title: 'Why Each Query Parameter Matters',
      paragraphs: [
        '• response_type=code: Informs the authorization server that the client wants a temporary authorization code, not a raw token.',
        '• client_id: The public alphanumeric identifier assigned to our application.',
        '• redirect_uri: The pre registered callback address where the authorization server delivers the code. If this URL differs by even one character from the server whitelist, the server aborts the request.',
        '• scope: Defines the permission boundaries requested (such as reading catalog books and borrowing records).',
        '• state: A random cryptographic string returned back to verify that the response corresponds to our original request, preventing CSRF attacks.',
      ],
    },
    {
      type: 'paragraph',
      text: 'When the student or faculty member logs in and approves consent, the authorization server redirects the browser back to our callback URL with the temporary code in the query string:',
    },
    {
      type: 'terminal',
      command: 'Browser Redirect to Callback URL',
      lines: [
        'HTTP/1.1 302 Found',
        'Location: https://campus.university.edu/oauth/callback?code=authcode_89712a4f&state=xyzSecurityString789',
      ],
    },
    {
      type: 'heading',
      text: 'Step 5: Request 2: Exchanging Code for the Access Token',
    },
    {
      type: 'paragraph',
      text: 'Now our client backend (or Postman collection) takes that temporary code and exchanges it for the actual Bearer token via HTTP POST. You can download the completed exchange request: [Download Token Exchange HTTP Request](/materials/zero-to-agentic-api-testing/lesson-11/token-exchange.http):',
    },
    {
      type: 'code',
      filename: 'token-exchange-request.http',
      lines: [
        'POST https://auth.campuslibrary.org/oauth/token HTTP/1.1',
        'Content-Type: application/x-www-form-urlencoded',
        '',
        'grant_type=authorization_code',
        '&code=authcode_89712a4f',
        '&client_id=campus-library-web-client',
        '&client_secret=secureUniversitySecretKey_98765',
        '&redirect_uri=https://campus.university.edu/oauth/callback',
      ],
    },
    {
      type: 'terminal',
      command: 'JSON Token Response from Authorization Server',
      lines: [
        'Status: 200 OK | Time: 195 ms',
        'Content-Type: application/json; charset=utf-8',
        '',
        '{',
        '  "access_token": "campus_bearer_token_9918273645",',
        '  "token_type": "Bearer",',
        '  "expires_in": 3600,',
        '  "scope": "read:catalog write:loans"',
        '}',
      ],
    },
    {
      type: 'api-inspector',
      title: 'Live Interactive Wire Inspector: OAuth 2.0 Token Exchange',
      method: 'POST',
      url: 'https://auth.campuslibrary.org/oauth/token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      requestBody: 'grant_type=authorization_code&code=authcode_89712a4f&client_id=campus-library-web-client&client_secret=secureUniversitySecretKey_98765&redirect_uri=https://campus.university.edu/oauth/callback',
      status: '200 OK',
      time: '195 ms',
      size: '342 B',
      responseBody: {
        access_token: 'campus_bearer_token_9918273645',
        token_type: 'Bearer',
        expires_in: 3600,
        scope: 'read:catalog write:loans'
      },
      assertions: [
        'Authorization server status is 200 OK',
        'Response contains access_token attribute',
        'Token type attribute equals Bearer',
        'Token lifetime exceeds zero seconds'
      ]
    },
    {
      type: 'heading',
      text: 'Step 6: Automating Token Workflows and Global Variables in Postman',
    },
    {
      type: 'paragraph',
      text: 'When executing test collections automatedly in CI CD pipelines, you cannot open a browser window to click login buttons. Instead, we configure an automated token exchange request as the very first step in our collection. In its Tests script, we extract the access token and save it into a global variable so every subsequent request inherits it automatically. You can download the script: [Download Capture Bearer Token Script](/materials/zero-to-agentic-api-testing/lesson-11/capture-bearer-token.js):',
    },
    {
      type: 'code',
      filename: 'capture-bearer-token.js',
      lines: [
        '// Step 1: Parse the JSON response from the auth server',
        'const responseData = pm.response.json();',
        '',
        '// Step 2: Validate token properties',
        'pm.test("Token response returns 200 OK and valid Bearer", function () {',
        '    pm.response.to.have.status(200);',
        '    pm.expect(responseData).to.have.property("access_token");',
        '    pm.expect(responseData.token_type).to.eql("Bearer");',
        '    pm.expect(responseData.expires_in).to.be.above(0);',
        '});',
        '',
        '// Step 3: Save Bearer token to Global Scope for automated collection chaining',
        'pm.globals.set("access_token", responseData.access_token);',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Fresher Trap to Avoid: Forgetting the Space After Bearer',
      paragraphs: [
        'When attaching a Bearer token manually in request headers, many freshers type `Authorization: Bearercampus_bearer_token_...` without a space.',
        'Because the HTTP specification defines `Bearer` as the authentication scheme followed by a single space, the resource server will fail to parse the header and return 401 Unauthorized!',
        'Always ensure a single space follows the word Bearer: `Authorization: Bearer {{access_token}}`.',
      ],
    },
    {
      type: 'paragraph',
      text: 'In downstream requests, we configure the Authorization tab to Bearer Token and insert `{{access_token}}`. Alternatively, set the Authorization header directly: `Authorization: Bearer {{access_token}}`. Postman resolves the global variable at runtime, authenticating every call cleanly without manual intervention.',
    },
    {
      type: 'callout',
      variant: 'note',
      title: 'Testing Token Expiry and 401 Unauthorized Handling',
      paragraphs: [
        'Access tokens have a finite lifetime, typically 3600 seconds (one hour).',
        'When an access token expires or is omitted, the resource server immediately rejects requests with HTTP 401 Unauthorized.',
        'In automated regression suites, always include a negative test asserting that requests with invalid or expired tokens return 401 and an appropriate WWW Authenticate challenge header.',
      ],
    },
    {
      type: 'battle-scar',
      metric: 'Cascading Deployment Blackout',
      title: 'The Hardcoded Token Outage: When an Expired Secret Paralyzed Deployments',
      context: 'An ecommerce engineering squad automated warehouse fulfillment verification by hardcoding a long lived OAuth 2.0 Bearer access token into Postman collection variables. The token had a sixty day expiration lifespan. On the eve of a major holiday sales promotion, the token silently expired at midnight. Hundreds of automated test jobs failed simultaneously across continuous deployment pipelines, triggering false P1 alerts and blocking release deployments during peak revenue hours.',
      takeaway: 'Never hardcode static Bearer tokens in long lived test suites. Always automate the OAuth 2.0 token handshake in an initial authorization request or Pre request script that dynamically acquires fresh tokens before protected requests execute.'
    },
    {
      type: 'triage',
      title: 'War Room Triage: The Disappearing State Parameter Vulnerability',
      scenario: 'During a security audit of your OAuth 2.0 authorization code flow, an automated penetration tool flags a critical vulnerability: "Cross Site Request Forgery detected on OAuth callback handler". The audit report reveals that your initial GET authorization redirect URL omitted the state parameter. Why is the state parameter mandatory in production OAuth handshakes?',
      options: [
        'The state parameter encrypts user passwords using RSA 4096.',
        'The state parameter acts as a cryptographic anti CSRF nonce verifying that the authorization callback response belongs to the exact session that initiated the login request.',
        'The state parameter specifies the geographic server location of the API gateway.',
        'The state parameter forces the authorization server to issue a permanent token that never expires.'
      ],
      answerIndex: 1,
      debrief: 'Anti CSRF cryptographic binding! The state parameter is an unguessable random token generated by the client and sent in the authorization request. When the authorization server returns the code, it reflects back the identical state parameter. The client verifies that this returned state matches the stored session value, preventing attackers from injecting their own authorization codes into an unsuspecting user session!',
      traps: [
        'Passwords are never sent in authorization code URLs.',
        '',
        'Server geographic routing is handled by DNS and load balancers.',
        'Token lifespan is governed by expires_in, not the state parameter.'
      ]
    },
    {
      type: 'heading',
      text: 'Step 7: Review and Practice',
    },
    {
      type: 'guess',
      prompt: 'In the OAuth 2.0 Authorization Code grant, what are the mandatory parameters required in the token exchange POST request?',
      options: [
        'Only username and password',
        'grant_type, code, client_id, client_secret, and redirect_uri',
        'Only client_id and API key',
        'Only scope and state',
      ],
      answerIndex: 1,
      explain: 'To exchange an authorization code for an access token, the client must send grant_type=authorization_code along with the temporary code, client_id, client_secret, and the matching redirect_uri.',
    },
    {
      type: 'quiz',
      items: [
        [
          'What is the difference between client_id and client_secret in OAuth 2.0?',
          'client_id is a public identifier assigned to the application, visible in URLs. client_secret is a confidential password known only to the client and authorization server, used to authenticate the token exchange.',
        ],
        [
          'Why do automated CI CD suites store the retrieved token in a global or environment variable?',
          'Automated runners cannot open interactive login prompts. By running a token exchange request first and saving the access token in a global variable, all downstream requests can automatically read the token and authenticate.',
        ],
      ],
    },
    {
      type: 'takeaways',
      items: [
        'OAuth 2.0 decouples authentication from authorization, allowing users to grant scoped access without revealing passwords.',
        'The Authorization Code grant uses two steps: fetching a temporary code via GET, and exchanging the code for an access token via POST.',
        'Mandatory parameters for token exchange include grant_type, code, client_id, client_secret, and redirect_uri.',
        'Bearer tokens are stored in global or environment variables and injected into the Authorization header.',
        'Token lifetimes require test suites to validate both valid authorization and 401 expiration handling.',
      ],
    },
    {
      type: 'victory-milestone',
      badge: 'MISSION 3 PHASE 3 CLEARED',
      rank: 'ENTERPRISE SECURITY AUTOMATION ARCHITECT',
      title: 'Architectural Triumph: Enterprise OAuth 2.0 Token Vault Deployed',
      summary: 'You dismantled the most misunderstood protocol in modern web engineering: OAuth 2.0. You mapped the 4 roles, mastered the two step Authorization Code grant, automated the token exchange POST request, chained Bearer tokens into secured headers, and verified 401 expiration challenges with absolute precision.',
      powers: [
        'Dissecting the four OAuth 2.0 roles: Resource Owner, Client, Authorization Server, and Resource Server',
        'Executing the full Authorization Code grant handshake: exchanging temporary auth codes for scoped Bearer tokens',
        'Automating token extraction in Tests scripts and injecting dynamic Bearer tokens into downstream request headers',
        'Auditing token expiration boundaries and asserting 401 Unauthorized WWW Authenticate challenges',
        'Defending enterprise secrets by enforcing client_secret confidentiality rules across test suites',
      ],
      disastersPrevented: [
        'Averted catastrophic enterprise credential theft by replacing static user passwords with scoped, short lived tokens',
        'Stopped broken authentication logic that leaves protected APIs wide open to unauthorized third party access',
        'Eliminated fragile manual token copy paste that causes automated CI CD pipeline runs to fail mid execution',
      ],
      warRoomTakeaway: 'Security is not an afterthought added at deployment. When your automated test suites validate token issuance, header injection, scope enforcement, and 401 expirations, your enterprise endpoints are fortified against unauthorized intrusion.',
    },
    {
      type: 'cliffhanger',
      title: 'Continuing Mission 3: Testing Legacy Protocols and XML Envelopes',
      text: 'While REST and OAuth 2.0 dominate modern web services, enterprise banking, government, and legacy systems still rely heavily on SOAP and XML. In Chapter 12, we explore SOAP WebServices: sending XML envelopes, asserting WSDL contracts, and parsing XML responses into JavaScript objects with xml2Json!',
    },
  ],
}
