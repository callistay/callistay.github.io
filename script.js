const wrapper = document.querySelector("wrapper")
const question = document.querySelector("question")
const gif = document.querySelector("gif")
const yesBtn = document.querySelector("yes-btn")
const noBtn = document.querySelector("no-btn")

yesBtn.addEventListener("click",() =>{
    question.innerHTML = "MAS JUGA SAYANG KAMU KOK DEK"
    gif.src = 
    "https://raw.githubusercontent.com/DzareDevloper/img/main/gif.webp"
});

noBtn.addEventListener("mouseover", () => {
    const noBtnrect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnrect.width;
    const maxY = window.innerHeight -noBtnrect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math,random() * maxY);

    noBtn.sytle.left = randomX + "px";
    noBtn.sytle.top = randomY + "px"; 
});