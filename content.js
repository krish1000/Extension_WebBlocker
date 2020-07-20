//after html loads, activates this: so no type error: cannot read property "addeventlistener" of null occurs.
window.onload = function () {
  //connect to html button
  const specificurl = document.getElementById("wSpecificSubmit");
  const domainurl = document.getElementById("wDomainSubmit");
  const currenturl = document.getElementById("tabSubmit");

  //event listeners
  if (currenturl) {
    currenturl.addEventListener("click", function () {
      console.log("content.js -> CurrentTab Clicked");
      getCurrentUrl();
    });
  }

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

function getCurrentUrl() {
  
}

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

  //using regex to check if url is a proper match
  //Tried trycatch on chrome's pattern match but it's not possible on asyncronous.
  //Tried exception handling via chrome.runtime.lastError but didnt seem to work:
  //https://stackoverflow.com/questions/14517184/exception-handling-in-chrome-extensions

  // var regExpression =
  //   "https?://(www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)";
  // var regex = new RegExp(regExpression);

  // if (urlString.match(regex)) {
  chrome.runtime.sendMessage({ link1: urlString }, function (response) {
    console.log(response.reply);
  });
  console.log("sent to background.js");
  // } else {
  //   alert("Incorrect URL pattern!");
  // }
  //document.getElementById("desc").innerHTML = "helllro";
}

function blacklistDomain(urlString) {
  // var regExpression =
  //   "[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)";
  // var regex = new RegExp(regExpression);

  // if (urlString.match(regex)) {
  reformatString = "*://*." + urlString + "/*";
  chrome.runtime.sendMessage({ link1: reformatString }, function (response) {
    console.log(response.reply);
  });
  console.log("sent to background.js");
  // } else {
  //   alert("Incorrect URL pattern!");
  // }
}
