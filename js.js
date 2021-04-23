//Task 1
const initCounter = () => {
  let result = 0;
  return (n) => {
    result;
    return (result += n);
  };
};
const counter = initCounter();
console.log(counter(3));
console.log(counter(7));
console.log(counter(2));
console.log(counter(220));

//Task 2

const getArr = () => {
  let arr = [];
  return (obj) => {
    if (obj === undefined) {
      arr.splice(0, arr.length);
    } else {
      arr.push(obj);
    }
    return arr;
  };
};
const getNewArr = getArr();
console.log(getNewArr(3));
console.log(getNewArr());
console.log(getNewArr(5));
console.log(getNewArr(2));
console.log(getNewArr({ name: "vasya" }));

//Task 3

const getTimeLikeABoss = () => {
  let time;
  return () => {
    if (!time) {
      time = new Date().getTime();
    }
    if (new Date().getTime() - time < 1) {
      return "Enabled";
    }
    return (new Date().getTime() - time) / 1000;
  };
};

const getTimeNow = getTimeLikeABoss();

// //Task 4

let time = 5;
const timer = () => {
  if (time === 0) {
    console.log("Time end");
    return;
  }

  const min = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  console.log(`${min}:${seconds}`);
  if (time >= 1) {
    setTimeout(timer, 1000);
    time--;
  }
};
