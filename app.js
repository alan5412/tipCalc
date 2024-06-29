const bill = document.querySelector("#bill-input");
const custom = document.querySelector("#custom-input");
const person = document.querySelector("#person-input");
const result1 = document.querySelector(".result-1")
const result2 = document.querySelector(".result-2")
const alerta = document.querySelector(".alert-person");

const reset = document.querySelector("#btn-reset")



let botones = document.querySelectorAll(".tip-container__button");

let billNum = 0;//cuenta total
let personNum=0;//numero de personas
let valorInt=0;//valor de botones
let totalInd=0;//total indivdual
let tipT=0;//pripina total
let tipI=0;//Propi Individual


//function showResult
function mostrarResultado (){
    if (!personNum==0){
        tipT = (billNum * valorInt)/100;
        tipI = (tipT/personNum);
        totalInd= (billNum/personNum)+tipI
        result1.textContent = `$${isNaN(tipI) ? '0.00' : tipI.toFixed(2) }`;
        result2.textContent = `$${isNaN(totalInd) ? '0.00' : totalInd.toFixed(2) }`;
        //console.log(`La propina individual es ${tipI}`)
        //console.log(`El total individual es ${totalInd}`)
        alerta.textContent = ""
        person.classList.remove('bad');
    }else{
        alerta.textContent = "Can't be zero";
        person.classList.add('bad');
    }
}


//function to change button state to select
function selectedButton(botonSeleccionado) {
    // Elimina la clase 'selected' de todos los botones
    botones.forEach(boton => {
        boton.classList.remove('select');
    });
    // Añade la clase 'selected' al botón clicado
    botonSeleccionado.classList.add('select');
}

///select percent

botones.forEach(boton=>{
    
    
    boton.addEventListener('click',()=>{
        const valor = boton.getAttribute('value');
        valorInt = parseFloat(valor);
        //console.log(`El valor de porcentaj es ${valorInt}%`)
        custom.value = ``;
        selectedButton(boton);
        mostrarResultado();

    })    
})

//for the bill
bill.addEventListener('input', ()=>{
    billNum= parseFloat(bill.value);
    mostrarResultado();
})

//for no. of people

person.addEventListener('input', ()=>{
    personNum=parseInt(person.value);
    mostrarResultado();
})

//for custom
custom.addEventListener('input', () =>{
   
    valorInt = parseFloat(custom.value)

    botones.forEach(boton => {
        boton.classList.remove('select');

    });
    mostrarResultado();
})




//reset

reset.addEventListener ('click', () =>{
    bill.value='';
    person.value='';
    billNum=0;
    personNum=0;
    tipI=0;
    tipT=0;
    custom.value = ``;
    result1.textContent = `$0.00`;
    result2.textContent = `$0.00`;

    botones.forEach(boton => {
        boton.classList.remove('select');
    });

})