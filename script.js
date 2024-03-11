// Función para abrir la primera pestaña al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    openTab('tab1');
});

function openTab(tabName) {
    var tabs = document.getElementsByClassName("tab-pane");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
    // Si se abre el informe 2, mostrar solo el subtab1
    if (tabName === 'tab2') {
        openSubTab('subtab1');
    }
}

function openSubTab(tabName) {
    var tabContent = document.getElementsByClassName("sub-tab-pane");
    for (var i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

document.addEventListener("DOMContentLoaded", function() {
    // Contenedor del encabezado
    var headerContainer = document.createElement("div");
    headerContainer.classList.add("nav-bar");

    // Contenido del encabezado
    var headerContent = `
    <div class="head-box-right">
            <figure onclick="animateImage(this)">
                <title>
                    Universidad de San Carlos de Guatemala
                </title>
                <a href="https://www.usac.edu.gt/">
                    <img class="header-logo" src="Image/logo_usac.png" alt="USAC" width="80" height="80" title="Universidad de San Carlos de Guatemala">
                </a>
            </figure>
            <figure>
                <title>
                    Facultad De Ingeniería Universidad De San Carlos De Guatemala
                </title>
                <a href="https://portal.ingenieria.usac.edu.gt/">
                    <img class="header-logo" src="Image/logo_ingenieria.png" alt="USAC" width="80" height="80" title="Ingenieria Usac">
                </a>
            </figure>
            <figure class="dtt">
                <title>
                    Escuela De Ciencias Y Sistemas <br>
                    Facultad De Ingeniería - USAC
                </title>
                <a href="https://dtt-ecys.org/">
                    <img class="header-logo" src="Image/logo_sistemas.png" alt="USAC" width="80" height="80" title="Escuela de Sistemas Ingenieria, Usac">
                </a>
            </figure>
        </div>
        <div class="title-container">
            <h1 class="main-title">Practicas Iniciales Ingenieria USAC</h1>
        </div>
        <div class="head-box-left">
            <a href="https://github.com/DaaNiieeL123/202203806_Practica1" class="anchor-author">Hector Daniel Ortiz Osorio <br> 202203806</a>
        </div>
    `;

    // Agregar contenido del encabezado al contenedor
    headerContainer.innerHTML = headerContent;

    // Obtener el contenedor específico para el encabezado
    var headerWrapper = document.getElementById("header-container");

    // Insertar el contenedor del encabezado dentro del contenedor específico
    headerWrapper.appendChild(headerContainer);
});

function animateImage(element) {
    element.classList.add('animate__animated', 'animate__slideInDown');
}
document.addEventListener('DOMContentLoaded', function() {
    var list = document.querySelector('.list');
    list.classList.add('loaded');
});