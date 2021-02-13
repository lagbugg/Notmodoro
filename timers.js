const trabajoH = document.getElementById("hTrabajo");
const trabajoM =document.getElementById("mTrabajo");
const tDescanso = document.getElementById("Tdescanso");
const boton =document.getElementById("boton");




const fTrabajo = ()=>{
    if (trabajoM.value > 59){
        alert("Los minutos deben ser menores a 60");
        return;
    }
    if (timerTrabajo !=-1){
    pauseTrabajo();
    inicioDescanso();}
    clearTimeout(intervalUpdate);
    let contadorH = parseInt(trabajoH.value);
        if (trabajoH.value == ''){
            contadorH =0;
        }else {
            contadorH = parseInt(trabajoH.value);
        }
    let contadorM = parseInt(trabajoM.value)-1;
        if (trabajoM.value == ''){
            contadorM =59;
            contadorH--;
            
        }else {
            contadorM = parseInt(trabajoM.value)-1;
        }
    
    let horas = document.getElementById("horas");
    let s = document.getElementById("segundos");
    let m = document.getElementById("minutos");
    let contadorS = 59;
    let dganado = 0;
    let mDescanso = 0;
    let secDescanso =0;
    let hDescanso =0;
    let secH =trabajoH.value*3600;
    let secM = trabajoM.value*60;
    let secTotal =secH +secM
    let sec= 0;
    let secTotald = Math.ceil(secTotal/6);
    let sec2 = 0;
    console.log(secTotal,secTotald);
    setProgress2(100);
    setProgress(100);
    
    ceroplus (contadorH,horas);
    ceroplus(contadorM,m);
    
    intervalUpdate = setInterval(
        function(){
            
            
            if (contadorH == 0 && contadorM == 0 && contadorS == 0){
                if (hDescanso <= 0 && mDescanso<=0 && secDescanso <=0)
                {clearTimeout(intervalUpdate);
                
                return
                }
                else{
                    timerTrabajo=0;
                } ;}
            
            if (timerTrabajo==-1){
                
                porc =  Math.floor(((secTotal -sec)/secTotal)*100);
                
                setProgress(porc);    
                sec++;
                

            if (contadorS==0){
                contadorS = 60;
            if (contadorM != 0){
                    contadorM--;
                    dganado++;
                    ceroplus(contadorM,m);
                    if (dganado%5 == 0){
                        mDescanso ++;
                        
                        /* ceroplus(secDescanso,dsec); */
                        if (mDescanso==60){
                            mDescanso =0;
                            
                            hDescanso ++;
                            ceroplus(hDescanso,dh);
                            
                        }
                        ceroplus(mDescanso,dm);
                    }
                    
                } 
                else{
                    contadorH--;
                    ceroplus (contadorH,horas);
                    contadorM = 59;
                    ceroplus(contadorM,m);

                }}
                
            
            
            contadorS--;
            ceroplus(contadorS,s); 
        }
        else{
            
            
            
            
            if ( mDescanso >=0 ) {
            
            if (secDescanso==0){
                  
                mDescanso--;
                secDescanso=59;
                
                
                
                if (mDescanso==0){
                    if (hDescanso>0){
                        hDescanso--;
                        mDescanso=59;
                        ceroplus(hDescanso,dh);
                    }
                    
                }
                ceroplus(mDescanso,dm);
                
                
                
                
            
            }
            
            secDescanso--;
            ceroplus(secDescanso,dsec);
            if (hDescanso <= 0 && mDescanso<=0 && secDescanso <=0){
                
                
                mDescanso = 0;
                secDescanso =0;
                ceroplus(mDescanso,dm);
                ceroplus(secDescanso,dsec);
                pauseTrabajo();
                inicioDescanso();
            }
            let porcd = Math.ceil(((secTotald -sec2)/secTotald )*100);
            if (porcd >=0){
            setProgress2(porcd);
            
            sec2++;}
        }else {
            mDescanso = 0;
            secDescanso =0;
            ceroplus(mDescanso,dm);
            ceroplus(secDescanso,dsec);
            pauseTrabajo();
            inicioDescanso(); 
            
        }}
        
    },10);
        
        
    
        
        
    
    
}


const ceroplus= (contador,tiempo)=>{
    if (contador <10){
            tiempo.innerHTML =`0${contador}`;
        }
    else {
            tiempo.innerHTML = contador;
    }
}
const pauseTrabajo = ()=>{
    
    if(timerTrabajo == -1){
        nameBoton.innerHTML = '▶';
        timerTrabajo = 0;
    }
    else{
        nameBoton.innerHTML = "⏸";
        timerTrabajo = -1;
    }
    
    
}
const inicioDescanso = ()=>{
    
    if(timerDescanso == -1){
        nameBotond.innerHTML = '⏸';
        timerDescanso = 0;
        
    }
    else{
        nameBotond.innerHTML = '▶';
        timerDescanso = -1;
        
    }
}
let timerTrabajo = -1;
let timerDescanso = -1;
let intervalUpdate;

const nameBoton = document.getElementById("botonTrabajo");
const nameBotond = document.getElementById("botonDescanso");
boton.addEventListener("click",fTrabajo);
nameBoton.addEventListener("click",pauseTrabajo);
nameBoton.addEventListener("click",inicioDescanso);
nameBotond.addEventListener("click",inicioDescanso);
nameBotond.addEventListener("click",pauseTrabajo);
let dh = document.getElementById("dhoras");
let dm = document.getElementById("dminutos");
let dsec = document.getElementById("dsegundos");

const circle = document.querySelector(".progress-ring__circle");
const radius = circle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = circumference;
circle.style.strokeDashoffset = circumference;

const setProgress= (percent)=> {
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
};

const circle2 = document.querySelector(".progress-ring__circle2");
const radius2 = circle2.r.baseVal.value;
const circumference2 = radius2 * 2 * Math.PI;

circle2.style.strokeDasharray = circumference2;
circle2.style.strokeDashoffset = circumference2;

const setProgress2= (percent)=> {
  const offset2 = circumference2 - (percent / 100) * circumference2;
  circle2.style.strokeDashoffset = offset2;
};
const darkFuction=()=>{
    let element = document.body;
    element.classList.toggle("dark-mode");
    let hDark = document.getElementById("hTrabajo");
    hDark.classList.toggle("minutosDark");
    let minDark = document.getElementById("mTrabajo");
    minDark.classList.toggle("minutosDark"); 
    let inicioBoton = document.getElementById("boton");
    inicioBoton.classList.toggle("botonDark");
    let btnTrabajo = document.getElementById("botonTrabajo");
    btnTrabajo.classList.toggle("bottontDark");
    let btnDescanso = document.getElementById("botonDescanso");
    btnDescanso.classList.toggle("bottontDark");
     
}
const darkBotton = document.getElementById("darkBotton");
darkBotton.addEventListener("click",darkFuction)