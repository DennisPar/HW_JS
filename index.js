//task1
const arr = ["Vasya", "Petya", "Alexey"];

function removeUser(arr, index) {
  arr.splice(index, 1);
  console.log(arr);
}
removeUser(arr, 1);

//task 2
const obj = { name: "Vasya", age: 1 };
const getAllKeys = (obj) => Object.keys(obj);
console.log(getAllKeys(obj));

//task 3
const getAllValues = (obj) => Object.values(obj);
console.log(getAllValues(obj));

const obj1 = {
  id: 3,
  name: "Vasya",
};

const secondObj = {
  id: 4,
  name: "Katya",
};

const arr1 = [
  {
    id: 1,
    name: "Kolya",
  },
  {
    id: 2,
    name: "Petya",
  },
];

//task 4
function insertIntoarr(obj, id) {
  const user = condidateArr.find((condidate, index) => {
    return condidate._id === id;
  });

  if (!user) {
    console.log("user not found");
    return;
  }

  condidateArr.splice(user.index, 0, obj);
}

console.log(arr1);

insertIntoarr(secondObj, "");
console.log(condidateArr);

//task 5
class Condidate {
  constructor(condidate) {
    this.state = this.getState(condidate);
  }

  getState(condidate) {
    return condidate.address.split(",")[2].trim();
  }
}
const condidate = new Condidate(condidateArr[4]);
console.log(condidate);

//task 6
function getCompanyNames() {
  const companyNames = condidateArr
    .map((condidate, index) => {
      return condidate.company;
    })
    .filter((condidate, index) => {
      return condidateArr.indexOf(condidate) !== index;
    });

  console.log([...new Set(companyNames)]);

  return companyNames;
}
console.log(getCompanyNames());

//task 7
function getUserByYear(year) {
  return condidateArr
    .filter((condidate, index, arr) => {
      let date = new Date(condidate.registered);
      let fullYear = date.getFullYear();
      return year === fullYear;
    })
    .map((condidate, index, arr) => condidate._id);
}

console.log(getUserByYear(2015));

//task 8
function getCondidatesByUnreadMsg(message) {
  return condidateArr.filter((condidate, index, arr) => {
    let msg = condidate.greeting.replace(/\D/g, "");
    return message == msg;
  });
}
console.log(getCondidatesByUnreadMsg(9));

//task 9
function getCondidatesByGender(gender) {
  return condidateArr.filter((condidate, index, arr) => {
    return condidate.gender === gender;
  });
}
getCondidatesByGender("male");
