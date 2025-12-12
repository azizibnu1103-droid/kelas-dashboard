/* ============================================================
   1. ANIMASI SCROLL REVEAL (LEBIH HALUS & EFEK SLIDE)
   ============================================================ */
const revealElements = document.querySelectorAll(".reveal");

function enhancedReveal() {
    revealElements.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        const trigger = window.innerHeight * 0.88;

        if (top < trigger) {
            el.classList.add("revealed");
        }
    });
}

window.addEventListener("scroll", enhancedReveal);
window.addEventListener("load", enhancedReveal);


/* Tambahkan CSS berikut di style.css:

.reveal {
    opacity: 0;
    transform: translateY(40px);
    transition: 0.7s ease;
}

.reveal.revealed {
    opacity: 1;
    transform: translateY(0);
}
*/


/* ============================================================
   2. HOVER GLOW UNTUK SEMUA KARTU (TAMPIL MAHAL)
   ============================================================ */
document.querySelectorAll(".profile-card, .member-card").forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);
    });
});

/* Tambahkan di CSS:

.profile-card,
.member-card {
    position: relative;
    overflow: hidden;
}

.profile-card::before,
.member-card::before {
    content: "";
    position: absolute;
    top: var(--y);
    left: var(--x);
    width: 0;
    height: 0;
    transform: translate(-50%, -50%);
    background: rgba(255,255,255,0.18);
    filter: blur(25px);
    border-radius: 50%;
    transition: width .25s, height .25s;
}

.profile-card:hover::before,
.member-card:hover::before {
    width: 140px;
    height: 140px;
}
*/


/* ============================================================
   3. PARALLAX PADA HEADER – BIAR KEREN SAAT SCROLL
   ============================================================ */
window.addEventListener("scroll", () => {
    const offset = window.scrollY * 0.4;
    document.querySelector(".header").style.backgroundPositionY = `${offset}px`;
});


/* ============================================================
   4. RIPPLE CLICK EFFECT (EFEK GELOMBANG SAAT KLIK)
   ============================================================ */
function addRippleEffect(element) {
    element.addEventListener("click", function (e) {
        const circle = document.createElement("span");
        circle.classList.add("ripple");

        const rect = this.getBoundingClientRect();
        circle.style.left = `${e.clientX - rect.left}px`;
        circle.style.top = `${e.clientY - rect.top}px`;

        this.appendChild(circle);

        setTimeout(() => circle.remove(), 600);
    });
}

document.querySelectorAll("button, a.btn, .profile-card, .member-card")
        .forEach(el => addRippleEffect(el));

/* Tambahkan CSS:

.ripple {
    position: absolute;
    width: 12px;
    height: 12px;
    background: rgba(255,255,255,0.4);
    border-radius: 50%;
    transform: scale(0);
    animation: rippleAnim 0.6s ease-out;
    pointer-events: none;
}

@keyframes rippleAnim {
    to {
        transform: scale(25);
        opacity: 0;
    }
}
*/


/* ============================================================
   5. ZOOM HALUS SAAT GANTI FOTO PREVIEW ALBUM
   ============================================================ */
thumbs.forEach(thumb => {
    thumb.addEventListener("click", () => {
        previewImg.style.transform = "scale(0.92)";
        setTimeout(() => {
            previewImg.style.transform = "scale(1)";
            previewImg.style.transition = "0.25s ease";
        }, 80);
    });
});


/* ============================================================
   6. FLOATING ANIMATION UNTUK JUDUL / SECTION
   ============================================================ */
document.querySelectorAll(".section-title").forEach(title => {
    title.classList.add("float-anim");
});

/* Tambahkan ke CSS:

.float-anim {
    animation: floaty 4s ease-in-out infinite;
}

@keyframes floaty {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
    100% { transform: translateY(0px); }
}
*/
