let navIcon = document.querySelector('#navIcon');


let confirm = false


navIcon.addEventListener('click', ()=>{
    
    if(confirm == false){
        
        navIcon.classList.remove('fa-rotate-180');
        confirm = true
        
    }else{
        
        navIcon.classList.add('fa-rotate-180');
        confirm = false;
        
    }
    
    
})




let mainNavbar = document.querySelector('#mainNavbar');

let logoA = document.querySelector('#logoA');

let logoB = document.querySelector('#logoB');


window.addEventListener('scroll',()=>{

    if(window.scrollY > 0){

        mainNavbar.classList.remove('bg-transparent');
        mainNavbar.classList.add('background-primaryC');

        mainNavbar.style.height = '120px';

        logoB.classList.remove('d-none');

        logoA.classList.add('d-none');

    }else{

        mainNavbar.classList.remove('background-primaryC');
        mainNavbar.classList.add('bg-transparent');

        mainNavbar.style.height = '70px';

        
        logoA.classList.remove('d-none');
        
        logoB.classList.add('d-none');

    }


})



let opener = document.querySelector('.opener');

let movedDivs = document.querySelectorAll('.moved');

let conferma = false;

let teachers = [


    { name : 'Lucia', Vintage : ['arredamento'], url : './media/persona1.jpg'},
    { name : 'Gabriele', Vintage : ['auto'], url : './media/persona2.jpg'},
    { name : 'Giorgia', Vintage : ['musica'], url : './media/persona3.jpg'},
    { name : 'Romeo', Vintage : ['fumetti'], url : './media/persona4.jpg'},

]

let cardsWrapper = document.querySelector('#cardsWrapper');


movedDivs.forEach((moved, i)=>{

    cardsWrapper.innerHTML = '';

    moved.style.backgroundImage = `url('${teachers[i].url}')`;

    moved.addEventListener('click', ()=>{

        cardsWrapper.innerHTML = '';

        let div = document.createElement('div');
        
        div.classList.add('teacher-card');

        div.innerHTML = `
                    <p class="h3">${teachers[i].name}</p>
                    <p>${teachers[i].Vintage}</p>
        `;

        cardsWrapper.appendChild(div);


        let card = document.querySelector('.teacher-card');

        card.style.backgroundImage = `url('${teachers[i].url}')`
    })
})



opener.addEventListener('click',()=>{

    cardsWrapper.innerHTML = '';

    if (conferma == false){

        conferma = true;


        movedDivs.forEach((moved, i)=>{
    
            let angle = (360 * i) / movedDivs.length;
    
            moved.style.transform = `rotate(${angle}deg) translate(200px) rotate(-${angle}deg)`;

            opener.innerHTML = `<i class="fa-solid fa-minus text-blackC fa-5x"></i>`;
    
    
    
        })


    }else{

        conferma = true;

        cardsWrapper.innerHTML = '';

        movedDivs.forEach((moved, i)=>{
    
            let angle = (360 * i) / movedDivs.length;
    
            moved.style.transform = `rotate(0deg) translate(0px)`;

            opener.innerHTML = `<i class="fa-solid fa-plus fa-7x"></i>`;
    
    
    
        })


    }


})




