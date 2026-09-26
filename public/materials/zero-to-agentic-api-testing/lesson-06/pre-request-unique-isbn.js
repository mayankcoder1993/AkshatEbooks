// Step 1: Retrieve universal company prefix from Global Scope
const companyCode = pm.globals.get("company_code") || "LIB";

// Step 2: Generate dynamic random integer using Postman dynamic utility
const randomDigits = pm.variables.replaceIn("{{$randomInt}}");

// Step 3: Concatenate prefix and random digits to form unique ISBN
const uniqueISBN = companyCode + randomDigits;

// Step 4: Store in Collection Scope so request payload can read {{ISBN}}
pm.collectionVariables.set("ISBN", uniqueISBN);
console.log("Generated unique ISBN for test run: " + uniqueISBN);
