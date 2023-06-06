// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// const generateMarkdown = require("./utils/generateMarkdown");

function promptedQuestions = [
    inquirer
    .prompt([
      {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
          'View all departments',
          'View all roles',
          'View all employees',
          'Add a department',
          'Add a role',
          'Add an employee',
          'Update an employee role',
        ],
      },
    ])
]
    .then((answers) => {        
        const chosenQuestion = answers.questions;
        switch (chosenQuestion) {
            case 'View all departments':
              departments();
              break;
            case 'View all roles':
              roles();
              break;
            case 'View all employees':
                employees();
              break;
            case 'Add a department':
                addDeparment();
              break;
            case 'Add a role':
                addRole();
              break;
            case 'Add an employee':
                addEmployee();
              break;
            case 'Update an employee role':
                updateRole();
              break;

              default:
              console.log('Invalid choice. Please try again.');
              promptedQuestions();
          }
        })
        .catch((error) => {
          console.error('Error occurred:', error);
        });
       promptedQuestions();

       function departments() {
        const sql = `SELECT * FROM department`;
        db.query(sql, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message })
                return;
            }
            console.table(result);
            promptedQuestions();
        });
    };

    function roles() {
        const sql = `SELECT * FROM role`;
        db.query(sql, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message })
                return;
            }
            console.table(result);
            promptedQuestions();
        });
    };

    function employees() {
        const sql = `SELECT * FROM employee`;
        db.query(sql, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message })
                return;
            }
            console.table(result);
            promptedQuestions();
        });
    };