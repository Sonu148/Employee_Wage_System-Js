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

    //for id
    get id() {return this._id;}
    set id(id){
        if(id>0) this._id=id;
        else throw "ID Should be positive non-zero number";
    }

    //for name
    get name() {return this._name;}
    set name(name){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name))
            this._name =name;
        else throw 'Name is Incorrect!';
    }

       //for salary
       get salary(){return this._salary;}
       set salary(salary){
        if(salary>0) this._salary = salary;
        else throw "Salary must be positive non Zero number";   
       }

    //for gender
    get gender(){return this._gender;}
    set gender(gender){
        let gendexRegex = RegExp('^[MF]$');
        if(gendexRegex.test(gender)) this._gender = gender;
        else throw "Gender must be M or F";
    }

    //for start date
    get startDate() { return this._startDate; }
    set startDate(startDate) {
        let today = new Date();
        if (startDate <= today) this._startDate = startDate;
        else throw "Start date cannot be in the future!";
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
let employeePayroll = new EmployeePayroll(1,"Ria",30000,"F",new Date());
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

try {
    let employee = new EmployeePayroll(3, "Arya", 25000, "F", new Date());
    employee.salary = 0; 
} catch (e) {
    console.error("Error: " + e);
}