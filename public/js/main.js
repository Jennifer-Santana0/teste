const btn_add = document.querySelectorAll('.add_cart')

btn_add.forEach((el)=>{
    el.addEventListener('click',()=>{
        const nome = el.parentNode.querySelector('h1').innerHTML
        const preco = el.parentNode.querySelector('p').innerHTML
        

        const xhr = new XMLHttpRequest();
       
        xhr.open('POST', '/cartAdd/' + nome + '/' + preco);
        xhr.setRequestHeader('Content-type', 'application/json');

        xhr.onload = () => {
            if (xhr.status === 200) {
                console.log('Foi enviado corretamente');
            } else {
                console.log(xhr.statusText);
            }
        };

        xhr.send();

    })
})


const quantidade = document.querySelectorAll('.quantidade')

quantidade.forEach((el)=>{
    el.addEventListener('input',function(){
        const nome = el.parentNode.querySelector('h1').innerHTML
        let quantidade = this.value
        

        let xhr = new XMLHttpRequest()
        xhr.open('POST', '/cartEdit/'+ nome + '/' + quantidade)
        xhr.setRequestHeader('Content-type', 'application/json')

        xhr.onload = () => {
            if(xhr.status == 200){
                const response = JSON.parse(xhr.responseText)
                const preco_total = response.newprecoTotal
                
                const precototalEl = el.parentNode.querySelector('.preco_total')
                precototalEl.textContent = '$' + preco_total



                
            }else {
                console.log('algo deu errado')
            }
        }



        xhr.send()

    })
})