/*******************************
    📸 Lightbox للصور
*******************************/
const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.getElementById("closeBtn");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let currentIndex = 0;

// فتح الصورة عند الضغط
images.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        openLightbox();
    });
});

function openLightbox() {
    lightbox.style.display = "flex";
    lightboxImg.src = images[currentIndex].src;
}

// إغلاق Lightbox
closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// التالي
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex].src;
});

// السابق
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex].src;
});

// دعم الكيبورد
document.addEventListener("keydown", (e) => {
    if (lightbox.style.display === "flex") {
        if (e.key === "ArrowRight") nextBtn.click();
        if (e.key === "ArrowLeft") prevBtn.click();
        if (e.key === "Escape") lightbox.style.display = "none";
    }
});

// دعم السحب على الجوال
let touchStartX = 0;

lightbox.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
});

lightbox.addEventListener("touchend", (e) => {
    let touchEndX = e.changedTouches[0].clientX;

    if (touchStartX - touchEndX > 50) {
        nextBtn.click();
    } 
    else if (touchEndX - touchStartX > 50) {
        prevBtn.click();
    }
});


/*******************************
     📂 Dropdown Menu
*******************************/
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(drop => {
  const btn = drop.querySelector('.dropbtn');
  const menuItems = drop.querySelector('.menu-items');

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdowns.forEach(d => {
      if (d !== drop) d.querySelector('.menu-items').style.display = 'none';
    });
    menuItems.style.display = (menuItems.style.display === 'block') ? 'none' : 'block';
  });

  menuItems.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});

// إغلاق عند الضغط بالخارج
document.addEventListener('click', () => {
  dropdowns.forEach(drop => {
    drop.querySelector('.menu-items').style.display = 'none';
  });
});


/*******************************
     🍔 زر القائمة للجوال
*******************************/
const hamburger = document.querySelector('.hamburger');
const mainMenu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  mainMenu.style.display =
    (mainMenu.style.display === "flex") ? "none" : "flex";
});


/*******************************
     🎉 رسالة ترحيبية أنيقة
*******************************/
window.addEventListener("load", () => {
    const welcomeBox = document.createElement("div");
    welcomeBox.innerHTML = `
        <div class="welcome-overlay">
            <div class="welcome-card">
                <h2>مرحباً بك </h2>
                <p>سعداء بزيارتك ونتمنى لك تجربة ممتعة.</p>
                <button id="closeWelcome">متابعة</button>
            </div>
        </div>
    `;
    document.body.appendChild(welcomeBox);

    document.getElementById("closeWelcome").addEventListener("click", () => {
        const overlay = document.querySelector(".welcome-overlay");
        overlay.style.opacity = "0";
        setTimeout(() => overlay.remove(), 300);
    });
});


/*******************************
     🔒 حماية بسيطة للصفحة
*******************************/

// منع كليك يمين
document.addEventListener("contextmenu", e => e.preventDefault());

// منع F12 + Ctrl+Shift+I + Ctrl+Shift+J + Ctrl+U
document.addEventListener("keydown", function(e) {
    if (e.key === "F12" || 
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) ||
        (e.ctrlKey && e.key === "U")) {
        e.preventDefault();
    }
});

// // منع سحب الصور
document.querySelectorAll("img").forEach(img => {
    img.setAttribute("draggable", "false");
});
