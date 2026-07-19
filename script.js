/*=========================================
  Happy Birthday Bebbo ❤️
  Made by Bebbe
==========================================*/

const loader = document.getElementById("loader");
const openBtn = document.getElementById("openBtn");
const gift = document.getElementById("gift");
const bgMusic = document.getElementById("bgMusic");
const typing = document.getElementById("typing");
const letter = document.getElementById("letterContent");
const cakeBtn = document.getElementById("blow");
const heartsContainer = document.getElementById("floating-hearts");
const envelope = document.getElementById("envelope");

const sections = document.querySelectorAll(".page");

/*=============================
LOADER
==============================*/

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1800);

});


/*=============================
SCROLL SECTION
==============================*/

function scrollToSection(index){

    sections[index].scrollIntoView({

        behavior:"smooth"

    });

}


/*=============================
TYPING EFFECT
==============================*/

const message = `

Selamat ulang tahun Bebbo cantikku ❤️

Hari ini hari spesial sekalii for tp bebbo.

Terima kasih so slalu ada kemanapun dan dimanapun qt berada.

Semoga di umur yang baru ini Tuhan selalu memberi kesehatan, sukacita, damai sejahtera, dan memberkati setiap langkah dan masa depan.

semoga trg bole selalu bersama,
saling menguatkan,
saling mendukung,
dan terus bertumbuh dalam kasih Tuhan.

Happy Birthday Bebbo ❤️

I Love You, yesterday, today, tomorrow, and forever. ❤️

- Bebbe

`;

let typingIndex = 0;

function typeWriter(){

    if(typingIndex < message.length){

        typing.innerHTML += message.charAt(typingIndex);

        typingIndex++;

        setTimeout(typeWriter,45);

    }

}


/*=============================
OPEN GIFT
==============================*/

openBtn.addEventListener("click",()=>{

    gift.style.transform="scale(1.4) rotate(20deg)";

    gift.innerHTML="💖";

    confetti({

        particleCount:220,

        spread:160,

        origin:{y:0.6}

    });

    bgMusic.play();

    typeWriter();

    setTimeout(()=>{

        scrollToSection(1);

    },1500);

});


/*=============================
LETTER
==============================*/

if(envelope && letter){

    envelope.addEventListener("click",()=>{

        envelope.style.display="none";

        letter.style.display="block";

        confetti({

            particleCount:120,
            spread:90

        });

        letter.scrollIntoView({

            behavior:"smooth"

        });

    });

}


/*=============================
CAKE
==============================*/

cakeBtn.addEventListener("click",()=>{

    document.getElementById("cake").innerHTML="🧁";

    confetti({

        particleCount:300,

        spread:200,

        origin:{y:0.7}

    });

    alert("Happy Birthday Bebbo ❤️");

});
/*=========================================
FLOATING HEARTS
==========================================*/

function createHeart(x = null, y = null){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = ["❤️","💖","💕","💗","💘"][Math.floor(Math.random()*5)];

    if(x == null){

        heart.style.left = Math.random()*100 + "vw";

        heart.style.bottom = "-50px";

    }else{

        heart.style.left = x + "px";

        heart.style.top = y + "px";

    }

    heart.style.fontSize = (18 + Math.random()*22) + "px";

    heart.style.animationDuration = (4 + Math.random()*4) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },7000);

}


/*=========================================
AUTO HEART
==========================================*/

setInterval(()=>{

    createHeart();

},450);



/*=========================================
TOUCH HEART
==========================================*/

document.addEventListener("touchstart",(e)=>{

    const touch=e.touches[0];

    for(let i=0;i<8;i++){

        setTimeout(()=>{

            createHeart(

                touch.clientX+(Math.random()*80-40),

                touch.clientY+(Math.random()*80-40)

            );

        },i*40);

    }

});



document.addEventListener("click",(e)=>{

    for(let i=0;i<8;i++){

        setTimeout(()=>{

            createHeart(

                e.clientX+(Math.random()*80-40),

                e.clientY+(Math.random()*80-40)

            );

        },i*40);

    }

});



/*=========================================
SCROLL ANIMATION
==========================================*/

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:0.2
});


