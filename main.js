const API_KEY = "9412fa4d030e040ee1c3baced43c180f";
const BASE_URL = "https://api.themoviedb.org/3/movie/";
const LANGUAGE = "language=pt-BR";


// tags
const inserirFilme = document.getElementById("box-filme");
const encontrarFilme = document.getElementById("encontra-filme")

encontrarFilme.addEventListener("click", async () => {
  const idAleatorio = Math.floor(Math.random() * 1000 + 1);
  const url = BASE_URL + idAleatorio + "?api_key=" + API_KEY + "&" + LANGUAGE;
  try {
    const data = await fetch(url).then(res => res.json());
    if(data.success === false) throw new error;
    inserirFilme.innerHTML = `
      <img class="imagem_filme" src="https://image.tmdb.org/t/p/w500${data.poster_path}"/>
      <div
        class="descricao_filme"
      >
      <h1>${data.title}</h1>
      <p>${data.overview}</p>
    </div>
    `;
  } catch (e) {
    alert('Ops, nosso motoboy de filme tropeçou em um barranco, tente novamente')
    console.log("Caiu no catch")
    console.log(e)
  }


})