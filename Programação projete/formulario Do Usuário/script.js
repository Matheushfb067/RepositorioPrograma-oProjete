var traumas = document.querySelector('.traumas-ortopedicos');
var btnTrauma = document.querySelector('#btnTrauma');

//function trauma(){
//    traumas.style.display = 'block';
//}

btnTrauma.addEventListener('click', function() {
    if (traumas.style.display === 'block') {
        traumas.style.display = 'none';
    } else {
        traumas.style.display = 'block';
    }
});