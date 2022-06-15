function goToTop() {
   window.scrollTo(0, 0);
}

const navToggler = document.querySelector("#nav-toggler"),
   navMenu = document.querySelector("#nav-menu");

navToggler.addEventListener("click", () => {
   navMenu.classList.toggle("active");

   if (navToggler.classList.value.includes("ri-menu-3-line")) {
      navToggler.classList.replace("ri-menu-3-line", "ri-close-line");
   } else {
      navToggler.classList.replace("ri-close-line", "ri-menu-3-line");
   }
});

window.addEventListener("click", function (e) {
   if (e.target != navToggler && e.target != navMenu) {
      navMenu.classList.remove("active");
      if (navToggler.classList.value.includes("ri-menu-3-line")) {
         navToggler.classList.replace("ri-menu-3-line", "ri-close-line");
      } else {
         navToggler.classList.replace("ri-close-line", "ri-menu-3-line");
      }
   }
});

const page = window.location.pathname.split("/").pop();

if (page == "" || page == "index.html") {
   const swiper = new Swiper("#swiper-container", {
      slidesPerView: 1,
      spaceBetween: 25,
      loop: true,
      centerSlide: true,
      fade: true,
      grabCursor: false,
      pagination: {
         el: ".swiper-pagination",
         clickable: true,
         dynamicBullet: true,
      },
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
      },
      breakpoints: {
         640: {
            slidesPerView: 2,
            spaceBetweenSlides: 30,
         },
         1024: {
            slidesPerView: 3,
            spaceBetweenSlides: 30,
         },
         1280: {
            slidesPerView: 4,
            spaceBetweenSlides: 60,
         },
      },
   });

   document.addEventListener("DOMContentLoaded", () => {
      const prevBtn = document.querySelector(".swiper-button-prev"),
         nextBtn = document.querySelector(".swiper-button-next");

      if (window.innerWidth >= 320 && window.innerWidth < 360) {
         prevBtn.style.left = "2px";
         nextBtn.style.right = "2px";
      } else if (window.innerWidth >= 360 && window.innerWidth < 640) {
         prevBtn.style.left = "15px";
         nextBtn.style.right = "15px";
      } else if (window.innerWidth >= 640 && window.innerWidth < 1024) {
         prevBtn.style.left = "20px";
         nextBtn.style.right = "20px";
      } else if (window.innerWidth >= 1024) {
         prevBtn.style.left = "40px";
         nextBtn.style.right = "40px";
      }
   });

   const cartBtn = document.querySelectorAll(".addToCart");
   cartBtn.forEach((item) => {
      item.addEventListener("click", () => {
         Swal.fire({
            title: "Product added to cart",
            text: "",
            icon: "success",
            showCancelButton: true,
            confirmButtonColor: "#236ad6",
            cancelButtonColor: "#d7415d",
            confirmButtonText: "Go to cart",
         }).then((result) => {
            if (result.isConfirmed) {
               window.location.href = "cart.html";
            }
         });
      });
   });
} else if (page == "product-detail.html") {
   const input = document.querySelector(".quantityInput"),
      decreaseBtn = document.querySelector(".decreaseBtn"),
      increaseBtn = document.querySelector(".increaseBtn");

   function disabledBtn() {
      if (input.value == 1) {
         decreaseBtn.disabled = true;
      } else {
         decreaseBtn.disabled = false;
      }
   }

   let number = 1;

   document.addEventListener("DOMContentLoaded", function () {
      disabledBtn();
   });

   increaseBtn.addEventListener("click", function () {
      number++;
      input.value = number;
      disabledBtn();
   });

   decreaseBtn.addEventListener("click", function () {
      number--;
      input.value = number;
      disabledBtn();
   });
} else if (page == "cart.html") {
   document.addEventListener("DOMContentLoaded", function () {
      let table = new DataTable("#table", {
         info: false,
         paging: false,
         scrollX: true,
         ordering: false,
         searching: false,
         lengthMenu: false,
         lengthChange: false,
      });
   });
}
