document.addEventListener("DOMContentLoaded", () => {
  let editorBox = document.querySelectorAll(".editorBox");
  let htmlCode = document.querySelector("#htmlCode");
  let optionButton = document.querySelectorAll(".optionButton");
  let advOptionButton = document.querySelectorAll(".advOptionButton");
  let fontSize = document.querySelector("#fontSize");
  let writingArea = document.querySelector("#textInput");
  let linkInsert = document.querySelector("#insertLink");
  let clone = document.querySelector("#clone");
  let alignLeft = document.querySelector("#alignLeft");
  let alignJustify = document.querySelector("#alignJustify");
  let alignCenter = document.querySelector("#alignCenter");
  let alignRight = document.querySelector("#alignRight");
  let deleteText = document.querySelector("#deleteText");
  let listOl = document.querySelector("#listOl");
  let listUl = document.querySelector("#listUl");
  let switchInput = document.querySelector(".switch input");
  let body = document.body;
  let HtmlEditorBox = document.querySelector(".HtmlEditorBox");
  let theme = localStorage.getItem("theme");
let newDoc = document.querySelector("#newDoc");

  function updateHtmlEditor() {
    let textEntered = writingArea.innerHTML;
    htmlCode.textContent = textEntered;
    headings();
    savetextEditorContent();
  }


  // var menu = document.getElementById("headingTags");
  // menu.addEventListener("change", generateData);

  // function generateData() {
  //   let textEntered = writingArea.innerHTML;

  //   if (menu.value == "H1") {
  //     htmlCode.textContent = `<H1>${textEntered}</H1>`;
  //   } else if (menu.value == "H2") {
  //     htmlCode.textContent = `<H2>${textEntered}</H2>`;
  //   } else if (menu.value == "H3") {
  //     htmlCode.textContent = `<H3>${textEntered}</H3>`;
  //   } else if (menu.value == "H4") {
  //     htmlCode.textContent = `<H4>${textEntered}</H4>`;
  //   } else if (menu.value == "H5") {
  //     htmlCode.textContent = `<H5>${textEntered}</H5>`;
  //   } else if (menu.value == "H6") {
  //     htmlCode.textContent = `<H6>${textEntered}</H6>`;
  //   }
  //   else{
  //     console.log("default")
  //   }
  // }

  writingArea.addEventListener("keyup", updateHtmlEditor);

  function savetextEditorContent() {
    localStorage.setItem("Text Entered", writingArea.innerHTML);
  }
  function loadtextEditorContent() {
    let savedText = localStorage.getItem("Text Entered");
    if (savedText) {
      writingArea.innerHTML = savedText;
    }
  }

  function saveHtmlCode() {
    localStorage.setItem("HTML Code", htmlCode.textContent);
  }
  function loadHtmlCode() {
    let savedHtmlCode = localStorage.getItem("HTML Code");
    if (savedHtmlCode) {
      htmlCode.textContent = savedHtmlCode;
    }
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
    savetextEditorContent();
    saveHtmlCode();
  }

  optionButton.forEach((button) => {
    button.addEventListener("click", () => {
      modifyText(button.id, false, null);
      updateHtmlEditor();
      savetextEditorContent();
      saveHtmlCode();
    });
  });

  advOptionButton.forEach((button) => {
    button.addEventListener("click", () => {
      modifyText(button.id, false, button.value);
      updateHtmlEditor();
      savetextEditorContent();
      saveHtmlCode();
    });
  });

  advOptionButton.forEach((button) => {
    button.addEventListener("change", () => {
      modifyText(button.id, false, button.value);
      updateHtmlEditor();
      savetextEditorContent();
      saveHtmlCode();
    });
  });

  clone.addEventListener("click", () => {
    // if (writingArea.select()) {
    document.execCommand("copy");
    updateHtmlEditor();
    // }
  });

  alignRight.addEventListener("click", () => {
    writingArea.style.textAlign = "right";
    htmlCode.textContent = document.execCommand("JustifyRight");
    updateHtmlEditor();
    savetextEditorContent();
    saveHtmlCode();
  });

  alignCenter.addEventListener("click", () => {
    htmlCode.style.textAlign = "center";
    updateHtmlEditor();
    savetextEditorContent();
    saveHtmlCode();
  });

  alignLeft.addEventListener("click", () => {
    writingArea.style.textAlign = "left";
    updateHtmlEditor();
    savetextEditorContent();
    saveHtmlCode();
  });

  alignJustify.addEventListener("click", () => {
    writingArea.style.textAlign = "justify";
    updateHtmlEditor();
    savetextEditorContent();
    saveHtmlCode();
  });

  // $("#alignJustify").click(function () {
  //   $("writingArea").css("textAlign","justify");
  //   savetextEditorContent();
  // });

  alignCenter.addEventListener("click", () => {
    writingArea.style.textAlign = "center";
    updateHtmlEditor();
    savetextEditorContent();
    saveHtmlCode();
  });

  // linkInsert.addEventListener("click", () => {
  //   let userLink = prompt("Enter a URL");
  //   if (/http/i.test(userLink)) {
  //     modifyText(linkInsert.id, false, userLink);
  //   } else {
  //     userLink = "http://" + userLink;
  //     modifyText(linkInsert.id, false, userLink);
  //   }
  //   updateHtmlEditor();
  // });

  deleteText.addEventListener("click", () => {
    writingArea.innerHTML = "";
    // $("writingArea").html="";
    updateHtmlEditor();
    savetextEditorContent();
  });

  listOl.addEventListener("click", () => {
    document.execCommand("insertorderedlist");
  });

  listUl.addEventListener("click", () => {
    document.execCommand("insertunorderedlist");
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

  newDoc.addEventListener('click',()=>{
    writingArea.innerHTML = "";
    htmlCode.textContent = "";
  })


  loadtextEditorContent();
  loadHtmlCode();
});
