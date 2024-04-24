const accountId = 1456;
let accountName = "Ashutosh Gaurav";
var accountPassword = "password";
accountCity = "Lucknow"; // No Error
let accountState;

// accountId = 1234 // Error: Assignment to constant variable.
accountName = "Ashutosh"; // No Error
accountPassword = "newpassword"; // No Error

/*
prefer not to use var
because of issues like hoisting and scoping 
*/

console.table([
  accountId,
  accountName,
  accountPassword,
  accountCity,
  accountState,
]);
