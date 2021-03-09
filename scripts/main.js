function get_color(){
    return Math.floor(Math.random()*4096).toString(16)
}
var links = {
    "12º 2ª nº 03 André Pita":"https://t.ly/yLrt",
    "12º 2ª nº 14 Guilherme Marcelo":"https://t.ly/aWkm",
    "12º 2ª nº 15 Gustavo Telhada":"https://t.ly/zRhm"
}

function get_rows(){
    for(var aluno in links){
        var link = links[aluno]
        var tbodyObj=document.getElementById("pauta").getElementsByTagName('tbody')[0];
        var novaLinha = tbodyObj.insertRow(-1);
        var novaCelula = novaLinha.insertCell();
        var corFonte = get_color();
        novaCelula.innerHTML= `
            <a href='${link}' target='_blank'>
                <img src='imagens/${aluno}.jpg' alt='Missing image'>  
            </a>
            <figcaption style='color:#${corFonte}'>${aluno}</figcaption>
        `;
    }
}