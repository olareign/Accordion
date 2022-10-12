const accordionEL = document.getElementsByClassName('content-container');

// console.log(questionEL)
for(let i = 0; i < accordionEL.length; i++){

    accordionEL[i].addEventListener('click', function(){
        console.log(accordionEL[i].innerHTML)
        this.classList.toggle('active');
        
    })
}; 




