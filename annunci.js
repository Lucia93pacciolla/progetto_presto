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




fetch('./annunci.json').then((response)=> response.json()).then((data)=>{

    let categoryWrapper = document.querySelector('#categoryWrapper');

    let cardsWrapper = document.querySelector('#cardsWrapper');


    function setCategoryFilters(){


        let categories = data.map((annuncio)=> annuncio.category);
    
        let uniquecategories = [];
    
        categories.forEach((category)=>{
    
            if( !uniquecategories.includes(category)){
    
                uniquecategories.push(category)
            }
    
    
    
        })


        uniquecategories.forEach((category)=>{

            let div = document.createElement('div');

            div.classList.add('form-check');
        
            div.innerHTML = `

                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="${category}">
                            <label class="form-check-label" for="${category}">
                              ${category}
                            </label>
            
            
            `;

            categoryWrapper.appendChild(div);




        })




    }


    
setCategoryFilters();




function showCards(array){


    
    cardsWrapper.innerHTML = '';
    
    array.sort ((a,b) => Number(b.price - a.price));

    array.forEach((element)=>{

        let div = document.createElement('div');

        div.classList.add('col-12' , 'col-md-3',  'my-5');

        div.innerHTML = `

                    <div class="announcement-card">

                        <p class="h3">${element.name}</p>
                        <p>${element.category}</p>
                        <p>${element.price}</p>

                      </div>
        
        
        `;


        cardsWrapper.appendChild(div);





    })


}

showCards(data);



function filterByCategory(categoria){

    if(categoria != 'All'){


        let filtered = data.filter((annuncio)=> annuncio.category == categoria);
    
        showCards(filtered);

    }else{

        showCards(data);
    }



}
    
let checkInputs = document.querySelectorAll('.form-check-input');


checkInputs.forEach((checkInput)=>{


    checkInput.addEventListener('click', () =>{

        filterByCategory(checkInput.id);



    })
})


let inputPrice = document.querySelector('#inputPrice');

let incrementNumber = document.querySelector('#incrementNumber');

function setInputPrice(){

    let prices = data.map((annuncio)=> Number(annuncio.price));

    console.log(prices);

    let maxPrice = Math.max(...prices);

    inputPrice.max = maxPrice;

    console.log(Math.ceil(maxPrice));

    incrementNumber.innerHTML = Math.ceil(maxPrice);



}

setInputPrice();


function filterByPrice (prezzo) {

    let filter = data.filter((annuncio)=> annuncio.price <= prezzo);

    showCards (filter);
}

inputPrice.addEventListener('input', ()=>{

filterByPrice(inputPrice.value);

incrementNumber.innerHTML = inputPrice.value;

})

let wordInput = document.querySelector ('#wordInput');

function filterByWord (nome){


    let filtered = data.filter((annuncio)=> annuncio.name.toLowerCase().includes(nome.toLowerCase()));

    showCards(filtered);
}

wordInput.addEventListener('input', ()=>{

    filterByWord(wordInput.value);

})

})