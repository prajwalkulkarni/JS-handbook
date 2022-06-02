
const tens = document.querySelector(".tens");
const units = document.querySelector(".units");

let count = 0;

const totaltime = 59;

const map = new Map();
map.set("tensVal", "0");
setInterval(() => {
  units.classList.add("flip");
  if (timein) {
    clearTimeout(timein);
  }
  let timein = setTimeout(() => {
    units.classList.remove("flip");
  }, 500);

  if (count < 10) {
    units.innerHTML = count;
    count += 1;
  } else if (count >= 10 && count <= totaltime) {
    if (String(count)[0] !== map.get("tensVal")) {
      map.set("tensVal", String(count)[0]);
      tens.innerHTML = String(count)[0];
      tens.classList.add("flip");

      if (tensVal) {
        clearTimeout(tensVal);
      }
      let tensVal = setTimeout(() => {
        tens.classList.remove("flip");
      }, 500);
    }
    units.innerHTML = String(count)[1];
    count += 1;
  } else {
    tens.classList.add("flip");

    if (tensVal) {
      clearTimeout(tensVal);
    }
    let tensVal = setTimeout(() => {
      tens.classList.remove("flip");
    }, 500);
    count = 0;
    units.innerHTML = 0;
    tens.innerHTML = 0;
  }
}, 1000);
