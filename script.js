// let display = document.getElementById('result');
// let subTn = document.getElementById('submit');



// let a = "ade";
// let z = 7;
// let y = 2 * a ** 2 - 3 * z;
// console.log(a);

//     if(a == "tega" ||( a == "tega" && a !== 3) ){
//     // if codition is truehgb  
//     console.log(`his name is ${a} and he has ${z} naira. ` )
//     }else{
//         // if condition is false
//         if(a === "john"){
//         console.log ("his teacher's name is john");
//         }else{
//              // if condition is false
//              console.log("nada");
            
//         }
//     }    
        
// && is use to determine an and statment
// ` helps us to join sentences without +
// $[] is use to type varaible in the `
// || is used to determine an or statement
// javascript is like the variable and operator block platlette

// to make the console record the operation selected using the event listiner

// let selectForm = document.getElementById('operation')
// selectVal = selectForm.value;

// selectForm.addEventListener('change',(event)=>{
//     selectVal = selectForm.value;
//     console.log(selectVal);
//     event.preventDefault()
// })


// subTn.addEventListener('click', (event)=>{
//     let inp1 = parseInt(document.getElementById('value1').value);
//     let inp2 = parseInt(document.getElementById('value2').value);

//     switch(selectVal){
//         case 'Addition' :
//             display.innerText = inp1 + inp2;
//             break;
//         case 'Subtraction':
//             display.innerText = inp1 - inp2;
//             break;
//         case 'Division':
//                 display.innerText = inp1 / inp2;
//                 break;
//         case 'Multiplication':
//                 display.innerText = inp1 * inp2;
//     }
//     event.preventDefault

// });


    // if(selectVal === "Addition"){
        // let sum = inp1+inp2;
        // display.innerText = sum;
        // console.log(sum);
    // }   
    // else{
        // if(selectVal === "Subtraction"){
        // let subtract = inp1 - inp2;
        // display.innerText = subtract;
        // console.log(subtract);
        
        // }else{
        //     if(selectVal ===  "Division"){
        //         display.innerText = inp1 / inp2;
        //         console.log(inp1 / inp2);
            
        //     }else{
        //         if(selectVal === "Multiplication"){
        //             display.innerText = inp1*inp2;
        //             console.log(inp1*inp2);

        //         }else{

        //            
        //     }
        //  }}}
            
    
      



    //  event.preventDefault


// let arr = ['ade', 'magret', 'tega', false, 2, 'cafon'];
// count down

// for(let x = 0;  x < arr.length; x++){
//     console.log(arr[x])
 
// }   

// let tega = {
//     complexion: "very very fair",
//     stateOfOrigin: "Osun",
//     stateOfbirth: "Kaduna",
//     heigth: "9.5ft",
//     languages: ["Yoruba", "English",],
//     siblings: ["honour", "tosin", "praise", {sister:"jezreel"}],
//     age: 13
// }
// console.log(tega.complexion);
// console.log(tega.siblings[3].sister);
// console.log(tega.languages[1]);

// function sayWord (word1,word2){
//     console.log(`${word1} ${word2}`)
// }
// sayWord("my name is tega ", "and I'm in school now")

// function sum(num1, num2, num3, num4  ){
//     return num1 + num2 + num3 + num4
// }

// let ans = sum(23, 4, 3, 2)
// console.log(ans)

// function caller(name){
//     return {
        // name: name
    // }
    
    
// }
// let boy = {
//     name
// }
// boy = caller('fred')
// console.log(boy)

// get the elements from html
let button  =  document.getElementById('draw');
let table = document.createElement('table');
let tr = document.createElement('tr');
let tableplace = document.getElementById('tableDiv');

// add an  event listener to button to create a table
button.addEventListener('click', ()=>{
    let  rows = document.getElementById('row').value;
    let  columns = document.getElementById('column').value;
    // creates the rows
    for(let i=0; i<rows; i++){
        let tr = document.createElement('tr');
        // create the columns
        for(let i=0; i<columns; i++){
            let td = document.createElement('td');
            
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    tableplace.appendChild(table);

    // get tds from html
    let alltds = document.getElementsByTagName('td');
    console.log(alltds)

    

   for(i=0; i<alltds.length; i++){
    //    reset td if clicked more than once
       console.log(alltds[i])
       countClick = 0
       let color = document.getElementById('colour')
       alltds[i].addEventListener('click',(event)=>{
           if(event.target.style.backgroundColor){
               console.log('i entered if command')
                event.target.style.backgroundColor = '';
                // countClick = 0;
           }else{
               console.log('i entered else command')
            countClick++
           console.log(event.target);
           console.log(color.value);
           event.target.style.backgroundColor = color.value;
           }
           
       })

    //    alltds[i].addEventListener('contextmenu', (event)=>{
    //        event.preventDefault();
    //        console.log(event.target)
    //        event.target.style.backgroundColor = "";
    //    })

   } 

});
//  set eventlistener to reset the grid
let button2 = document.getElementById('reset')
let alltds = document.getElementsByTagName('td');
// reseting of the grid
button2.addEventListener('click', (event)=>{
    for(i=0; i<alltds.length; i++){
        alltds[i].style.backgroundColor = "";
    } 


});

// button2.addEventListener('contextmenu', ()=>{
//     tableplace.removeChild(table)
//     event.preventDefault()
// });




