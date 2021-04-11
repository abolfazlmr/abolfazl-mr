import gsap from "gsap/gsap-core";

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("mousemove", cursorPath)
  // domainFunc(e)
});

const cursorPath = (e) => {
  gsap.set(".cursor", {
    left: e.pageX - 2 ,
    top: e.pageY + 5
  })
}

// const domainFunc = (e) => {
//   // console.log(e.target.URL);
//   const p = document.querySelector(".domainName")
//   // p.appendChild(e.target.URL)
//   console.log(p);
// }
