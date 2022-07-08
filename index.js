const sliderLine = document.querySelector('.slider-line');
      prevBtn = document.querySelector('.btn-prev');
      nextBtn = document.querySelector('.btn-next');
      dots = document.querySelectorAll('.dot');
let position = 0;
    dotIndex = 0;

const nextSlide =()=>{
  if(position < ((dots.length -1)*400)){
    position += 400;
  }else{
    position = 0;
  }
  sliderLine.style.left = -position + 'px';
  
}
const prevSlide =()=>{
  if(position > 0){
    position -= 400;
  }else{
    position = (dots.length -1)*400;
  }
  sliderLine.style.left = -position + 'px';
  
}
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
dots.forEach((dot, index) => {
  dot.addEventListener('click',()=>{
    position = 400 * index;
    sliderLine.style.left = -position + 'px';
  })
})