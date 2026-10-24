const abrirHeetch = document.getElementById("abrir-heetch");
const modalHeetch = document.getElementById("modal-heetch");
const fecharModal = document.querySelector(".fechar-modal");

abrirHeetch.addEventListener("click", () => {
    modalHeetch.style.display = "block";
});

fecharModal.addEventListener("click", () => {
    modalHeetch.style.display = "none";
});

window.addEventListener("click", (e) => {

    if (e.target === modalHeetch) {
        modalHeetch.style.display = "none";
    }

});


const abrirAc = document.getElementById("abrir-ac");
const modalAc = document.getElementById("modal-ac");
const fecharModal1 = document.querySelector(".fechar-modal1");

abrirAc.addEventListener("click", () => {
    modalAc.style.display = "block";
});

fecharModal1.addEventListener("click", () => {
    modalAc.style.display = "none";
});

window.addEventListener("click", (e) => {

    if (e.target === modalHeetch) {
        modalAc.style.display = "none";
    }

});


const abrircarrossel = document.getElementById("abrir-carrossel");
const modalcarrossel = document.getElementById("modal-carrossel");
const fecharModal2 = document.querySelector(".fechar-modal2");

abrircarrossel.addEventListener("click", () => {
    modalcarrossel.style.display = "block";
});

fecharModal2.addEventListener("click", () => {
    modalcarrossel.style.display = "none";
});

window.addEventListener("click", (e) => {

    if (e.target === modalHeetch) {
        modalcarrossel.style.display = "none";
    }

});



const abrirLumina = document.getElementById("abrir-lumina");
const modalLumina = document.getElementById("modal-lumina");
const fecharModal3 = document.querySelector(".fechar-modal3");

abrirLumina.addEventListener("click", () => {
    modalLumina.style.display = "block";
});

fecharModal3.addEventListener("click", () => {
    modalLumina.style.display = "none";
});

window.addEventListener("click", (e) => {

    if (e.target === modalHeetch) {
        modalLumina.style.display = "none";
    }

});

const menuBtn = document.querySelector(".menu-btn")
const menu = document.querySelector(".menu")

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
})

menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active')
    })
})


