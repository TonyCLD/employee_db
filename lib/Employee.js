class Employee {
    constructor(name, emp_id, email){
        this.name = name;
        this.emp_id = emp_id;
        this.email = email;
        this.role = 'Employee';
        // console.log(name, emp_id, email);
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
};

module.exports = Employee;


// inquirer.prompt(questions).then((data) => {
//         const datacombined1 = data;
//         console.log(datacombined1);
// } );

// }.then(() => ) {const fullinfo2 = new Engineer (datacombined1.name, datacombined1.emp_id, datacombined1.email, datacombined1.role,);
// console.log(fullinfo2);
// const emp_card = new Employee(datacombined1);
// console.log(emp_card);
// const fullinfo = new Employee ('tony', 025845, 'tony@tony.com');
// console.log(fullinfo);

