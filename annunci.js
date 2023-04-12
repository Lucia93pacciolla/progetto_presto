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

    array.forEach((element, i)=>{

        let div = document.createElement('div');

        div.classList.add('col-12' , 'col-md-3',  'my-5');

        div.innerHTML = `

                    <div class="announcement-card">

                    <img class="img-card-custom" src="https://picsum.photos/${200+i}" alt="">

                        <p class="h3">${element.name}</p>
                        <p>${element.category}</p>
                        <p>${element.price}</p>

                      </div>
        
        
        `;


        cardsWrapper.appendChild(div);





    })


}

showCards(data);



function filterByCategory(array){

    let arrayFromNodelist = Array.from(checkInputs);

    let button = arrayFromNodelist.find((bottone)=> bottone.checked);

    let categoria = button.id;

    // console.log(categoria);

    if(categoria != 'All'){


        let filtered = array.filter((annuncio)=> annuncio.category == categoria);
    
        return filtered;

    }else{

        return data;
    }



}
    
let checkInputs = document.querySelectorAll('.form-check-input');


checkInputs.forEach((checkInput)=>{


    checkInput.addEventListener('click', () =>{

        globalFilter();



    })
})


let inputPrice = document.querySelector('#inputPrice');

let incrementNumber = document.querySelector('#incrementNumber');

function setInputPrice(){

    let prices = data.map((annuncio)=> Number(annuncio.price));

    console.log(prices);

    let maxPrice = Math.max(...prices);

    inputPrice.max = maxPrice;

    inputPrice.value = (Math.ceil(maxPrice));

    incrementNumber.innerHTML = Math.ceil(maxPrice);



}

setInputPrice();


function filterByPrice (array) {

    let filtered = array.filter((annuncio)=> annuncio.price <= +(inputPrice.value));

    console.log(filtered);

    return filtered;
}

inputPrice.addEventListener('input', ()=>{

incrementNumber.innerHTML = inputPrice.value;

globalFilter();


})



let wordInput = document.querySelector ('#wordInput');

function filterByWord (array){

    let nome = wordInput.value;


    let filtered = array.filter((annuncio)=> annuncio.name.toLowerCase().includes(nome.toLowerCase()));

    return filtered;
}

wordInput.addEventListener('input', ()=>{

    globalFilter();

})


function globalFilter(){
    
    let filteredByCategory = filterByCategory(data);

    let filteredByPrice = filterByPrice(filteredByCategory);

    let filteredByWord = filterByWord(filteredByPrice);

    showCards(filteredByWord);

}

})