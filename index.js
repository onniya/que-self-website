const loginForm = document.querySelector("#loginform");
const idInput = document.querySelector("#text-form input");
const pwInput = document.querySelector("#text-form input");

const USERID_KEY = "userId";
const USERPW_KEY = "userPw";

function onLoginSubmit(event){
  event.preventDefault();
  const userId = idInput.value;
  const userPw = pwInput.value;
  localStorage.setItem(USERID_KEY, userId);
  localStorage.setItem(USERPW_KEY, userPw);
  window.location.href = "index.html";
}

const savedUserId = localStorage.getItem(USERID_KEY);
const savedUserPw = localStorage.getItem(USERPW_KEY);

if(savedUserId === null || savedUserPw === null){
  loginForm.addEventListener("submit", onLoginSubmit);
} else{
  window.location.href = "index.html";
}

/*
function showGreetings(userId){
  greeting.innerText = `${userId}님`
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
  const savedUserId = localStorage.getItem(USERID_KEY);
  const savedUserPw = localStorage.getItem(USERPW_KEY);

  if(savedUserId === null) {
    loginBtn.classList.remove(HIDDEN_CLASSNAME);
    loginBtn.addEventListener("submit",onLoginSubmit);
  } else{
    showGreetings(userId);
  }
*/
