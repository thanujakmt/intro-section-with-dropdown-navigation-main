
var iconFirst = document.querySelector('.arrow1');

iconFirst.addEventListener('click',() =>{
    iconFirst.classList.toggle('rotate_transition')
    let dropDown =  document.querySelector('.item_wrapm');
    dropDown.classList.toggle('show_dropdown')
    dropDown.style.transition = '2s';
});

var iconSecond = document.querySelector('.Company');

iconSecond.addEventListener('click',() =>{
    iconSecond.classList.toggle('rotate_transition')
    let dropDown2 = document.getElementById('Company_dropdown');
    dropDown2.classList.toggle('show_dropdown')
    dropDown2.style.transition = '2s';
});

document.querySelector('.mobile_nav').style.display = 'none';

var menu_btn = document.getElementById('menu_icon');

menu_btn.addEventListener('click', () => {
    document.querySelector('.mobile_nav').style.display = 'block';
});

var close_btn = document.querySelector('.close');

close_btn.addEventListener('click', () => {
    document.querySelector('.mobile_nav').style.display = 'none';
});