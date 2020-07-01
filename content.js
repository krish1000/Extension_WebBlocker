//after html loads, activates this: so no type error: cannot read property "addeventlistener" of null occurs.
window.onload = function () {
  //connect to html button
  const url1 = document.getElementById("wSpecificSubmit");

  //event listeners
  if (url1) {
    url1.addEventListener("click", function () {
      console.log("content.js Clicked");
      getUrl();
    });
  }
};

//fetches url
function getUrl() {
  console.log("fetched url sucessfully");
  var urlString = document.getElementById("wSpec").value;
  console.log(urlString);
  //document.getElementById("desc").innerHTML = "asdf";
  blacklistC(urlString);
}

function blacklistC(urlString) {
  //arr.push("*://*.facebook.com/*"); won't work

  chrome.runtime.sendMessage({ link1: urlString }, function (response) {
    console.log(response.reply);
  });
  console.log("whitelisted.");
  document.getElementById("desc").innerHTML = "helllro";
}

function urlValid(urlString) {}
