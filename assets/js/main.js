(function () {
    let navbar = document.querySelector('#navbar');
    let hamburger = document.querySelector('#hamburger');
    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('open');
    });
})()

//const proyecto1 = document.getElementById("proyecto1");
//const proyecto2 = document.getElementById("proyecto2");
//progressContainer.addEventListener("click", setProgress)

//function abrirNuevoTab(url) {
     // Abrir nuevo tab
        //var win = window.open(url, '_blank');
    //}
    //$("#proyecto1").click(function(){
        //abrirNuevoTab('https://00tino.github.io/mp3Player/')
    //})
    //$("#proyecto2").click(function(){
        //abrirNuevoTab('https://00tino.github.io/mp3Player/')
    //})

function openInNewTab(url) {
    window.open(url, '_blank').focus();
  }