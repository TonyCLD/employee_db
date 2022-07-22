class Employee {
    constructor(name, emp_id, email){
        this.name = name;
        this.emp_id = emp_id;
        this.email = email;
        this.role = 'Employee';
        console.log(name, emp_id, email);
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.emp_id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return 'Employee';
    }
}

module.exports = Employee;