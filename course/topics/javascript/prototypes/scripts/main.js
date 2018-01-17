/*a) Write a constructor function called Person and that has the following arguments:

first-name          //string
last-name           //string
age                 //number
gender              //string
interests           //array
*/

function Person(firstName, lastName, age, gender, interests) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.interests = interests;

}

//b) Write the following three methods for Person.

Person.prototype.greeting = function () {
    return 'Hi! I\'m ' + this.firstName;
}

Person.prototype.farewell = function () {
    return this.firstName + ' has left the building. Bye for now!';
}

Person.prototype.bio = function () {

    if (this.gender == 'Female' || this.gender == 'F') {
        return this.firstName + ' ' + this.lastName + ' is ' + this.age + ' years old. She likes ' + this.interests
    } else if (this.gender == 'Male' || this.gender == 'M') {
        return this.firstName + ' ' + this.lastName + ' is ' + this.age + ' years old. He likes ' + this.interests
    }

}
var a = new Person("robert","vera",32,"M",["sport","read","nature","cinema"])

/*STUDENT

a) Write a constructor function called Student that inherit from Person and that has the following arguments:

first-name          //string
last-name           //string
age                 //number
gender              //string
interests           //array

b) The Student must inherit all methods from Person and overwrite greeting method to change its behavior to print:

greeting() //returns: Yo! I'm  <first-name>.
*/

function Student(firstName, lastName, age, gender, interests) {
    Person.call(this, firstName, lastName, age, gender, interests);
}
Student.prototype = new Person();

Student.prototype.greeting = function() {
    return "Yo! I'm " +  this.firstName;
}

var b = new Student("jane","doe",66,"Female",["javascript","react","java","php"])


/*### Teacher

a) Write a constructor function called Teacher that inherit from Person and that has the following arguments:

```
first-name          //string
last-name           //string
age                 //number
gender              //string
interests           //array
subject             //string
```

b) The Teacher must inherit all methods from Person and overwrite greeting method to change its behavior to print:

```
greeting() //returns: Hello. My name is <Mr./Mrs> <last-name> and I teach <subject>.
```
*/

function Teacher (firstName,lastName,age,gender,interests,subject) {
    Person.call(this,firstName,lastName,age,gender,interests);
    this.subject = subject;
}

Teacher.prototype = new Person();

Teacher.prototype.greeting = function () {
    return 'Hello. My name is ' + this.firstName + ' ' + this.lastName + ' and I teach ' + this.subject;
}

var c = new Teacher('ZeBing','Lu',31,"Female",['books','cinema','traveling','swimming'],'chinese');