function subscribe(){
    const subText= document.querySelector('.js-sub-btn');
    document.querySelector('.js-sub-btn').addEventListener('click',function(){
    if( subText.innerHTML==='subscribe'){
       subText.innerHTML= "subscribed";
    }
    else {
         subText.innerHTML='subscribe';
    }
   });
  }
  subscribe();//calling the subscription button
  //amazon calculater
  function calculateTotal(){
    let orderTotal =document.querySelector('.js-cost-input');
    
    document.querySelector('.btn-cal').addEventListener('click',()=>{
      console.log(  document.querySelector('.js-cost-input'));
      let cost =Number(orderTotal.value);
      if(cost < 40){
        cost = cost + 10;
        document.querySelector('.total').innerHTML = `Ksh ${cost}`;
      }
      else {
        document.querySelector('.total').innerHTML =  `Ksh ${cost}`;;
      }
    
    })
  }
  calculateTotal();