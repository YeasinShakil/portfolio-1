const sections = document.querySelectorAll('.section');
const sectionBtns = document.querySelectorAll('.controls');
const sectionBtn = document.querySelectorAll('.control');
const allSection = document.querySelector('.main-content');


function sectionTransition() {
    for(let i = 0; i < sectionBtn.length; i++) {
        sectionBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '')
            this.className += ' active-btn';
        })
    }

    // adding active class to all section

    allSection.addEventListener('click', function(e){
       let id = e.target.dataset.id;
    //    console.log(id)
    if(id) {
        // remove selection from other button
        sectionBtns.forEach((btn) => {
            btn.classList.remove('active');
        })
        e.target.classList.add('active')
        // Hide non selected button
        sections.forEach(section => {
            section.classList.remove('active')
        })

        const element = document.getElementById(id);
        element.classList.add('active');

    }
    })
    // Toggle Button
    
    const toggleBtn = document.querySelector('.theme-btn');
    console.log(toggleBtn)
    
    toggleBtn.addEventListener('click', ()=> {
        let element = document.body;
        element.classList.toggle('light-mode')
    })
}


sectionTransition()