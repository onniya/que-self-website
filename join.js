
const loginForm = document.querySelector("#realform");
const idInput = document.querySelector(".textform input");
const pwInput = document.querySelector(".textform input");
const rpwInput = document.querySelector(".textform input");
const nameInput = document.querySelector(".textform input");
const mailInput = document.querySelector(".textform input");
const nickInput = document.querySelector(".textform input");
const sexInput = document.querySelector(".textform input");


const USERID_KEY = "userId";
const USERPW_KEY = "userPw";
const USERRPW_KEY = "userRpw";
const USERNAME_KEY = "userName";
const USERMAIL_KEY = "userMail";
const USERNICK_KEY = "userNick";
const USERSEX_KEY = "userSex";

function joinSubmit(event){
  event.preventDefault();
  const userId = idInput.value;
  const userPw = pwInput.value;
  const userRpw = rpwInput.value;
  const userName = nameInput.value;
  const userMail = mailInput.value;
  const userNick = nickInput.value;
  const userSex = sexInput.value;
  localStorage.setItem(USERID_KEY, userId);
  localStorage.setItem(USERPW_KEY, userPw);
  localStorage.setItem(USERRPW_KEY, userRpw);
  localStorage.setItem(USERNAME_KEY, userName);
  localStorage.setItem(USERMAIL_KEY, userMail);
  localStorage.setItem(USERNICK_KEY, userNick);
  localStorage.setItem(USERSEX_KEY, userSex);
  window.location.href = "index.html";
}

const savedUserId = localStorage.getItem(USERID_KEY);
const savedUserPw = localStorage.getItem(USERPW_KEY);
const savedUserRpw = localStorage.getItem(USERPW_KEY);
const savedUserName = localStorage.getItem(USERPW_KEY);
const savedUserEmail = localStorage.getItem(USERPW_KEY);
const savedUserNick = localStorage.getItem(USERPW_KEY);
const savedUserSex = localStorage.getItem(USERPW_KEY);


if(savedUserId === null || savedUserPw === null || savedUserRpw === null){
  loginForm.addEventListener("submit", joinSubmit);
} else{
  window.location.href = "index.html";
}
