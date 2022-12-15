
// for(let i = 1; i<= 4; i++){
 
//   arrN[i - 1] = Math.floor(result/Math.pow(10, num.toString().length - i));
//   result = result - arrN[i-1]* Math.pow(10, num.toString().length - i);
//   console.log(arrN[i - 1]);

// }


{/* <p class="p_text"> </p>
<input class="inp_text" type="text">
<button class="btn_click" type="button">click</button> */}
let btn_click = document.querySelector('.btn_click');

let p_text = document.querySelector('.p_text');


btn_click.addEventListener('click', () => {
  let num = document.querySelector('.inp_text').value;
  
  p_text.innerHTML = changeNumToStr(num);
})



function changeNumToStr(num) {
  

num = Math.abs(Number(num));

// let num = 2077;

let arrN = [];
const LIMIT = 4;
let result = num;

for(let i = 1; i<= 4; i++){
 
  arrN[i - 1] = Math.floor(result / Math.pow(10, LIMIT - i));
  result = result - arrN[i-1]* Math.pow(10, LIMIT - i);
  // console.log(arrN[i - 1]);
}
// console.log(arrN);

function num1 (num) {
  let n4;
  switch(num) {
  case 0:
    n4 = "zero";
    break;
  case 1:
    n4 = "un";
    break;
  case 2:
    n4 = "deux";
    break;
  case 3:
    n4 = "trois";
    break;
  case 4:
    n4 = "quatre";
    break;
  case 5:
    n4 = "cinq";
    break;
  case 6:
    n4 = "six";
    break;
  case 7:
    n4 = "sept";
    break;
  case 8:
    n4 = "huit";
    break;
  case 9:
    n4 = "neuf";
    break;
  default:
   console.log("faute"); 
 }

 return n4;
}

function num1019 (num) {
  let n4;
  switch(num) {
  case 0:
    n4 = "dix"
    break;
  case 1:
    n4 = "onze";
    break;
  case 2:
    n4 = "douze";
    break;
  case 3:
    n4 = "treize";
    break;
  case 4:
    n4 = "quatorze";
    break;
  case 5:
    n4 = "quinze";
    break;
  case 6:
    n4 = "seize";
    break;
  case 7:
    n4 = "dix-sept";
    break;
  case 8:
    n4 = "dix-huit";
    break;
  case 9:
    n4 = "dix-neuf";
    break;

   default:
   console.log("faute"); 
 }

 return n4;
}

function num26 (num) {
  let n4;
  switch(num) {
  // case 0:
  //   n4 = "";
  //   break;
  case 2:
    n4 = "vingt"
    break;
  case 3:
    n4 = "trente";
    break;
  case 4:
    n4 = "quarante";
    break;
  case 5:
    n4 = "cinquante";
    break;
  case 6:
  case 7:
    n4 = "soixante";
    break;
  case 8:
  case 9:
    n4 = "quatre-vingt";
    break;
    default:
   console.log("faute"); 
 }

 return n4;
}

let n1 = "";
let n2 = "" ;
let n3 = "";
let n4 = "";

if (arrN[0] > 0) {
  n1 = num1(arrN[0]) + " mille";

}

if (arrN[1] > 0) {
  n2 = num1(arrN[1]) + " cents";
}





if (arrN[2] === 0) {
  n3 = "";
  if (arrN[3] > 0) {
    n4 = num1(arrN[3]);
  }
}else if(arrN[2] === 1) {
  n4 = num1019(arrN[3]);
  n3 = "";
}else if(arrN[2] >= 2 && arrN[2] <= 6) {
  n3 = num26(arrN[2]);
  if (arrN[3] > 0) {
    n4 = num1(arrN[3]);
  }
}else if(arrN[2] === 7 ) {
  n3 = num26(arrN[2]);
  n4 = num1019(arrN[3]);
}else if(arrN[2] === 8 ) {
  n3 = num26(arrN[2]);
  if (arrN[3] > 0) {
    n4 = num1(arrN[3]);
  }
}else if(arrN[2] === 9 ) {
  n3 = num26(arrN[2]);
  n4 = num1019(arrN[3]);
}

if (arrN[0] === 0 && arrN[1] === 0 && arrN[2] === 0) {
  n4 = num1(arrN[3]);
}

console.log(`${n1} ${n2} ${n3} ${n4}`);
return `${n1} ${n2} ${n3} ${n4}`;


//  console.log( n1+" " + n2+" " +n3+" " +n4);

}

function writeNum(num) {
  for (let index = 0; index < num; index++) {
    changeNumToStr(index);
    
  }
}

writeNum(2000);

