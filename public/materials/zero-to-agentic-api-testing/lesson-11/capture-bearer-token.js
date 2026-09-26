// Step 1: Parse the JSON response from the auth server
const responseData = pm.response.json();

// Step 2: Validate token properties
pm.test("Token response returns 200 OK and valid Bearer", function () {
    pm.response.to.have.status(200);
    pm.expect(responseData).to.have.property("access_token");
    pm.expect(responseData.token_type).to.eql("Bearer");
    pm.expect(responseData.expires_in).to.be.above(0);
});

// Step 3: Save Bearer token to Global Scope for automated collection chaining
pm.globals.set("access_token", responseData.access_token);
console.log("Captured Bearer token and saved to Global Scope");
