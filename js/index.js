

function memory(value){
    const extra_memoryId =document.getElementById('extra_memory');
    extra_memoryId.innerText=value; 
    const totalId =document.getElementById('add');
    totalId.innerText=parseFloat(calculator())
    console.log(calculator()); 

}


function storage(value){
    const extra_storageID =document.getElementById('extra_storage');
   extra_storageID.innerText=value;
   const totalId =document.getElementById('add');
   totalId.innerText=parseFloat(calculator())
   console.log(calculator()); 

   
}


function delivery(value){
    const delivery_chargeID =document.getElementById('delivery_charge');
    delivery_chargeID.innerText=value;
    
    const totalId =document.getElementById('add');
    totalId.innerText=parseFloat(calculator())
    console.log(calculator()); 
  
}



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

