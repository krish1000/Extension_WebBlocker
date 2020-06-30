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

function blockRequest(details) {
  return { cancel: true };
}

// function updateFilters(urls) {
//   if (chrome.webRequest.onBeforeRequest.hasListener(blockRequest))
//     chrome.webRequest.onBeforeRequest.removeListener(blockRequest);
//   chrome.webRequest.onBeforeRequest.addListener(
//     blockRequest,
//     { urls: ["*://*.facebook.com/*", "*://*.facebook.net/*"] },
//     ["blocking"]
//   );
// }
var arr = ["*://*.blank.com/*"];
function updateFilters(urls) {
  if (chrome.webRequest.onBeforeRequest.hasListener(blockRequest))
    chrome.webRequest.onBeforeRequest.removeListener(blockRequest);
  chrome.webRequest.onBeforeRequest.addListener(blockRequest, { urls: arr }, [
    "blocking",
  ]);

  console.log("updatetings");
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(
    sender.tab
      ? "from a content script:" + sender.tab.url
      : "from the extension"
  );
  if (request.greeting == "hello") sendResponse({ farewell: "goodbye" });

  arr.push(request.link1);
  updateFilters();
});

updateFilters();

// chrome.webRequest.onBeforeSendHeaders.addListener(
//   function (details) {
//     //console.log(JSON.stringify(details));
//     var headers = details.requestHeaders,
//       blockingResponse = {};

//     // Each header parameter is stored in an array. Since Chrome
//     // makes no guarantee about the contents/order of this array,
//     // you'll have to iterate through it to find for the
//     // 'User-Agent' element
//     for (var i = 0, l = headers.length; i < l; ++i) {
//       if (headers[i].name == "User-Agent") {
//         headers[i].value = ">>> Your new user agent string here <<<";
//         console.log(headers[i].value);
//         break;
//       }
//       // If you want to modify other headers, this is the place to
//       // do it. Either remove the 'break;' statement and add in more
//       // conditionals or use a 'switch' statement on 'headers[i].name'
//     }

//     blockingResponse.requestHeaders = headers;
//     return blockingResponse;
//   },
//   { urls: ["<all_urls>"] },
//   ["requestHeaders", "blocking"]
// );
console.log("background runningsss");
