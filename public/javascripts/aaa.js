

window.onerror = function(msg, url, lineNo, columnNo, error) {
    console.log(arguments)
}

var obj = { aa : 22};
try{
    obj.aa();
} catch(e){
    console.log(e)
}