addEventListener("DOMContentLoaded", ()=>{
    const btn_menu = document.querySelector (".btn_menu")
    if (btn_menu){
        btn_menu.addEventListener("click", () =>{
            const menu_list = document.querySelector (".menu_list")
            menu_list.classList.toggle ("show")
        })
    }
});