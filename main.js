let menu = document.querySelector(".opens")
let lock = document.querySelector(".close")
const locks = document.querySelector(".closes")
menu.addEventListener('click', function () {
      if (menu.className != 'open') {
         lock.style.display = 'block'
         menu.style.display = 'none'
      } else {
          menu.className = 'open';
         lock.style.display = 'none'
      }
     
      
  })
  locks.addEventListener('click', function () {
      if (lock.className != 'open') {
          menu.style.display = 'block';
          lock.style.display = 'none';
      } else {
          lock.className = 'open';
          menu.style.display = 'none';
      }
  })
// window.addEventListener('click', function() {
//       lock.style.display = 'none';
// })



let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
      showSlides(slideIndex += n);
    }

function showSlides(n) {
      
      let slides = document.getElementsByClassName("img");
      
      if (n > slides.length) {
            slideIndex = 1
      }
      if (n < 1) {
            slideIndex = slides.length
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      slides[slideIndex-1].style.display = "block";



      let slider = document.getElementsByClassName("imgs");
      
      if (n >slider.length) {
            slideIndex = 1
      }
      if (n < 1) {
            slideIndex =slider.length
      }
      for (i = 0; i <slider.length; i++) {
       slider[i].style.display = "none";
      }

     slider[slideIndex-1].style.display = "block";



      let text = document.getElementsByClassName("room2-wrap");

      if (n > text.length) {
            slideIndex = 1
      }
      if (n < 1) {
            slideIndex = text.length
      }
      for (i = 0; i < text.length; i++) {
        text[i].style.display = "none";
      }

      text[slideIndex-1].style.display = "block";
    }