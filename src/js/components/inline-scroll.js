export default function() {
    const inlineScroll = document.querySelectorAll(".inline-scroll");

    inlineScroll && inlineScroll.forEach(scrollEl => {
        const pos = { left: 0, x: 0 };
        let scrolling = false;

        scrollEl.addEventListener("wheel", (e) => {
            if (scrollEl.scrollWidth > scrollEl.offsetWidth) {
                e.preventDefault();
                if (!scrolling) {
                    scrollEl.scroll({
                        left: scrollEl.scrollLeft + e.deltaX + e.deltaY,
                        behavior: 'smooth'
                    })
                    scrolling = true;
                    setTimeout(() => {scrolling = false;}, 300)
                }
            }
        });

        const mouseDownHandler = function (e) {
            pos.left = scrollEl.scrollLeft,
            pos.x = e.clientX;

            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler);
        };

        const mouseMoveHandler = function (e) {
            const dx = e.clientX - pos.x;
            scrollEl.scrollLeft = pos.left - dx;
        };

        const mouseUpHandler = function () {
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
        };

        scrollEl.addEventListener('mousedown', mouseDownHandler);
    });
}
