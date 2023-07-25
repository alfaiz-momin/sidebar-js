//targetting buttons
const menuBtn = document.querySelector(".sidebar-toggle")
const closeBtn = document.querySelector(".close-btn")

//targetting sidebar
const theSidebar = document.querySelector(".sidebar")

menuBtn.addEventListener("click", () => {
  theSidebar.classList.toggle("show-sidebar")
})

closeBtn.addEventListener("click", () => {
  theSidebar.classList.remove("show-sidebar")
})
