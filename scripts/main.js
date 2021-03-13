function get_color(){
    return Math.floor(Math.random()*4096).toString(16)
}
var alunos = [
    "12º 2ª nº 1 Afonso Kirkby",
    "12º 2ª nº 2 Afonso Teixeira",
    "12º 2ª nº 3 André Pita", 
    "12º 2ª nº 4 André Mota",
    "12º 2ª nº 5 Ângelo Cardoso",
    "12º 2ª nº 6 Bernardo Bernardes",
    "12º 2ª nº 7 Daniel Zayika",
    "12º 2ª nº 8 Diogo Figueiredo",
    "12º 2ª nº 9 Diogo Martins",
    "12º 2ª nº 10 Diogo Agulheiro",
    "12º 2ª nº 12 Francisco Mendes",
    "12º 2ª nº 13 Guilherme Marques",
    "12º 2ª nº 14 Guilherme Marcelo",
    "12º 2ª nº 15 Gustavo Telhada",
    "12º 2ª nº 16 Haojie Huang",
    "12º 2ª nº 17 João Fidalgo",
    "12º 2ª nº 18 João Gonçalves",
    "12º 2ª nº 19 José Silva",
    "12º 2ª nº 20 Luís Canossa",
    "12º 2ª nº 22 Manuel Vizoso",
    "12º 2ª nº 23 Mariana Azevedo",
    "12º 2ª nº 24 Miguel Lorga",
    "12º 2ª nº 25 Rodrigo Simões",
    "12º 2ª nº 26 Tiago Farinha",
    "12º 2ª nº 27 Tomás Perdigão",
    "12º 2ª nº 28 Luís Oliveira",
    "12º 2ª nº 29 Vasco Baldé"
]

function get_rows(){
    for(var aluno in alunos){
        var legenda = alunos[aluno]
        var tbodyObj=document.getElementById("pauta").getElementsByTagName('tbody')[0];
        var novaLinha = tbodyObj.insertRow(-1);
        var novaCelula = novaLinha.insertCell();
        var corFonte = get_color();
        //var legenda = aluno.replace(/_/g, " ");
        novaCelula.innerHTML= `
            <a href='imagens/grandes/${aluno}.jpg' target='_blank'>
                <img src='imagens/pequenas/${aluno}.jpg' alt='Missing image'>  
            </a>
            <figcaption style='color:#${corFonte}'>${legenda}</figcaption>
        `;
    }
}