sections.forEach(section=>{

    section.style.opacity="0";

    section.style.transform="translateY(60px)";

    section.style.transition="1s";

    observer.observe(section);

});


/*=========================================
PHOTO HOVER EFFECT
==========================================*/

document.querySelectorAll(".gallery img").forEach(img=>{

    img.addEventListener("click",()=>{

        img.style.transform="scale(1.08)";

        setTimeout(()=>{

            img.style.transform="scale(1)";

        },300);

    });

});


/*=========================================
RANDOM SPARKLE
==========================================*/

function sparkle(){

    const sparkle=document.createElement("div");

    sparkle.innerHTML="✨";

    sparkle.style.position="fixed";

    sparkle.style.left=Math.random()*100+"vw";

    sparkle.style.top=Math.random()*100+"vh";

    sparkle.style.fontSize=(10+Math.random()*20)+"px";

    sparkle.style.pointerEvents="none";

    sparkle.style.opacity="0";

    sparkle.style.transition="2s";

    document.body.appendChild(sparkle);

    requestAnimationFrame(()=>{

        sparkle.style.opacity="1";

        sparkle.style.transform="translateY(-30px)";

    });

    setTimeout(()=>{

        sparkle.remove();

    },2000);

}

setInterval(sparkle,900);



/*=========================================
OPENING FADE
==========================================*/

gift.addEventListener("mouseenter",()=>{

    gift.style.transform="scale(1.15) rotate(10deg)";

});

gift.addEventListener("mouseleave",()=>{

    gift.style.transform="scale(1)";

});

/*=========================================
LOVE COUNTER
02 November 2021 ❤️
==========================================*/

const startDate = new Date("2021-11-02T00:00:00");

const yearEl = document.getElementById("years");
const monthEl = document.getElementById("months");
const dayEl = document.getElementById("days");

// Jika nanti kamu menambah card jam, menit, detik
const hourEl = document.getElementById("hours");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");

function updateLoveCounter(){

    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    if(days < 0){

        months--;

        const lastMonth = new Date(
            now.getFullYear(),
            now.getMonth(),
            0
        );

        days += lastMonth.getDate();

    }

    if(months < 0){

        years--;

        months += 12;

    }

    yearEl.textContent = years;
    monthEl.textContent = months;
    dayEl.textContent = days;

    if(hourEl){

        hourEl.textContent =
        String(now.getHours()).padStart(2,"0");

    }

    if(minuteEl){

        minuteEl.textContent =
        String(now.getMinutes()).padStart(2,"0");

    }

    if(secondEl){

        secondEl.textContent =
        String(now.getSeconds()).padStart(2,"0");

    }

}

updateLoveCounter();

setInterval(updateLoveCounter,1000);



/*=========================================
LOVE MESSAGE
==========================================*/

const loveMessages=[

"❤️ Terima kasih sudah menjadi bagian terindah dalam hidupku.",

"🌹 Bersamamu setiap hari terasa lebih indah.",

"🥰 Senyummu selalu membuat hariku lebih baik.",

"💖 Aku bersyukur kepada Tuhan karena mempertemukan kita.",

"💕 Semoga kita terus bersama dalam suka maupun duka.",

"✨ Kamu adalah alasan mengapa aku selalu ingin menjadi lebih baik.",

"🤍 Aku akan selalu mendukung setiap impianmu.",

"🌸 Happy Birthday Bebbo Cantikku.",

"💍 Semoga suatu hari nanti kita bisa mewujudkan semua mimpi kita bersama."

];





/*=========================================
CARD ANIMATION
==========================================*/

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px) scale(1.05)";

        card.style.transition=".3s";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) scale(1)";

    });

});



/*=========================================
LOVE QUOTES
==========================================*/

const quotes=[

"Every love story is beautiful, but ours is my favorite ❤️",

"I love you more than yesterday, but less than tomorrow ❤️",

"Forever isn't long enough with you ❤️",

"You are my answered prayer ❤️",

"God's greatest gift to me is you ❤️"

];

