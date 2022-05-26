"use strict";
class Department {
    constructor(id, name, role) {
        this.id = id;
        this.role = [];
        this.id = id;
        this.d_name = name;
        this.role = role;
    }
    static createUser(name) {
        return { name: name };
    }
    AddRole(role_name) {
        this.role.push(role_name);
    }
    DisplayAllRoles() {
        console.log(this.role.length);
        console.log(this.role);
    }
    RoleCopy() {
        console.log("Role is:" + this.role);
    }
}
Department.fiscal_year = 2020;
const newUser = Department.createUser('Abik');
console.log(newUser, Department.fiscal_year);
console.log(Department.createUser('Deepak'));
class AccountingDepartment extends Department {
    constructor(salary, report) {
        super(2, "D2", []);
        this.salary = salary;
        this.report = report;
        this.lastReport = report[0];
    }
    get MostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No any report found");
    }
    set MostRecentReport(value) {
        if (!value) {
            throw new Error("Please pass valid value");
        }
        this.addReport(value);
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment(2000, []);
        return this.instance;
    }
    describe() {
        console.log(`Accounting Departmanet (${this.id}) : (${this.d_name})`);
    }
    addReport(text) {
        this.report.push(text);
        this.lastReport = text;
    }
    addAccountRole(role) {
        if (role == "Abik") {
            return;
        }
        else {
            this.role.push(role);
        }
    }
}
const accountingDepartment = AccountingDepartment.getInstance();
accountingDepartment.addReport("Salary report:");
accountingDepartment.MostRecentReport = "Student fee report";
console.log(accountingDepartment.MostRecentReport);
accountingDepartment.describe();
class ItDepartment extends Department {
    constructor(faculty, work) {
        super(3, "D-IT", []);
        this.work = [];
    }
    describe() {
        console.log(`It Department (${this.id}) : ${this.d_name}`);
    }
    AddWork(work) {
        this.work.push(work);
    }
}
const itDepart = new ItDepartment("Strong", []);
itDepart.AddRole("Chief");
itDepart.AddWork("Handling network");
itDepart.AddWork("Handling bugs");
console.log(itDepart);
itDepart.describe();
//# sourceMappingURL=class_inheritance.js.map