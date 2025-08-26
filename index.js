const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 7000);
    }

    // обработка
    document.addEventListener("keydown", function(event){
        if(event.key === "ArrowRight"){   // right
            nextSlide();
            resetInterval();
        }
        else if(event.key === "ArrowLeft"){  //  left
            prevSlide();
            resetInterval();
        }
    });
}

function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}

function resetInterval(){
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 7000);
}
