
// Adicionar alteração de texto do médico selecionado no modal_agendar.
// Quando o usuário clicar no botão de horário disponível deste médico na página de agendamento, o nome do médico deve ser atualizado no modal_agendar para refletir a escolha do usuário.  

// Pegar o botão de confirmação do ID do médico escolhido.
let botaoConfirmarMedico = document.getElementById("btn_ir_para_consultas");

//Adicinar um evento de clique para identificar o médico e atualizar o texto do modal.
botaoConfirmarMedico.addEventListener("click", function(){
let inputSelecionado = document.querySelector('input[name="horario_escolhido"]:checked');
if (inputSelecionado){
    
    let medico = inputSelecionado.dataset.medico; // Pegando o nome atribuído.
    let horario = inputSelecionado.value; // Pegando o horário atribuído.

    localStorage.setItem("médicoSelecionado", medico); //Guardando elementos na memoria do computador.
    localStorage.setItem("horárioSelecionado", horario);
    

    console.log("Médico selecionado:" + medico + "às" + horario)
    window.location.href = "minhas_consultas.html"; // Redirecionar para a página de minhas consultas.
} else{
    alert("Por favor, selecione um horário para agendar a consulta.");
}

})

