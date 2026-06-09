//Pegando os objetos da memória
let nomeGuardado = localStorage.getItem("médicoSelecionado");
let horarioGuardado = localStorage.getItem("horárioSelecionado");
let dataGuardada = localStorage.getItem("dataSelecionada");
let fotoGuardada = localStorage.getItem("fotoMédicoSelecionado");

//Exibindo os dados na página de minhas consultas.

let nome_Medico = document.getElementById("nome_medico_selecionado");
let horario_Consulta = document.getElementById("horario_consulta_selecionado");
let data_Consulta = document.getElementById("data_consulta_selecionada");
let foto_Medico = document.getElementById("foto_medico_consulta");

nome_Medico.textContent = nomeGuardado;
horario_Consulta.textContent = horarioGuardado;
data_Consulta.textContent = dataGuardada;
if (fotoGuardada) {
    foto_Medico.src = fotoGuardada;
}