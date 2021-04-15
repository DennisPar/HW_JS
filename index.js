

// //Task 1
const citiesAndCountries = {
	'Киев': 'Украина',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нидерланды',
	'Берлин': 'Германия',
	'Париж': 'Франция',
	'Лиссабон': 'Португалия',
	'Вена': 'Австрия',
};

const result = []

for (let key in citiesAndCountries) {
//    console.log(key, '-это', citiesAndCountries[key])
    // result.push(`${key} -это ${citiesAndCountries[key]}`)

    const s = key + ' -это '  + citiesAndCountries[key]
    result.push(s)
}

console.log(result)

// //Task 2
function getArray() {


    const amount = 9;
    const resultArr = []
    let k = 1;
     for (let i = 0; i <amount/3; i++) {
        resultArr[i] = [];              
         for (let j = 0; j <3 ; j++) {
             resultArr[i][j] = k;
             if(amount%3 ==0)
            k++;
        } 
    }
    
    return resultArr
    
}
console.log(getArray())


//Task 3

const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday','Thirday','Friday','Saturday', 'Sunday'],
}

function getNameOfDay(){
    const lang = 'en';
    const day = 3;
    
    const daysLocalized = namesOfDays[lang]
    return daysLocalized[day-1]
}
console.log(getNameOfDay())



// Task 4

const numbersArr = [240, 10, 5, 25,]
 
function find2MinElements (numbersArr) {
    let minElement1 = numbersArr[0],
         minElement2 = numbersArr[1],
         resultArray = new Array();
    
    for ( i = 0; i <= numbersArr.length; i++)
      { 
          if (numbersArr[i] < minElement1) {
              if (minElement2 > numbersArr[i] ) {
                minElement2 = numbersArr[i];
              } else {
                minElement1 = numbersArr[i];                  
              }
          }
      }
      
    resultArray[0] = minElement1;
    resultArray[1] = minElement2;
    
    return minElement1+minElement2
  } 
 
console.log( find2MinElements(numbersArr));




