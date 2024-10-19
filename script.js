const imgBox = document.querySelector(".img-box");
const imgWrap = document.querySelector(".img-wrap");
const line = document.querySelector(".line");

imgWrap.querySelector("img").style.width = imgBox.offsetWidth + "px";

imgBox.onmousemove = (e) => {
  imgWrap.style.width = e.pageX - imgBox.offsetLeft + "px";
  line.style.left = e.pageX - imgBox.offsetLeft + "px";
};
