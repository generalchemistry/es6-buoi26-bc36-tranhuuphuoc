const calcAveragePoint = (...restPara) => {
  let sum = 0;
  for (let i in restPara) {
    if (restPara[i] === "") {
      alert("Lỗi dữ liệu trống");
      return "";
    }
    sum += +restPara[i];
  }
  return (sum / restPara.length).toFixed(2);
};

const domId = (id) => {
  return document.getElementById(id);
};

domId("btnKhoi1").onclick = () => {
  math = domId("inpToan").value;
  phys = domId("inpLy").value;
  chem = domId("inpHoa").value;
  domId("tbKhoi1").innerHTML = calcAveragePoint(math, phys, chem);
};

domId("btnKhoi2").onclick = () => {
  lit = domId("inpVan").value;
  his = domId("inpSu").value;
  geo = domId("inpDia").value;
  eng = domId("inpEnglish").value;
  domId("tbKhoi2").innerHTML = calcAveragePoint(lit, his, geo, eng);
};
