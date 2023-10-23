const allAchorTag = document.querySelectorAll('a');
allAchorTag.forEach((a) => {
  a.addEventListener('click', (b) => {
    b.preventDefault()
  })
})