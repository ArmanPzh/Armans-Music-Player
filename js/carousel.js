export function carousel() {
    const carouselContainer = document.querySelector('.carousel-container')
    carouselContainer.innerHTML = `<div class="carousel">
        <div class="item" style="background-image: url(../assets/Images/1.jpg);">
            <div class="content">
                <div class="name">Img Name</div>
                <div class="des">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, veniam.</div>
                <button>See More</button>
            </div>
        </div>
        <div class="item" style="background-image: url(../assets/Images/2.jpg);">
            <div class="content">
                <div class="name">Img Name</div>
                <div class="des">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, veniam.</div>
                <button>See More</button>
            </div>
        </div>
        <div class="item" style="background-image: url(../assets/Images/3.jpg);">
            <div class="content">
                <div class="name">Img Name</div>
                <div class="des">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, veniam.</div>
                <button>See More</button>
            </div>
        </div>
        <div class="item" style="background-image: url(../assets/Images/4.jpg);">
            <div class="content">
                <div class="name">Img Name</div>
                <div class="des">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, veniam.</div>
                <button>See More</button>
            </div>
        </div>
        <div class="item" style="background-image: url(../assets/Images/5.webp);">
            <div class="content">
                <div class="name">Img Name</div>
                <div class="des">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, veniam.</div>
                <button>See More</button>
            </div>
        </div>
        <div class="item" style="background-image: url(../assets/Images/6.webp);">
            <div class="content">
                <div class="name">Img Name</div>
                <div class="des">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, veniam.</div>
                <button>See More</button>
            </div>
        </div>

    </div>

    <div class="buttons">
        <button class="prev"><i class='bx bx-left-arrow-alt'></i></button>
        <button class="next"><i class='bx bx-right-arrow-alt'></i></button>
    </div>`
    const carouselNextBtn = document.querySelector('.next')
    const carouselPrevBtn = document.querySelector('.prev')

    carouselNextBtn.addEventListener('click', () => {
        let items = document.querySelectorAll('.item')
        document.querySelector('.carousel').appendChild(items[0])
    })

    carouselPrevBtn.addEventListener('click', () => {
        let items = document.querySelectorAll('.item')
        document.querySelector('.carousel').prepend(items[items.length - 1])
    })
}