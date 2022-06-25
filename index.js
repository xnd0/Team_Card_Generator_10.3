// ---------------------------- //
// --------- index.js --------- //
// ---------------------------- //

const inquirer = require("inquirer");
const Manager = require("./Manager");




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
                addEmployees()
            })

    };

    createManager();
};



init();