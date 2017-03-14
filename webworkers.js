
function buscarPrimos() {
    var worker = new Worker('calc_primos.js');
    worker.postMessage(document.getElementById("prim").value);
    worker.addEventListener("message", function(e){
        var primelist=e.data;
        console.log(primelist);
        document.getElementById('result').innerHTML = primelist;
    });
}