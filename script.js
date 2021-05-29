function procurar(){
    let receita = document.getElementById('txtreceita')
    let ban = 'Banoffee'
    let brow = 'Brownie de Nescau' 
    let ham = 'Hambúrger Artesanal'
    let molho = 'Molho Especial'
    let alho = 'Pão de Alho'
    let pave = 'Pavê de Brigadeiro'

    if(receita.value.length == 0){
        window.alert('ERRO! Digite o nome da receita que deseja ver.')
    }else{
        if(receita.value == ban){
            window.location.href = 'banoffe.html'
        }else if(receita.value == brow){
            window.location.href = 'brownie.html'
        }else if(receita.value == ham){
            window.location.href = 'burg.html'
        }else if(receita.value == molho){
            window.location.href = 'molho.html'
        }else if(receita.value == alho){
            window.location.href = 'paodealho.html'
        }else if(receita.value == pave){
            window.location.href = 'pavê.html'
        }
    }
}