const responseData = pm.response.json();

// Test 1: Assert top level object and array size
pm.test("Department audit returns valid book records", function () {
    pm.expect(responseData.department).to.eql("Computer Science and Systems");
    pm.expect(responseData.books).to.be.an("array").with.lengthOf(3);
});

// Test 2: Locate a specific book using find() and assert all keys exist
pm.test("Locate Postman Architecture Patterns and verify its schema", function () {
    const targetBook = responseData.books.find(book => book.title === "Postman Architecture Patterns");
    pm.expect(targetBook, "Target book must exist").to.not.be.undefined;
    pm.expect(targetBook.price).to.eql(55);
    pm.expect(targetBook).to.have.all.keys("id", "title", "author", "price", "copies", "tags");
});

// Test 3: Extract titles using map() and filter premium books
pm.test("Verify premium collection and extracted titles", function () {
    const titles = responseData.books.map(book => book.title);
    pm.expect(titles).to.include("Full Stack API Automation");

    const premiumBooks = responseData.books.filter(book => book.price >= 50);
    pm.expect(premiumBooks.length).to.eql(2);
});

// Test 4: Calculate mathematical sum using reduce()
pm.test("Calculated purchase total matches allocated budget", function () {
    const calculatedTotal = responseData.books.reduce(function (runningSum, book) {
        return runningSum + (book.price * book.copies);
    }, 0);

    // (45 * 12 = 540) + (55 * 8 = 440) + (65 * 8 = 520) = 1500
    pm.expect(calculatedTotal).to.eql(responseData.budget.total_allocated);
});
