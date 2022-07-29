const comment = document.querySelector("#comment-item");
const form = document.querySelectorAll(".connten-comment")
console.log(form)
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const commnetValue = comment.value;

    console.log(commnetValue)
} )
