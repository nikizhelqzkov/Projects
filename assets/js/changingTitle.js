function getWidth() {
    return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    )
}
console.log(getWidth());
if(getWidth()<500){
    document.title = `Sketch Cloud - Mobile`;
}