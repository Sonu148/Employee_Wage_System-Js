class EmployeePayroll{
    //property 
    id;
    salary;
    gender;
    startDate;

    //constructor 
    constructor(...params){
        this.id=params[0];
        this.name= params[1];
        this.salary=params[2];
        this.gender=params[3];
        this.startDate=params[4];
    }

    //getter and setter
    get name() {return this._name;}
    set name(name){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name))
            this._name =name;
        else throw 'Name is Incorrect!';
    }

    //method
    toString(){
        const options = {year:'numeric',month:'long',day:'numeric'};
        const employeeDate = this.startDate === undefined ? "undefined":
        this.startDate.toLocaleDateString("en-US",options);
        return "id = " + this.id + ", name = " + this.name + ", salary = " + this.salary
        + " , " + "gender = " +this.gender+ ", startDate = " + employeeDate;
    }
}

//object creation
let employeePayroll = new EmployeePayroll(1,"Ria",30000);
console.log(employeePayroll.toString());
try{
    employeePayroll.name = "Rakshit";
    console.log(employeePayroll.toString()); 
}
catch(e){
    console.error(e);
}
let newEmployeePayroll = new EmployeePayroll(1,"Raj",40000,"M",new Date());
console.log(newEmployeePayroll.toString());