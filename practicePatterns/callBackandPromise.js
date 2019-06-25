function shouldGoFirst(callBack) {
    setTimeout(() => {
      console.log("I should always go first");
      callBack();
    }, 1000);
  }
  
  function shouldGoSecond() {
    console.log("I should always go second");
  }
  
  //shouldGoFirst(shouldGoSecond);

  function sumUpNumbers(num1, num2, cb) {
    let summedValue;
    setTimeout(() => {
      summedValue = num1 + num2;
      cb(summedValue);
    }, 1000)
  }
  
  function logSummedValue(val) {
    console.log(`The summed total is: ${val}`);
  }

 // sumUpNumbers(1,1, logSummedValue);

 // Callback function
function sayWhenDone(loopCount) {
    console.log(`Done! :D. Capitalized ${loopCount} names`);
  }
  
  // Parent function
  function looper(arr, cb) {
    let i = 0;
    for(i ; i < arr.length ; i += 1) {
      const name = arr[i];
      const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
      arr[i] = capitalizedName;
    }
    cb(i);
  }
  
  const myNames = ["chris", "russell", "toby", "angela"];

  //looper(myNames, sayWhenDone);

  function anotherLogger(num1, num2, somethingElse) {
    const squaredAndSummedNums = (num1 * num1) + (num2 * num2);
    console.log(squaredAndSummedNums);
    if (somethingElse) {
      somethingElse(squaredAndSummedNums);
    }
  }
  
//   anotherLogger(10, 50, function(p) {
//     console.log(`Squared and summed = ${p}`);
//   });

const testPromise = new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      reject("promise no good! Rejected");
    }
    setTimeout(() => {
      resolve("promise OK!");
    }, 1000);
  });
  
//   testPromise.then((resolveMessage) => {
//     console.log(`Looks like: ${resolveMessage}`);
//   }).then(() => {
//     console.log("I should run after the promise is resolved");
//   }).catch((rejectMessage) => {
//     console.log(`Error: ${rejectMessage}`);
//   });

function numAdder(n1, n2) {
    return new Promise((resolve, reject) => {
      const addedNums = n1 + n2;
      setTimeout(() => {
        resolve(addedNums);
      }, 500);
    });
  }
  
  function numSquarer(num) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(num * num);
      }, 800);
    });
  }
  
//   numAdder(20, 20)
//     .then(data => numSquarer(data))
//     .then(moreData => console.log(moreData))
//     .catch(err => console.log(err));

function alwaysResolves() {
    return Promise.resolve("I love resolving :D");
  }
  
  //alwaysResolves().then(data => console.log(data))

//   const prom = Promise.resolve([10, 20, 30]);
// prom
//   .then(nums => nums.map(num => num * 10))
//   .then(transformedNums => console.log(transformedNums));

// const anotherProm = Promise.resolve({text: "resolved :D"});
// anotherProm.then(data => console.log(data.text))


function numCruncher1(num, cb) {
    const newNum = num * num;
    cb(newNum);
  }
  
  function numCruncher2(num, cb) {
    const anotherNewNum = num / 100;
    cb(anotherNewNum);
  }
  
  function totalSum(a, b, cb) {
    cb(a + b);
  }
  

function crunchNumbers(a, b, cb1, cb2, cb3) {
    cb1(a, function(x) {
      cb2(b, function(y) {
        cb3(x, y, function(result) {
          console.log(result);
        });
      });
    });
  }
  
 crunchNumbers(5, 10, numCruncher1, numCruncher2, totalSum);