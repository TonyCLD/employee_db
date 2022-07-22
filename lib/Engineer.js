const Employee = require('./Employee');

class Engineer extends Employee{
   constructor(name, emp_id, email, github_id){
        super(name, emp_id, email);
        this.role = role;
        this.github_id = 'https/github/' + github_id;      
}};

// const fullinfo2 = new Engineer ('Engineer2', 'bobcoder');
// console.log(fullinfo2);

module.exports = Engineer;