const textChange=document.querySelector("#change");
const values= ["Converse Nepal","All Stars"];
let counter=0;
setInterval(()=>{
    textChange.textContent=values[counter];
    counter=[counter+1] % values.length;
},1000);