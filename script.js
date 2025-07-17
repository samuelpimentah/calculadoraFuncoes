function funcQuadr() {
    let numA = window.document.getElementById('numA').value
    let numB = window.document.getElementById('numB').value
    let numC = window.document.getElementById('numC').value
    let a = Number(numA)
    let b = Number(numB)
    let c = Number(numC)
    let qtdRaiz = 0
    let raiz1 =  0
    let raiz2 = 0
    let xVertice = 0
    let yVertice = 0
    let delta = b * b - (4 * a * c)

    //função é quadrática
    if (a !== 0) {
        //calculando a quantidade de raízes
        if (delta > 0) {
            qtdRaiz = 2;
        }
        else if (delta === 0) {
            qtdRaiz = 1;
        }
        //calculando as raízes e retornando a String com as informações
        if (qtdRaiz !== 0) {
            raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
            if (raiz1 === -0) {
                raiz1 = 0;
            }
            raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
            if (raiz2 === -0) {
                raiz2 = 0;
            }
        }
        xVertice = -(b / (2 * a));
        yVertice = -(delta / (4 * a));
    }
    //função afim
    else {
        //declaração de variáveis do método
        raiz1 = (-c) / b;
        qtdRaiz = 1;
    }
    window.document.getElementsByTagName('p')[1].innerText = `Qtd. raízes: ${qtdRaiz}`
    window.document.getElementsByTagName('p')[2].innerText = `Delta: ${delta}`
    window.document.getElementsByTagName('p')[3].innerText = `Raízes: ${raiz1}, ${raiz2}`
    window.document.getElementsByTagName('p')[4].innerText = `X vértice: ${xVertice}`
    window.document.getElementsByTagName('p')[5].innerText = `Y vértice: ${yVertice}`
}