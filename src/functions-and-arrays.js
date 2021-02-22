// Progression #1: Greatest of the two numbers

function greatestOfTwoNumbers(num1, num2) {
  if (num1 > num2)
    return num1;
  else
    return num2;
}

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findScaryWord(words) {
  if (words.length == 0)
    return null
  let longWord = "";
  let noOfChar = 0;

  for (let word of words) {
    if (word.length > noOfChar) {
      longWord = word;
      noOfChar = longWord.length;
    }
  }
  return longWord;
}

// Progression #3: Net Price
const prices = [200, 120, 100, 108, 135, 162, 25, 170, 80, 110];

function netPrice(prices) {
  if (!prices.length) {
    return 0;
  }
  let sum = 0;
  for (let n of prices) {
    sum += n;
  }
  return sum;
}

const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];

function add(mixedArr) {
  if (!mixedArr.length)
    return 0;
  let sum = 0;
  for (let num of mixedArr) {
    if (typeOf(num) == 'string') {
      sum += num.length;
    } else if (typeOf(num) == 'number' || typeOf(num) == "boolean") {
      sum += num;
    } else {
      throw new Error('Unsupported data type sir or ma\'am')
    }
  }
  return sum;
}

// Progression #4: Calculate the average

function add(mixedArr) {
  var sum = 0;
  if (mixedArr.length == 0) {
    return 0;
  } else {
    for (var i = 0; i < mixedArr.length; i++) {
      if (typeof (mixedArr[i]) == "number") {
        sum += mixedArr[i];
      } else if (typeof (mixedArr[i]) == "string") {
        var l = mixedArr[i].length;
        sum += l;
      } else if (typeof (mixedArr[i]) == "boolean") {
        var l = mixedArr[i] / 1;
        sum += l;
      } else {
        throw 'unsupported data type';
      }
    }
  }
  return sum;
}
// Progression 4.1: Array of numbers
let levels = [22, 16, 9, 10, 7, 14, 11, 9];

function midPointOfLevels(levels) {
  var sum = 0;
  if (levels.length == 0) {
    return null;
  }
  for (var i = 0; i < levels.length; i++) {
    sum += levels[i];
  }
  return sum / levels.length;
}

// Progression 4.2: Array of strings
const items = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt'
];

function averageWordLength(items) {
  if (items.length == 0) {
    return null;
  } else {
    var sum = 0;
    for (var i = 0; i < items.length; i++) {
      sum += items[i].length;
    }
    return sum / (items.length);
  }
}

// Progression #4.3 (Bonus): A generic `avg()` function

function avg(mixedArr) {
  if (mixedArr.length == 0)
    return null;
  else {
    var sum = 0;

    for (var i = 0; i < mixedArr.length; i++) {
      if (typeof (mixedArr[i]) == "number") {
        sum += mixedArr[i];
      } else if (typeof (mixedArr[i]) == "string") {
        var strLength = mixedArr[i].length;
        sum += 1;
      } else if (typeof (mixedArr[i]) == "boolean") {
        var strLength = mixedArr[i] / 1;
        sum += 1;
      } else
        throw "Unsupported data type sir or ma'am";
    }
    var average = (sum / (mixedArr.length)).toFixed(2);
    return average;
  }
}
// Progression #5: Unique arrays
let wordsU = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];

function uniqueArray(wordsU) {
  let unique = [];
  for (let i of wordsU) {
    let index = wordsU.indexOf(i)
    if (unique.indexOf(index) == -1) {
      unique.push(index)
    }
  }
  if (!unique.length) {
    return null;
  }
  let uniqueArr = [];
  for (let i of uniqueArr) {
    uniqueArr.push(arr[i])
  }
  return uniqueArr;
}
// Progression #6: Find elements
const wordsF = [
  'door',
  'window',
  'ceiling',
  'roof',
  'plinth',
  'tiles',
  'ceiling',
  'flooring'
];

function searchElement(wordsF, element) {
  if (!wordsF.length) {
    return null;
  }
  for (let i of wordsF) {
    if (i == element) {
      return true;
    } else {
      return false;
    }
  }
}

// Progression #7: Count repetition
const wordsC = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimesElementRepeated(wordsC, element) {
  if (!wordsC.length) {
    return 0;
  }
  let count = 0;
  for (let i of wordsC) {
    if (i == element) {
      count += 1;
    }
  }
  return count;
}

// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];

function maximumProduct(matrix) {}