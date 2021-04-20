class Student {
  static listOfStudents = [];
  static id = 1;

  static setSelfPaymentForStudentById = (id) => {
    for (let i = 0; i < Student.listOfStudents.length; i++) {
      if (Student.listOfStudents[i].id === id) {
        Student.listOfStudents[i].isSelfPayment = true;
      }
    }
  };

  static getSelfPaymentStudents = () => {
    const notSelfPaymentStudents = [];

    for (let i = 0; i < Student.listOfStudents.length; i++) {
      if (!Student.listOfStudents[i].isSelfPayment) {
        notSelfPaymentStudents.push(Student.listOfStudents[i]);
      }
    }

    return notSelfPaymentStudents;
  };

  constructor(enrollee) {
    this.id = Student.id++;
    this.name = enrollee.name;
    this.surname = enrollee.surname;
    this.ratingPoint = enrollee.ratingPoint;
    this.schoolPoint = enrollee.schoolPoint;
    this.isSelfPayment = true;

    if (enrollee.ratingPoint >= 800) {
      this.isSelfPayment = false;
    }

    if (!this.isSelfPayment) {
      let notSelfPaymentStudents = Student.getSelfPaymentStudents();

      if (notSelfPaymentStudents.length >= 5) {
        let badStudent = notSelfPaymentStudents[0];

        // find badStudent
        for (let i = 1; i < notSelfPaymentStudents.length; i++) {
          if (badStudent.ratingPoint >= notSelfPaymentStudents[i].ratingPoint) {
            badStudent = notSelfPaymentStudents[i];
          }
        }

        // set selfPayment for badStudents
        if (badStudent.ratingPoint < this.ratingPoint) {
          Student.setSelfPaymentForStudentById(badStudent.id);
        }
      }

      // reset notSelfPaymentStudents array
      notSelfPaymentStudents = Student.getSelfPaymentStudents();

      if (notSelfPaymentStudents.length >= 5) {
        let badStudent1 = notSelfPaymentStudents[0];
        let badStudent2 = null;

        // find two bad students
        for (let i = 1; i < notSelfPaymentStudents.length; i++) {
          if (badStudent1.ratingPoint > notSelfPaymentStudents[i].ratingPoint) {
            badStudent1 = notSelfPaymentStudents[i];
          }

          if (
            badStudent1.ratingPoint === notSelfPaymentStudents[i].ratingPoint
          ) {
            badStudent2 = notSelfPaymentStudents[i];
          }
        }

        if (badStudent2) {
          //  set self payment for badStudent
          if (badStudent1.schoolPoint > badStudent2.schoolPoint) {
            Student.setSelfPaymentForStudentById(badStudent2.id);
          }
        }
      }
    }

    Student.listOfStudents[Student.listOfStudents.length] = this;
  }
}

for (let enrollee of studentArr) {
  new Student(enrollee);
}

console.log(Student.listOfStudents);

//Task 2

class CustomString {
  reverse(string) {
    let result = "";
    for (let i = string.length; i !== 0; i--) {
      result += string[i - 1];
    }
    return result;
  }

  ucFirst(string) {
    let result = "";
    let firstUpperLetter = string[0].toUpperCase();
    let restString = "";

    for (let i = 1; i < string.length; i++) {
      restString += string[i];
    }
    result = firstUpperLetter + restString;

    return result;
  }
  ucWords(string) {
    let result = "";
    let tempWord = "";
    let wordsArr = [];
    for (let i = 0; i < string.length; i++) {
      tempWord += string[i];

      if (string[i] === " " || i === string.length - 1) {
        wordsArr.push(tempWord);
        tempWord = "";
      }
    }
    for (let i = 0; i < wordsArr.length; i++) {
      result += this.ucFirst(wordsArr[i]);
    }
    return result;
  }
}

const myString = new CustomString();
console.log(myString.ucWords("ccscsd wssdad efsfewfwfewf efwfwefwfew "));

//Task 3

const stringToArrayBySeparrator = (string, separator) => {
  let tempWord = "";
  let wordsArr = [];
  for (let i = 0; i < string.length; i++) {
    tempWord += string[i];
    if (string[i] === separator || i === string.length - 1) {
      wordsArr.push(tempWord);
      tempWord = "";
    }
  }
  return wordsArr;
};

class Validator {
  checkIsEmail(string) {
    let check = "@";
    for (let i = 0; i < string.length; i++) {
      if (string[i] == check) {
        return true;
      }
    }
    return false;
  }
  checkIsDomain(string) {
    const helpMethod = stringToArrayBySeparrator(string, "@");
    if (helpMethod[1] === "google.com") {
      return true;
    }
  }

  checkIsDate(string) {
    const helpDateMethod = stringToArrayBySeparrator(string, ".");
    if (
      helpDateMethod[0] <= 31 &&
      helpDateMethod[0] > 0 &&
      helpDateMethod[1] <= 12 &&
      helpDateMethod[1] > 0
    ) {
      return true;
    }
    return false;
  }
  checkIsPhone(string) {
    const helpTelMethod = stringToArrayBySeparrator(string, " ");
    if (helpTelMethod[0] == "+38 ") {
      return true;
    }
    return false;
  }
}
var validator = new Validator();
console.log(validator.checkIsPhone("+38 (066) 937-99-92"));
