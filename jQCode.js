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
  let para = document.querySelector("#para");
  let formatText = document.querySelector("#formatText");

  function updateHtmlEditor() {
    let textEntered = writingArea.innerHTML;
    htmlCode.textContent = textEntered;
    savetextEditorContent();
  }

  $("#textInput").keyup(updateHtmlEditor);

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

  // $(".optionButton").click(function () {
  //   modifyText($(this.id), false, $(this.value));
  //   updateHtmlEditor();
  //   savetextEditorContent();
  //   saveHtmlCode();
  // });

  // $(".advOptionButton").change(function () {
  //   modifyText($(this.id), false, $(this.value));
  //   updateHtmlEditor();
  //   savetextEditorContent();
  //   saveHtmlCode();
  // });

  // $(".advOptionButton").click(function () {
  //   modifyText($(this.id), false, $(this.value));
  //   updateHtmlEditor();
  //   savetextEditorContent();
  //   saveHtmlCode();
  // });

  $("#clone").click(function () {
    document.execCommand("copy");
    updateHtmlEditor();
    savetextEditorContent();
    saveHtmlCode();
  });

  // $.fn.textAlign=function(align){
  //   document.execCommand("justify" + align);
  // };

  function textAlign(align) {
    document.execCommand("justify" + align);
  }

  // $("#alignRight").click(function () {
  //   $("#textInput").css("textAlign", "right");
  //   textAlign("right");
  //   updateHtmlEditor();
  //   savetextEditorContent();
  //   saveHtmlCode();
  // });

  // $("#alignLeft").click(function () {
  //   $("#textInput").css("textAlign", "left");
  //   textAlign("left");
  //   updateHtmlEditor();
  //   savetextEditorContent();
  //   saveHtmlCode();
  // });

  // $("#alignCenter").click(function () {
  //   $("#textInput").css("textAlign", "center");
  //   // $("#htmlCode").text(textAlign("center"));
  //   textAlign("center");
  //   updateHtmlEditor();
  //   savetextEditorContent();
  //   saveHtmlCode();
  // });

  // $("#alignJustify").click(function () {
  //   $("#textInput").css("textAlign", "justify");
  //   textAlign("full");
  //   updateHtmlEditor();
  //   savetextEditorContent();
  //   saveHtmlCode();
  // });

  alignRight.addEventListener("click", () => {
    textAlign("right");
    updateHtmlEditor();
    savetextEditorContent();
    saveHtmlCode();
  });

  alignCenter.addEventListener("click", () => {
    textAlign("center");
    // htmlCode.style.textAlign = "center";
    updateHtmlEditor();
    savetextEditorContent();
    saveHtmlCode();
  });

  alignLeft.addEventListener("click", () => {
    writingArea.style.textAlign = "left";
    textAlign("left");
    updateHtmlEditor();
    savetextEditorContent();
    saveHtmlCode();
  });

  alignJustify.addEventListener("click", () => {
    writingArea.style.textAlign = "justify";
    textAlign("full");
    updateHtmlEditor();
    savetextEditorContent();
    saveHtmlCode();
  });

  $("#deleteText").click(function () {
    $("#textInput").html("");
    $("#htmlCode").text("");
    updateHtmlEditor();
    savetextEditorContent();
    saveHtmlCode();
  });

  $("#listOl").click(function () {
    document.execCommand("insertorderedlist");
    updateHtmlEditor();
    savetextEditorContent();
    saveHtmlCode();
  });

  $("#listUl").click(function () {
    document.execCommand("insertunorderedlist", false);
    updateHtmlEditor();
    savetextEditorContent();
    saveHtmlCode();
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

  $("#newDoc").click(function () {
    $("#textInput").html("");
    $("#htmlCode").text("");
    updateHtmlEditor();
    savetextEditorContent();
    saveHtmlCode();
  });

  para.addEventListener("click", () => {
    htmlCode.textContent = `<p>${writingArea.innerHTML}</p>`;
  });

  $("#formatText").click(function () {
    document.execCommand("removeformat");
    htmlCode.textContent = writingArea.innerHTML;
    updateHtmlEditor();
    savetextEditorContent();
    saveHtmlCode();
  });

  $("#alignLeftHtml").click(function () {
    $("#htmlCode").css("textAlign", "left");
  });
  $("#alignRightHtml").click(function () {
    $("#htmlCode").css("textAlign", "right");
  });

  $("#alignCenterHtml").click(function () {
    $("#htmlCode").css("textAlign", "center");
  });

  $("#alignJustifyHtml").click(function () {
    $("#htmlCode").css("textAlign", "justify");
  });

  $("#cloneHtmlCode").click(function () {
    document.execCommand("copy");
  });

  loadtextEditorContent();
  loadHtmlCode();
});
