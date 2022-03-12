const dropBox = document.querySelectorAll(".nav__link");
const dropMenu = document.querySelectorAll(".drop");
const secondDropBox = document.querySelectorAll(".drop__link");
const secondDropMenu = document.querySelectorAll(".second__drop");


dropBox.forEach((item) =>{
    item.addEventListener('click', () => {
      dropBox.forEach((parent) => {
          parent.classList.remove("active");
      });
      item.classList.add("active");
      secondDropBox.forEach(parent => {
        parent.classList.remove("active")
    });
    });
});
secondDropBox.forEach(item => {
    item.addEventListener('click', () => {
        secondDropBox.forEach(parent => {
            parent.classList.remove("active")
        });
        item.classList.add("active");
    })
})