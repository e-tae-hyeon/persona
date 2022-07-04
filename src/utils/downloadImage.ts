import html2canvas from "html2canvas";

const exportElementAsPNG = (el: any, filename: string) => {
  html2canvas(el).then((canvas) => {
    const image = canvas.toDataURL("image/png", 1);
    const link = window.document.createElement("a");
    link.style.display = "none;";
    link.download = filename + ".png";
    link.href = image;
    link.click();
  });
};

export default exportElementAsPNG;
