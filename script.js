function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) { // teste para não deixar o campo vazio
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' //para limpar o campo entre as gerações das tabuadas; para não acumular uma embaixo da outra
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` //ao clicar em um dos valores apresentados, ficará selecionado na interface 
            tab.appendChild(item)
            c++
        }
    }
}




// window.alert('ok')