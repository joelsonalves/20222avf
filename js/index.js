const codigo_de_acesso = document.querySelector('#codigo-de-acesso');

const botao_consultar = document.querySelector('#botao-consultar');

const label_status = document.querySelector('#status');

const cartao_resposta = document.querySelector('#cartao-resposta');

const lista = [
    [1559505, 'a', 'avf', 1],
    [1505664, 'a', 'avf', 2],
    [1553964, 'a', 'avf', 3],
    [1534507, 'a', 'avf', 4],
    [1529790, 'a', 'avf', 5],
    [1566897, 'a', 'avf', 6],
    [1534620, 'a', 'avf', 7],
    [1560460, 'a', 'avf', 8],
    [1532357, 'a', 'avf', 9],
    [1534910, 'a', 'avf', 10],
    [1536879, 'a', 'avf', 11],
    [1504707, 'a', 'avf', 12],
    [1531298, 'a', 'avf', 13],
    [1522144, 'b', 'avf', 1],
    [1270025, 'b', 'avf', 2],
    [1571367, 'b', 'avf', 3],
    [1537160, 'b', 'avf', 4],
    [1536752, 'b', 'avf', 5],
    [1522142, 'b', 'avf', 6],
    [1525090, 'b', 'avf', 7],
    [1532738, 'b', 'avf', 8],
    [1537022, 'b', 'avf', 9],
    [1523357, 'b', 'avf', 10],
    [1527804, 'b', 'avf', 11],
    [1528056, 'b', 'avf', 12],
    [1519358, 'b', 'avf', 13],
    [1566104, 'c', 'avf', 1],
    [1532588, 'c', 'avf', 2],
    [1533754, 'c', 'avf', 3],
    [1536499, 'c', 'avf', 4],
    [1539071, 'c', 'avf', 5],
    [1541865, 'c', 'avf', 6],
    [1523168, 'c', 'avf', 7],
    [1515117, 'c', 'avf', 8],
    [1184293, 'c', 'avf', 9],
    [1106844, 'c', 'avf', 10],
    [1525372, 'c', 'avf', 11],
    [1549607, 'c', 'avf', 12],
    [1560837, 'd', 'avf', 1],
    [1523445, 'd', 'avf', 2],
    [1559204, 'd', 'avf', 3],
    [1357370, 'd', 'avf', 4],
    [1529278, 'd', 'avf', 5],
    [1527146, 'd', 'avf', 6],
    [1526438, 'd', 'avf', 7],
    [1532430, 'd', 'avf', 8],
    [1565038, 'd', 'avf', 9],
    [1528448, 'd', 'avf', 10],
    [1520345, 'd', 'avf', 11],
    [1534352, 'd', 'avf', 12],
];

const consultar = (codigo) => {
    for (i = 0; i < lista.length; i++) {
        if (lista[i][0] === codigo) return lista[i];
    }
    return null;
};

botao_consultar.addEventListener('click', () => {
    label_status.innerText = '';
    cartao_resposta.removeAttribute('src');
    codigo = parseInt(codigo_de_acesso.value);
    retorno = consultar(codigo);
    if (retorno !== null) {
        label_status.innerText = `Código: ${retorno[0]} - Tipo de Prova: ${retorno[1].toUpperCase()} - Sequencial: ${retorno[2].toUpperCase()}_${retorno[1].toUpperCase()}${retorno[3]}`;
        cartao_resposta.setAttribute('src', `img/${retorno[1]}/${retorno[2]}_${retorno[1]}${retorno[3]}.jpg`);
    } else {
        label_status.innerText = 'Verifique o código digitado!';
    }
});

codigo_de_acesso.addEventListener('click', () => {
    label_status.innerText = '';
    cartao_resposta.removeAttribute('src');
});

codigo_de_acesso.addEventListener('keypress',  (e) => {
    if(e.which == 13){
       botao_consultar.click();
    } else {
        codigo_de_acesso.click();
    }
});