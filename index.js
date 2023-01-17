function setTheme(theme) {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
  
    if (theme == 'light') {
        localStorage.theme = 'light'
    }

    if (theme == 'dark') {
        localStorage.theme = 'dark'
    }
  
    if (theme == 'system') {
        localStorage.removeItem('theme')
    }
}