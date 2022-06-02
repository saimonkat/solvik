if (
    window.CSS.supports(
        '(font:-apple-system-body) and (-webkit-touch-callout:none) and (-webkit-tap-highlight-color:hotpink)'
    )
) {
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport !== null) {
        viewport.content = `${viewport.content},user-scalable=no`;
    }
}
