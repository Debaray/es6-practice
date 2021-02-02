class Student{

    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "kolimunnesa school";
    }
}
const student1 = new Student(1,"Shuvo");
const student2 = new Student(2,"Mahiya");
const student3 = new Student(29,"Bappy");

student1.id = 22;
console.log(student1.id,student2.name,student3);