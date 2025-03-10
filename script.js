document.addEventListener("DOMContentLoaded", () => {
  let editorBox = document.querySelectorAll(".editorBox");
  let htmlCode = document.querySelector("#htmlCode");
  let optionButton = document.querySelectorAll(".optionButton");
  let advOptionButton = document.querySelectorAll(".advOptionButton");
  // let alignButtons = document.querySelectorAll(".align");
  // let scriptButtons = document.querySelectorAll(".script");
  // let formatButtons = document.querySelectorAll(".format");
  // let spacingButtons = document.querySelectorAll(".spacing");
  let fontName = document.querySelector("#fontName");
  let fontSize = document.querySelector("#fontSize");
  let writingArea = document.querySelector("#textInput");
  let linkInsert = document.querySelector("#insertLink");
  let clone = document.querySelector("#clone");
  let alignLeft = document.querySelector("#alignLeft");
  let alignJustify = document.querySelector("#alignJustify");
  let alignCenter = document.querySelector("#alignCenter");
  let alignRight = document.querySelector("#alignRight");
  let deleteText = document.querySelector("#deleteText");
  let switchInput = document.querySelector(".switch input");
  let body = document.body;
  let HtmlEditorBox = document.querySelector(".HtmlEditorBox");
  let theme = localStorage.getItem("theme");

  function savetextEditorContent() {
    // let textEntered = textInput.value;
    localStorage.setItem("Text Entered", textInput.innerHTML);
  }
  function loadtextEditorContent() {
    let textEntered=localStorage.getItem("Text Entered");
    textInput.value = textEntered;
  }

  for (let i = 1; i <= 7; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.innerHTML = i;
    fontSize.appendChild(option);
    fontSize.value = 3;
  }

  function modifyText(command, defaultUi, value) {
    document.execCommand(command, defaultUi, value);
    updateHtmlEditor;
  }

  optionButton.forEach((button) => {
    button.addEventListener("click", () => {
      modifyText(button.id, false, null);
      savetextEditorContent();
      // loadtextEditorContent()
    });
  });

  advOptionButton.forEach((button) => {
    button.addEventListener("click", () => {
      modifyText(button.id, false, button.value);
      savetextEditorContent();
      // loadtextEditorContent()
    });
  });

  advOptionButton.forEach((button) => {
    button.addEventListener("change", () => {
      modifyText(button.id, false, button.value);
      savetextEditorContent();
      // loadtextEditorContent()
    });
  });

  clone.addEventListener("click", () => {
    // if (writingArea.select()) {
    document.execCommand("copy");
    // }
  });

  alignRight.addEventListener("click", () => {
    writingArea.style.textAlign = "right";
    savetextEditorContent();
    // loadtextEditorContent()
  });

  alignRight.addEventListener("click", () => {
    htmlCode.style.textAlign = "right";
    savetextEditorContent();
    // loadtextEditorContent();
  });

  alignLeft.addEventListener("click", () => {
    writingArea.style.textAlign = "left";
    savetextEditorContent();
    // loadtextEditorContent()
  });

  alignJustify.addEventListener("click", () => {
    writingArea.style.textAlign = "justify";
    savetextEditorContent();
    // loadtextEditorContent()
  });

  // $("#alignJustify").click(function () {
  //   $("writingArea").css("textAlign","justify");
  //   savetextEditorContent();
  //   // loadtextEditorContent();
  // });

  alignCenter.addEventListener("click", () => {
    writingArea.style.textAlign = "center";
    savetextEditorContent();
    // loadtextEditorContent()
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

  deleteText.addEventListener("click", () => {
    writingArea.innerHTML = "";
    // $("writingArea").html="";
    savetextEditorContent();
    // loadtextEditorContent();
  });

  if (theme === "nightmode") {
    $("body").addClass("nightmode");
    $("body").removeClass("lightmode");
    switchInput.checked = true;
  } else {
    $("body").addClass("lightmode");
    $("body").removeClass("nightmode");
    switchInput.checked = false;
  }

  switchInput.addEventListener("change", (e) => {
    e.preventDefault();
    if (e.target.checked) {
      $("body").addClass("nightmode");
      $("body").removeClass("lightmode");
      localStorage.setItem("theme", "nightmode");
      console.log("darkmode");
    } else {
      $("body").removeClass("nightmode");
      $("body").addClass("lightmode");
      localStorage.setItem("theme", "lightmode");
      console.log("lightmode");
    }
  });

  function updateHtmlEditor() {

    htmlCode.textContent = `<p>${writingArea.innerHTML}</p>`;
    // htmlCode.innerHTML = writingArea.textContent;
    // spanTagText.appendChild(htmlCode.innerHTML)
    // console.log(writingArea.textContent);
    // console.log(`<p>${writingArea.innerHTML}</p>`);
  }
  writingArea.addEventListener("keyup", updateHtmlEditor);

  loadtextEditorContent();
});
