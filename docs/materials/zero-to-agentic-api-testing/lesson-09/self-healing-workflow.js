const responseText = pm.response.text();

if (responseText.includes("book already exist")) {
    console.log("Collision detected! Initiating self healing cleanup...");
    pm.collectionVariables.set("recovery_flag", "true");
    postman.setNextRequest("Delete Book");
} else {
    pm.collectionVariables.set("recovery_flag", "false");
    pm.test("Book added successfully", function () {
        pm.response.to.have.status(200);
    });
}
