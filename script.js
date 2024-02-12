const mark = document.querySelector("#heading-container-block2").addEventListener("click", reads);
const a = document.querySelector("#a");
const b = document.querySelector("#b");
const c = document.querySelector("#c");
const number = document.querySelector("#number");
const x = document.querySelector("#x");
const y = document.querySelector("#y");
const z = document.querySelector("#z");
let nvalue = 3;

var arry = [a, b, c];
for (let i = 0; i < arry.length; i++) {
    arry[i].addEventListener("click", () => {
        if (nvalue === 3) {
            number.innerHTML = 2;
            nvalue--;
        } else if (nvalue === 2) {
            number.innerHTML = 1;
            nvalue--;
        } else {
            number.innerHTML = 0;
        }
    })
}

a.addEventListener("click", actiona);
function actiona() {
    a.classList.remove("unread");
    x.removeAttribute("class");
    return valueofactiona = 3,
    valueofactionaa = 2,
    valueofactionaaa = 1
  }
b.addEventListener("click", actionb);
 function actionb() { 
    b.classList.remove("unread");
    y.removeAttribute("class");
}
c.addEventListener("click", actionc);
function actionc() {
    c.classList.remove("unread");
    z.removeAttribute("class");
} 


function reads() {
    a.classList.remove("unread");
    b.classList.remove("unread");
    c.classList.remove("unread");
    number.innerHTML = 0;
    x.removeAttribute("class");
    y.removeAttribute("class");
    z.removeAttribute("class");
}