function randomQuote(){

    const q=document.createElement("div");

    q.innerHTML=quotes[Math.floor(Math.random()*quotes.length)];

    q.style.position="fixed";

    q.style.left="50%";

    q.style.top="15%";

    q.style.transform="translateX(-50%)";

    q.style.padding="12px 20px";

    q.style.background="rgba(255,255,255,.85)";

    q.style.borderRadius="30px";

    q.style.boxShadow="0 10px 30px rgba(0,0,0,.12)";

    q.style.zIndex="999";

    q.style.opacity="0";

    q.style.transition=".6s";

    document.body.appendChild(q);

    requestAnimationFrame(()=>{

        q.style.opacity="1";

    });

    setTimeout(()=>{

        q.style.opacity="0";

    },3500);

    setTimeout(()=>{

        q.remove();

    },4200);

}

setInterval(randomQuote,20000);

/*=========================================
PHOTO SLIDER
==========================================*/

const gallery = document.querySelector(".gallery");
const galleryImages = document.querySelectorAll(".gallery img");

let currentSlide = 0;

function goToSlide(index){

    if(index < 0){
        index = galleryImages.length - 1;
    }

    if(index >= galleryImages.length){
        index = 0;
    }

    currentSlide = index;

    updateDots();

}


/*=========================================
AUTO SLIDE
==========================================*/

// setInterval(()=>{

//     goToSlide(currentSlide + 1);

// },5000);



/*=========================================
DOT INDICATOR
==========================================*/

const dotsContainer = document.createElement("div");

dotsContainer.className="gallery-dots";

gallery.after(dotsContainer);

galleryImages.forEach((img,index)=>{

    const dot=document.createElement("span");

    dot.className="dot";

    if(index===0){

        dot.classList.add("active");

    }

    dot.addEventListener("click",()=>{

        goToSlide(index);

    });

    dotsContainer.appendChild(dot);

});

const dots=document.querySelectorAll(".dot");

function updateDots(){

    dots.forEach(dot=>{

        dot.classList.remove("active");

    });

    dots[currentSlide].classList.add("active");

}



/*=========================================
FULLSCREEN PHOTO
==========================================*/

const modal=document.createElement("div");

modal.className="photo-modal";

modal.innerHTML=`

<div class="photo-close">✖</div>

<img id="modalImage">

`;

document.body.appendChild(modal);

const modalImg=document.getElementById("modalImage");

galleryImages.forEach(img=>{

    img.addEventListener("click",()=>{

        modal.style.display="flex";

        modalImg.src=img.src;

        modal.style.opacity="0";

        requestAnimationFrame(()=>{

            modal.style.opacity="1";

        });

    });

});

document.querySelector(".photo-close").onclick=()=>{

    modal.style.opacity="0";

    setTimeout(()=>{

        modal.style.display="none";

    },300);

};



/*=========================================
SWIPE
==========================================*/

let startX=0;

gallery.addEventListener("touchstart",(e)=>{

    startX=e.touches[0].clientX;

});

gallery.addEventListener("touchend",(e)=>{

    let endX=e.changedTouches[0].clientX;

    if(startX-endX>50){

        goToSlide(currentSlide+1);

    }

    if(endX-startX>50){

        goToSlide(currentSlide-1);

    }

});



/*=========================================
PARALLAX PHOTO
==========================================*/

window.addEventListener("scroll",()=>{

    galleryImages.forEach((img)=>{

        let speed=window.scrollY*0.02;

        img.style.transform=`translateY(${speed}px)`;

    });

});



/*=========================================
LOVE EFFECT ON PHOTO
==========================================*/

galleryImages.forEach(img=>{

    img.addEventListener("dblclick",()=>{

        const heart=document.createElement("div");

        heart.innerHTML="❤️";

        heart.style.position="absolute";

        heart.style.fontSize="50px";

        heart.style.left="50%";

        heart.style.top="50%";

        heart.style.transform="translate(-50%,-50%)";

        heart.style.animation="beat 1s";

        img.parentElement.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },900);

    });

});



/*=========================================
PHOTO RANDOM SCALE
==========================================*/

setInterval(()=>{

    const random=Math.floor(Math.random()*galleryImages.length);

    galleryImages[random].style.transform="scale(1.03)";

    setTimeout(()=>{

        galleryImages[random].style.transform="scale(1)";

    },1200);

},3500);

