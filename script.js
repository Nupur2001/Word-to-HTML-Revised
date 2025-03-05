let editorBox = document.querySelectorAll(".editorBox");
let optionButton = document.querySelectorAll(".optionButton");
let advOptionButton = document.querySelectorAll(".advOptionButton");
let alignButtons = document.querySelectorAll(".align");
let scriptButtons = document.querySelectorAll(".script");
let formatButtons = document.querySelectorAll(".format");
let spacingButtons = document.querySelectorAll(".spacing");
let fontName = document.querySelector("#fontName");
let fontSize = document.querySelector("#fontSize");
let writingArea = document.querySelector("#textInput");
let linkInsert = document.querySelector("#insertLink");
let clone = document.querySelector("#clone");
let alignLeft = document.querySelector("#alignLeft");
let alignJustify = document.querySelector("#alignJustify");
let alignCenter = document.querySelector("#alignCenter");
let alignRight = document.querySelector("#alignRight");

let fontList = [
  "Arial",
  "Verdana",
  "Times New Roman",
  "Garamond",
  "Georgia",
  "Courier New",
  "cursive",
];

const initialiser = () => {
  hightlighter(alignButtons, true);
  hightlighter(scriptButtons, true);
  hightlighter(formatButtons, false);
  hightlighter(spacingButtons, true);
  hightlighter(clone, true);

  fontList.map((value) => {
    let option = document.createElement("option");
    option.value = value;
    option.innerHTML = value;
    fontName.appendChild(option);
  });
};

for (let i = 1; i <= 7; i++) {
  let option = document.createElement("option");
  option.value = i;
  option.innerHTML = i;
  fontSize.appendChild(option);
  fontSize.value = 3;
}

const modifyText = (command, defaultUi, value) => {
  document.execCommand(command, defaultUi, value);
};

optionButton.forEach((button) => {
  button.addEventListener("click", () => {
    modifyText(button.id, false, null);
    modifyText(fontName, false, fontName.value);
    //   writingArea.style.font=fontName.value;
  });
});

advOptionButton.forEach((button) => {
  button.addEventListener("click", () => {
    modifyText(button.id, false, button.value);
  });
});

advOptionButton.forEach((button) => {
  button.addEventListener("change", () => {
    modifyText(button.id, false, button.value);
  });
});

clone.addEventListener("click", () => {
  // if (writingArea.select()) {
  document.execCommand("copy");
  // }
});

alignRight.addEventListener("click", () => {
  writingArea.style.textAlign = "right";
});

alignLeft.addEventListener("click", () => {
  writingArea.style.textAlign = "left";
});

alignJustify.addEventListener("click", () => {
  writingArea.style.textAlign = "justify";
});

alignCenter.addEventListener("click", () => {
  writingArea.style.textAlign = "center";
});

linkInsert.addEventListener("click", () => {
  let userLink = prompt("Enter a URL");
  if (/http/i.test(userLink)) {
    modifyText(linkInsert.id, false, userLink);
  } else {
    userLink = "http://" + userLink;
    modifyText(linkInsert.id, false, userLink);
  }
});

const hightlighter = (className, needRemove) => {
  className.forEach((button) => {
    button.addEventListener("click", () => {
      if (needRemove) {
        let alreadyActive = false;

        if (button.classList.contains("active")) {
          alreadyActive = true;
        }

        hightlighterRemover(className);
        if (!alreadyActive) {
          button.classList.add("active");
        } else {
          button.classList.toggle("active");
        }
      }
    });
  });
};

let hightlighterRemover = (className) => {
  className.forEach((button) => {
    button.classList.remove("active");
  });
};
window.onload = initialiser();
