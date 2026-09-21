// Step 1: Capture the raw XML text response
const rawXmlResponse = pm.response.text();

// Step 2: Convert XML to a JavaScript object using Postman built in utility
const jsonEquivalent = xml2Json(rawXmlResponse);

// Step 3: Verify the HTTP status code
pm.test("SOAP response status code is 200 OK", function () {
    pm.response.to.have.status(200);
});

// Step 4: Extract and assert the result using bracket notation for namespaces
pm.test("Number conversion result returns five hundred", function () {
    const resultValue = jsonEquivalent["soap:Envelope"]["soap:Body"]["m:NumberToWordsResponse"]["m:NumberToWordsResult"];
    pm.expect(resultValue).to.eql("five hundred");
});
