const btnColors = document.querySelectorAll('.btn')

btnColors.forEach (function (btncolor){
    
    btncolor.addEventListener('click' , function (event){
        let colorBtn = event.target.dataset.color

        document.documentElement.style.setProperty('--bgcolor' , colorBtn)
    })
})