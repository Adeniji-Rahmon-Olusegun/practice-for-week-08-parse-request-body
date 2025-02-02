function firstStep(input) {
  // Your code here
  let output = input.split("&");

  return output;
}

function secondStep(input) {
  // Your code here
  //let strArr = firstStep(input);

  let twoDArr = input.map((ele) => {
    return ele.split("=");
  });

  return twoDArr;
}

function thirdStep(arr2) {
  // Your code here
  for (let i = 0; i < arr2.length; i++) {
    let item = arr2[i];
    for (let j = 0; j < item.length; j++) {
        let subItem = item[j];

        if (subItem.includes("+")) {
            arr2[i][j] = subItem.replace("+", " ");
        }
    }
  }

  return arr2;
}

function fourthStep(arr2) {
  // Your code here
  for (let i = 0; i < arr2.length; i++) {
    let item = arr2[i];
    for (let j = 0; j < item.length; j++) {
        let subItem = item[j];

        if (subItem.includes("%")) {
            arr2[i][j] = decodeURIComponent(subItem);
        }
    }
  }

  return arr2;
}

function fifthStep(arr2) {
  // Your code here

  return Object.fromEntries(arr2);

}

function parseBody(str) {
  // Your code here
  let arr1 = firstStep(str);
  let arr2 = secondStep(arr1);
  let arr3 = thirdStep(arr2);
  let arr4 = fourthStep(arr3);

  let obj = fifthStep(arr4);

  return obj;
}

let str = "name=Fido&color=black&age=1&description=Hello+World%21";

//console.log(secondStep(str));

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};