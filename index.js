const fs = require('fs');

// Creating employees.json file

fs.writeFile("employees.json", '{ "name": "Employee 1 Name", "salary": 2000 }\n', "utf8", (err) => {
    if (err) console.log(err);
    console.log("File Created: employees.json");
});

// Reading employees.json file

fs.readFile('employees.json', 'utf8', (err, data) => {
    if (err) console.log(err);
    console.log("Reading File: employees.json");
    console.log(data);
});

// Updating employees.json file

fs.appendFile('employees.json', '{ "name": "Employee 2 Name", "salary": 3000 }\n', 'utf8', (err) => {
    if (err) console.log(err);
    console.log("File Updated: employees.json");
});

// Deleting employees.json file

fs.unlink('employees.json', (err) => {
    if (err) console.log(err);
    console.log("File Deleted: employees.json");
});

