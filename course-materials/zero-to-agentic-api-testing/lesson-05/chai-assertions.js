// Step 1: Parse response JSON
const responseData = pm.response.json();

// Step 2: Validate HTTP status code is 200 OK
pm.test("Status code is 200 OK", function () {
    pm.response.to.have.status(200);
});

// Step 3: Validate response body message
pm.test("Response contains successfully added message", function () {
    pm.expect(responseData.msg).to.eql("successfully added");
});

// Step 4: Validate wire headers and latency budgets
pm.test("Content Type is application/json and latency under 1200ms", function () {
    pm.response.to.have.header("Content-Type");
    pm.expect(pm.response.headers.get("Content-Type")).to.include("application/json");
    pm.expect(pm.response.responseTime).to.be.below(1200);
});
