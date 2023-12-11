const xhttp = new XMLHttpRequest();

xhttp.onload = function(e){
    if(xhttp.readyState === 4 && xhttp.status === 200){
        console.log("server ok");
    }
}