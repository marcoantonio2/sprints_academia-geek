let form = document.getElementById('form')
//escuchar el evento submit
form.addEventListener('submit', (e) => {
    e.preventDefault();
    operacion()
})
// funcion para hacer todo
function operacion() {
    // se consulta por  el numero de pcs al igual que se crean las variables
    let numpc = Number(document.getElementById('pcnumber').value)
    let totalCompra = 0
    let discount = {}
    let pcvalue = 820000
    let discDisplay = document.getElementById('discDisplay')
    let discount2
    // se saca el total a pagar a partir del numero de pcs
    totalCompra = pcvalue * numpc
    // se busca cuanto es el descuento dependiendo del total
    if (3280001 >= totalCompra && totalCompra >= 1639999) {
        discount[1] = 0.15
        discount[0] = "15%"
    } else if (6560000 >= totalCompra && totalCompra > 3280000) {
        discount[1] = 0.25
        discount[0] = "25%"
    } else if (9840000 >= totalCompra && totalCompra > 6560000) {
        discount[1] = 0.35
        discount[0] = "35%"
    } else {
        discount[1] = 0
        discount[0] = "0%"
    }

    //se saca el número a restar para descuento

    let numDiscount = totalCompra * discount[1]
    totaldescuento = totalCompra - numDiscount
    // se pone los elementos en los input
    document.getElementById('pcCompra').value = totalCompra
    document.getElementById('pcDesc').value = numDiscount
    document.getElementById('pcTotal').value = totaldescuento
    // se informa cuanto descuento se hiza
    discDisplay.innerHTML = `
    <p>Tu descuento fue del ${discount[0]}</p>
    `;
}