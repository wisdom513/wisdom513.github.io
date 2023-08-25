      
        
let state = 0;

let changeIcon = function(icon){
        icon.classList.toggle('fa-x');
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
        swich.style.transform = 'translateX(48px)';
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

function scales(){
        let big = document.getElementById('big');
        big.style.width = '38px';
        big.style.height = '38px';
}

function bigImg(x) {
        x.style.height = "64px";
        x.style.width = "64px";
      }
      
      function normalImg(x) {
        x.style.height = "32px";
        x.style.width = "32px";
      }
