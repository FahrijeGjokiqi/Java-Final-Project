const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')

toggle.addEventListener('click', () => nav.classList.toggle('links'))

// const search = document.querySelector('.search')
// const btn = document.querySelector('.btn')
// const input = document.querySelector('.input')

// btn.addEventListener('click', () => {
//     search.classList.toggle('active')
//     input.focus()
// })

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  
  // Function to show/hide the scroll button based on scroll position
  window.onscroll = function() {
    var scrollButton = document.getElementById("scrollButton");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }
  };
  