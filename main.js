const Question = document.querySelectorAll(".Question_Answer");

Question.forEach((e)=>{
    // console.log(e);
    const btn = e.querySelector(".Question_btn");
    // console.log(btn);
    btn.addEventListener("click",()=>{
        // console.log(item);
        e.classList.toggle("Show_text");
    })
});
