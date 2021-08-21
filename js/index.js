
// memory calculation function 
function memory(value){
    const extra_memoryId =document.getElementById('extra_memory');
    extra_memoryId.innerText=value; 
    const totalId =document.getElementById('add');
    totalId.innerText=parseFloat(calculator())
    total()
    

}

//  storage calculation function 
function storage(value){
    const extra_storageID =document.getElementById('extra_storage');
   extra_storageID.innerText=value;
   const totalId =document.getElementById('add');
   totalId.innerText=parseFloat(calculator());
   total()
  

   
}

// delivery calculation function 
function delivery(value){
    const delivery_chargeID =document.getElementById('delivery_charge');
    delivery_chargeID.innerText=value;
    
    const totalId =document.getElementById('add');
    totalId.innerText=parseFloat(calculator())
    total()
   
  
}


// sumation calculation function 
function calculator (){
    const bestPriceId =document.getElementById('best_price');
    const extraMemoryId =document.getElementById('extra_memory');
    const extraStorageId =document.getElementById('extra_storage');
    const deliveryChargeId =document.getElementById('delivery_charge');



    const bestPrice = parseFloat(bestPriceId.innerText);
    const extraMemory = parseFloat(extraMemoryId.innerText);
    const extraStorage= parseFloat(extraStorageId.innerText);
    const deliveryCharge = parseFloat(deliveryChargeId.innerText);
    const subTotal=bestPrice+extraMemory+extraStorage+deliveryCharge;
    return subTotal;
}

// total calculation function 
function total(){
   const total= document.getElementById('total');
   total.innerText=parseFloat(calculator())
}

// promo Code apply function 

function promoCode(){
   const promoInput=document.getElementById('promoInput');
   const totalId= document.getElementById('total');
   const totalAmount=parseFloat(totalId.innerText)

   if(promoInput.value=='stevekaku'){
    totalId.innerText=totalAmount-(totalAmount*.20);
    promoInput.value=''
   }
}
