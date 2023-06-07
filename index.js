// TODO: Include packages needed for this application
const {prompt} = require("inquirer");
const fs = require("fs");
const db = require("./server");

async function promptedQuestions() {
  const answers = await prompt([
    {
      type: "list",
      name: "questions",
      message: "What would you like to do?",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role",
      ],
    },
  ]);

  const chosenQuestion = answers.questions;
//   console.log("Hello");
  switch (chosenQuestion) {
    case "View all departments":
      return departments();
    case "View all roles":
      return roles();

    case "View all employees":
      return employees();

    case "Add a department":
      return addDepartment();

    case "Add a role":
      return addRole();

    case "Add an employee":
      return addEmployee();

    case "Update an employee role":
      return updateRole();

    // default:
    //   console.log("Invalid choice. Please try again.");
    //   promptedQuestions();
  }
}

function departments() {
  const sql = `SELECT * FROM department`;
  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    console.table(result);
    promptedQuestions();
  });
}

function roles() {
  const sql = `SELECT * FROM role`;
  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    console.table(result);
    promptedQuestions();
  });
}

function employees() {
  const sql = `SELECT * FROM employee`;
  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    console.table(result);
    promptedQuestions();
  });
}

async function addDepartment() {

    const answers = await prompt(
        {
            type: "input",
            name: "deptName",
            message: "Enter the name of the department:",
        }
    )
    .then((answers) => {
        const deptName = answers.deptName;
        const sql = `INSERT INTO department (department_name)
    VALUES (?)`;
    const params = [deptName];
  
  db.query(sql, params, (err, result) => {
    if (err) {
        console.error(err.message);
    }
    console.table(result);
    promptedQuestions();
});

})
}

async function addRole() {

    const answers = await prompt([
        {
            type: "input",
            name: "title",
            message: "Enter the role:"
        },
        {
            type: "input",
            name: "salary",
            message: "Enter the salary:"
        },
        {
            type: "input",
            name: "deptID",
            message: "Enter the department ID:"
        }
    ])
    .then((answers) => {
        const title = answers.title;
        const salary = answers.salary;
        const deptID = answers.deptID;
        const sql = `INSERT INTO role (department_id, title, salary)
    VALUES (?, ?, ?)`;
    const params = [deptID, title, salary];
  
  db.query(sql, params, (err, result) => {
    if (err) {
        console.error(err.message);
    }
    console.table(result);
    promptedQuestions();
});

})
}
async function addEmployee() {

    const answers = await prompt([
        {
            type: "input",
            name: "firstName",
            message: "Enter the First Name of the employee:",
        },
        {
            type: "input",
            name: "lastName",
            message: "Enter the Last Name of the employee:",
        },
        {
            type: "list",
            name: "role",
            message: "choose the role of the employee:",
            choices:  ["Account Executive","Account Manager","Design Engineer","Engineering Management","Management","Financial Analyst","Legal Manager"]
        },
        {
            type: "list",
            name: "manager",
            message: "choose the manager of the employee:",
            choices: [1,2,3,4]
        }
    ])
    .then((answers) => {
        const firstName = answers.firstName;
        const lastName = answers.lastName;
        const role = answers.role;
        const manager = answers.manager;
        const sql = `INSERT INTO employee (first_name,last_name,role_id,manager_id)
    VALUES (?, ?, ?, ?)`;
    const params = [firstName,lastName,role,manager];
  
  db.query(sql, params, (err, result) => {
    if (err) {
        console.error(err.message);
    }
    console.table(result);
    promptedQuestions();
});

})
}
promptedQuestions();
