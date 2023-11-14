function facebook(){
    alert("will be redirected to your Facebook account")
}
function insta(){
    alert(" will be redirected to your Instagram account")
}
function tok(){
    alert(" will be redirected to your TikTok account")
}
function whatsapp(){
    alert(" will be redirected to WhatsApp chat for your contact number")
}
function x(){
    alert(" will be redirected to your X account")
}
function tele(){
    alert("will be redirected to Telegram chat for your contact number")
}
function tube(){
    alert("will be redirected to your YouTube channel")
}
function mail(){
    alert(" will be redirected to mailing app with your e mail address")
}
function call(){
    alert(" will be redirected to Dialog with your contact")
}
function mess(){
    alert(" will be redirected to message with your contact")
}
function loada(){
    alert("NO ALBUM AVAILABLE TO DOWNLOAD")
}
var counterContainer = document.querySelector(".website-counter");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
  counterContainer.innerHTML = visitCount;
});