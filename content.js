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
  whitelist(urlString);
}

function whitelist(urlString) {
  //arr.push("*://*.facebook.com/*");
  chrome.runtime.sendMessage(
    { greeting: "hello", link1: "*://*.facebook.com/*" },
    function (response) {
      console.log(response.farewell);
    }
  );

  //updateFilters();
  console.log("whitelisted.");
  document.getElementById("desc").innerHTML = "*://*.facebook.com/*";
}
