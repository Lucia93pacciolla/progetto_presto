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



function createInterval(finalNumber, element){

    let counter = 0

    let interval = setInterval(()=>{

        
        
        if(counter < finalNumber){
            
            counter++
            element.innerHTML = counter;

        }else{
            
            clearInterval(interval);

        }

        


    }, 1)
}

let firstspan = document.querySelector('#first-span');

let secondspan = document.querySelector('#second-span');

let thirdspan = document.querySelector('#third-span');






let titolo = document.querySelector('#titolo');

let check = true;

let observed = new IntersectionObserver(
    
    (entries)=>{
        
        entries.forEach((entry)=>{
            
            if(entry.isIntersecting && check == true){
                
                createInterval(1500, firstspan );
                
                createInterval(100, secondspan );
                
                createInterval(800, thirdspan );

                check = false;
                
            }
        })


    }
)


observed.observe(titolo);