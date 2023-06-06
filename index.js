// TODO: Include packages needed for this application
const {prompt} = require("inquirer");
const fs = require("fs");
// const generateMarkdown = require("./utils/generateMarkdown");
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
  console.log("Hello");
  switch (chosenQuestion) {
    case "View all departments":
      return departments();
    case "View all roles":
      return roles();

    case "View all employees":
      return employees();

    case "Add a department":
      return addDeparment();

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

promptedQuestions();
