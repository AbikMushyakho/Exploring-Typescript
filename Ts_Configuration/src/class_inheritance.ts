abstract class Department {

static fiscal_year =2020;
  d_name: string;
  protected role: string[] = [];

  //    private department_name:string[]=[];
  constructor(protected id: number, name: string, role: string[]) {
    this.id = id;
    this.d_name = name;
    this.role = role;
  }

 static createUser(name:string){
    return {name:name};
  }

abstract describe(this:Department):void;


  AddRole(role_name: string) {
    this.role.push(role_name);
  }
  DisplayAllRoles() {
    console.log(this.role.length);
    console.log(this.role);
  }

  RoleCopy(this: Department) {
    console.log("Role is:" + this.role);
  }
}
// const department = new Department(1, "Main D1", []);
// department.AddRole("Admin");
// department.DisplayAllRoles();
// department.RoleCopy();
// department.describe();
// console.log(department);

const newUser = Department.createUser('Abik');
console.log(newUser,Department.fiscal_year);
// shorthand
console.log(Department.createUser('Deepak'));


// Inheretance
class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance:AccountingDepartment;
  get MostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No any report found");
  }


  set MostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass valid value");
    }
    this.addReport(value);
  }

  // salary:number;
 private constructor(private salary: number, private report: string[]) {
    super(2, "D2", []);
    this.lastReport = report[0];
    // this.salary=salary;
  }

  static getInstance(){
    if(this.instance){
      return this.instance;
    }
    this.instance = new AccountingDepartment(2000,[]);
    return this.instance;
  }
describe() {
  console.log(`Accounting Departmanet (${this.id}) : (${this.d_name})`)
}
  addReport(text: string) {
    this.report.push(text);
    this.lastReport = text;
  }

  // Overriding if the method is protected
  // =>protected is like private but is it provides features in child class.
  // like the role is protected in base class and we can push role from the child class
  // note: if it was private then it will only accessible in base class not here
  addAccountRole(role: string) {
    if (role == "Abik") {
      return;
    } else {
      this.role.push(role);
    }
  }
}
// const accountingDepartment = new AccountingDepartment(10000, []);
const accountingDepartment = AccountingDepartment.getInstance();
accountingDepartment.addReport("Salary report:");
// setter
accountingDepartment.MostRecentReport = "Student fee report";
// getter
console.log(accountingDepartment.MostRecentReport);

// accountingDepartment.addAccountRole('Abik');
// accountingDepartment.addAccountRole('Manageer');
// accountingDepartment.addAccountRole('CanteenStaff');
// accountingDepartment.DisplayAllRoles();
// accountingDepartment.AddRole("Head");
accountingDepartment.describe();
// console.log(accountingDepartment)

class ItDepartment extends Department {
  private work: string[] = [];
  constructor(faculty: string, work: string[]) {
    super(3, "D-IT", []);
  }
  describe(){
    console.log(`It Department (${this.id}) : ${this.d_name}`);
  }
  AddWork(work: string) {
    this.work.push(work);
  }

}

const itDepart = new ItDepartment("Strong", []);
itDepart.AddRole("Chief");
itDepart.AddWork("Handling network");
itDepart.AddWork("Handling bugs");
console.log(itDepart);
itDepart.describe();