/*=========================================
FINAL PREMIUM EFFECT
==========================================*/


/*=========================================
NIGHT SKY STARS
==========================================*/

function createStar(){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.animationDuration=
    (2+Math.random()*4)+"s";

    document.body.appendChild(star);

}

for(let i=0;i<120;i++){

    createStar();

}



/*=========================================
SHOOTING STAR
==========================================*/

function shootingStar(){

    const meteor=document.createElement("div");

    meteor.className="meteor";

    meteor.style.top=
    Math.random()*50+"vh";

    meteor.style.left=
    Math.random()*100+"vw";

    document.body.appendChild(meteor);

    setTimeout(()=>{

        meteor.remove();

    },2500);

}

setInterval(shootingStar,7000);



/*=========================================
ENDING CONFETTI
==========================================*/

const ending=document.getElementById("ending");

let endingTriggered=false;

window.addEventListener("scroll",()=>{

    const rect=ending.getBoundingClientRect();

    if(rect.top<200 && !endingTriggered){

        endingTriggered=true;

        confetti({

            particleCount:400,

            spread:180,

            origin:{y:0.6}

        });

    }

});



/*=========================================
MUSIC FADE IN
==========================================*/

function fadeMusic(){

    bgMusic.volume=0;

    let vol=0;

    const interval=setInterval(()=>{

        vol+=0.05;

        if(vol>=1){

            vol=1;

            clearInterval(interval);

        }

        bgMusic.volume=vol;

    },300);

}



/*=========================================
OVERRIDE OPEN BUTTON
==========================================*/

openBtn.addEventListener("click",()=>{

    fadeMusic();

});



/*=========================================
LOVE LETTER ANIMATION
==========================================*/

if(letter){

    letter.style.opacity="0";

    letter.style.transform="translateY(50px)";

    letter.style.transition=".8s";

}

if (envelope && letter) {

    envelope.addEventListener("click", () => {

        console.log("Amplop diklik");

        envelope.style.display = "none";

        letter.style.cssText = `
            display:block !important;
            opacity:1 !important;
            visibility:visible !important;
            position:relative;
            z-index:9999;
            background:white;
        `;

    });

}




/*=========================================
CAKE CELEBRATION
==========================================*/

cakeBtn.addEventListener("click",()=>{

    confetti({

        particleCount:500,

        spread:200,

        startVelocity:60

    });

    setTimeout(()=>{

        confetti({

            particleCount:300,

            spread:120

        });

    },500);

});



/*=========================================
SCROLL PROGRESS BAR
==========================================*/

const progress=document.createElement("div");

progress.id="progressBar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

    const totalHeight=

    document.documentElement.scrollHeight-

    window.innerHeight;

    const progressHeight=

    (window.pageYOffset/totalHeight)*100;

    progress.style.width=

    progressHeight+"%";

});



/*=========================================
LOVE POPUP
==========================================*/

setTimeout(()=>{

    const popup=document.createElement("div");

    popup.className="love-popup";

    popup.innerHTML=`

    ❤️

    Happy Birthday Bebbo

    ❤️

    `;

    document.body.appendChild(popup);

    setTimeout(()=>{

        popup.remove();

    },5000);

},8000);



/*=========================================
SECRET EASTER EGG
==========================================*/

let clickCount=0;

gift.addEventListener("click",()=>{

    clickCount++;

    if(clickCount===10){

        alert(

        "❤️ Bebbo + Bebbe Forever ❤️"

        );

    }

});



/*=========================================
TITLE ANIMATION
==========================================*/

const originalTitle=document.title;

let blink=false;

setInterval(()=>{

    if(document.hidden){

        document.title=

        blink ?

        "❤️ Bebbo Jangan Pergi ❤️"

        :

        "🥺 Kembali Lagi Sayang";

        blink=!blink;

    }else{

        document.title=originalTitle;

    }

},1500);



/*=========================================
FINAL MESSAGE
==========================================*/

console.log(`

❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️

Happy Birthday Bebbo

Dari Bebbe

20 Juli 2026

❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️

`);

