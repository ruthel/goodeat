const icons=document.querySelector('.icon');
const menu=document.querySelector('.menu');

icons.onclick=function(){
    icons.classList.toggle('active');
    menu.classList.toggle('responsive');
}
