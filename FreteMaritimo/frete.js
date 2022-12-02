const calcular = document.getElementById('calcular');

function frete () {
    const fatura = document.getElementById('fatura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (fatura !== '' && peso !== '') {

        const valorFrete = 
        ((parseInt(fatura)*0.1) + 
        (parseInt(peso)*0.2) + 
        parseInt(document.querySelector("input[name='tamanho']:checked").value) +
        parseInt(document.querySelector("input[name='refrigerado']:checked").value) +
        parseInt(document.querySelector("input[name='ligado']:checked").value) +
        parseInt(document.querySelector("input[name='IMO']:checked").value) +
        parseInt(document.querySelector("input[name='continente']:checked").value) +
        parseInt(document.querySelector("input[name='seguro']:checked").value)
       
        );

        resultado.textContent = `R$ ${valorFrete}`;        
    }

}

calcular.addEventListener('click', frete);