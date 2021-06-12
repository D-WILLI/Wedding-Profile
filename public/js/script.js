let loginBtn = document.querySelector('.loginbtn');
let loginPage = document.querySelector('.login-page');
loginBtn.addEventListener('click',function(event){
  event.preventDefault();
  loginPage.classList.remove('hide');
})

$('.asking a').click(function(){$('form').animate({height:'toggle',opacity:'toggle'},'slow');});