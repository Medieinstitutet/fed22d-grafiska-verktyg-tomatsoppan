//cookie btns
const cookieBtns = document.querySelectorAll(".cookie-btn");
const cookieBox = document.querySelector(".cookie-box");

//close cookie box when either btn is clicked on
const hideCookieBoxFn = () => cookieBox.classList.add("hidden");
const hideCookies = (btn) => btn.addEventListener("click", hideCookieBoxFn);

cookieBtns.forEach(hideCookies);
