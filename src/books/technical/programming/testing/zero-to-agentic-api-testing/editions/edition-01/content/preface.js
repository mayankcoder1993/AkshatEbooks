export const PREFACE = {
  title: 'Preface: Why API Testing is the Linchpin of Modern Software',
  blocks: [
    { type: 'paragraph', text: 'Software no longer lives on an isolated computer. Every application you touch, from ordering groceries and booking flights to querying an AI assistant, is an orchestra of independent backend services exchanging messages across the globe.' },
    { type: 'callout', variant: 'analogy', title: 'The Invisible Nervous System', paragraphs: [
      'When you look at a building, you see the walls, windows, and doors. You do not see the electrical conduits, water pipes, or structural steel that keep the building alive and standing.',
      'In modern software architecture, the user interface is just the paint on the walls. The APIs, Application Programming Interfaces, are the invisible plumbing and wiring that carry business logic, user identities, and financial transactions.',
      'If the user interface flickers, a user experiences a minor annoyance. If an API breaks, entire businesses grind to a halt.'
    ] },
    { type: 'heading', text: 'Why this book begins at Ground Zero' },
    { type: 'paragraph', text: 'Too many guides jump straight into complex automation frameworks or command line scripts without first establishing what is actually happening on the wire. We refuse to take shortcuts. Whether you are a manual tester stepping into automation or an engineer learning backend contracts, this book builds your mental model from first principles.' },
    { type: 'callout', variant: 'note', title: 'From Human Interfaces to Automated Systems', paragraphs: [
      'For decades, APIs were consumed by human built frontend apps. Today, automated pipelines and autonomous systems discover and execute APIs to complete complex workflows.',
      'An API with loose validation or brittle status codes might survive human clicks, but automated systems will fail or trigger unexpected loops. Testing APIs is about building reliable, verified contracts.'
    ] },
    { type: 'takeaways', items: [
      'APIs are the contractual nervous system of modern software architecture.',
      'Understanding HTTP and wire level contracts prevents fragile, brittle automation.',
      'Testing APIs at the service layer yields the highest speed, stability, and return on investment.',
      'Automated systems demand high schema precision, error resilience, and idempotency.'
    ] },
    { type: 'resources', items: [
      ['The Testing Pyramid by Martin Fowler', 'https://martinfowler.com/articles/practical-test-pyramid.html'],
      ['IETF RFC 9110: HTTP Semantics Overview', 'https://www.rfc-editor.org/rfc/rfc9110.html']
    ] },
  ],
}
