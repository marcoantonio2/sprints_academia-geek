let form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    operacion()
})

function operacion() {
    let numpc = Number(document.getElementById('pcnumber').value)
    let totalCompra = 0
    let discount = {}
    let pcvalue = 820000
    let discDisplay = document.getElementById('discDisplay')
    let discount2

    totalCompra = pcvalue * numpc

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

let numDiscount = totalCompra * discount[1]
    totaldescuento = totalCompra - numDiscount

    document.getElementById('pcCompra').value = totalCompra
    document.getElementById('pcDesc').value = numDiscount
    document.getElementById('pcTotal').value = totaldescuento

    discDisplay.innerHTML = `
    <p>Tu descuento fue del ${discount[0]}</p>
    `;

    console.log(pcvalue, numpc, totalCompra, discount[1], totaldescuento, discount[0])
}