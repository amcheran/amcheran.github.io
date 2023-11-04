const bar = document.getElementsByClassName("bar")[0];
const  manu = document.getElementsByClassName("manu")[0];
bar.addEventListener("click" ,() => {
    manu.classList.toggle("active")
}) 




// script for the slide bar
// let prev = document.getElementsByClassName("prev");
// let next = document.getElementById("next");
// let thunbnail = document.getElementsByClassName("thunbnail");
// let section1 = document.getElementsByClassName("section1");

// let backgroundimg = new Array(
//     "pic1.jpg",
//     "pic2.jpg",
//     "pic3.jpeg",
// );
// let i = 0;

// prev.onclick = function(){
//     section1.style.backgroundimage = 'url("pic3.jpeg")';
//     i++;
// }

// var s = document.getElementsByClassName("section1");
// var images = new Array(
//     "pic1.jpg",
//     "pic2.jpg",
//     "pic3.jpeg"
// );
// var len = images.length;
// var = 0;
// function slider(){
//     if(i>len-1){
//         i = 0;
//         section1.src = images[i];
//         i++;
//         setTimeout('slider()',3000);
//     }
// }
// var object = {
//      i : 2,
//     man: function(i) {
//     if(i == 2) {
//       return "yes"
    
//     }
//     else {
//         return "no"
//     }
    
// },
// };

 
//  secondObject = {
//     Array1 : {
//         first : "firsst",
//         second : "second",
//         third : "third",
//         fourth : "fourth",

//     },
//     Array2 : {
//         first : 1,
//         second: 2,
//         third : [2,33,66,99]

//     }, 
    
//  }

//  function  testf(array,prop,value){
//     if (prop == first ) {
//         secondObject[array][prop] = secondObject[array][prop]

//     }

// }

// mymyAray = [];

// for( let i = 2;i < 20; i += 2){
//     mymyAray.push(i);
    
// }


// let  MyArr = [2,4,6,8,10];
// let total = 0;
// for (i = 0; i < MyArr.length; i++){
//     total += MyArr[i];
// };
// let details = [
//    { 
//     Name : "tess",
//     "Number" :66666,
//     "Address": "mutendere",
//    },
//    {
    
//     "Name" : "cheran",
//     "Number" :7777,
//     "Address": "mutendere B section",
   
//    }
// ];
// function userprof (name,info){
//     for(let i = 0; i < details.length; i++){
//         if(details[i].Name == name){
//             return details[i][info]
//         }
//     }
// }
// console.log(userprof("cheran","Address"))
const search = details.find((item) => {
    return item.Name === promp("")
})
console.log(search)

// object oriented programming//
const object101 = {
    number1: 1,
    number3: 2,
    number4: 2,
    run: function(){
       let result = this.number1 + this.number3;
       return console.log(result);

    },
    
};
object101.run();

