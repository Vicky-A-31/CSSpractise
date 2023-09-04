function ShowSemester(){
    let dept =  document.getElementById('dept').value
    let semester =  Number(document.getElementById('sem').value)

    let Sem1_2021 = document.getElementById('1stsem2021')
    let Sem2_2021 = document.getElementById('2ndsem2021')
    let Sem3_2021 = document.getElementById('3rdsem2021')
    let Sem4_2021 = document.getElementById('4thsem2021')
    let Sem5_2021 = document.getElementById('5thsem2021')
    let Sem6_2021 = document.getElementById('6thsem2021')
    let Sem7_2021 = document.getElementById('7thsem2021')
    let Sem8_2021 = document.getElementById('8thsem2021')
    let inputSem1 = document.getElementsByClassName('sem1')
    let inputSem2 = document.getElementsByClassName('sem2')
    let inputSem3 = document.getElementsByClassName('sem3')
    let inputSem4 = document.getElementsByClassName('sem4')
    let inputSem5 = document.getElementsByClassName('sem5')
    let inputSem6 = document.getElementsByClassName('sem6')
    let inputSem7 = document.getElementsByClassName('sem7')
    let inputSem8 = document.getElementsByClassName('sem8')

    let inputs = document.getElementsByClassName('inputs')

    const hidearray = [Sem1_2021,Sem2_2021,Sem3_2021,Sem4_2021,Sem5_2021,Sem6_2021,Sem7_2021,Sem8_2021]
    // initially hide all semesters and buttons, result
    for(let i=0; i<hidearray.length; i++){
        hidearray[i].style.display = 'none'
    }
    for(let i=0; i<inputs.length; i++){
        inputs[i].style.display = "none"
    }
    // set result is empty value
    inputs[inputs.length-1].innerText = " "

    // check the condition which semester to view
    if((dept === "becse") && (semester == 1)){
        Sem1_2021.style.display = "block"
        for(let i=0; i<inputs.length; i++){
            inputs[i].style.display = "block"
        }
    }
    else if((dept === "becse") && (semester == 2)){
        Sem2_2021.style.display = "block"
        for(let i=0; i<inputs.length; i++){
            inputs[i].style.display = "block"
        }
    }
    else if((dept === "becse") && (semester == 3)){
        Sem3_2021.style.display = "block"
        for(let i=0; i<inputs.length; i++){
            inputs[i].style.display = "block"
        }
    }
    else if((dept === "becse") && (semester == 4)){
        Sem4_2021.style.display = "block"
        for(let i=0; i<inputs.length; i++){
            inputs[i].style.display = "block"
        }
    }
    else if((dept === "becse") && (semester == 5)){
        Sem5_2021.style.display = "block"
        for(let i=0; i<inputs.length; i++){
            inputs[i].style.display = "block"
        }
    }
    else if((dept === "becse") && (semester == 6)){
        Sem6_2021.style.display = "block"
        for(let i=0; i<inputs.length; i++){
            inputs[i].style.display = "block"
        }
    }
    else if((dept === "becse") && (semester == 7)){
        Sem7_2021.style.display = "block"
        for(let i=0; i<inputs.length; i++){
            inputs[i].style.display = "block"
        }
    }
    else if((dept === "becse") && (semester == 8)){
        Sem8_2021.style.display = "block"
        for(let i=0; i<inputs.length; i++){
            inputs[i].style.display = "block"
        }
    }
    // hide the checked radio buttons
    const radioArray = [inputSem1,inputSem2,inputSem3,inputSem4,inputSem5,inputSem6,inputSem7,inputSem8]
    for(i=0; i<radioArray.length; i++){
        for(j=0; j<radioArray[i].length; j++){
            radioArray[i][j].checked = false
        }
    }
}

