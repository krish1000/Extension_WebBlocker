//after html loads, activates this: so no type error: cannot read property "addeventlistener" of null occurs.
window.onload = function () {
  //connect to html button
  const specificurl = document.getElementById("wSpecificSubmit");
  const domainurl = document.getElementById("wDomainSubmit");

  //event listeners
  if (specificurl) {
    specificurl.addEventListener("click", function () {
      console.log("content.js -> Specific Clicked");
      getUrl(true); //true for specific
    });
  }

  if (domainurl) {
    domainurl.addEventListener("click", function () {
      console.log("content.js -> Domain Clicked");
      getUrl(false); //false for domain
    });
  }
};

//fetches url
function getUrl(boolean) {
  console.log("fetched url sucessfully");
  var urlString = document.getElementById("wSpec").value;
  console.log(urlString);
  //document.getElementById("desc").innerHTML = "asdf";
  if (boolean) {
    blacklistSpecific(urlString);
  } else {
    blacklistDomain(urlString);
  }
}

function blacklistSpecific(urlString) {
  //arr.push("*://*.facebook.com/*"); won't work

  chrome.runtime.sendMessage({ link1: urlString }, function (response) {
    console.log(response.reply);
  });
  console.log("sent to background.js");
  //document.getElementById("desc").innerHTML = "helllro";
}

function blacklistDomain(urlString) {
  reformatString = "*://*." + urlString + "/*";
  chrome.runtime.sendMessage({ link1: reformatString }, function (response) {
    console.log(response.reply);
  });
  console.log("sent to background.js");
}
