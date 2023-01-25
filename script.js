function carregar () {
var ini = document.getElementById('txti')
var fim = document.getElementById('txtf')
var passo = document.getElementById('txtp')
var res = document.getElementById('res')

if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    res.innerHTML = 'Impossível contar!'
    window.alert('[ERRO] DADOS INCOMPLETOS')
    
} else {
    res.innerHTML = 'Contando...:'
    var i = Number (ini.value)
    var f = Number (fim.value)
    var p = Number (passo.value)
    if (i<f) {
        // Contagem crescente
        for(var c = i; c<= f; c+=p) {
             res.innerHTML += `${c} \u{1F603}` }
    } else {
        // Contagem regressiva
      for(var c = i; c>= f; c-=p) {
            res.innerHTML += `${c} \u{1F603}`}
    }
    res.innerHTML += `\u{1F3C1}`
    }

}
