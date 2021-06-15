let loginBtn = document.querySelector('.loginbtn');
let loginPage = document.querySelector('.login-page');
loginBtn.addEventListener('click',function(event){
  event.preventDefault();
  loginPage.classList.remove('hide');
})

$('.asking a').click(function(){$('form').animate({height:'toggle',opacity:'toggle'},'slow');});

document.getElementById('btn1').addEventListener('click', function () {
  document.getElementById('photo').innerHTML = '<img style="width:300; margin:auto;" src="' + document.getElementById('imglink').value + '" alt="Image" />';
  console.log('imglink')
});