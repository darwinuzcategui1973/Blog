var $openMenu = document.getElementById("open-menu"),
    $closeMenu = document.getElementById("close-menu"),
    $menu = document.getElementById("menu");

$openMenu.addEventListener("click", function(){
    $menu.classList.add("menu-active");
});

$closeMenu.addEventListener("click", function(){
    $menu.classList.remove("menu-active");
});


var div = document.createElement('div');
document.body.appendChild(div);
twemoji.parse(document.body);
var img = div.querySelector('img');
