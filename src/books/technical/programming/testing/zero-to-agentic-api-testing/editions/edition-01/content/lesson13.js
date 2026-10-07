import newmanPipelineImg from '../assets/newman-ci-cd-pipeline.jpg'
import enterpriseCicdImg from '../assets/enterprise-cicd-quality-gate.jpg'
import warRoomWideImg from '../assets/apex-campus-crisis-war-room.jpg'
import warRoomPanel1Img from '../assets/war-room-panel-1-the-crisis.jpg'
import warRoomPanel2Img from '../assets/war-room-panel-2-the-standoff.jpg'
import warRoomPanel3Img from '../assets/war-room-panel-3-invisible-wire.jpg'
import warRoomPanel4Img from '../assets/war-room-panel-4-first-principles.jpg'

export const lesson13 = {
  id: 'headless-ci-newman',
  icon: '',
  title: 'Headless Test Execution with Newman and Continuous Integration',
  shortTitle: 'Headless CI with Newman',
  subtitle: 'Automate command line execution, build GitHub Actions quality gates, generate HTML reports, and implement agentic self healing loops.',
  tags: ['Newman', 'CI/CD', 'GitHub Actions', 'HTML Extra', 'Quality Gate', 'Exit Codes', 'Agentic Testing'],
  blocks: [
    {
      type: 'mission-hud',
      mission: 'Mission 3: Enterprise Quality Engineering & Resilience Testing',
      phase: 'Phase 5 of 5: Continuous Integration Quality Gates & Graduation',
      rank: 'Rank: Lead API Quality Architect',
      status: 'ACTIVE'
    },
    {
      type: 'chapter-opener',
      missionBadge: 'MISSION 3 · PHASE 5 OF 5',
      missionTitle: 'Enterprise Quality Engineering & Resilience Testing',
      missionCrisis: 'The 07:15 AM Admissions Portal Candidate Deployment',
      missionContext: 'At 07:15 AM in the Apex Operations Tower, arched stone windows overlook the campus quadrangle where thousands of students gather. A critical pull request arrives: PR #342 National Admissions Portal v2.0. The release window closes in 43 minutes. Manual desktop testing across thirteen chapters of suites is impossible. Sameer and Akshay decouple the suites into headless Newman running inside a continuous integration container.',
      missionObjective: 'Execute collections headlessly with Newman CLI, build GitHub Actions CI quality gates, enforce exit code deployment rules, generate HTML Extra test reports, and resolve regressions with agentic repair loops.',
      targetSystems: 'Newman CLI Runner · GitHub Actions Ubuntu Container · HTML Extra Reporter · Automated Deployment Quality Gate',
      difficulty: 'ADVANCED',
      estimatedTime: '30 MINUTES',
      prerequisites: 'Chapter 12: SOAP WebServices and XML Parsing'
    },
    {
      type: 'mission-tracker',
      currentPhase: 'Phase 5: Headless CI with Newman & Quality Gates',
      totalPhases: 5,
      completedSteps: [
        'SOAP WebServices and XML Parsing (Chapter 12)'
      ],
      currentStep: 'Headless Test Execution with Newman and Continuous Integration',
      upcomingSteps: [
        'Graduation: Lead API Quality Architect'
      ]
    },

    // =========================================================================
    // GRAPHIC COMIC ARC : SIX SCENES FROM MASTER STORY LEDGER
    // =========================================================================
    {
      type: 'storyboard',
      badge: 'GRAPHIC COMIC : SIX SCENES',
      title: 'The Seven Fifteen Pull Request and the Golden Exit Code',
      intro: 'Follow apprentice Akshay, Principal Systems Architect Sameer, and Frontend Lead Ananya in the Master Operations Tower as Pull Request 342 triggers automated CI gates, exit code 1 catches a catastrophic fee rounding bug, and all thirteen test suites pass green at sunrise.',
      panels: [
        {
          title: 'Scene 1: 07:15 AM: Master Operations Tower and Candidate Deploy PR 342',
          time: '07:15 AM',
          layout: 'duo',
          image: {
            src: warRoomWideImg,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/apex-campus-crisis-war-room.jpg',
            w: 1408,
            h: 768,
            alt: 'Akshay and Sameer in the Master Operations Tower overlooking the campus quadrangle at dawn.',
            caption: 'Master Operations Tower: Arched stone windows overlook the campus as admissions candidate deploy PR #342 arrives.'
          },
          replyImage: {
            src: warRoomPanel1Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-1-the-crisis.jpg',
            w: 1376,
            h: 768,
            alt: 'DevOps console displaying Pull Request 342 with 43 minutes remaining until campus gates open.',
            caption: 'The Final Deadline: Admissions gates open at 08:00 AM; manual testing across 13 suites is impossible.'
          },
          dialogue: {
            speaker: 'Akshay',
            speech: 'Pull Request 342: National Admissions Portal v2.0! Gates open in 43 minutes! How do we run all thirteen suites?',
            replySpeaker: 'Sameer',
            replySpeech: 'Decouple the suites from the desktop. Headless Newman running inside an automated CI container.'
          },
          scene: 'At 07:15 AM, sunlight touches the campus quadrangle. Admissions engineers submit Pull Request #342. With 43 minutes before thousands of students access the portal, manual GUI clicking across all thirteen chapters is impossible. Sameer mandates headless CI.',
          realization: 'Desktop GUIs cannot validate continuous delivery pipelines; automated regression suites must run headlessly in CI.'
        },
        {
          title: 'Scene 2: 07:21 AM: The Headless Pivot: Newman CLI in the Pipeline',
          time: '07:21 AM',
          layout: 'duo',
          image: {
            src: newmanPipelineImg,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/newman-ci-cd-pipeline.jpg',
            w: 1408,
            h: 768,
            alt: 'Architecture visual of Newman CLI executing headless collection runs inside a container.',
            caption: 'The Headless Pivot: Newman packages collection JSON and runs headlessly in clean cloud environments.'
          },
          replyImage: {
            src: warRoomPanel3Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-3-invisible-wire.jpg',
            w: 1376,
            h: 768,
            alt: 'Terminal showing newman run collection.json -e staging.json --bail execution.',
            caption: 'Command Line Agility: newman run collection.json -e staging.json --bail executes in seconds.'
          },
          dialogue: {
            speaker: 'Akshay',
            speech: 'Newman takes our exported collection and environment JSON, running headlessly on Ubuntu in seconds!',
            replySpeaker: 'Sameer',
            replySpeech: 'Push, runner, newman, exit code: zero ships to production, one blocks deployment immediately.'
          },
          scene: 'Sameer details Newman architecture: Newman executes API Testing Workbench collections natively on any command line without a GUI. Integrated into GitHub Actions, Newman evaluates test assertions and returns process exit codes.',
          realization: 'Newman provides the headless execution engine that bridges collection design with automated CI/CD pipelines.'
        },
        {
          title: 'Scene 3: 07:25 AM: Building the CI Quality Gate Workflow YAML',
          time: '07:25 AM',
          layout: 'duo',
          image: {
            src: warRoomPanel3Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-3-invisible-wire.jpg',
            w: 1376,
            h: 768,
            alt: 'Akshay editing .github/workflows/api-tests.yml on his laptop screen.',
            caption: 'Workflow Definition: Configuring GitHub Actions workflow with TARGET_ENV guard and bail flags.'
          },
          replyImage: {
            src: warRoomPanel2Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-2-the-standoff.jpg',
            w: 1376,
            h: 768,
            alt: 'Sameer pointing out shell anti-patterns like pipe true that mask build failures.',
            caption: 'The Iron Rule: Never mask failures with pipe true in continuous integration shell scripts.'
          },
          dialogue: {
            speaker: 'Akshay',
            speech: 'Configured .github/workflows/api-tests.yml. Added TARGET_ENV guard and --bail to fail fast on first error!',
            replySpeaker: 'Sameer',
            replySpeech: 'Never append pipe true in CI scripts. The exit code is the only voice the deployment pipeline obeys.'
          },
          scene: 'Akshay creates the GitHub Actions workflow file. He includes a TARGET_ENV guard to prevent pull requests from running against production databases, enables the --bail flag to stop on first failure, and rejects shell masking tricks.',
          realization: 'CI quality gates must fail loudly; masking exit codes permits defective code to slip into production.'
        },
        {
          title: 'Scene 4: 07:33 AM: The Red Gate: Exit Code 1 Halts Fee Rounding Defect',
          time: '07:33 AM',
          layout: 'duo',
          image: {
            src: warRoomPanel1Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-1-the-crisis.jpg',
            w: 1376,
            h: 768,
            alt: 'CI pipeline monitor flashing crimson RED on Step 4 with process exit code 1.',
            caption: 'The Red Gate: Step 4 fails crimson red; exit code 1 aborts deployment of Pull Request #342.'
          },
          replyImage: {
            src: warRoomPanel4Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-4-first-principles.jpg',
            w: 1376,
            h: 768,
            alt: 'Sameer and Akshay reviewing the HTML Extra test report highlighting the fee rounding assertion failure.',
            caption: 'Catastrophe Averted: Caught a fee calculation flaw that would have overcharged 10,000 students.'
          },
          dialogue: {
            speaker: 'Akshay',
            speech: 'The pipeline halted! Exit code 1! Step 4 fee calculation assertion failed: expected 500.00, received 500.50!',
            replySpeaker: 'Sameer',
            replySpeech: 'The quality gate held. That 50 paise rounding error would have caused duplicate bank reversals for ten thousand students.'
          },
          scene: 'The CI runner launches PR #342. On Step 4, an assertion fails crimson red: a fee calculation returned 500.50 instead of 500.00. Newman exits with code 1, immediately halting the deployment and preventing duplicate banking errors.',
          realization: 'A strict CI quality gate protects production by intercepting subtle mathematical bugs before code deploys.'
        },
        {
          title: 'Scene 5: 07:45 AM: Agentic Repair Loop and Clean Staging Verification',
          time: '07:45 AM',
          layout: 'duo',
          image: {
            src: warRoomPanel3Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-3-invisible-wire.jpg',
            w: 1376,
            h: 768,
            alt: 'Akshay committing the fee rounding fix to PR #342 and re-triggering the pipeline.',
            caption: 'Targeted Fix: Correcting the decimal rounding logic and pushing clean commit to PR #342.'
          },
          replyImage: {
            src: enterpriseCicdImg,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/enterprise-cicd-quality-gate.jpg',
            w: 1408,
            h: 768,
            alt: 'Full enterprise CI/CD pipeline screen turning solid green across all build stages.',
            caption: 'Solid Green: All 13 test suites stream past with 100% pass mark and exit code 0.'
          },
          dialogue: {
            speaker: 'Akshay',
            speech: 'Fixed the decimal rounding branch and pushed commit! Rerunning pipeline now!',
            replySpeaker: 'Ananya',
            replySpeech: 'All thirteen test suites passed! Two thousand four hundred assertions green! Exit code zero!'
          },
          scene: 'Akshay commits the fee rounding fix. The CI runner executes the entire thirteen chapter test suite against the staging container. 2400 assertions pass green with zero failures, returning exit code 0.',
          realization: 'Automated test suites enable rapid, fearless bug correction and verification under tight delivery deadlines.'
        },
        {
          title: 'Scene 6: 07:59 AM: National Deploy Triumph and Lead API Quality Architect',
          time: '07:59 AM',
          layout: 'duo',
          image: {
            src: warRoomPanel4Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-4-first-principles.jpg',
            w: 1376,
            h: 768,
            alt: 'Sameer handing Akshay a hot faceted glass of cutting chai in a polished brass holder.',
            caption: 'The Architect Toast: Sameer raises a glass of cutting chai, crowning Akshay Lead API Quality Architect.'
          },
          replyImage: {
            src: warRoomWideImg,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/apex-campus-crisis-war-room.jpg',
            w: 1408,
            h: 768,
            alt: 'Campus gates swinging open as sunlight floods the quadrangle and admissions portal launches.',
            caption: 'Mission Complete: National Admissions Portal v2.0 live at 14ms latency as campus gates swing open.'
          },
          dialogue: {
            speaker: 'Sameer',
            speech: 'National portal live at 14ms. Gates open. Congratulations, Lead API Quality Architect Akshay Sharma.',
            replySpeaker: 'Akshay',
            replySpeech: 'From raw curl to autonomous CI quality gates. We verified every byte on the wire!'
          },
          scene: 'At 07:59 AM, the deployment completes. The National Admissions Portal launches with 14ms response times as campus gates open. Sameer raises a cutting chai glass, crowning Akshay Lead API Quality Architect.',
          realization: 'Mastering API quality engineering transforms apprentices into architects who safeguard mission critical digital systems.'
        }
      ]
    },

    // =========================================================================
    // TECHNICAL ARCHITECTURE & DEEP DIVE
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      text: 'The Architecture of Headless CI Quality Gates'
    },
    {
      type: 'image',
      src: enterpriseCicdImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/enterprise-cicd-quality-gate.jpg',
      w: 1408,
      h: 768,
      title: 'Enterprise CI/CD Quality Gate Pipeline & Automated Reporting',
      text: 'Headless Newman acts as the automated arbiter of deployment safety in modern continuous delivery pipelines. Evaluating exit codes enforces zero tolerance for regressions before code reaches production.',
      alt: 'Architecture diagram showing GitHub Actions workflow driving Newman test suite and deployment gates.',
      caption: 'The Enterprise Quality Gate: Automated headless test verification guarding production deployments.'
    },

    // =========================================================================
    // WORKBENCH SCREEN 1 : NEWMAN CLI HEADLESS EXECUTION
    // =========================================================================
    {
      type: 'comic-workbench',
      badge: 'INTERACTIVE WORKBENCH 1 : NEWMAN HEADLESS RUNNER',
      title: 'Newman CLI Headless Execution with Bail & HTML Extra Reporter',
      scenario: 'Execute the full admissions collection headlessly in terminal. Generate both terminal summary and visual HTML Extra reports.',
      config: {
        method: 'CLI',
        path: 'newman run collection.json -e staging.json --bail -r cli,htmlextra',
        activeTab: 'Terminal'
      },
      tabs: {
        params: [],
        headers: [],
        body: '',
        tests: '# Headless Newman execution command\nnewman run ./collections/admissions_v2.json \\\n  --environment ./environments/staging.json \\\n  --reporters cli,htmlextra \\\n  --reporter-htmlextra-export ./reports/admissions_report.html \\\n  --bail'
      },
      response: {
        status: 'EXIT CODE 0',
        time: '8.4s',
        size: '1.2MB',
        body: JSON.stringify({
          collection: "Admissions Portal v2.0",
          iterations: 1,
          requests: 48,
          prerequestScripts: 48,
          testScripts: 48,
          totalAssertions: 144,
          failedAssertions: 0,
          exitCode: 0,
          htmlReport: "./reports/admissions_report.html"
        }, null, 2)
      },
      notes: [
        '--bail halts collection execution immediately upon encountering the first test failure.',
        '-r cli,htmlextra outputs human readable logs to stdout while generating interactive HTML reports.'
      ]
    },

    // =========================================================================
    // WORKBENCH SCREEN 2 : GITHUB ACTIONS CI WORKFLOW
    // =========================================================================
    {
      type: 'comic-workbench',
      badge: 'INTERACTIVE WORKBENCH 2 : GITHUB ACTIONS WORKFLOW',
      title: 'Automated CI Quality Gate: .github/workflows/api-tests.yml',
      scenario: 'Inspect the GitHub Actions workflow definition. The workflow checks out code, sets up Node.js, installs Newman, verifies environment guards, and executes tests.',
      config: {
        method: 'YAML',
        path: '.github/workflows/api-tests.yml',
        activeTab: 'YAML'
      },
      tabs: {
        params: [],
        headers: [],
        body: '',
        tests: 'name: API Regression Quality Gate\non:\n  pull_request:\n    branches: [ main ]\n\njobs:\n  api-tests:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - name: Setup Node.js\n        uses: actions/setup-node@v4\n        with:\n          node-version: 20\n      - name: Install Newman\n        run: npm install -g newman newman-reporter-htmlextra\n      - name: Run API Tests Gate\n        run: |\n          newman run ./tests/admissions.json -e ./tests/staging.json --bail'
      },
      response: {
        status: 'PIPELINE GREEN',
        time: '24s',
        size: '64KB',
        body: JSON.stringify({
          job: "api-tests",
          status: "SUCCESS",
          conclusion: "success",
          stepsCompleted: 5,
          exitCode: 0
        }, null, 2)
      },
      notes: [
        'Automated workflows trigger on every pull request targeting the main branch.',
        'If Newman returns exit code 1, GitHub Actions marks the pull request check red, preventing merges.'
      ]
    },

    // =========================================================================
    // FOUR PART PEDAGOGICAL CARDS (SENIOR SAVIOR CONTRACTS)
    // =========================================================================
    {
      type: 'quad-card',
      badge: 'PEDAGOGICAL CONTRACT 1 : THE EXIT CODE QUALITY GATE',
      title: 'The Exit Code Quality Gate',
      subtitle: 'Enforcing automated deployment rules through process exit codes',
      input: {
        method: 'CLI',
        url: 'newman run collection.json -e staging.json --bail',
        desc: 'Headless runner execution evaluating collection assertions in a container.',
        code: 'newman run collection.json -e staging.json --bail'
      },
      underTheHood: {
        desc: 'Operating system process exit codes communicate execution success or failure.',
        steps: [
          'Newman runs all requests and assertion blocks in the collection.',
          'If all assertions pass, process terminates with exit code 0.',
          'If any assertion fails, Newman terminates with exit code 1.',
          'Continuous integration runner evaluates process exit code.',
          'Exit code 0 allows deployment to proceed; exit code 1 aborts pipeline.'
        ]
      },
      output: {
        status: 'EXIT 0',
        time: '8.4s',
        desc: 'All assertions pass; exit code 0 signals automated deployment pipeline to ship.',
        body: JSON.stringify({
          exitCode: 0,
          assertionsPassed: 144,
          assertionsFailed: 0,
          deploymentAuthorized: true
        }, null, 2)
      },
      seniorSavior: {
        aphorism: 'The exit code is the only voice the deployment pipeline obeys.',
        rule: 'Never mask failures with pipe true in continuous integration shell scripts.',
        trap: 'Appending || true to newman commands in CI, turning broken builds into false green deployments.'
      }
    },
    {
      type: 'quad-card',
      badge: 'PEDAGOGICAL CONTRACT 2 : ENVIRONMENT GUARDS IN CI',
      title: 'Environment Guards and Pipeline Workflows',
      subtitle: 'Preventing automated pull request tests from mutating production databases',
      input: {
        method: 'WORKFLOW SCRIPT',
        url: '.github/workflows/api-tests.yml',
        desc: 'Pipeline script enforcing target environment validation before launching runner.',
        code: 'if [ "$TARGET_ENV" == "production" ]; then\n  echo "CRITICAL: PRs forbidden against production!"\n  exit 1\nfi'
      },
      underTheHood: {
        desc: 'Guard scripts inspect environment variables before executing destructive tests.',
        steps: [
          'Pipeline triggers on pull request creation.',
          'Guard step evaluates TARGET_ENV variable against permitted test environments.',
          'If TARGET_ENV points to production, pipeline aborts with exit code 1 immediately.',
          'Permitted staging or ephemeral environment variables are injected.',
          'Protects live customer data from test cleanup sweeps and state corruption.'
        ]
      },
      output: {
        status: 'GUARD VERIFIED',
        time: '0ms',
        desc: 'Staging environment confirmed; regression suite executes safely.',
        body: JSON.stringify({
          targetEnv: "staging",
          guardCheck: "PASSED",
          safeToExecute: true
        }, null, 2)
      },
      seniorSavior: {
        aphorism: 'Guard the target environment before trusting the test suite.',
        rule: 'Never allow pull request tests to execute against production databases.',
        trap: 'Pointing CI runners at production environments where test teardowns purge real customer data.'
      }
    },
    {
      type: 'quad-card',
      badge: 'PEDAGOGICAL CONTRACT 3 : FLAKY TEST TRIAGE & RERUN LAW',
      title: 'Flaky Test Triage and the Rerun Law',
      subtitle: 'Eliminating false confidence by quarantining nondeterministic tests',
      input: {
        method: 'TRIAGE PROTOCOL',
        url: 'Automated test suite with intermittent failures',
        desc: 'A test fails 2 out of 90 runs due to network jitter or timing issues.',
        code: '// Flaky test anti-pattern: clicking "Re-run failed jobs" until it passes green'
      },
      underTheHood: {
        desc: 'Nondeterministic tests erode team confidence in automated quality gates.',
        steps: [
          'Intermittent timing issues cause test to fail on random CI executions.',
          'Engineers click "Rerun" until lucky timing yields a passing run.',
          'True regression defects get dismissed as "just another flaky test".',
          'Rerun Law mandates: quarantine flaky tests immediately into separate suites.',
          'Root causes (race conditions, unmocked delays) are diagnosed and resolved.'
        ]
      },
      output: {
        status: 'DETERMINISTIC',
        time: '12ms',
        desc: 'Flaky tests quarantined and fixed; main CI gate maintains 100% reliability.',
        body: JSON.stringify({
          flakyTestsInMain: 0,
          reliabilityRate: "100%",
          confidenceRestored: true
        }, null, 2)
      },
      seniorSavior: {
        aphorism: 'The quality gate does not accept probably nothing.',
        rule: 'Rerunning until green is hunting for luck and calling it confidence.',
        trap: 'Clicking rerun on failed CI jobs without investigating root causes, allowing bugs into production.'
      }
    },
    {
      type: 'quad-card',
      badge: 'PEDAGOGICAL CONTRACT 4 : AGENTIC SELF-HEALING REPAIR LOOP',
      title: 'The Agentic Self-Healing Repair Loop',
      subtitle: 'Autonomous diagnosis and defect isolation with human-in-the-loop signoff',
      input: {
        method: 'AGENTIC LOOP',
        url: 'Newman HTML Extra failure telemetry report',
        desc: 'Automated failure report indicating fee rounding failure on line 42.',
        code: 'pm.test("Fee rounded to two decimals", function() {\n  pm.expect(res.fee).to.eql(500.00);\n});'
      },
      underTheHood: {
        desc: 'Automated agents parse test failure telemetry to isolate defective code branches.',
        steps: [
          'Newman generates structured JSON failure report on exit code 1.',
          'Agentic repair tool ingests report, request body, and backend stack trace.',
          'Identifies root cause: Math.round missing division step in fee calculator.',
          'Generates targeted code correction and proposes pull request patch.',
          'Human architect reviews patch, runs companion test, and approves deployment.'
        ]
      },
      output: {
        status: 'REPAIRED & VERIFIED',
        time: '15m',
        desc: 'Defect isolated, patched, and verified green across 13 suites in CI.',
        body: JSON.stringify({
          defectType: "ROUNDING_PRECISION_ERROR",
          repairedFile: "src/billing/feeCalculator.js",
          humanApproved: true,
          retestExitCode: 0
        }, null, 2)
      },
      seniorSavior: {
        aphorism: 'Automate the defect hunt, never the deployment blame.',
        rule: 'The self healing loop concludes with human review and green gate verification.',
        trap: 'Permitting automated agents to deploy unverified code directly to production without human signoff.'
      }
    },

    // =========================================================================
    // POST DRILLS & QUIZ
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      text: 'CI Exit Code Routing'
    },
    {
      type: 'chunked-code',
      title: 'Evaluating Newman Exit Codes in Shell Scripts',
      code: `#!/bin/bash
# Run Newman with bail flag
newman run ./collections/admissions.json -e ./environments/staging.json --bail

# Capture exit code immediately
EXIT_CODE=$?

if [ $EXIT_CODE -eq 0 ]; then
  echo "All assertions passed cleanly. Proceeding to production deployment."
  ./deploy_to_production.sh
else
  echo "CRITICAL: Newman tests failed with exit code $EXIT_CODE. Halting deployment!"
  exit 1
fi`,
      chunks: [
        {
          lines: '3-6',
          label: 'Capturing Exit Status',
          explanation: '$? captures the exit code of the most recently executed command.'
        },
        {
          lines: '8-14',
          label: 'Deployment Gating',
          explanation: 'Only exit code 0 triggers the deployment script; any other code aborts the pipeline.'
        }
      ]
    },

    {
      type: 'battle-scar',
      incident: 'The Masked Exit Code That Shipped An Empty Database Migration',
      context: 'A fintech engineering team configured their CI pipeline with: newman run suite.json || true. The || true trick was added to prevent test failures from stopping artifact builds. When a broken database migration wiped customer transaction histories on staging, the test suite failed 100% of assertions. However, because the exit code was masked, the CD pipeline automatically deployed the catastrophic migration to production.',
      takeaway: 'Never mask exit codes in continuous delivery pipelines. Exit codes are the only defense against shipping broken code.'
    },
    {
      type: 'triage',
      title: 'Triage Drill: The Masked CI Pipeline',
      scenario: 'You notice that a pull request with failing API assertions was merged and deployed to production. In the CI configuration file, you find: newman run ./test.json || exit 0.',
      options: [
        {
          label: 'The developer used || exit 0 to ensure failed tests never block the deployment pipeline.',
          correct: true,
          explanation: '|| exit 0 forces the shell to return exit code 0 regardless of Newman failure, completely disabling the CI quality gate.'
        },
        {
          label: 'Newman does not support running on Ubuntu containers.',
          correct: false,
          explanation: 'Newman runs flawlessly on Ubuntu, macOS, and Windows containers.'
        },
        {
          label: 'The tests failed because the HTML Extra reporter was missing.',
          correct: false,
          explanation: 'Reporters affect output formatting, not test pass/fail semantics.'
        }
      ],
      debrief: 'Using || exit 0 or || true in CI scripts destroys the quality gate. Remove the override so Newman exit code 1 stops the build.'
    },

    {
      type: 'quiz',
      title: 'Knowledge Check: Newman Exit Codes',
      question: 'What process exit code does Newman return to the operating system when at least one assertion in a collection fails?',
      options: [
        '0',
        '1',
        '200',
        '-1'
      ],
      correctAnswer: 1,
      explanation: 'In Unix standard conventions, exit code 0 indicates success. Newman returns exit code 1 when one or more assertions fail.'
    },
    {
      type: 'takeaways',
      title: 'Senior Savior Takeaways',
      points: [
        'Newman runs collections headlessly in CLI and CI containers without a desktop interface.',
        'The exit code is the only voice the deployment pipeline obeys: 0 ships, 1 halts.',
        'Never mask failures with || true in CI scripts; let failures fail loudly.',
        'Quarantine flaky tests immediately; rerunning until green is hunting for luck and calling it confidence.'
      ]
    },
    {
      type: 'victory-milestone',
      badge: 'All 13 Chapters Cleared',
      title: 'Graduation: Lead API Quality Architect',
      summary: 'You have mastered the complete journey from raw HTTP wire bytes to autonomous CI/CD quality gates, OAuth 2.0 PKCE security, SOAP mainframes, and agentic testing.',
      nextStep: 'Congratulations! You are officially certified as a Lead API Quality Architect.'
    },
    {
      type: 'cliffhanger',
      time: '08:00 AM',
      location: 'Apex Institute Great Hall Gates',
      alert: 'SYSTEMS ALL GREEN',
      speaker: 'Sameer Krishnamurthy',
      speech: 'The gates are open. The admissions portal is live. Splendid work, Lead API Quality Architect.',
      context: 'Sunlight floods the Great Hall as thousands of students stream through the gates. The National Admissions Portal v2.0 serves requests with sub 15 millisecond response times and zero failures. Your transformation is complete!',
      nextLessonId: 'journey-complete'
    }
  ]
}
