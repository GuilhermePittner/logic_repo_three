function comprar(){
    let quantidade = document.getElementById("qtd").value;
    
    if (quantidade >= 1){

        // get available tickets
        let tipo_ingresso = document.getElementById("tipo-ingresso").value;
        let total_escolhido = document.getElementById(`qtd-${tipo_ingresso}`).textContent;
        

        // parse string to int
        quantidade = parseInt(quantidade);
        total_escolhido = parseInt(total_escolhido);

        
        // check if the amount is available
        if (quantidade <= total_escolhido){
            alert('Compra realizada com sucesso.');
            
            novo_total = total_escolhido-quantidade;

            // set new amount of tickets
            let new_text = document.getElementById(`qtd-${tipo_ingresso}`);
            new_text.innerHTML = novo_total;

        } else {
            alert('Não há ingressos disponíveis para essa quantidade');
        }


    } else {
        alert('A quantidade de ingressos deve ser no mínimo 1.');
    }
}

// that wasn't so hard...