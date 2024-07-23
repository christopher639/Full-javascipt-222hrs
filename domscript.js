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