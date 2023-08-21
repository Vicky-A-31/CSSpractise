function ShowSemester(){
    let dept =  document.getElementById('dept').value
    let semester =  Number(document.getElementById('sem').value)

    let Sem1_2017 = document.getElementById('1stsem2017')
    let Sem2_2017 = document.getElementById('2ndsem2017')
    let Sem3_2017 = document.getElementById('3rdsem2017')
    let Sem4_2017 = document.getElementById('4thsem2017')
    let Sem5_2017 = document.getElementById('5thsem2017')
    let Sem6_2017 = document.getElementById('6thsem2017')
    let Sem7_2017 = document.getElementById('7thsem2017')
    let Sem8_2017 = document.getElementById('8thsem2017')

    let inputs = document.getElementsByClassName('inputs')

    const hidearray = [Sem1_2017,Sem2_2017,Sem3_2017,Sem4_2017,Sem5_2017,Sem6_2017,Sem7_2017,Sem8_2017]

    for(let i=0; i<hidearray.length; i++){
        hidearray[i].style.display = 'none'
    }
    for(let i=0; i<inputs.length; i++){
        inputs[i].style.display = "none"
    }


    if((dept === "becse") && (semester == 1)){
        Sem1_2017.style.display = "block"
        for(let i=0; i<inputs.length; i++){
            inputs[i].style.display = "block"
        }
    }
    else if((dept === "becse") && (semester == 2)){
        Sem2_2017.style.display = "block"
        for(let i=0; i<inputs.length; i++){
            inputs[i].style.display = "block"
        }
    }
    else if((dept === "becse") && (semester == 3)){
        Sem3_2017.style.display = "block"
        for(let i=0; i<inputs.length; i++){
            inputs[i].style.display = "block"
        }
    }
    else if((dept === "becse") && (semester == 4)){
        Sem4_2017.style.display = "block"
        for(let i=0; i<inputs.length; i++){
            inputs[i].style.display = "block"
        }
    }
    else if((dept === "becse") && (semester == 5)){
        Sem5_2017.style.display = "block"
        for(let i=0; i<inputs.length; i++){
            inputs[i].style.display = "block"
        }
    }
    else if((dept === "becse") && (semester == 6)){
        Sem6_2017.style.display = "block"
        for(let i=0; i<inputs.length; i++){
            inputs[i].style.display = "block"
        }
    }
    else if((dept === "becse") && (semester == 7)){
        Sem7_2017.style.display = "block"
        for(let i=0; i<inputs.length; i++){
            inputs[i].style.display = "block"
        }
    }
    else if((dept === "becse") && (semester == 8)){
        Sem8_2017.style.display = "block"
        for(let i=0; i<inputs.length; i++){
            inputs[i].style.display = "block"
        }
    }
}

