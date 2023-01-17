function updateTheme() {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
}

function setTheme(theme) {
    var theme_button = document.getElementById("theme_button")
  
    if (theme == 'light') {
        localStorage.theme = 'light'
        theme_button.classList.remove('fa-sun')
        theme_button.classList.remove('fa-moon')
        theme_button.classList.remove('fa-gear')
        theme_button.classList.add('fa-sun')
    }

    if (theme == 'dark') {
        localStorage.theme = 'dark'
        theme_button.classList.remove('fa-sun')
        theme_button.classList.remove('fa-moon')
        theme_button.classList.remove('fa-gear')
        theme_button.classList.add('fa-moon')
    }
  
    if (theme == 'system') {
        localStorage.removeItem('theme')
        theme_button.classList.remove('fa-sun')
        theme_button.classList.remove('fa-moon')
        theme_button.classList.remove('fa-gear')
        theme_button.classList.add('fa-gear')
    }

    updateTheme()
}

function getTheme() {
    if (localStorage.theme === 'dark') {
        return 'dark'
    } else if (localStorage.theme === 'light') {
        return 'light'
    } else {
        return 'system'
    }
}

function cycleTheme() {
    theme = getTheme

    switch (theme) {
        case 'light':
            setTheme('dark')
            break
        case 'dark':
            setTheme('system')
            break
        case 'system':
            setTheme('light')
            break
        default:
            window.alert("Unable to change theme")
    }
}