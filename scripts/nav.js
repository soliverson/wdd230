document.addEventListener('DOMContentLoaded', function () {
    const hamBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const nav = document.querySelector('#nav');
 
    hamBtn.addEventListener('click', function() {
        
       // Apply scale
       hamBtn.style.transform = 'scale(0.90)';
 
       setTimeout(function(){
          hamBtn.transform = 'scale(1)';
          nav.classList.remove('nav-menu-close');
          closeBtn.classList.remove('close-close-btn');
          hamBtn.classList.add('close-ham-btn');
       }, 150);
    }); 
 
    closeBtn.addEventListener('click', function(){
 
       closeBtn.style.transform = 'scale(0.90)';
       
        // Revert scale after a delay
        setTimeout(function() {
          closeBtn.style.transform = 'scale(1)';
          nav.classList.add('nav-menu-close');
          hamBtn.classList.remove('close-ham-btn');
          closeBtn.classList.add('close-close-btn');
      }, 150);
    });
 });