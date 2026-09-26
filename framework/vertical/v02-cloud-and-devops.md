# Vertical Module: Cloud and DevOps

Module ID: v02
Series: SGK Tech (SGK-TECH)
Version: 2.0.0

---

## PART A: SUBJECT INVARIANTS

### A1: What Must Be Taught

FOUNDATIONAL LAYER:
  The cloud model: compute, storage, networking as services,
    not as hardware you own.
  Infrastructure as Code: why declarative configuration beats
    manual dashboard clicking every time.
  The deployment pipeline: the path from git commit to
    running production service.
  Cost visibility: the financial reality that every cloud
    resource costs money every minute it is running.

PRACTICAL LAYER:
  Containerization: what Docker solves, how images are built,
    how containers are run and networked.
  Orchestration: why a single container is not enough for
    production, and how orchestration manages clusters.
  CI/CD pipelines: automated testing, building, and deployment
    triggered by git events.
  Monitoring and observability: logs, metrics, and traces as
    the three pillars of operational visibility.

PROFESSIONAL LAYER:
  High availability and disaster recovery: designing for failure
    at the server, availability zone, and region levels.
  Security in the cloud: IAM, least privilege, secret management,
    network security groups, VPC architecture.
  Cost optimization: auto-scaling, spot instances, storage tiering,
    and identifying zombie resources.
  Incident response: on-call rotations, runbooks, post-mortems,
    and root cause analysis.

### A2: Proof System

ALL configuration files must be validated:
  Terraform/OpenTofu files must pass validate and plan in the
    test suite.
  Dockerfiles must build successfully in CI.
  Kubernetes manifests must pass kubectl dry-run client-side
    validation.
  CI/CD pipeline definitions (GitHub Actions) must pass yaml
    lint and action-validator checks.

Financial proof:
  Every cost claim must specify the provider, region, and
    pricing date.
  Architectural cost comparisons must show the calculation
    math explicitly.

### A3: Interactive Element Types

Architecture Diagram:
  Clean box and arrow diagrams showing VPC boundaries, subnets,
  load balancers, compute instances, and data stores.
  Security boundaries clearly indicated with dashed lines.

Deployment Pipeline Flow:
  Visual progression: Commit -> Build -> Test -> Stage -> Deploy.
  Failure states clearly indicated with red halt points.

Cloud Console Mockup:
  Shows cloud management interfaces with realistic service names.
  Cost dashboard views showing resource burn rates.

Terminal and Logs Panel:
  Kubectl commands and their outputs.
  Log streams showing structured JSON logs from services.
  Build outputs showing container layer caching.

### A4: Chapter ROI Test Template

"After reading this chapter, the reader can [PROVISION/DEPLOY/MONITOR]
[SPECIFIC INFRASTRUCTURE COMPONENT] using [SPECIFIC TOOL]
with [SPECIFIC REPRODUCIBLE CONFIGURATION], without manual GUI clicks."

---

## PART B: CREATIVE VEHICLE PALETTE

VEHICLE 1: THE BILLING SHOCK RESCUE
World: A high-growth startup discovers an unexpected five-figure
  monthly AWS bill due to unmonitored resources and misconfigured
  auto-scaling. The hero audits, re-architects, and slashes the bill
  while increasing reliability.

VEHICLE 2: THE BLACK FRIDAY TRAFFIC SHIELD
World: An online retail platform experiences unprecedented traffic
  spikes. The hero deploys dynamic auto-scaling, multi-region
  failover, and CDN caching to prevent catastrophic downtime.

VEHICLE 3: THE ZERO-DOWNTIME MIGRATION SPRINT
World: A legacy monolithic application hosted in an on-premises
  datacenter must be containerized and migrated to Kubernetes
  in the cloud with zero dropped transactions.
