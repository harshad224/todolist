window.onload = function () {
    const menu_button = document.querySelector(".hamburger");
    const mob_menu = document.querySelector(".hamnav-link");

    menu_button.addEventListener('click', function () {
        menu_button.classList.toggle('is-active')
        mob_menu.classList.toggle('is-active1')
    })

}