//Procurar o botão
var botaoNovoHorario = document.querySelector("#add-time");
botaoNovoHorario.addEventListener("click", cloneField)
//quando clicar no botão

//Executar uma ação
function cloneField(){
     //Duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true);     //nessa função cloneNode (Estou clonando um nó (tags pai e filho)). Essa função recebe um valor boolean: true ou false. se for true(verdadeiro) ele vai duplicar todo o meu nó; Se eu coloco false(falso) ele pega a minha tag e não duplica os filhos dela
    
    //Pegar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll("input");
    console.log(fields.value);

    //Para cada campo, limpar
    fields.forEach(function(field){
        //Pegar o field(campo) do momento e limpa ele
        field.value = "";
    });

    //Colocar na página. Onde?
    document.querySelector("#schedule-items").appendChild(newFieldContainer);

    
}