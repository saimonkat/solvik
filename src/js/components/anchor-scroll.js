export default function(){
    location.hash && smoothScrollTo(location.hash);
    const anchors = document.querySelectorAll('a[href^="#"]');

    anchors.length && anchors.forEach(anchor => {
        anchor.addEventListener("click", function(e){
            e.preventDefault();
            const href = anchor.getAttribute('href');
            if (href == '#') return;
            smoothScrollTo(href);
        });
    })

    function smoothScrollTo(target){
        const targetEl = document.querySelector(target);
        if (targetEl) {
            const offsetTop = document.querySelector(target).offsetTop;

            scroll({
                top: offsetTop,
                behavior: "smooth"
            });
        }
    }
}
