const form = document.querySelector("#form")
const nameImput = document.querySelector("#name")
const phoneImput = document.querySelector("#phone")
const emailImput = document.querySelector("#email")
const dateDate = document.querySelector("#date")
const messageText = document.querySelector("#message")

form.addEventListener("submit",(event)=>{
    event.preventDefault();

// verifica se o nome está vazio
if (nameImput.value === "") {
    alert("O campo Name deve ser preenchido")
}
if (phoneImput.value === "") {
    alert("O campo Phone number deve ser preenchido")
}
if (emailImput.value === "") {
    alert("O campo 'email' deve ser preenchido")
}
if (dateDate.value === "") {
    alert("O campo 'Date' deve ser preenchido")
}
if (messageTex === "") {
    alert("O campo message de deve estar preenchido")
}

});