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

disqus = function (newIdentifier, newUrl, newTitle) {
    if ($('#disqus_thread').length) {
        if (typeof DISQUS === 'undefined') {

            var disqus_shortname = 'filisantillan';
            var disqus_identifier = newIdentifier;
            var disqus_url = newUrl;
            var disqus_title = newTitle;

            (function() {
                var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
                dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
            })();
        } else {
            DISQUS.reset({
                reload: true,
                config: function () {
                    this.page.identifier = newIdentifier;
                    this.page.url = newUrl;
                    this.page.title = newTitle;
                }
            });
        }
    }
};

disqus(window.location.href, window.location.href, $('#post-text').text());