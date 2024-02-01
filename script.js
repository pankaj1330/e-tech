
const toggleNav = document.querySelector('.toggle-nav');
const navlist = document.querySelector('.navlist');

toggleNav.addEventListener('click',()=>{
    navlist.classList.toggle('show');
})

const next = document.getElementById('next');
const prev = document.getElementById('prev');
const sliderimg = document.querySelectorAll('.slider .img');
let slidenum = 0;

function showSlide(){
    sliderimg.forEach(img => {
        img.style.transform = `translateX(-${100*slidenum}%)`; 
    })
}

next.addEventListener('click',()=>{
    slidenum = slidenum+1;
    if(slidenum >= sliderimg.length){
        slidenum = 0;
    }
    showSlide();
})
prev.addEventListener('click',()=>{
    slidenum = slidenum-1;
    if(slidenum < 0){
        slidenum = sliderimg.length-1;
    }
    showSlide();
})

let autoSlide = setInterval(()=>{
    slidenum = slidenum+1;
    if(slidenum >= sliderimg.length){
        slidenum = 0;
    }
    showSlide();
},2500);

let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial article');

function nextTestimonial(){
    testimonials.forEach((review)=>{
        if(review.classList.contains('current')){
            review.classList.remove('current');
            review.classList.add('prev');
        }
        else if(review.classList.contains('prev')){
            review.classList.remove('prev');
            review.classList.add('prev2');
        }
        else if(review.classList.contains('next')){
            review.classList.remove('next');
            review.classList.add('current');
        }
        else if(review.classList.contains('prev2')){
            review.classList.remove('prev2');
            review.classList.add('next2');
        }
        else{
            review.classList.remove('next2');
            review.classList.add('next');
        }
    })
}
function prevTestimonial(){
    testimonials.forEach((review)=>{
        if(review.classList.contains('current')){
            review.classList.remove('current');
            review.classList.add('next');
        }
        else if(review.classList.contains('prev')){
            review.classList.remove('prev');
            review.classList.add('current');
        }
        else if(review.classList.contains('next')){
            review.classList.remove('next');
            review.classList.add('next2');
        }
        else if(review.classList.contains('prev2')){
            review.classList.remove('prev2');
            review.classList.add('prev');
        }
        else{
            review.classList.remove('next2');
            review.classList.add('prev2');
        }
    })
}
