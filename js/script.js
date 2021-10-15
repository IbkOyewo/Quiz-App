//import { questions } from "./questions.js";

const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = document.querySelector(".buttons .quit");
const continue_btn = document.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");


start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); 
}


exit_btn.onclick = ()=>{
    window.location='login.html';
}


continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); 
    quiz_box.classList.add("activeQuiz"); 
    showQuestions(0); 
    queCounter(1); 
}


let que_count = 0;
let que_numb = 1;
let userScore = 0;     

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");


restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); 
    result_box.classList.remove("activeResult");
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    showQuestions(que_count); 
    queCounter(que_numb); 
    next_btn.classList.remove("show");}


quit_quiz.onclick = ()=>{
    window.location='login.html'; }

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");


next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ 
        que_count++;
        que_numb++; 
        showQuestions(que_count); 
        queCounter(que_numb); 
        next_btn.classList.remove("show"); 
    }else{
        showResult(); 
    }
}


function showQuestions(index){
    const que_text = document.querySelector(".que_text");
    
    let list = questions[index].options;
    //console.log(list,list.length)
    let option_tag = ""
   for(let opt = 0; opt < list.length ;opt++){
       //console.log(list[opt])
       option_tag += '<div class="option"><span>'+ list[opt] +'</span></div>';
       console.log(option_tag)
       let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
       que_text.innerHTML = que_tag; 
       
}
    option_list.innerHTML = option_tag; 
    const option = option_list.querySelectorAll(".option");

    // let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    // + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    // + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    // + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    // que_text.innerHTML = que_tag; 
    // option_list.innerHTML = option_tag2; 
    
    // const option = option_list.querySelectorAll(".option");

    
    for(i=0; i < option.length; i++){
        //console.log(option[i])
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';


function optionSelected(answer){
    let userAns = answer.textContent; 
    console.log(userAns)
    let correcAns = questions[que_count].answer; 
    const allOptions = option_list.children.length; 
    
    if(userAns == correcAns){ 
        userScore += 1; 1
        answer.classList.add("correct"); 
        answer.insertAdjacentHTML("beforeend", tickIconTag); 
        // console.log("Correct Answer");
        // console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); 
        answer.insertAdjacentHTML("beforeend", crossIconTag); 
        // console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){  
                option_list.children[i].setAttribute("class", "option correct"); 
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); 
                // console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); 
    }
    next_btn.classList.add("show"); 
}

function showResult(){
    info_box.classList.remove("activeInfo"); 
    quiz_box.classList.remove("activeQuiz"); 
    result_box.classList.add("activeResult"); 
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){ 
        
        let scoreTag = '<span>and congrats! 🎉, You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  
    }
    else if(userScore > 1){ 
        let scoreTag = '<span>and nice 😎, You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ 
        let scoreTag = '<span>and sorry 😐, You got only <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}


function queCounter(index){
    
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag; 
}