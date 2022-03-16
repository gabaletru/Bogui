addEventListener("DOMContentLoaded", ()=>{
    const btn_menu = document.querySelector (".btn_menu")
    if (btn_menu){
        btn_menu.addEventListener("click", () =>{
            const menu_list = document.querySelector (".menu_list")
            menu_list.classList.toggle ("show")
        })
    }


//SCROLL TO TOP
    const boton_ir_arriba = document.querySelector("#scrollToTop")
    const barra_indicador = document.querySelector(".indicadorScroll")

    const obtener_pixeles = () => document.documentElement.scrollTop || document.body.scrollTop
    const irArriba = () => {
        if (obtener_pixeles() > 0) {
            requestAnimationFrame(irArriba)
            scrollTo(0, obtener_pixeles() - (obtener_pixeles() / 20));
        }
    }

//SCROLL PROGRESSBAR
    const indicarScroll = () =>{

        if (obtener_pixeles() > 50){
            boton_ir_arriba.className = "mostrar"
        }else{
            boton_ir_arriba.className = "ocultar"
        }
        let alto = document.documentElement.scrollHeight - document.documentElement.clientHeight
        let avance_scroll = (obtener_pixeles() / alto) * 100
        barra_indicador.style.width = `${avance_scroll}%`
    }

    boton_ir_arriba.addEventListener("click", irArriba);
    window.addEventListener ("scroll", indicarScroll);

});





