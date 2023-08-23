const url = "https://jsonplaceholder.typicode.com/todos/1";

function respostaApi(url) {
    const texto = fetch(url)
  .then(resposta => resposta.text())
  
 
texto.then(dados=>{
  console.log(dados)})

    
}




respostaApi(url);



    