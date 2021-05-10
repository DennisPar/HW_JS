// 7 hw

//task 1
const searchCandidatesByPhoneNumber = (phone) => {
  const validPhone = phone.toString().replace(/\D/g, "");
  return condidateArr.filter((condidate, index, arr) => {
    const validCondidatePhone = condidate.phone.replace(/\D/g, "");
    return validCondidatePhone.includes(validPhone);
  });
};
console.log(searchCandidatesByPhoneNumber(525));

//task 2

const getCandidateById = (id) => {
  const foundCondidate = condidateArr.find((condidate, index, arr) => {
    return condidate._id === id;
  });

  if (!foundCondidate) {
    return "Sorry, condidate not found.";
  }

  const date = new Date(foundCondidate.registered);
  const registered =
    date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear();

  return {
    ...foundCondidate,
    registered,
  };
};

console.log(getCandidateById("5e216bc9a6059760578aefa4"));

//task 3
const sortCandidatesArr = (sortBy) => {
  const newArr = JSON.parse(JSON.stringify(condidateArr));
  newArr.forEach((condidate) => {
    condidate.balance = condidate.balance.replace(/\D/g, "");
  });
  if (sortBy === "asc") {
    return newArr.sort((a, b) => (a.balance > b.balance ? 1 : -1));
  } else if (sortBy === "desc") {
    return newArr.sort((a, b) => (a.balance < b.balance ? 1 : -1));
  } else {
    return newArr;
  }
};
console.log(sortCandidatesArr());
