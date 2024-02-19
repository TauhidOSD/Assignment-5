function hideElementById(elementID){
    const element =document.getElementById(elementID);
    element.classList.add('hidden');
}
function showElementById(elementID){
    const element =document.getElementById(elementID);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementId){
  const element =document.getElementById(elementId);
  element.classList.add('bg-lime-600'); 
}

const allBtn =document.getElementsByClassName("btn");
let count=-1;
let totalSeat=41;
let totalPrice=-550;


for (const btn of allBtn){
  btn.addEventListener("click",function(e){
    
    count =count+1;
    totalSeat=totalSeat-1;
    totalPrice=totalPrice+550;

    
    // setInnerText("ticket-count",count);
    // setInnerText("lost-ticket",totalSeat);
    // setInnerText("total-Price",totalPrice);
   
    document.getElementById("ticket-count").innerText=count;
    document.getElementById("lost-ticket").innerText=totalSeat;
    document.getElementById("total-Price").innerText=totalPrice;
    
  });
  
 }
// function setInnerText(id,value){
//   document.getElementById(id).innerText=value;
// }

const coupon=document.getElementById("coupon");
if(coupon===NEW15){
 discount=coupon-82.;
 console.log(discount);
}else{
  console.log("please give the correct coupon");
}