function CalculateGPA(){
    let inputSem1 = document.getElementsByClassName('sem1')
    let inputSem2 = document.getElementsByClassName('sem2')
    let inputSem3 = document.getElementsByClassName('sem3')
    let inputSem4 = document.getElementsByClassName('sem4')
    let inputSem5 = document.getElementsByClassName('sem5')
    let inputSem6 = document.getElementsByClassName('sem6')
    let inputSem7 = document.getElementsByClassName('sem7')
    let inputSem8 = document.getElementsByClassName('sem8')

    let Sem1_2021 = document.getElementById('1stsem2021')
    let Sem2_2021 = document.getElementById('2ndsem2021')
    let Sem3_2021 = document.getElementById('3rdsem2021')
    let Sem4_2021 = document.getElementById('4thsem2021')
    let Sem5_2021 = document.getElementById('5thsem2021')
    let Sem6_2021 = document.getElementById('6thsem2021')
    let Sem7_2021 = document.getElementById('7thsem2021')
    let Sem8_2021 = document.getElementById('8thsem2021')
    let output = document.getElementsByClassName('inputs')

    let sem1credits = [3,4,3,3,3,1,2,2,1]
    let sem1creditstotal = 22;
    let sem2credits = [2,4,3,3,4,3,1,2,2,2]
    let sem2creditstotal = 26;
    let sem3credits = [4,4,3,3,3,1.5,1.5,2,1]
    let sem3creditstotal = 23;
    let sem4credits = [3,4,3,4,3,2,1.5,1.5]
    let sem4creditstotal = 22;
    let sem5credits = [4,4,3,3,3,3]
    let sem5creditstotal = 20;
    let sem6credits = [4,4,3,3,3,3,3]
    let sem6creditstotal = 23;
    let sem7credits = [2,3,3,3,3,2]
    let sem7creditstotal = 16;
    let sem8credits = [10]
    let sem8creditstotal = 10;
 
    // function for validate the given grades
    let validate = (semester_credits,givencredits,semcreditstotal) =>{
        let totalcredits = []

        if(semester_credits.length !== (givencredits.length)){
            alert("Please Fill Completely!")
        }
        else{
            for(let i=0; i<semester_credits.length; i++){
                totalcredits.push(semester_credits[i] * givencredits[i])
            }
            // output display
            let sum = 0; 
            for(let k=0; k<totalcredits.length; k++){
                sum += totalcredits[k]; 
            }
            output[1].innerText = (sum/semcreditstotal).toPrecision(4)
        }
    }

    if(Sem1_2021.style.display == 'block'){
        let semester1_credits = []
        for(let i=0; i<inputSem1.length; i++){
            if(inputSem1[i].type = "radio"){
                if(inputSem1[i].checked){
                    semester1_credits.push(Number(inputSem1[i].value))
                }
            }
        }
        // call the validate function
        validate(sem1credits,semester1_credits,sem1creditstotal);
    } 
    else if(Sem2_2021.style.display == 'block'){
        let semester2_credits = []
        for(let i=0; i<inputSem2.length; i++){
            if(inputSem2[i].type = "radio"){
                if(inputSem2[i].checked){
                    semester2_credits.push(Number(inputSem2[i].value))
                }
            }
        }
        // call the validate function
        validate(sem2credits,semester2_credits,sem2creditstotal);
    }
    else if(Sem3_2021.style.display == 'block'){
        let semester3_credits = []
        for(let i=0; i<inputSem3.length; i++){
            if(inputSem3[i].type = "radio"){
                if(inputSem3[i].checked){
                    semester3_credits.push(Number(inputSem3[i].value))
                }
            }
        }
        // call the validate function
        validate(sem3credits,semester3_credits,sem3creditstotal);
    }
    else if(Sem4_2021.style.display == 'block'){
        let semester4_credits = []
        for(let i=0; i<inputSem4.length; i++){
            if(inputSem4[i].type = "radio"){
                if(inputSem4[i].checked){
                    semester4_credits.push(Number(inputSem4[i].value))
                }
            }
        }
        // call the validate function
        validate(sem4credits,semester4_credits,sem4creditstotal);
    }
    else if(Sem5_2021.style.display == 'block'){
        let semester5_credits = []
        for(let i=0; i<inputSem5.length; i++){
            if(inputSem5[i].type = "radio"){
                if(inputSem5[i].checked){
                    semester5_credits.push(Number(inputSem5[i].value))
                }
            }
        }
        // call the validate function
        validate(sem5credits,semester5_credits,sem5creditstotal);
    }
    else if(Sem6_2021.style.display == 'block'){
        let semester6_credits = []
        for(let i=0; i<inputSem6.length; i++){
            if(inputSem6[i].type = "radio"){
                if(inputSem6[i].checked){
                    semester6_credits.push(Number(inputSem6[i].value))
                }
            }
        }
        // call the validate function
        validate(sem6credits,semester6_credits,sem6creditstotal);
    }
    else if(Sem7_2021.style.display == 'block'){
        let semester7_credits = []
        for(let i=0; i<inputSem7.length; i++){
            if(inputSem7[i].type = "radio"){
                if(inputSem7[i].checked){
                    semester7_credits.push(Number(inputSem7[i].value))
                }
            }
        }
        // call the validate function
        validate(sem7credits,semester7_credits,sem7creditstotal);
    } 
    else if(Sem8_2021.style.display == 'block'){
        let semester8_credits = []
        for(let i=0; i<inputSem8.length; i++){
            if(inputSem8[i].type = "radio"){
                if(inputSem8[i].checked){
                    semester8_credits.push(Number(inputSem8[i].value))
                }
            }
        }
        // call the validate function
        validate(sem8credits,semester8_credits,sem8creditstotal);
    }
    
}