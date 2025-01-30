let inp = document.querySelector('input');
let buttons = document.querySelectorAll('.rows div');

let calci = "";
buttons.forEach(btn => {
    btn.addEventListener('click',function () {
      
        if( btn.innerHTML=='C'){
            calci="";
        }
        else if( btn.innerHTML=='←'){
            calci=calci.slice(0,-1);
        }
        else if(btn.innerHTML=='='){
            try{
            calci=eval(calci);}
            catch(error){
                inp.value='Error';
                calci="";
                return;
            }
        }
        else{
            calci+=btn.innerHTML;
        }
        inp.value=calci;
    });
});