function CalculateGPA(){
    let input = document.getElementsByTagName('input')
    let Sem1_2017 = document.getElementById('1stsem2017')
    let Sem2_2017 = document.getElementById('2ndsem2017')
    let Sem3_2017 = document.getElementById('3rdsem2017')
    let Sem4_2017 = document.getElementById('4thsem2017')
    let Sem5_2017 = document.getElementById('5thsem2017')
    let Sem6_2017 = document.getElementById('6thsem2017')
    let Sem7_2017 = document.getElementById('7thsem2017')
    let Sem8_2017 = document.getElementById('8thsem2017')
    let output = document.getElementsByClassName('inputs')

    let sem1credits = [4,4,3,3,3,4,2,2]
    let sem1creditstotal = 25;
    let sem2credits = [4,4,3,3,3,3,2,2]
    let sem2creditstotal = 24;
    let sem3credits = [4,4,3,3,3,2,2,2,1]
    let sem3creditstotal = 24;
    let sem4credits = [4,3,3,3,3,3,2,2,1]
    let sem4creditstotal = 24;
    let sem5credits = [4,3,3,3,3,3,2,2,2]
    let sem5creditstotal = 25;
    let sem6credits = [3,3,3,4,3,3,2,2,1]
    let sem6creditstotal = 25;
    let sem7credits = [3,3,3,3,3,3,2,2]
    let sem7creditstotal = 22;
    let sem8credits = [3,3,10]
    let sem8creditstotal = 16;
 
    let inputcredits = []

    for(let i=0; i<input.length; i++){
        if(input[i].type = "radio"){
            if(input[i].checked){
                inputcredits.push(Number(input[i].value))
            }
        }
    }

    let totalcredits = []

    if(Sem1_2017.style.display == 'block'){
        if(sem1credits.length !== inputcredits.length){
            alert("Please Fill Completely")
        }
        else{
            for(let i=0; i<sem1credits.length; i++){
                totalcredits.push(sem1credits[i] * inputcredits[i])
            }
            // output display
            let sum = 0; 
            for(let k=0; k<totalcredits.length; k++){
                sum += totalcredits[k]; 
            }
            output[1].innerText = (sum/sem1creditstotal).toPrecision(4)
        }
    }
    else if(Sem2_2017.style.display == 'block'){
        if(sem2credits.length !== inputcredits.length){
            alert("Please Fill Completely !")
        }
        else{
            let count = 0
            for(let i=0; i<sem2credits.length; i++){
                totalcredits.push(sem2credits[i] * inputcredits[i])
            }
            // output display
            let sum = 0; 
            for(let k=0; k<totalcredits.length; k++){
                sum += totalcredits[k]; 
            }
            output[1].innerText = (sum/sem2creditstotal).toPrecision(4)
        }
    }
    else if(Sem3_2017.style.display == 'block'){
        if(sem3credits.length !== inputcredits.length){
            alert("Please Fill Completely")
        }
        else{
            let count = 0
            for(let i=0; i<sem3credits.length; i++){
                totalcredits.push(sem3credits[i] * inputcredits[i])
            }
            // output display
            let sum = 0; 
            for(let k=0; k<totalcredits.length; k++){
                sum += totalcredits[k]; 
            }
            output[1].innerText = (sum/sem3creditstotal).toPrecision(4)
        }
    }
    else if(Sem4_2017.style.display == 'block'){
        if(sem4credits.length !== inputcredits.length){
            alert("Please Fill Completely")
        }
        else{
            let count = 0
            for(let i=0; i<sem4credits.length; i++){
                totalcredits.push(sem4credits[i] * inputcredits[i])
            }
            // output display
            let sum = 0; 
            for(let k=0; k<totalcredits.length; k++){
                sum += totalcredits[k]; 
            }
            output[1].innerText = (sum/sem4creditstotal).toPrecision(4)
        }
    }
    else if(Sem5_2017.style.display == 'block'){
        if(sem5credits.length !== inputcredits.length){
            alert("Please Fill Completely")
        }
        else{
            let count = 0
            for(let i=0; i<sem5credits.length; i++){
                totalcredits.push(sem5credits[i] * inputcredits[i])
            }
            // output display
            let sum = 0; 
            for(let k=0; k<totalcredits.length; k++){
                sum += totalcredits[k]; 
            }
            output[1].innerText = (sum/sem5creditstotal).toPrecision(4)
        }
    }
    else if(Sem6_2017.style.display == 'block'){
        if(sem6credits.length !== inputcredits.length){
            alert("Please Fill Completely")
        }
        else{
            let count = 0
            for(let i=0; i<sem6credits.length; i++){
                totalcredits.push(sem6credits[i] * inputcredits[i])
            }
            // output display
            let sum = 0; 
            for(let k=0; k<totalcredits.length; k++){
                sum += totalcredits[k]; 
            }
            output[1].innerText = (sum/sem6creditstotal).toPrecision(4)
        }
    }
    else if(Sem7_2017.style.display == 'block'){
        if(sem7credits.length !== inputcredits.length){
            alert("Please Fill Completely")
        }
        else{
            let count = 0
            for(let i=0; i<sem7credits.length; i++){
                totalcredits.push(sem7credits[i] * inputcredits[i])
            }
            // output display
            let sum = 0; 
            for(let k=0; k<totalcredits.length; k++){
                sum += totalcredits[k]; 
            }
            output[1].innerText = (sum/sem7creditstotal).toPrecision(4)
        }
    }
    else if(Sem8_2017.style.display == 'block'){
        if(sem8credits.length !== inputcredits.length){
            alert("Please Fill Completely")
        }
        else{
            let count = 0
            for(let i=0; i<sem8credits.length; i++){
                totalcredits.push(sem8credits[i] * inputcredits[i])
            }
            // output display
            let sum = 0; 
            for(let k=0; k<totalcredits.length; k++){
                sum += totalcredits[k]; 
            }
            output[1].innerText = (sum/sem8creditstotal).toPrecision(4)
        }
    }
   
}