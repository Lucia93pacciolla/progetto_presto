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




let camioncini = document.querySelectorAll('.fa-truck-fast');

let columns = document.querySelectorAll('.col-custom');

let columnsConfirm = false;



columns.forEach((colonna, i)=>{

    colonna.addEventListener('mouseenter', ()=>{

        if(columnsConfirm == false){

            camioncini[i].classList.remove('text-grigio');
            camioncini[i].classList.add('text-secondaryC');

        }else{

            camioncini[i].classList.remove('text-primaryC');

        }



    })

    colonna.addEventListener('mouseleave', ()=>{

        if(columnsConfirm == false){

            camioncini[i].classList.remove('text-secondaryC');
            camioncini[i].classList.add('text-primaryC');
            
            
            
            columnsConfirm = true;
            
        }else{
            
            
            camioncini[i].classList.add('text-grigio');
            




            columnsConfirm = false;
        }


    })

    
    
});