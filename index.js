//Task 1
for (let i = 1; i < 11; i++) {
    
    if (i % 3 == 0) 
        console.log('FizBuz')
    
    else if (i % 2 == 0)
        console.log('Fiz')

    else if (i % 2 !== 0)
        console.log('Buz')
    
}
   
 //Task 2
function factorial(n, result){
    result = result || 1;
    if(!n){
        return result;
    }else{
        return factorial(n-1, result*n);
    }
}
const factorialResult = factorial(10);
console.log(factorialResult)


//Task 3

// const sheetsInReamPaper = 500;
// const consumptionPerWeek = 1200;
// const weeksAmount = 8;
// const roughResult = ((consumptionPerWeek / sheetsInReamPaper) * weeksAmount)
// const roundedResult = Math.ceil(roughResult)
// console.log(roundedResult)


const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;
const allConsumption = (consumptionPerWeek * weeksAmount);
const roughResult = (allConsumption % sheetsInReamPaper);
const roundedResult = (((allConsumption - roughResult) / sheetsInReamPaper) + 1);
console.log(roundedResult)


// Task 4

// function findFlat(roomNumber) {
//     const roomsOnFloor = 3;
//     const floors = 9;
//     const findEntrance = Math.ceil(roomNumber / (floors * roomsOnFloor));
//     const findFloor = Math.ceil((roomNumber % (floors * roomsOnFloor)) / roomsOnFloor);
//     return 'подьезд' + ' ' + findEntrance + ' ' + 'Этаж' + ' ' + findFloor
// }
// const result = findFlat(357)
// console.log(result)

const ROOMS_ON_FLOOF = 3;
const FLOORS = 9;

function findFlanAndEntrance(roomNumber) {
    const roomCount = (ROOMS_ON_FLOOF * FLOORS);
    const entanceFindInProgress = (roomNumber % roomCount);
    const entrance = (((roomNumber - entanceFindInProgress) / roomCount) + 1);
    const flat = findFlat(entanceFindInProgress)
    return {entrance, flat}
}

function findFlat(entranceFindInProgress) {
    if ((entranceFindInProgress % ROOMS_ON_FLOOF) === 0) {
        return (entranceFindInProgress / ROOMS_ON_FLOOF);
    } else {
        return (((entranceFindInProgress - (entranceFindInProgress % ROOMS_ON_FLOOF)) / ROOMS_ON_FLOOF) + 1);
    }
}

const {entrance, flat} = findFlanAndEntrance(275);
console.log(entrance, flat)


//Task 5

let num = 6;
for (let i = 1; i <= num; i++){
    let str = '';
    for (j = 1; j <= 2 * num - 1; j++) {
        if (j >= num - (i - 1) && j <= num + (i - 1)) {
            str += '#';
        } else {
            str += '-'
        }
    }
        console.log(str)
    }



let n = 8;
for (let i = 1; i <= n; i++){
    let str = '';
    for (j = 1; j <= 2 * n - 1; j++) {
        if (j >= n - (i - 1) && j <= n + (i - 1)) {
            str += '#';
        } else {
            str += '-'
        }
    }
        console.log(str)
    }
    