

var addExtension = function () {
  var title = document.getElementById('title').value;
  var url = document.getElementById('url').value;


  chrome.extension.getBackgroundPage()
  console.log(url)
  chrome.runtime.sendMessage({ command: "post", url: url, title: title }, (response) => {
    console.log(response);
    if (response.status == 'success') {
      // alert("it works")
    } else {
      // alert("check firebase")
    }
  })
}


var submit = function () {
  console.log("submit");
  var title = document.getElementById('title').value;
  var url = document.getElementById('url').value;

  chrome.runtime.sendMessage({ command: "post", url: url, title: title }, (response) => {
    console.log(response)
  })
}

window.addEventListener('load', function (evt) {
  getPageDetails()

  // document.getElementById('addEvent').addEventListener('submit', addExtension());
});


document.getElementById('check').addEventListener('click', function () {
  submit()
})



chrome.runtime.sendMessage({ command: "checkAuth" }, (response) => {
  // console.log(response);
  if (response.status == 'success') {
    document.querySelector('.loggedInArea').style.display = 'block';
  } else {
    document.querySelector('.loginArea').style.display = 'block';
  }
});

document.querySelector('.login-btn-auth').addEventListener('click', function () {
  loginFunc();
});

var loginFunc = function () {
  var e = document.querySelector('.loginArea input[type="email"]').value;
  var p = document.querySelector('.loginArea input[type="password"]').value;
  console.log(e + p);
  chrome.runtime.sendMessage({ command: "loginUser", data: { e: e, p: p } }, (response) => {
    console.log(response);
    document.querySelector('.loginArea').style.display = 'none';
    document.querySelector('.loggedInArea').style.display = 'none';
    if (response.status == 'success') {
      document.querySelector('.loggedInArea').style.display = 'block';
    } else {
      document.querySelector('.loginArea').style.display = 'block';
    }
  });
}

function getPageDetails() {

  chrome.tabs.executeScript(null, { file: 'content.js' });

  chrome.runtime.onMessage.addListener(function (message) {
    // console.log(message);
    document.getElementById('title').value = message.title;
    document.getElementById('url').value = message.url;

  });
};

