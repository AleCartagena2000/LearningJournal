const viewMore = document.getElementById('view-more')
const viewLess = document.getElementById('view-less')
const burgerMenu = document.getElementById('burger-menu')
const navMenu = document.querySelector('.nav-menu')

if (viewMore) {
    viewMore.addEventListener('click', () => {
        document.querySelectorAll('.hidden').forEach((blogPost) => {
            blogPost.classList.remove('hidden')
            blogPost.classList.add('not-hidden')
        })
        viewMore.classList.add('hidden')
        viewLess.classList.remove('hidden')
    })
}

if (viewLess) {
    viewLess.addEventListener('click', () => {
        document.querySelectorAll('.not-hidden').forEach((blogPost) => {
            blogPost.classList.add('hidden')
            blogPost.classList.remove('not-hidden')
        })
        viewMore.classList.remove('hidden')
        viewLess.classList.add('hidden')
    })
}

burgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active')
})