class Foo {
  value;
  
  constructor(value) {
    this.value = value;
  }
}

var foo1 = new Foo(5);
var foo2 = new Foo(6);
var foo3 = foo1;

// Displays 5
console.log(foo3.value);
// Change value to 7
foo1.value = 7;
// Displays 7
console.log(foo3.value);
// Change foo3 to reference foo2
foo1 = foo2;
// Displays 6
console.log(foo3.value);
Let us extend our students.js file to work with references to shared programmes.
"use strict";

class Programme { 
  // As before
}

class Student {
  // As before
}

// Dictionary of Programmes
var programmes = {
    "Comp": new Programme("001", "Computing"),
    "SoftEng": new Programme("002", "Software Engineering"),
    "Phys" : new Programme("003", "Physics")
};

// An array of students.
var students = [
    new Student("001", "Kevin Chalmers", programmes["SoftEng"]), 
    new Student("002", "Lisa Haskel", programmes["Comp"]), 
    new Student("003", "Arturo Araujo", programmes["Phys"]),
    new Student("004", "Foo Bar", programmes["Comp"])];

// Change the name of Comp programme to Computer Science
programmes["Comp"].name = "Computer Science";

// Rest of code as before.
function addStudent() {
  // Get the value in the student ID textbox.
  var id = document.getElementById("studentID").value;
  // Get the value in the student name textbox.
  var name = document.getElementById("studentName").value;
  // Get the value in the student programme textbox.
  var programme = document.getElementById("studentProgramme").value;
  // Clear the textboxes
  document.getElementById("studentID").value = "";
  document.getElementById("studentName").value = "";
  document.getElementById("studentProgramme").value = "";
  // Create the student object
  // We lookup the programme from the programmes dictionary.
  var student = new Student(id, name, programmes[programme]);
  // Add student to the students array
  students.push(student);
  // Redisplay the table
  printStudents();
}