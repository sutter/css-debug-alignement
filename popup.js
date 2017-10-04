function click(e) {
  chrome.tabs.executeScript(null, {
    code:
      "if(document.getElementById('debugCSS')){document.getElementById('debugCSS').remove()} ;var box = document.body.appendChild(document.createElement('div')); box.id = 'debugCSS'; box.innerHTML+= '<style>*, *:before, *:after {background: " +
      e.target.getAttribute("data-colorAlpha") +
      " !important;box-shadow: inset 0 0 0 1px " +
      e.target.getAttribute("data-color") +
      " !important;}</style>'",
  });
  window.close();
}

function destroy(e) {
  chrome.tabs.executeScript(null, {
    code: "document.getElementById('debugCSS').remove()",
  });
  window.close();
}

document.addEventListener("DOMContentLoaded", function() {
  var divs = document.querySelectorAll(".js-activeColor");
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click", click);
  }

  var destroyDebugCSS = document.getElementById("remove");
  destroyDebugCSS.addEventListener("click", destroy);
});
