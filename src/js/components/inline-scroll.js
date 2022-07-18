export default function() {
    const inlineScroll = document.querySelectorAll(".inline-scroll");

    inlineScroll && inlineScroll.forEach(scrollEl => {
        const pos = { left: 0, x: 0 };

        scrollEl.addEventListener("wheel", (e) => {
            const scrollSize = scrollEl.scrollWidth - scrollEl.offsetWidth;
            if (scrollSize > 0) {
                const isStart = (scrollEl.scrollLeft == 0) && (e.deltaX + e.deltaY < 0);
                const isEnd = (scrollEl.scrollLeft >= scrollSize) && (e.deltaX + e.deltaY > 0);
                if (!isStart && !isEnd) {
                    e.preventDefault();
                    scrollEl.scroll({
                        left: scrollEl.scrollLeft + e.deltaX + e.deltaY,
                    })
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
