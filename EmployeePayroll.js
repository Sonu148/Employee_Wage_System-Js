class EmployeePayroll{
    //property 
    id;
    salary;

    //constructor 
    constructor(id,name,salary){
        this.id=id;
        this.name=name;
        this.salary=salary;
    }

    //getter and setter
    get name() {return this._name;}
    set name(name){this._name = name;}

    //method
    toString(){
        return "id = " + this.id + ", name = " + this.name + ", salary = " + this.salary;
    }
}

//object creation
let employeePayroll = new EmployeePayroll(1,"Ria",30000);
console.log(employeePayroll.toString());
employeePayroll.name = "Rakshit";
console.log(employeePayroll.toString()); 