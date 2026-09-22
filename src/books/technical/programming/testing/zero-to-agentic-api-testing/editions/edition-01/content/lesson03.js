import workbenchImg from '../assets/postman-workbench-overview.jpg'
import collaborationImg from '../assets/postman-team-collaboration-fork-pr.jpg'

export const lesson03 = {
  id: 'postman-setup',
  icon: '',
  title: 'Setting Up Postman and Workspace Collaboration',
  shortTitle: 'Postman Setup',
  subtitle: 'Installing the app, navigating the interface, and managing Personal, Team, and Public workspaces.',
  tags: ['Postman', 'Workspaces', 'Installation', 'Collections', 'Tooling'],
  blocks: [
    {
      type: 'mission-hud',
      mission: 'Mission 1: The Core Protocol and Campus Cloud Integration',
      phase: 'Phase 3 of 3: The Automation (Mission Victory)',
      rank: 'Rank: Automation Pipeline Engineer',
      status: 'ACTIVE'
    },
    {
      type: 'mission-tracker',
      badge: 'MISSION 1 PROGRESS · STEP 3 OF 3',
      title: 'Completing Mission 1: Entering the Laboratory to Verify the Wire',
      text: 'To audit our publishing endpoints, craft custom POST payloads, and inspect wire headers, we enter our specialized API workbench. Because web browsers cannot craft arbitrary POST payloads or custom request headers from the address bar, we configure Postman, explore its interface alongside modern tools like Bruno, create our first executable test collection, and learn how engineering teams collaborate safely using forked collections and pull requests.',
    },
    {
      type: 'heading',
      text: 'Step 1: Why We Need an API Testing Workbench',
    },
    {
      type: 'paragraph',
      text: 'In our previous chapter, we discovered that standard web browsers can only perform GET requests through the address bar. A browser cannot send custom POST payloads, set authorization headers, or inspect raw status codes cleanly.',
    },
    {
      type: 'paragraph',
      text: 'This is why testers use a dedicated **API Testing Workbench**. An integrated workbench like Postman combines all the essential tools into a single visual cockpit:',
    },
    {
      type: 'comparison',
      title: 'Core Capabilities of an API Testing Workbench',
      columns: ['Workbench Zone', 'What It Does', 'Why It Matters'],
      rows: [
        ['Request Builder', 'Select any HTTP verb, configure headers, and write JSON payloads', 'Lets you craft and send arbitrary network requests that browsers cannot trigger'],
        ['Response Inspector', 'Displays formatted JSON, status codes, response time, and payload size', 'Provides instant visual feedback on whether the backend succeeded or failed'],
        ['Environment Manager', 'Stores dynamic variables (such as base_url) across QA and UAT targets', 'Allows switching between testing environments with a single click'],
        ['Automation Sandbox', 'Embedded Node.js JavaScript engine for writing pm.test assertions', 'Replaces manual inspection with instant automated test execution'],
      ],
    },
    {
      type: 'heading',
      text: 'Step 2: Understanding Postman and Modern Alternatives like Bruno',
    },
    {
      type: 'paragraph',
      text: 'Postman is the enterprise industry standard API platform used worldwide. Modern offline alternatives like Bruno also store collections as plain text files in local Git folders. The underlying HTTP wire mechanics are identical across both tools.',
    },
    {
      type: 'steps',
      items: [
        'Download the official desktop application: [https://www.postman.com/downloads/](https://www.postman.com/downloads/).',
        'Launch the installer and sign in with your account to enable workspace cloud synchronization.',
        'Create a new Workspace named "Global Open Data and Campus Audit" to organize your projects.',
        'Create a Collection named "Web Wire REST Suite" to serve as your executable test suite. You can also import the pre built course collection directly: [Download Zero to Agentic Postman Collection](/materials/zero-to-agentic-api-testing/Zero-to-Agentic-API-Testing.postman_collection.json) or [Raw GitHub File](https://raw.githubusercontent.com/mayankcoder1993/AkshatEbooks/arena/01a0bfe5-akshatebooks/course-materials/zero-to-agentic-api-testing/Zero-to-Agentic-API-Testing.postman_collection.json).',
      ],
    },
    {
      type: 'heading',
      text: 'Step 3: Tour of the Postman Workbench',
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'WORKBENCH ARCHITECTURE',
      title: 'Postman Workbench Architecture: The Four Operational Zones',
      text: 'The Postman application organizes testing into four specialized zones: the left sidebar for navigation and collection hierarchies, the top bar for environments and workspaces, the center request builder for constructing HTTP transactions, and the bottom panel for inspecting live response headers and payloads.',
      src: workbenchImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/postman-workbench-overview.jpg',
      w: 1408,
      h: 768,
      alt: 'Postman UI architectural overview: Workspaces, Collections sidebar as test suites, Request Builder tabs, and Response/Console viewer.',
      caption: 'The four operational zones of an API testing workbench.',
      points: [
        'Workspaces Header: Manage active workspace scope (Personal, Team, Public).',
        'Collections Sidebar: Folders grouping related API requests into executable test suites.',
        'Request Editor: Tabs for URL params, Auth, Headers, Body, Pre request Script, and Tests.',
        'Response Viewer: Bottom panel displaying Status Code, Latency, Payload Body, and Test Results.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 4: Executing Live Requests in Your Postman Collection',
    },
    {
      type: 'paragraph',
      text: 'With Postman open, let us create our first live test request. Click the plus button to add a request, set the method to POST, enter the URL https://jsonplaceholder.typicode.com/posts, select Body > raw > JSON, and paste our payload:',
    },
    {
      type: 'code',
      filename: 'create-article-request.json',
      lines: [
        'POST https://jsonplaceholder.typicode.com/posts HTTP/1.1',
        'Content-Type: application/json',
        '',
        '{',
        '  "title": "Automating APIs with Postman",',
        '  "body": "Step by step guide to sending HTTP requests and validating response codes",',
        '  "userId": 1',
        '}',
      ],
    },
    {
      type: 'terminal',
      command: 'HTTP Response from Server',
      lines: [
        'Status: 201 Created',
        'Time: 142 ms',
        '',
        '{',
        '  "title": "Automating APIs with Postman",',
        '  "body": "Step by step guide to sending HTTP requests and validating response codes",',
        '  "userId": 1,',
        '  "id": 101',
        '}',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Fresher Trap to Avoid: Forgetting to Click Save before Running',
      paragraphs: [
        'One of the most frequent mistakes made by beginners in Postman is editing a request URL, payload, or test script, and clicking Send without clicking the Save button (or pressing Ctrl+S / Cmd+S).',
        'If you do not save, your single interactive request might work in the active tab, but when you run the collection in the Collection Runner, Postman executes the older saved version from disk!',
        'Notice the small orange dot beside your tab name in Postman: that orange dot means you have unsaved changes. Always press Save to persist your updates.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 5: Team Collaboration: Forking Collections and Reviewing Pull Requests',
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'TEAM COLLABORATION',
      title: 'Postman Collaboration Lifecycle: Forking, Branching, and Merging',
      text: 'In real world software projects, multiple engineers work on the same API test collection simultaneously. If everyone edits the main collection directly, tests overwrite each other and breaking changes enter production test runs. Postman provides an enterprise branching workflow mirroring Git: engineers fork a parent collection into their personal workspace, make atomic updates, submit pull requests with visual change diffs, and merge back into the verified team source of truth.',
      src: collaborationImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/postman-team-collaboration-fork-pr.jpg',
      w: 1408,
      h: 768,
      alt: 'Postman team collaboration workflow showing collection forking, branch isolation, pull request creation, peer review, and merging back to the parent master collection.',
      caption: 'The Postman Team Collaboration Lifecycle: Forking, branching, reviewing, and merging.',
      points: [
        'Step 1 (Master Team Workspace): The single source of truth containing tested parent collections used by teams and automated CI pipelines.',
        'Step 2 (Fork to Private Branch): Each engineer creates their own isolated personal working fork without affecting teammates.',
        'Step 3 (Local Test Scripting): The engineer develops new test scripts, dynamic assertions, and mock payloads in complete safety.',
        'Step 4 (Pull Request and Peer Review): The engineer opens a pull request with side by side diff views showing green additions for peer approval.',
        'Step 5 (Merge and Fork Cleanup): Approved changes merge cleanly into the master parent collection, and the temporary fork is deleted to keep the workspace tidy.',
      ],
    },
    {
      type: 'steps',
      items: [
        'Forking a Collection: Click the three dots icon beside your parent collection and select Create a Fork. Assign a distinct label such as "Library_Working_Branch". This creates an isolated copy linked to the original parent.',
        'Developing in Isolation: Add new test scripts, assertions, and mock payloads inside your fork without affecting teammates.',
        'Creating a Pull Request: When your changes are ready, click Create Pull Request. Provide a clear title, description of changes, and select your teammates as Reviewers.',
        'Reviewing and Diff Inspection: The reviewer opens the Pull Requests tab, inspects the Changes view (where green highlights show added code), and leaves inline comments on specific test files.',
        'Approving and Merging: Once approved, click Merge Changes, and select "Update destination and delete source fork" to keep your workspace tidy.',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Fresher Trap to Avoid: Editing the Master Collection Directly in Teams',
      paragraphs: [
        'When joining a company, never push experimental assertions directly into the shared master collection.',
        'If your unfinished test fails during a scheduled smoke run, it triggers false alarm emails to engineering leads.',
        'Always fork the collection into your own branch, test your changes thoroughly, and raise a pull request for review.',
      ],
    },
    {
      type: 'battle-scar',
      metric: 'Security Exposure Audit',
      title: 'Public Workspace Key Exposure: The Danger of Accidental Visibility',
      context: 'Security researchers analyzing public API repositories uncovered thousands of live production database passwords, cloud secrets, and private authentication tokens inadvertently shared in public Postman workspaces. Engineers intended to test a quick endpoint in their personal sandbox, but accidentally published their workspace to the open web. Anyone typing search terms into web search engines could discover administrative master keys.',
      takeaway: 'Always isolate sensitive credentials using private masked environment variables. Never publish workspace collections containing real production authorization keys to public web directories.'
    },
    {
      type: 'triage',
      title: 'War Room Triage: The Leaked Master Key Incident',
      scenario: 'At 11:30 PM, the campus security operations center alerts the team: an administrative database token was detected in an open web search index. A junior tester admits they created a collection in Postman earlier that afternoon. What immediate containment action must the team take first?',
      options: [
        'Send an email to vendor support requesting them to remove the indexed collection URL.',
        'Immediately revoke and regenerate the compromised database secret in the identity provider.',
        'Rename the Postman collection to a generic title like Test Project.',
        'Delete the local Postman application from the tester laptop workstation.'
      ],
      answerIndex: 1,
      debrief: 'Immediate credential revocation is step one of incident containment! Once a secret is exposed to the public internet, assume it is already harvested by automated scanners. You must invalidate the key instantly, inspect access audit logs, and move all tokens into masked environment variables.',
      traps: [
        'Waiting for external vendor support allows attackers unrestricted hours of database access.',
        '',
        'Renaming collections does not change URLs or revoke exposed credentials from search caches.',
        'Deleting local software does not erase published cloud data or revoke live keys.'
      ]
    },
    {
      type: 'mission-accomplished',
      title: 'Mission 1 Accomplished: Live REST Collection Verified!',
      text: 'By assembling our requests in Postman, we submitted custom POST payloads, received 201 Created with generated resource IDs, inspected raw wire headers, and learned how enterprise teams collaborate via forked collections. We have built our first functioning test collection without proprietary licensing barriers!',
    },
    {
      type: 'heading',
      text: 'Step 6: Review and Practice',
    },
    {
      type: 'guess',
      prompt: 'When collaborating in a team workspace in Postman, why should an automation engineer fork a collection before adding new tests?',
      options: [
        'Because Postman does not allow more than one person to open a collection',
        'To work safely on an isolated working branch without disrupting the stable parent collection used by teammates and CI pipelines',
        'Because forking deletes the original collection',
        'To make the collection run faster in the desktop app',
      ],
      answerIndex: 1,
      explain: 'Forking creates a linked copy of the collection, allowing engineers to develop and verify new tests independently before merging them back into the main collection via a reviewed pull request.',
    },
    {
      type: 'quiz',
      items: [
        [
          'What are the three workspace scopes in Postman?',
          'Personal (private to the individual user), Team (shared among invited organization members with real time sync), and Public (visible to anyone with the URL).',
        ],
        [
          'What is the recommended merge option when completing a pull request in Postman?',
          'Selecting "Update destination and delete source fork", which merges your verified changes into the parent collection while automatically cleaning up the temporary working fork.',
        ],
      ],
    },
    {
      type: 'takeaways',
      items: [
        'An API workbench lets you send arbitrary HTTP requests, inspect headers, and examine response bodies visually.',
        'Tools like Bruno offer offline alternatives, while sharing identical HTTP wire mechanics.',
        'Workspaces separate work contexts: Personal for private study, Team for corporate collaboration.',
        'Forking and pull requests allow teams to build and review automated tests safely without breaking main suites.',
        'Testing live endpoints with real JSON payloads confirms that the client server contract functions end to end.',
      ],
    },
    {
      type: 'victory-milestone',
      badge: 'MISSION 1 CONQUERED · SUITE ASSEMBLED',
      rank: 'ENTERPRISE QA AUTOMATION ARCHITECT',
      title: 'Major Milestone Cleared: Autonomous API Workbench & Team Collaboration Deployed',
      summary: 'You have conquered Mission 1! You transitioned from passive browser viewing to commanding an enterprise API testing cockpit. You verified live JSON endpoints, executed parameterized POST and GET calls, and implemented git style collaborative forking and pull request governance. Your foundation is unshakeable.',
      powers: [
        'Mastering the complete Postman and Bruno testing workbench cockpits with zero licensing friction',
        'Executing multi user workspace governance across Personal, Team, and Public visibility boundaries',
        'Deploying safe collection forking and peer reviewed pull requests to prevent team regression collisions',
        'Validating live HTTP transactions with custom payloads, status assertions, and wire header diagnostics',
      ],
      disastersPrevented: [
        'Eliminated silent team collection overwrites and accidental corruption of master CI CD test suites',
        'Stopped false alarm build failures caused by untested scripts pushed directly to team repositories',
        'Prevented single engineer knowledge silos by establishing standard transparent pull request workflows',
      ],
      warRoomTakeaway: 'You now command the tools and protocols that power global digital commerce. You are no longer just testing software: you are defending system contracts across the entire engineering organization.',
    },
    {
      type: 'cliffhanger',
      title: 'Moving to Mission 2: Testing College Library Inventory at Scale',
      text: 'With our workbench operational, our REST fundamentals verified, and our team collaboration workflows established, we are ready for enterprise automation. In our next chapter, we begin Mission 2: taking on the College Library Inventory API, testing composite IDs, and transitioning from manual checks to automated assertions!',
    },
  ],
}
