// Intersection types
interface emp{
    name:string;
    empId:string;
}
interface contract{
    wage:number;
}
interface permanent{
    salary:number;
}
function checkemp(){
    type pemp = emp & permanent;
    let e : pemp = {
        name : "aaa",
        empId:"001",
        salary:12000
    }
    console.log(e);
    
}
checkemp();