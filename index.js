var mobileNavOpen = false

function toggleMobileNav() {
    if (mobileNavOpen) {
        mobileNavOpen = false
        document.getElementById("mobile_nav").classList.add('h-0')
    } else {
        mobileNavOpen = true
        document.getElementById("mobile_nav").classList.remove('h-0')
    }
}