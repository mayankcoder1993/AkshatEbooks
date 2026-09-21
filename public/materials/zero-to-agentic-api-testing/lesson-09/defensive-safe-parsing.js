let parsedBody = null;

// Safely attempt to parse JSON without throwing fatal exceptions
try {
    parsedBody = pm.response.json();
} catch (exception) {
    console.warn("Server returned non JSON response: " + exception.message);
    parsedBody = null;
}

// Step 1: Assert that the response is valid JSON
pm.test("Response arrives in valid JSON format", function () {
    pm.expect(parsedBody, "Parsed JSON body").to.not.equal(null);
});

// Step 2: Security check that stack traces are not leaked
pm.test("Response does not leak sensitive internal secrets", function () {
    const rawText = pm.response.text();
    pm.expect(rawText).to.not.match(/password|database|stack trace|syntax error/i);
});
