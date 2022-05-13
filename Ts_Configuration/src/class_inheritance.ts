class Department{
  id:number;
  
  d_name:string;
 private role:string[]=[];

//    private department_name:string[]=[];
  constructor(id:number,name:string,role:string[]){
   this.id = id;
    this.d_name =name;
    this.role = role;
  }  
  
  
  AddRole(role_name:string){
      this.role.push(role_name);
  }
  DisplayAllRoles(){
      console.log(this.role.length);
      console.log(this.role);
  }

  RoleCopy(this:Department){
      console.log("Role is:" + this.role);
  }
}
const department = new Department(1,"Bibek",[]);
department.AddRole('Admin')
department.DisplayAllRoles();
department.RoleCopy()
console.log(department);




// Inheretance
class AccountingDepartment extends Department{
  // salary:number;
constructor(private salary:number){
  super(2,'Accounting',[]);
  // this.salary=salary;

}
  
}
const accountingDepartment = new AccountingDepartment(10000);
accountingDepartment.AddRole('Head')
console.log(accountingDepartment)

class ItDepartment extends Department{
private work :string[]=[];
  constructor(faculty:string, work:string[]){
      super(3,'IT',[])
  }

  AddWork(work:string){
      this.work.push(work);
  }

}
const itDepart = new ItDepartment('Strong',[]);
itDepart.AddRole('Chief');
itDepart.AddWork('Handling network');
itDepart.AddWork('Handling bugs');
console.log(itDepart)


