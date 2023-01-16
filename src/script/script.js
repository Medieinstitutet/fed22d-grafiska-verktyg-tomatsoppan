//cookie btns
const cookieBtns = document.querySelectorAll('.cookie-btn')
const cookieBox = document.querySelector('.cookie-box')

//close cookie box when either btn is clicked on
const hideCookieBoxFn = () => cookieBox.classList.add('hidden')
const hideCookies = btn => btn.addEventListener('click', hideCookieBoxFn)

cookieBtns.forEach(hideCookies)


// create zig zag pattern
const svg = viewbox => {
    const string = `
    <svg version="1.1" id="zigzag" class="zig-zag-border" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" ${viewbox}
        style="enable-background:new 0 0 390 12;" xml:space="preserve">
        <g>
            <g>
                <path class="st0" d="M31,1l4.5,5l-4.5,5l-4.5-5L31,1z" />
                <path class="st0" d="M93,1.1l4.5,5L93,11l-4.5-5L93,1.1z" />
                <path class="st0" d="M39.9,1.1l4.5,5l-4.5,5l-4.5-5L39.9,1.1z" />
                <path class="st0" d="M48.7,1.1l4.5,5l-4.5,5l-4.5-5L48.7,1.1z" />
                <path class="st0" d="M57.5,1.1L62,6l-4.5,4.9L53,6L57.5,1.1z" />
                <path class="st0" d="M66.4,1l4.5,5l-4.5,5l-4.5-5L66.4,1z" />
                <path class="st0" d="M75.2,1.1l4.5,5l-4.5,5l-4.5-5L75.2,1.1z" />
                <path class="st0" d="M84.1,1l4.4,5l-4.5,5l-4.5-5L84.1,1z" />
                <path class="st0" d="M22,1.1l4.5,5L22,11l-4.5-5L22,1.1z" />
                <path class="st0" d="M13.3,1l4.5,5l-4.5,5L8.8,6L13.3,1z" />
                <path class="st0" d="M4.5,1.1L9,6l-4.5,4.9L0,6L4.5,1.1z" />
            </g>
            <g>
                <path class="st0" d="M128.5,1l4.5,5l-4.5,5L124,6L128.5,1z" />
                <path class="st0" d="M190.5,1.1l4.5,5l-4.5,5L186,6L190.5,1.1z" />
                <path class="st0" d="M137.4,1.1l4.5,5l-4.5,5l-4.5-5L137.4,1.1z" />
                <path class="st0" d="M146.2,1.1l4.5,5l-4.5,5l-4.5-5L146.2,1.1z" />
                <path class="st0" d="M155,1.1l4.5,5l-4.5,5l-4.5-5L155,1.1z" />
                <path class="st0" d="M163.9,1l4.5,5l-4.5,5l-4.4-5L163.9,1z" />
                <path class="st0" d="M172.7,1.1l4.5,5l-4.5,5l-4.5-5L172.7,1.1z" />
                <path class="st0" d="M181.6,1l4.5,5l-4.5,5l-4.5-5L181.6,1z" />
                <path class="st0" d="M119.5,1.1l4.5,5l-4.5,5L115,6L119.5,1.1z" />
                <path class="st0" d="M110.8,1l4.5,5l-4.5,5l-4.5-5L110.8,1z" />
                <path class="st0" d="M102,1.1l4.5,5l-4.5,5l-4.5-5L102,1.1z" />
            </g>
            <g>
                <path class="st0" d="M226,1l4.5,5l-4.5,5l-4.5-5L226,1z" />
                <path class="st0" d="M288,1.1l4.5,5l-4.5,5l-4.5-5L288,1.1z" />
                <path class="st0" d="M234.9,1.1l4.5,5l-4.5,5l-4.5-5L234.9,1.1z" />
                <path class="st0" d="M243.7,1.1l4.5,5l-4.5,5l-4.5-5L243.7,1.1z" />
                <path class="st0" d="M252.5,1.1l4.5,5l-4.5,5L248,6L252.5,1.1z" />
                <path class="st0" d="M261.4,1l4.5,5l-4.5,5l-4.5-5L261.4,1z" />
                <path class="st0" d="M270.2,1.1l4.5,5l-4.5,5l-4.5-5L270.2,1.1z" />
                <path class="st0" d="M279.1,1l4.5,5l-4.5,5l-4.5-5L279.1,1z" />
                <path class="st0" d="M217,1.1l4.5,5l-4.5,5l-4.5-5L217,1.1z" />
                <path class="st0" d="M208.3,1l4.5,5l-4.5,5l-4.5-5L208.3,1z" />
                <path class="st0" d="M199.5,1.1l4.5,5l-4.5,5L195,6L199.5,1.1z" />
            </g>
            <g>
                <path class="st0" d="M323.5,1l4.5,5l-4.5,5L319,6L323.5,1z" />
                <path class="st0" d="M385.5,1.1l4.5,5l-4.5,5L381,6L385.5,1.1z" />
                <path class="st0" d="M332.4,1.1l4.5,5l-4.5,5l-4.5-5L332.4,1.1z" />
                <path class="st0" d="M341.2,1.1l4.5,5l-4.5,5l-4.5-5L341.2,1.1z" />
                <path class="st0" d="M350,1.1l4.5,5l-4.5,5l-4.5-5L350,1.1z" />
                <path class="st0" d="M358.9,1l4.5,5l-4.5,5l-4.4-5L358.9,1z" />
                <path class="st0" d="M367.7,1.1l4.5,5l-4.5,5l-4.5-5L367.7,1.1z" />
                <path class="st0" d="M376.6,1l4.5,5l-4.5,5l-4.5-5L376.6,1z" />
                <path class="st0" d="M314.5,1.1l4.5,5l-4.5,5L310,6L314.5,1.1z" />
                <path class="st0" d="M305.8,1l4.5,5l-4.5,5l-4.5-5L305.8,1z" />
                <path class="st0" d="M297,1.1l4.5,5l-4.5,5l-4.5-5L297,1.1z" />
            </g>
        </g>
    </svg>`

    // create a new dom object
    const parser = new DOMParser()
    const doc = parser.parseFromString(string, "text/html")

    // extract zigzag from new dom object
    const html = doc.getElementById("zigzag")
    
    return html
}

