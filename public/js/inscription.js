var tabs = document.querySelectorAll('.menu a');
for(var i = 0; i < tabs.length; i++){

tabs[i].addEventListener('click', function (e) {

var li = this.parentNode;
var div = this.parentNode.parentNode.parentNode;

if (li.classList.contains('active')) {
    return false
}


// la

div.querySelector('.menu .active').classList.remove('active');
    
li.classList.add('active');

div.querySelector('.contenu.active').classList.remove('active');

div.querySelector(this.getAttribute('href')).classList.add('active');

    });
}
