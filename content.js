//connect to html button
const url1 = document.getElementById("submit");

//event listeners
url1.addEventListener("click", function () {
  console.log("content.js Clicked");
  getUrl();
});

//fetches url
function getUrl() {
  console.log("fetched url sucessfully");
  var urlString = document.getElementById("wlist").value;
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
