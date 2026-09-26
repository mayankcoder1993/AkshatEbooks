// Step 1: Read values from active CSV row header
const currentBook = pm.iterationData.get("book_name");
const currentAuthor = pm.iterationData.get("author");
const currentAisle = pm.iterationData.get("aisle");

// Step 2: Push to Collection Scope for request payload interpolation
pm.collectionVariables.set("book_name", currentBook);
pm.collectionVariables.set("author_name", currentAuthor);
pm.collectionVariables.set("aisle", currentAisle);

// Step 3: Generate dynamic ISBN to guarantee uniqueness per row
const randomDigits = pm.variables.replaceIn("{{$randomInt}}");
pm.collectionVariables.set("ISBN", "LIB" + randomDigits);
