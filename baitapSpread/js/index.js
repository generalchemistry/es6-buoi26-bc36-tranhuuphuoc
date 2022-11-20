const jumpText = (str) => {
  let chars = [...str];
  let html = "";
  for (let i in chars) {
    html += `<span>${chars[i]}</span>`;
  }
  return html;
};

document.querySelector(".heading").innerHTML = jumpText(
  document.querySelector(".heading").innerHTML
);