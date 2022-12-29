var Person = function(){};

Person.prototype.initialize = function(name, age) {
    this.name = name;
    this.age = age;
}

var Teacher = function() {};
Object.setPrototypeOf(Teacher.prototype, Person.prototype);

Teacher.prototype.teach = function(subject) {
  console.log(this.name + " is now teaching " + subject);
}

let teacherObj = new Teacher();
teacherObj.initialize("Chiranjib", 28);
teacherObj.teach("DSA");