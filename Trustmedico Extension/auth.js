var addFake = function(){
  var title = document.getElementById('title').value;
  var url = document.getElementById('url').value;
  var comment = document.getElementById('comment').value;

  chrome.runtime.sendMessage({command: "post", url: url, title: title, comment: comment, news: "Fake"}, (response) =>{
      console.log(response);
      if(response.status == 'success'){
          alert("it works")
      }else{
          alert("check firebase")
      }
  })
}

var addGood = function(){
  var title = document.getElementById('title').value;
  var url = document.getElementById('url').value;
  var comment = document.getElementById('comment').value;

  chrome.runtime.sendMessage({command: "post", url: url, title: title, comment: comment, news: "Good"}, (response) =>{
      console.log(response);
      if(response.status == 'success'){
          alert("it works")
      }else{
          alert("check firebase")
      }
  })
}


function getPageDetails() {
   
  chrome.tabs.executeScript(null, { file: 'content.js' });
  
  chrome.runtime.onMessage.addListener(function(message) {
      document.getElementById('title').value = message.title;
      document.getElementById('url').value = message.url;
  });
};



window.addEventListener('load', function(evt) {
  getPageDetails()

  document.getElementById('FakeNews').addEventListener('click', addFake);
  document.getElementById('GoodNews').addEventListener('click', addGood);
});

chrome.runtime.sendMessage({command: "checkAuth"}, (response) => {
  console.log(response);
  if(response.status == 'success'){
    document.querySelector('.loggedInArea').style.display='block';
  }else{
    document.querySelector('.loginArea').style.display='block';
  }
});

document.querySelector('.login-btn-auth').addEventListener('click', function(){
  loginFunc();
});

var loginFunc = function(){
  var e = document.querySelector('.loginArea input[type="email"]').value;
  var p = document.querySelector('.loginArea input[type="password"]').value;
  console.log(e + p);
  chrome.runtime.sendMessage({command: "loginUser", data:{e: e, p: p}}, (response) => {
    console.log(response);
    document.querySelector('.loginArea').style.display='none';
    document.querySelector('.loggedInArea').style.display='none';
    if(response.status == 'success'){
      document.querySelector('.loggedInArea').style.display='block';
    }else{
      document.querySelector('.loginArea').style.display='block';
    }
  });
}