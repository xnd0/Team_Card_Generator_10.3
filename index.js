// ---------------------------- //
// --------- index.js --------- //
// ---------------------------- //

const inquirer = require("inquirer");




const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


let teamMemberObjArr = []



const init = () => {
    const createManager = () => {
        inquirer.prompt(
            [
                {
                    type: 'input',
                    message: 'What is the ID number?',
                    name: 'id',
                },
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is the managers name?',
                },

                {
                    type: 'input',
                    message: 'What is your preferred method of communication?',
                    name: 'email',
                },
                {
                    type: 'input',
                    message: 'What is the office number?',
                    name: 'officeNumber',
                },
            ])
            .then(answers => {
                const manager = new Manager(
                    answers.id,
                    answers.name,
                    answers.email,
                    answers.officeNumber
                );
                teamMemberObjArr.push(manager)

                console.log(manager.id + "... manager.id");
                console.log(manager.name + "... manager.name");
                console.log(manager.email + "... manager.email");
                console.log(manager.officeNumber + "... manager.officeNumber");
                // console.log(teamMemberObjArr + "... is teamMemberObjArr");

                // addEmployees()

            });
            

    };

    createManager();
};



init();