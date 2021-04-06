"use strict";

const menuBtn = document.querySelector(".menu-btn");
const menuClose = document.querySelector(".close-btn");
const menuOpen = document.querySelector(".menu-open");

const open = () => {
  menuBtn.classList.add("hidden");
  menuClose.classList.remove("hidden");
  menuOpen.classList.remove("hidden");
  console.log("opened");
};

const close = () => {
  menuBtn.classList.remove("hidden");
  menuClose.classList.add("hidden");
  menuOpen.classList.add("hidden");
  console.log("closed");
};

menuBtn.addEventListener("touchend", (e) => {
  e.preventDefault();
  open();
});

menuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  open();
});

menuClose.addEventListener("touchend", (e) => {
  e.preventDefault();
  close();
});

menuClose.addEventListener("click", (e) => {
  e.preventDefault();
  close();
});
