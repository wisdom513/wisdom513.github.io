      
        
let state = 0;

function on(){
        if(state === 0){
                let nav_bar = document.getElementById('nav');
                nav_bar.style.display = 'inline-block';
                nav_bar.style.width = '100%';
                nav_bar.style.height = '400px';
                state = 1;     
        }else{
                let nav_bar = document.getElementById('nav');
                nav_bar.style.display = 'none';
                state = 0; 
        }
}

let tag = 0;
function theme(){
       if(tag === 0){
        let swich = document.getElementById('swich');
        swich.style.transform = 'translateX(38px)';
        let body = document.body;
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        let nav = document.getElementById('nav');
        nav.style.color = 'white';
        tag = 1;
       }else{
        let swich = document.getElementById('swich');
        swich.style.transform = 'translateX(0px)';
        let body = document.body;
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        tag = 0;
       } 
}