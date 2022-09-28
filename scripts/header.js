const btnLupa = document.querySelector('#botao_pesquisa');
const campoPesquisa = document.querySelector('#pesquisa_mobile');
let statusCampoPesquisa = false;

btnLupa.addEventListener('click', ()=>{
    if(!statusCampoPesquisa){
        campoPesquisa.style.marginTop = "0px";
        statusCampoPesquisa = true;
    }else{
        campoPesquisa.style.marginTop = "-48px";
        statusCampoPesquisa = false;
    }
});