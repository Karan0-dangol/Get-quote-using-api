let api = 'https://api.kanye.rest'
let btn = document.querySelector('.get-quote')
let textBox = document.querySelector('.quote-box')

btn.addEventListener('click', ()=>{
fetch(api).then(response => response.json()).then(data => textBox.textContent = data.quote)

})