const Employee = require('./Employee');

class Intern extends Employee{
   constructor(name, emp_id, email, school){
        super(name, emp_id, email);
        this.role = 'Intern';
        this.school = school;      
}};

// const fullinfo2 = new Engineer ('Engineer2', 'bobcoder');
// console.log(fullinfo2);

module.exports = Intern;