// get header element
const header = document.getElementById("header")
// Append zig zag pattern and adjust viewbox with the svg function
header.append(svg('viewBox="0 -6 390 12"'))

// create zig zag pattern
const svgFooter = viewbox => {
    const string = `
    <svg version="1.1" id="zigzagfooter" class="zig-zag-border-footer" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" ${viewbox}
        style="enable-background:new 0 0 390 12;" xml:space="preserve">
        <g>
            <g>
                <path class="st0" d="M31,1l4.5,5l-4.5,5l-4.5-5L31,1z" />
                <path class="st0" d="M93,1.1l4.5,5L93,11l-4.5-5L93,1.1z" />
                <path class="st0" d="M39.9,1.1l4.5,5l-4.5,5l-4.5-5L39.9,1.1z" />
                <path class="st0" d="M48.7,1.1l4.5,5l-4.5,5l-4.5-5L48.7,1.1z" />
                <path class="st0" d="M57.5,1.1L62,6l-4.5,4.9L53,6L57.5,1.1z" />
                <path class="st0" d="M66.4,1l4.5,5l-4.5,5l-4.5-5L66.4,1z" />
                <path class="st0" d="M75.2,1.1l4.5,5l-4.5,5l-4.5-5L75.2,1.1z" />
                <path class="st0" d="M84.1,1l4.4,5l-4.5,5l-4.5-5L84.1,1z" />
                <path class="st0" d="M22,1.1l4.5,5L22,11l-4.5-5L22,1.1z" />
                <path class="st0" d="M13.3,1l4.5,5l-4.5,5L8.8,6L13.3,1z" />
                <path class="st0" d="M4.5,1.1L9,6l-4.5,4.9L0,6L4.5,1.1z" />
            </g>
            <g>
                <path class="st0" d="M128.5,1l4.5,5l-4.5,5L124,6L128.5,1z" />
                <path class="st0" d="M190.5,1.1l4.5,5l-4.5,5L186,6L190.5,1.1z" />
                <path class="st0" d="M137.4,1.1l4.5,5l-4.5,5l-4.5-5L137.4,1.1z" />
                <path class="st0" d="M146.2,1.1l4.5,5l-4.5,5l-4.5-5L146.2,1.1z" />
                <path class="st0" d="M155,1.1l4.5,5l-4.5,5l-4.5-5L155,1.1z" />
                <path class="st0" d="M163.9,1l4.5,5l-4.5,5l-4.4-5L163.9,1z" />
                <path class="st0" d="M172.7,1.1l4.5,5l-4.5,5l-4.5-5L172.7,1.1z" />
                <path class="st0" d="M181.6,1l4.5,5l-4.5,5l-4.5-5L181.6,1z" />
                <path class="st0" d="M119.5,1.1l4.5,5l-4.5,5L115,6L119.5,1.1z" />
                <path class="st0" d="M110.8,1l4.5,5l-4.5,5l-4.5-5L110.8,1z" />
                <path class="st0" d="M102,1.1l4.5,5l-4.5,5l-4.5-5L102,1.1z" />
            </g>
            <g>
                <path class="st0" d="M226,1l4.5,5l-4.5,5l-4.5-5L226,1z" />
                <path class="st0" d="M288,1.1l4.5,5l-4.5,5l-4.5-5L288,1.1z" />
                <path class="st0" d="M234.9,1.1l4.5,5l-4.5,5l-4.5-5L234.9,1.1z" />
                <path class="st0" d="M243.7,1.1l4.5,5l-4.5,5l-4.5-5L243.7,1.1z" />
                <path class="st0" d="M252.5,1.1l4.5,5l-4.5,5L248,6L252.5,1.1z" />
                <path class="st0" d="M261.4,1l4.5,5l-4.5,5l-4.5-5L261.4,1z" />
                <path class="st0" d="M270.2,1.1l4.5,5l-4.5,5l-4.5-5L270.2,1.1z" />
                <path class="st0" d="M279.1,1l4.5,5l-4.5,5l-4.5-5L279.1,1z" />
                <path class="st0" d="M217,1.1l4.5,5l-4.5,5l-4.5-5L217,1.1z" />
                <path class="st0" d="M208.3,1l4.5,5l-4.5,5l-4.5-5L208.3,1z" />
                <path class="st0" d="M199.5,1.1l4.5,5l-4.5,5L195,6L199.5,1.1z" />
            </g>
            <g>
                <path class="st0" d="M323.5,1l4.5,5l-4.5,5L319,6L323.5,1z" />
                <path class="st0" d="M385.5,1.1l4.5,5l-4.5,5L381,6L385.5,1.1z" />
                <path class="st0" d="M332.4,1.1l4.5,5l-4.5,5l-4.5-5L332.4,1.1z" />
                <path class="st0" d="M341.2,1.1l4.5,5l-4.5,5l-4.5-5L341.2,1.1z" />
                <path class="st0" d="M350,1.1l4.5,5l-4.5,5l-4.5-5L350,1.1z" />
                <path class="st0" d="M358.9,1l4.5,5l-4.5,5l-4.4-5L358.9,1z" />
                <path class="st0" d="M367.7,1.1l4.5,5l-4.5,5l-4.5-5L367.7,1.1z" />
                <path class="st0" d="M376.6,1l4.5,5l-4.5,5l-4.5-5L376.6,1z" />
                <path class="st0" d="M314.5,1.1l4.5,5l-4.5,5L310,6L314.5,1.1z" />
                <path class="st0" d="M305.8,1l4.5,5l-4.5,5l-4.5-5L305.8,1z" />
                <path class="st0" d="M297,1.1l4.5,5l-4.5,5l-4.5-5L297,1.1z" />
            </g>
        </g>
    </svg>`

    // create a new dom object
    const parser = new DOMParser()
    const doc = parser.parseFromString(string, "text/html")

    // extract zigzag from new dom object
    const html = doc.getElementById("zigzagfooter")
    
    return html
}

// get footer element
const footer = document.getElementById("footer")
// Append zig zag pattern and adjust viewbox with the svg function
footer.append(svgFooter('viewBox="0 -6 390 12"'))


//slideshow
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    //puts active class on the correct slide image
    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})