const container = document.querySelector(".container");

const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const a = Math.random().toFixed(2); // upto 2 decimal places
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

let num = parseInt(prompt("Enter number of rows "));
if (num > 100) num = 100;
if (num < 1) num = 1;
for (let i = 1; i <= num; i++) {

  const size = parseInt(100 / num);
  const rowdiv = document.createElement("div");
  rowdiv.setAttribute("style", `width:${size}vw; height:${size}vh;`);

  for (let j = 1; j <= num; j++) {
    const box = document.createElement("div");
    box.setAttribute(
      "style",
      `height:${size}vh; width:${size}vw; margin:0; padding:0; border:1px solid red; opacity:0.3;`
    );
    box.setAttribute("id", `${j}`);

    box.addEventListener("mouseover", (e) => {
      let currentOpacity = parseFloat(e.target.style.opacity);
      if (isNaN(currentOpacity)) {
        currentOpacity = 0.1; // Default to 0.1 if not set
    }
    e.target.style.opacity = Math.min(currentOpacity + 0.1, 1).toFixed(1);

    e.target.style.background = `rgb(
                                    ${Math.floor(Math.random() * 256)},
                                    ${Math.floor(Math.random() * 256)},
                                    ${Math.floor(Math.random() * 256)}
                                    )`;
    });
    rowdiv.appendChild(box);
  }
  container.appendChild(rowdiv);
}
