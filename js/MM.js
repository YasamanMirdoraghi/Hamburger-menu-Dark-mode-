
let ffa = true

function _droP(self){

    //zarbdar
  _S  =  self.children
  let m = document.getElementById('mobile')


    //click toggle

    if(ffa){
        _S[1].style.opacity='0'
        _S[0].style.transform = 'rotate(40deg)'
        _S[2].style.transform = 'rotate(-40deg)'
        // document.getElementById('mobile').classList.remove('d-none')
        document.getElementById('mobile').style.transform='translateX(0)'


        ffa=false
    }
    else{
        _S[1].style.opacity='1'
        _S[0].style.transform = 'rotate(0deg)'
        _S[2].style.transform = 'rotate(-0deg)'
        // document.getElementById('mobile').classList.add('d-none')
        document.getElementById('mobile').style.transform='translateX(-100%)'
        ffa=true
    }

}




//shab o roz
   let non=document.getElementById("icon");
   
   non.onclick=function(){
    document.body.classList.toggle("maan")

    if(    document.body.classList.contains("maan")){

        icon.src ="img/3.png"
        
    }
    else{
        icon.src ="img/4.png"

    }
   }
   

