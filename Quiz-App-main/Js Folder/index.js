

// getting questions and options from array
function showQuetions(index){
     const que_text = document.querySelector(".que_text");
 
     //creating a new span and div tag for question and option and passing the value using array index
     let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
     let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
     + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
     + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
     + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
     que_text.innerHTML = que_tag; //adding new span tag inside que_tag
     option_list.innerHTML = option_tag; //adding new div tag inside option_tag
     
     const option = option_list.querySelectorAll(".option");
 
     // set onclick attribute to all available options
     for(i=0; i < option.length; i++){
         option[i].setAttribute("onclick", "optionSelected(this)");
     }
 }