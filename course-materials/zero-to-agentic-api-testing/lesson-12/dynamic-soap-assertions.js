// Technique 1: Deep tag validation against collection variables
const responseJson = xml2Json(pm.response.text());
const actualWord = responseJson["soap:Envelope"]["soap:Body"]["m:NumberToWordsResponse"]["m:NumberToWordsResult"];

pm.test("Deep tag validation matches collection expected result", function () {
    const expectedWord = pm.collectionVariables.get("grant_word") || "four hundred";
    pm.expect(actualWord).to.eql(expectedWord);
});

// Technique 2: Fast text scanning across the entire response string
pm.test("Quick scan confirms four hundred is present in response", function () {
    pm.expect(pm.response.text()).to.include("four hundred");
});
