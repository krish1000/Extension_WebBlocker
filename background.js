// //connect to html button
// const url1 = document.getElementById("submit");

// //event listeners
// url1.addEventListener("click", function () {
//   getUrl();
// });

// //fetches url
// function getUrl() {
//   console.log("fetched url sucessfully");
//   var urlString = document.getElementById("wlist").value;
//   console.log(urlString);
//   //document.getElementById("desc").innerHTML = "asdf";
//   whitelist(urlString);
// }

// function whitelist(urlString) {
//   //   chrome.runtime.sendMessage({ greeting: "hello" }, function (response) {
//   //     console.log(response.farewell);
//   //   });

//   chrome.webRequest.onBeforeRequest.addListener(
//     function (details) {
//       return {
//         cancel: details.url.indexOf("://docs.google.com/" != -1),
//       };
//     },
//     { urls: ["<all_urls>"] },
//     ["blocking"]
//   );
//   console.log("whitelisted.");
// }

// whitelist();
////////////////////////BLACK LIST
function blockRequest(details) {
  return { cancel: true }; //enables cancel:true, when used in blacklistB, makes it always blacklist
}

//stores urls that get blacklisted
var arr = [];

function blacklistB(urls) {
  if (chrome.webRequest.onBeforeRequest.hasListener(blockRequest))
    chrome.webRequest.onBeforeRequest.removeListener(blockRequest);
  chrome.webRequest.onBeforeRequest.addListener(blockRequest, { urls: arr }, [
    "blocking",
  ]);

  console.log("Filters have been enabled");
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  sendResponse({ reply: "sucess call to background.js" });
  arr.push(request.link1);
  blacklistB();
});

//////////////////////////////BLACK LIST^

/** White listing doesn't properly work, as it disables script links as well*/
// function whitelistB(urls) {
//   chrome.webRequest.onBeforeRequest.addListener(
//     function (details) {
//       return {
//         cancel:
//           details.url.indexOf(".facebook.com") == -1 &&
//           details.url.indexOf(".youtube.com") == -1,
//       };
//     },
//     { urls: ["<all_urls>"] },
//     ["blocking"]
//   );
// }
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   //arr.push(request.link1);
//   //blacklistAll();
//   whitelistB();
// });

console.log("background.js running");

// console.log(
//   sender.tab
//     ? "from a content script:" + sender.tab.url
//     : "from the extension"
// );
