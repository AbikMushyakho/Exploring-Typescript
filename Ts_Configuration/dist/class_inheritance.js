"use strict";
class Department {
    constructor(id, name, role) {
        this.role = [];
        this.id = id;
        this.d_name = name;
        this.role = role;
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
const department = new Department(1, "Bibek", []);
department.AddRole('Admin');
department.DisplayAllRoles();
department.RoleCopy();
console.log(department);
class AccountingDepartment extends Department {
    constructor(salary) {
        super(2, 'Accounting', []);
        this.salary = salary;
    }
}
const accountingDepartment = new AccountingDepartment(10000);
accountingDepartment.AddRole('Head');
console.log(accountingDepartment);
class ItDepartment extends Department {
    constructor(faculty, work) {
        super(3, 'IT', []);
        this.work = [];
    }
    AddWork(work) {
        this.work.push(work);
    }
}
const itDepart = new ItDepartment('Strong', []);
itDepart.AddRole('Chief');
itDepart.AddWork('Handling network');
itDepart.AddWork('Handling bugs');
console.log(itDepart);
//# sourceMappingURL=class_inheritance.js.map