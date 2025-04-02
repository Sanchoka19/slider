const contentCon = document.querySelectorAll(".slider-item-content");
const desCon = document.querySelectorAll(".slider-item-content-description");
const thumbCon = document.querySelectorAll(".thumbnail-item");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");


const sliderMaxSize = contentCon.length;
let curentSlide = 0;


nextBtn.addEventListener("click", () => {
    curentSlide = curentSlide + 1;

    if (curentSlide >= sliderMaxSize) {
        curentSlide = 0;
    }

    changeSlide();
})


prevBtn.addEventListener("click", () => {
    curentSlide = curentSlide - 1;

    if (curentSlide < 0) {
        curentSlide = sliderMaxSize - 1;
    }

    changeSlide();
})

const changeSlide = () => {
    const oldContentCon = document.querySelector(".slider-item-content.active");
    const oldDesCon = document.querySelector(".slider-item-content-description.active");
    const oldThumDesCon = document.querySelector(".thumbnail-item.active");

    oldContentCon.classList.remove("active");
    oldDesCon.classList.remove("active");
    oldThumDesCon.classList.remove("active");

    contentCon[curentSlide].classList.add("active");
    desCon[curentSlide].classList.add("active");
    thumbCon[curentSlide].classList.add("active");
}

thumbCon.forEach((item, index) => (
    item.addEventListener("click", () => {
        curentSlide = index;
        changeSlide();
    })
));

setInterval(() => {
    curentSlide = curentSlide + 1;

    if (curentSlide >= sliderMaxSize) {
        curentSlide = 0;
    }

    changeSlide();
}, 5000);

