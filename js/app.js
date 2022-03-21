const items = document.querySelectorAll('.item')
const buttons = document.querySelectorAll('.btn-container button')
const toggleBtn = document.querySelector('.bars')

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('animation')
    document.querySelector('.links-container').classList.toggle('toggle')
    document.querySelector('.shopping-cart').classList.toggle('toggle')
})

// Filtra os itens por categorias
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        items.forEach(item => {  
            if (btn.value !== item.dataset.type && btn.value !== 'all') {
                item.style.opacity = '0'
                item.style.height = '0'
            } else {
                item.style.opacity = '1'
                item.style.height = '300px'

            }
        })
    })
})

// Oculta os itens de acordo com o que o usuário está digitando
function getInput(obj) {
    const input = obj.value.toLowerCase()
    const regex = new RegExp(`^(${input})`)
    items.forEach(item => {
        if (!regex.test(item.dataset.type)) {
            item.style.opacity = '0'
            item.style.height = '0'
        } else {
            item.style.opacity = '1'
            item.style.height = '300px'
        }
    }) 
}