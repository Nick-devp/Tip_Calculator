let reset=document.getElementById("reset");
let calculate=document.getElementById("calculate");

let beforeTip=document.getElementById("beforeTip");
let percentage=document.getElementById("percentage");

let tipAmount=document.getElementById("tipAmount")
let totalAmount= document.getElementById("totalAmount");

function resetAllVal(){
    beforeTip.value="";
    percentage.value="";
    tipAmount.textContent="";
    totalAmount.textContent="";
}
function calculateVal(){
    if(beforeTip.value===""||percentage.value===""){
        alert("Enter the Values!")
    }
    let billValue=parseInt(beforeTip.value);
    let valueOfPercentage=parseInt(percentage.value);
    let divisor=valueOfPercentage/100;
    let tipTotal=billValue*(divisor);
    tipAmount.textContent=tipTotal;
    totalAmount.textContent=tipTotal+billValue;
}





calculate.addEventListener("click",calculateVal)
reset.addEventListener("click",resetAllVal)