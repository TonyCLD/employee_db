const Employee = require('./Employee');

class Manager extends Employee{
   constructor(name, emp_id, email, officeNum){
        super(name, emp_id, email);
        this.role = 'Manager';
        this.officeNum = officeNum;      
}};

// const fullinfo2 = new Engineer ('Engineer2', 'bobcoder');
// console.log(fullinfo2);

module.exports = Manager;