"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelectorAll("button");
  let panelPrev = document.querySelector(".previous"),
    panelCurr = document.querySelector(".current");

  function setPanelPrev(name) {
    panelPrev.textContent = `${panelCurr.textContent} ${name}`;
    panelCurr.textContent = "0";
  }

  function calc(name) {
    panelCurr.textContent = eval(
      `${panelPrev.textContent} ${name} ${panelCurr.textContent}`
    );
    panelPrev.textContent = "";
  }

  function targetHandler(name) {
    if (panelPrev.textContent === "") {
      setPanelPrev(name);
    } else {
      calc("");
      setPanelPrev(name);
    }
  }

  btn.forEach((item) => {
    item.addEventListener("click", (e) => {
      let target = e.target;

      if (target.classList.contains("number")) {
        if (panelCurr.textContent === "0")
          panelCurr.textContent = `${target.textContent}`;
        else if (
          panelCurr.textContent === "Infinity" ||
          panelCurr.textContent === "-Infinity" ||
          panelCurr.textContent === "NaN"
        ) {
          panelCurr.textContent = `${target.textContent}`;
        } else {
          panelCurr.textContent += `${target.textContent}`;
        }
      }

      //Можно было через try catch сделать

      if (target.classList.contains("clear")) {
        panelCurr.textContent = "0";
        panelPrev.textContent = "";
      }

      if (target.classList.contains("multiply")) {
        targetHandler("*");
      }

      if (target.classList.contains("sum")) {
        targetHandler("+");
      }

      if (target.classList.contains("minus")) {
        targetHandler("-");
      }

      if (target.classList.contains("divide")) {
        targetHandler("/");
      }

      if (target.classList.contains("dot")) {
        if (
          !panelCurr.textContent.includes(".") &&
          !panelCurr.textContent.includes("NaN") &&
          !panelCurr.textContent.includes("Infinity") &&
          !panelCurr.textContent.includes("-Infinity")
        )
          panelCurr.textContent += `${target.textContent}`;
      }

      if (target.classList.contains("equality")) {
        calc("");
      }

      if (target.classList.contains("delete")) {
        if (
          panelCurr.textContent !== "" &&
          panelCurr.textContent !== "Infinity" &&
          panelCurr.textContent !== "-Infinity" &&
          panelCurr.textContent !== "NaN"
        ) {
          panelCurr.textContent = panelCurr.textContent.slice(
            0,
            panelCurr.textContent.length - 1
          );
        }
        if (
          panelCurr.textContent === "" ||
          panelCurr.textContent === "-" ||
          panelCurr.textContent === "Infinity" ||
          panelCurr.textContent === "-Infinity" ||
          panelCurr.textContent === "NaN"
        )
          panelCurr.textContent = "0";
      }
    });
  });
});
