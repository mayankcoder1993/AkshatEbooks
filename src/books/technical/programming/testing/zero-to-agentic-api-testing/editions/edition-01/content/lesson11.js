import oauthFlowImg from '../assets/oauth2-handshake-flow.jpg'
import warRoomWideImg from '../assets/apex-campus-crisis-war-room.jpg'
import warRoomPanel1Img from '../assets/war-room-panel-1-the-crisis.jpg'
import warRoomPanel2Img from '../assets/war-room-panel-2-the-standoff.jpg'
import warRoomPanel3Img from '../assets/war-room-panel-3-invisible-wire.jpg'
import warRoomPanel4Img from '../assets/war-room-panel-4-first-principles.jpg'

export const lesson11 = {
  id: 'oauth-token-auth',
  icon: '',
  title: 'OAuth 2.0 and Modern Token Authentication',
  shortTitle: 'OAuth 2.0 Authentication',
  subtitle: 'The four roles, Authorization Code grant handshake, automated token exchange scripts, global variables, and Bearer token chaining.',
  tags: ['OAuth 2.0', 'Tokens', 'Authentication', 'Authorization', 'PKCE', 'IDOR', 'Security'],
  blocks: [
    {
      type: 'mission-hud',
      mission: 'Mission 3: Enterprise Quality Engineering & Resilience Testing',
      phase: 'Phase 3 of 5: Modern Token Authentication & IDOR Defense',
      rank: 'Rank: Security & Identity Gateway Architect',
      status: 'ACTIVE'
    },
    {
      type: 'chapter-opener',
      missionBadge: 'MISSION 3 · PHASE 3 OF 5',
      missionTitle: 'Enterprise Quality Engineering & Resilience Testing',
      missionCrisis: 'The Campus IDOR Breach and Medical Record Exposure',
      missionContext: 'At 05:15 AM in the Apex Central Security Vault and Identity Gateway, monitors highlight an alarming breach: altering a query parameter from studentId 101 to 104 exposes another student private medical file. The API trusted an unverified URL parameter without enforcing token authorization. Sameer explains identity versus permission using the Hotel Keycard Analogy. Akshay configures OAuth 2.0 with PKCE and pre request token automation.',
      missionObjective: 'Implement modern token security with OAuth 2.0, understand authorization grants and PKCE, automate Bearer token refresh in pre request scripts, prevent IDOR vulnerabilities, and enforce Current Only vault hygiene.',
      targetSystems: 'API Testing Workbench Identity Engine · OAuth 2.0 Authorization Server · JWT Cryptographic Verifier · Express RBAC Gateway',
      difficulty: 'INTERMEDIATE',
      estimatedTime: '30 MINUTES',
      prerequisites: 'Chapter 10: Mock Servers and JSON Schema Contracts'
    },
    {
      type: 'mission-tracker',
      currentPhase: 'Phase 3: OAuth 2.0 Token Authentication',
      totalPhases: 5,
      completedSteps: [
        'Mock Servers and JSON Schema Contracts (Chapter 10)'
      ],
      currentStep: 'OAuth 2.0 and Modern Token Authentication',
      upcomingSteps: [
        'SOAP WebServices and XML Parsing (Chapter 12)'
      ]
    },

    // =========================================================================
    // GRAPHIC COMIC ARC : SIX SCENES FROM MASTER STORY LEDGER
    // =========================================================================
    {
      type: 'storyboard',
      badge: 'GRAPHIC COMIC : SIX SCENES',
      title: 'The Identity Chasm and the Hotel Keycard Handshake',
      intro: 'Follow apprentice Akshay and Principal Systems Architect Sameer in the Security Operations Vault as an IDOR flaw exposes campus medical records, the Hotel Keycard analogy clarifies authorization, and automated PKCE handshakes seal the identity gateway.',
      panels: [
        {
          title: 'Scene 1: 05:15 AM: Security Operations Vault and the Campus IDOR Breach',
          time: '05:15 AM',
          layout: 'duo',
          image: {
            src: warRoomWideImg,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/apex-campus-crisis-war-room.jpg',
            w: 1408,
            h: 768,
            alt: 'Akshay and Sameer in the Security Operations Vault with cold blue fiber optic lines.',
            caption: 'Security Operations Vault: Cold blue monitors detect an Insecure Direct Object Reference breach.'
          },
          replyImage: {
            src: warRoomPanel1Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-1-the-crisis.jpg',
            w: 1376,
            h: 768,
            alt: 'Security audit screen showing studentId 101 reading confidential medical file 104.',
            caption: 'The IDOR Flaw: Changing a URL parameter returned another student private record.'
          },
          dialogue: {
            speaker: 'Sameer',
            speech: 'The audit log shows studentId 101 reading file 104. Confidential medical records exposed.',
            replySpeaker: 'Akshay',
            replySpeech: 'The API trusted the query parameter in the URL! It never checked caller permissions!'
          },
          scene: 'At 05:15 AM, security monitors reveal a critical vulnerability: altering a query parameter from studentId 101 to 104 returned another student private medical file. The API relied on client supplied query strings rather than cryptographic claims.',
          realization: 'Trusting client supplied identifiers without server side authorization token verification causes severe IDOR vulnerabilities.'
        },
        {
          title: 'Scene 2: 05:21 AM: The Hotel Keycard Analogy: Identity vs Permissions',
          time: '05:21 AM',
          layout: 'duo',
          image: {
            src: warRoomPanel2Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-2-the-standoff.jpg',
            w: 1376,
            h: 768,
            alt: 'Sameer sketching the hotel front desk and NFC keycard analogy on the whiteboard.',
            caption: 'The Hotel Analogy: At check-in you show your passport; the lock only sees a scoped NFC keycard.'
          },
          replyImage: {
            src: warRoomPanel4Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-4-first-principles.jpg',
            w: 1376,
            h: 768,
            alt: 'Diagram showing Identity (Passport) vs Authorization (Keycard) with specific room permissions.',
            caption: 'Decoupled Security: Room locks verify temporary token scopes, never raw user credentials.'
          },
          dialogue: {
            speaker: 'Sameer',
            speech: 'At a hotel you show your passport at the desk. The room lock never touches your passport. It reads a keycard.',
            replySpeaker: 'Akshay',
            replySpeech: 'The keycard is a scoped token! It only opens Room 302 and expires tomorrow morning!'
          },
          scene: 'Sameer explains OAuth 2.0 with the Hotel Keycard Analogy: authentication happens at the authorization server (front desk), which issues a scoped, short lived access token (keycard). Resource servers (room locks) verify token scopes without handling credentials.',
          realization: 'Authentication verifies identity once; authorization tokens convey scoped, temporary access permissions across services.'
        },
        {
          title: 'Scene 3: 05:27 AM: The Four Roles and the PKCE Handshake',
          time: '05:27 AM',
          layout: 'duo',
          image: {
            src: oauthFlowImg,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/oauth2-handshake-flow.jpg',
            w: 1408,
            h: 768,
            alt: 'Architecture visual of OAuth 2.0 handshake showing client, authorization server, and PKCE exchange.',
            caption: 'Cryptographic Binding: PKCE code challenge and verifier prevent authorization code interception.'
          },
          replyImage: {
            src: warRoomPanel3Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-3-invisible-wire.jpg',
            w: 1376,
            h: 768,
            alt: 'Code editor showing SHA-256 hashed code challenge sent across the initial browser redirect.',
            caption: 'Public Client Protection: Never store client secrets in mobile apps or single-page apps.'
          },
          dialogue: {
            speaker: 'Sameer',
            speech: 'Four roles: resource owner, client, auth server, resource server. With PKCE, intercepted codes are useless.',
            replySpeaker: 'Akshay',
            replySpeech: 'Because the attacker does not have the SHA 256 code verifier! The exchange is cryptographically locked!'
          },
          scene: 'Sameer outlines the four OAuth 2.0 roles and the Authorization Code flow with PKCE (Proof Key for Code Exchange). A cryptographic code verifier ensures that even if an authorization code is intercepted in the browser redirect, it cannot be redeemed.',
          realization: 'PKCE binds authorization codes cryptographically, preventing interception attacks on mobile and single page apps.'
        },
        {
          title: 'Scene 4: 05:35 AM: Automated Token Acquisition in Pre-Request Scripts',
          time: '05:35 AM',
          layout: 'duo',
          image: {
            src: warRoomPanel3Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-3-invisible-wire.jpg',
            w: 1376,
            h: 768,
            alt: 'Akshay writing pm.sendRequest() in collection pre-request script to automate token acquisition.',
            caption: 'Dynamic Token Lifecycle: Automatically requesting a fresh token when the current token expires.'
          },
          replyImage: {
            src: warRoomPanel2Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-2-the-standoff.jpg',
            w: 1376,
            h: 768,
            alt: 'Console showing token refresh firing autonomously before the book request executes.',
            caption: 'Zero Human Intervention: Test suites acquire and rotate access tokens autonomously in memory.'
          },
          dialogue: {
            speaker: 'Akshay',
            speech: 'If token is expired, pm.sendRequest fetches a fresh JWT and saves it to environment! Zero manual logins!',
            replySpeaker: 'Sameer',
            replySpeech: 'A test suite that requires manual token copy paste is not automated. Now chain it downstream.'
          },
          scene: 'Akshay writes an automated token refresh in the Collection Pre-request script. The script checks token expiration timestamps against Date.now(); if expired, it fires pm.sendRequest() using Client Credentials grant and stores the fresh token.',
          realization: 'Automating token acquisition in pre request scripts eliminates manual login steps and keeps test suites headless.'
        },
        {
          title: 'Scene 5: 05:43 AM: The Current-Only Vault Pattern: Preventing Git Secret Leaks',
          time: '05:43 AM',
          layout: 'duo',
          image: {
            src: warRoomPanel1Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-1-the-crisis.jpg',
            w: 1376,
            h: 768,
            alt: 'Comparison screen of Initial Value vs Current Value in the workbench environment editor.',
            caption: 'Vault Hygiene: Initial Value is synced and exported; Current Value remains private in memory.'
          },
          replyImage: {
            src: warRoomPanel4Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-4-first-principles.jpg',
            w: 1376,
            h: 768,
            alt: 'Terminal showing clean git diff with zero client secret or token strings.',
            caption: 'Safe Collaboration: Shared collection exports contain zero live production secrets.'
          },
          dialogue: {
            speaker: 'Sameer',
            speech: 'Never put real tokens in Initial Values. Initial Values export to Git. Keep secrets in Current Values only.',
            replySpeaker: 'Akshay',
            replySpeech: 'Current Value only! The exported collection JSON has blank secrets! No tokens will leak to GitHub!'
          },
          scene: 'Sameer enforces the Current-Only Vault Pattern. The API Testing Workbench exports Initial Values to shared JSON files while keeping Current Values in local memory. By leaving Initial Values blank, secrets never leak into version control.',
          realization: 'Store secrets exclusively in Current Values to prevent leaking credentials when sharing collection exports.'
        },
        {
          title: 'Scene 6: 05:53 AM: 401 Unauthorized vs 403 Forbidden Semantics',
          time: '05:53 AM',
          layout: 'duo',
          image: {
            src: warRoomPanel3Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-3-invisible-wire.jpg',
            w: 1376,
            h: 768,
            alt: 'Terminal showing status code assertions verifying 401 on missing token and 403 on IDOR attempt.',
            caption: 'Precise Semantics: 401 means unauthenticated (missing keycard); 403 means forbidden (wrong room).'
          },
          replyImage: {
            src: warRoomPanel4Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-4-first-principles.jpg',
            w: 1376,
            h: 768,
            alt: 'Akshay and Sameer witnessing green security audit checks across the campus portal.',
            caption: 'Security Gateway Sealed: IDOR attacks cleanly blocked with 403 Forbidden responses.'
          },
          dialogue: {
            speaker: 'Akshay',
            speech: 'Missing token returns 401! Attempting to access student 104 with student 101 token returns 403 Forbidden!',
            replySpeaker: 'Sameer',
            replySpeech: '401 is no keycard. 403 is trying to open the wrong door. The IDOR hole is closed permanently.'
          },
          scene: 'Akshay writes precise assertions verifying HTTP status semantics: 401 Unauthorized when no token is presented, and 403 Forbidden when a valid token attempts to read another user record. The campus IDOR flaw is permanently resolved.',
          realization: '401 represents missing or invalid credentials; 403 represents valid credentials lacking permission for the requested entity.'
        }
      ]
    },

    // =========================================================================
    // TECHNICAL ARCHITECTURE & DEEP DIVE
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      text: 'The Architecture of Modern OAuth 2.0 Token Authentication'
    },
    {
      type: 'image',
      src: oauthFlowImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/oauth2-handshake-flow.jpg',
      w: 1408,
      h: 768,
      title: 'OAuth 2.0 Authorization Flow & Cryptographic Token Architecture',
      text: 'OAuth 2.0 separates identity authentication from resource authorization. Clients acquire short lived Bearer tokens with specific scopes, preventing credential sharing and enabling fine grained access control.',
      alt: 'Architecture diagram showing the four OAuth 2.0 roles and token exchange workflow.',
      caption: 'The OAuth 2.0 Protocol: Scoped authorization without exposing user passwords to third parties.'
    },

    // =========================================================================
    // WORKBENCH SCREEN 1 : DYNAMIC TOKEN ACQUISITION
    // =========================================================================
    {
      type: 'comic-workbench',
      badge: 'INTERACTIVE WORKBENCH 1 : PRE-REQUEST TOKEN REFRESH',
      title: 'Automated OAuth 2.0 Token Acquisition in Pre-Request Script',
      scenario: 'Check token validity in the Pre-request script. If expired, dispatch pm.sendRequest() to acquire a fresh JWT and store it in environment scope.',
      config: {
        method: 'POST',
        path: '/oauth/token',
        activeTab: 'Pre-request'
      },
      tabs: {
        params: [],
        headers: [
          { key: 'Content-Type', value: 'application/x-www-form-urlencoded' }
        ],
        body: 'grant_type=client_credentials&client_id={{clientId}}&client_secret={{clientSecret}}',
        tests: '// Dynamic Token Acquisition Pre-request Hook\nconst expiry = pm.environment.get("tokenExpiry");\n\nif (!expiry || Date.now() > expiry) {\n  pm.sendRequest({\n    url: pm.environment.get("authServerUrl") + "/oauth/token",\n    method: "POST",\n    header: { "Content-Type": "application/x-www-form-urlencoded" },\n    body: {\n      mode: "urlencoded",\n      urlencoded: [\n        { key: "grant_type", value: "client_credentials" },\n        { key: "client_id", value: pm.environment.get("clientId") },\n        { key: "client_secret", value: pm.environment.get("clientSecret") }\n      ]\n    }\n  }, function(err, res) {\n    const json = res.json();\n    pm.environment.set("accessToken", json.access_token);\n    pm.environment.set("tokenExpiry", Date.now() + (json.expires_in * 1000));\n  });\n}'
      },
      response: {
        status: '200 OK',
        time: '32ms',
        size: '480B',
        body: JSON.stringify({
          access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMDEiLCJzY29wZSI6InJlYWQ6cHJvZmlsZSJ9",
          token_type: "Bearer",
          expires_in: 3600,
          scope: "read:profile"
        }, null, 2)
      },
      notes: [
        'Pre-request scripts can issue independent HTTP requests using pm.sendRequest().',
        'Dynamic token caching prevents redundant login roundtrips while keeping tokens fresh.'
      ]
    },

    // =========================================================================
    // WORKBENCH SCREEN 2 : IDOR PREVENTION & RBAC CLAIM CHECK
    // =========================================================================
    {
      type: 'comic-workbench',
      badge: 'INTERACTIVE WORKBENCH 2 : IDOR DEFENSE & RBAC GATEWAY',
      title: 'Asserting IDOR Rejection: 403 Forbidden on Unowned Resources',
      scenario: 'Attempt to access student 104 profile with a token issued for student 101. Assert that the server checks claims and rejects with 403 Forbidden.',
      config: {
        method: 'GET',
        path: '/v1/students/104/medical',
        activeTab: 'Tests'
      },
      tabs: {
        params: [],
        headers: [
          { key: 'Authorization', value: 'Bearer {{student101Token}}' },
          { key: 'Accept', value: 'application/json' }
        ],
        body: '',
        tests: '// Asserting IDOR prevention\npm.test("Status is 403 Forbidden for unowned resource", function() {\n  pm.response.to.have.status(403);\n});\n\npm.test("Error message specifies access denial", function() {\n  const res = pm.response.json();\n  pm.expect(res.error).to.eql("INSUFFICIENT_RESOURCE_PERMISSIONS");\n});'
      },
      response: {
        status: '403 Forbidden',
        time: '12ms',
        size: '264B',
        body: JSON.stringify({
          error: "INSUFFICIENT_RESOURCE_PERMISSIONS",
          message: "You are not authorized to view health records for studentId 104.",
          timestamp: "2026-10-07T05:53:00.000Z"
        }, null, 2)
      },
      notes: [
        '403 Forbidden indicates that authentication succeeded, but the caller lacks permission.',
        'Servers must check that the token subject matches the requested entity identifier.'
      ]
    },

    // =========================================================================
    // FOUR PART PEDAGOGICAL CARDS (SENIOR SAVIOR CONTRACTS)
    // =========================================================================
    {
      type: 'quad-card',
      badge: 'PEDAGOGICAL CONTRACT 1 : AUTHENTICATION VS AUTHORIZATION',
      title: 'Authentication versus Authorization and OAuth Roles',
      subtitle: 'Enforcing resource permissions based on token claims rather than URL parameters',
      input: {
        method: 'GET',
        url: '{{baseUrl}}/v1/students/104/medical',
        desc: 'Request carrying Bearer token issued for student 101 attempting to read student 104 file.',
        code: 'GET /v1/students/104/medical\nAuthorization: Bearer [TOKEN_FOR_STUDENT_101]'
      },
      underTheHood: {
        desc: 'Resource server extracts subject claim from JWT and compares with requested entity.',
        steps: [
          'Resource server verifies cryptographic signature of the Bearer token.',
          'Extracts token subject claim (sub: "101") and granted scopes.',
          'Compares token subject with target resource identifier in path (studentId: "104").',
          'Detects identity mismatch without administrator override scope.',
          'Rejects request immediately with HTTP 403 Forbidden.'
        ]
      },
      output: {
        status: '403 FORBIDDEN',
        time: '12ms',
        desc: 'Unauthorized cross user data access intercepted and blocked at the gateway.',
        body: JSON.stringify({
          error: "INSUFFICIENT_RESOURCE_PERMISSIONS",
          accessGranted: false
        }, null, 2)
      },
      seniorSavior: {
        aphorism: 'Never let a query parameter claim an identity.',
        rule: 'Tokens assert identity; URL parameters only request filters.',
        trap: 'Trusting URL parameters like ?userId=104 without verifying that the caller token owns that resource.'
      }
    },
    {
      type: 'quad-card',
      badge: 'PEDAGOGICAL CONTRACT 2 : PKCE CRYPTOGRAPHIC HANDSHAKE',
      title: 'The Authorization Code Handshake with PKCE',
      subtitle: 'Securing public clients without storing secrets in client bundles',
      input: {
        method: 'PKCE FLOW',
        url: 'Authorization Code Grant with Code Challenge and Verifier',
        desc: 'Client initiates OAuth handshake with SHA-256 hashed code challenge.',
        code: '// Code verifier: high-entropy cryptographic random string\n// Code challenge: BASE64URL(SHA256(code_verifier))'
      },
      underTheHood: {
        desc: 'PKCE cryptographically binds authorization code issuance to token redemption.',
        steps: [
          'Client generates random code_verifier and computes SHA-256 code_challenge.',
          'Sends code_challenge to auth server during login redirect.',
          'Auth server issues authorization code upon successful user authentication.',
          'Client redeems authorization code by sending raw code_verifier in POST body.',
          'Auth server hashes verifier and confirms it matches initial challenge before issuing tokens.'
        ]
      },
      output: {
        status: 'TOKENS ISSUED',
        time: '45ms',
        desc: 'Tokens securely issued to public client; intercepted authorization codes are useless.',
        body: JSON.stringify({
          access_token: "eyJhbGciOi...",
          refresh_token: "r_99214...",
          token_type: "Bearer"
        }, null, 2)
      },
      seniorSavior: {
        aphorism: 'Always use PKCE for mobile and single page applications.',
        rule: 'Never store static client secrets in public frontend or mobile application bundles.',
        trap: 'Hardcoding client_secret strings into React Native or web apps where reverse engineering exposes them.'
      }
    },
    {
      type: 'quad-card',
      badge: 'PEDAGOGICAL CONTRACT 3 : PRE-REQUEST TOKEN AUTOMATION',
      title: 'Automated Token Chaining in Pre-Request Scripts',
      subtitle: 'Eliminating manual login workflows in automated test suites',
      input: {
        method: 'PRE-REQUEST HOOK',
        url: 'Collection Pre-request Script with pm.sendRequest()',
        desc: 'Pre-request hook inspecting token expiration before dispatching test requests.',
        code: 'if (!token || Date.now() > expiry) {\n  pm.sendRequest(authPayload, (err, res) => {\n    pm.environment.set("accessToken", res.json().access_token);\n  });\n}'
      },
      underTheHood: {
        desc: 'Test runner checks cached token expiry and performs autonomous renewal.',
        steps: [
          'Pre-request script evaluates tokenExpiry timestamp stored in environment.',
          'If token is missing or expired, script fires synchronous pm.sendRequest().',
          'Authorization server validates client credentials and returns fresh JWT.',
          'Script saves token and new expiry timestamp to environment scope.',
          'Main request executes automatically using {{accessToken}} in Authorization header.'
        ]
      },
      output: {
        status: 'AUTONOMOUS REFRESH',
        time: '32ms',
        desc: 'Test suite executes seamlessly without human intervention or expired token failures.',
        body: JSON.stringify({
          tokenRefreshed: true,
          expiresInSeconds: 3600
        }, null, 2)
      },
      seniorSavior: {
        aphorism: 'A test suite that requires manual token copy paste is not automated.',
        rule: 'Handle token lifecycles dynamically in pre request scripts.',
        trap: 'Manually pasting JWTs into collection headers, causing CI runs to fail when tokens expire.'
      }
    },
    {
      type: 'quad-card',
      badge: 'PEDAGOGICAL CONTRACT 4 : THE CURRENT-ONLY VAULT PATTERN',
      title: 'The Current-Only Vault Pattern',
      subtitle: 'Preventing secret token leakage in shared collection exports and Git',
      input: {
        method: 'ENVIRONMENT SETTINGS',
        url: 'Initial Value vs Current Value in Environment Editor',
        desc: 'Separating shared metadata templates from local private execution secrets.',
        code: '// Initial Value: BLANK or dummy placeholder\n// Current Value: live private secret in local session memory'
      },
      underTheHood: {
        desc: 'Export and cloud sync algorithms only serialize the Initial Value column.',
        steps: [
          'Initial Values are shared across team workspaces and exported to collection JSON files.',
          'Current Values remain strictly in local session memory on the engineer workstation.',
          'Leaving Initial Values blank guarantees exported JSON files contain no live credentials.',
          'CI runners inject live secrets via environment variables or CLI flags at runtime.',
          'Git repositories remain completely free of committed API keys and passwords.'
        ]
      },
      output: {
        status: 'ZERO LEAKAGE',
        time: '0ms',
        desc: 'Exported environment JSON contains zero secret tokens, safe for version control.',
        body: JSON.stringify({
          key: "clientSecret",
          initialValue: "",
          currentValue: "[REDACTED_LOCAL_MEMORY]"
        }, null, 2)
      },
      seniorSavior: {
        aphorism: 'Never put real secrets in Initial Values.',
        rule: 'Keep secrets in Current Values only, and audit exported JSON files before committing.',
        trap: 'Pasting production API keys into Initial Values where team synchronization leaks them to Git.'
      }
    },

    // =========================================================================
    // POST DRILLS & QUIZ
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      text: 'HTTP Authorization Semantics: 401 vs 403'
    },
    {
      type: 'chunked-code',
      title: 'Differentiating Authentication from Authorization Failures',
      code: `const status = pm.response.code;

if (status === 401) {
  // 401 Unauthorized: The caller is anonymous or credentials are invalid
  // Action: Prompt user to log in or refresh expired Bearer token
  console.log("Unauthenticated: Missing or expired token.");
} else if (status === 403) {
  // 403 Forbidden: The caller is authenticated, but lacks permission
  // Action: Do NOT retry login; user does not have permission for this resource
  console.log("Forbidden: Authenticated caller lacks necessary scope.");
}`,
      chunks: [
        {
          lines: '1-6',
          label: '401 Unauthorized',
          explanation: 'Indicates missing, expired, or cryptographically invalid credentials. Re-authenticating may resolve.'
        },
        {
          lines: '7-12',
          label: '403 Forbidden',
          explanation: 'Identity is confirmed, but caller is not allowed to perform the requested operation. Logging in again will not help.'
        }
      ]
    },

    {
      type: 'battle-scar',
      incident: 'The 2018 Pan-European Healthcare IDOR Data Breach',
      context: 'A health insurance portal allowed patients to view lab results via GET /api/v1/lab_results?id=98234. An automated test script was created to test performance using sequential IDs. The engineers discovered that any authenticated patient could view any other patient blood tests simply by incrementing the query parameter ID. The vulnerability led to a $14M regulatory fine.',
      takeaway: 'Never rely on query parameters for access control. Always authorize requests by checking that token claims own the requested entity.'
    },
    {
      type: 'triage',
      title: 'Triage Drill: 401 vs 403 Confusion',
      scenario: 'You send a GET request to /v1/admin/users carrying a valid student Bearer token. The server returns 403 Forbidden. Your junior teammate says: "The token expired, let me copy a new one from the browser."',
      options: [
        {
          label: 'The teammate is correct: 403 means the token is expired.',
          correct: false,
          explanation: 'Expired tokens return 401 Unauthorized, not 403 Forbidden.'
        },
        {
          label: 'The teammate is incorrect: the token is valid, but student tokens lack admin privileges.',
          correct: true,
          explanation: '403 Forbidden means the identity is verified, but the role or scope is insufficient for the requested resource.'
        },
        {
          label: 'The endpoint requires HTTP POST instead of GET.',
          correct: false,
          explanation: 'Method mismatch returns 405 Method Not Allowed.'
        }
      ],
      debrief: '401 means the server does not know who you are. 403 means the server knows who you are, but says you cannot enter.'
    },

    {
      type: 'guess',
      prompt: 'Which environment variable column should hold sensitive credentials to prevent them from being exported in collection JSON files?',
      options: [
        'Initial Value',
        'Current Value',
        'Global Value',
        'Persisted Value',
      ],
      answerIndex: 1,
      explain: 'Current Values remain strictly in local memory and are never exported to shared JSON files or synchronized to team workspaces.',
    },
    {
      type: 'quiz',
      items: [
        [
          'Which environment variable column should hold sensitive credentials to prevent them from being exported in collection JSON files?',
          'Current Value. Current Values remain strictly in local memory and are never exported to shared JSON files or synchronized to team workspaces.',
        ],
      ],
    },
    {
      type: 'takeaways',
      title: 'Senior Savior Takeaways',
      items: [
        'Tokens assert identity; URL parameters only request filters. Prevent IDOR by verifying claims.',
        'Use PKCE for public clients to prevent authorization code interception without client secrets.',
        'Automate token acquisition in pre-request scripts using pm.sendRequest() to keep suites autonomous.',
        'Follow the Current-Only Vault pattern: never put live credentials in Initial Values.'
      ]
    },
    {
      type: 'victory-milestone',
      badge: 'Milestone 3.3 Cleared',
      title: 'OAuth 2.0 & Token Security Mastered',
      summary: 'You have eliminated IDOR vulnerabilities, automated dynamic Bearer token acquisition with PKCE, clarified 401 vs 403 semantics, and safeguarded credentials with the Current-Only vault pattern.',
      powers: [
        'Understanding the four OAuth 2.0 roles and the Hotel Keycard Analogy',
        'Configuring the Authorization Code handshake with PKCE and Client Credentials',
        'Automating token acquisition and refresh cycles inside Pre-request scripts',
        'Chaining Bearer tokens across downstream requests with Current Value security'
      ],
      disastersPrevented: [
        'Eliminated Insecure Direct Object Reference (IDOR) vulnerabilities across all routes',
        'Prevented CI runner failures caused by expired static access tokens',
        'Guaranteed that shared collection exports never contain sensitive credentials'
      ],
      nextStep: 'Proceed to Chapter 12 to tackle legacy enterprise protocols with SOAP WebServices and XML Parsing.'
    },
    {
      type: 'cliffhanger',
      time: '06:00 AM',
      location: 'Apex State Treasury Mainframe Cloisters',
      alert: 'LEGACY CLEARINGHOUSE COLLAPSE',
      speaker: 'Akshay Sharma',
      speech: 'State Treasury frozen! Thirty million rupees in student scholarships stuck in a legacy SOAP mainframe!',
      context: 'Akshay and Sameer enter the Dravidian sandstone cloisters housing the legacy mainframe. The modern JSON API cannot speak to the 2004 SOAP XML clearinghouse. Chapter 12 SOAP WebServices and XML Parsing begins!',
      nextLessonId: 'soap-webservices-and-xml'
    }
  ]
}
