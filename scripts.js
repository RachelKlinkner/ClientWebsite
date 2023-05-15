function toggleNav() {
    let elements = document.getElementsByClassName('toggle-nav');
    for(let i = 0; i < elements.length; i++){
    elements[i].classList.toggle('show');
    }
}
// gallery component
document.addEventListener('DOMContentLoaded', function(){
	var rotate = function(component, step){
		// figure out width of container
		var cont = component.querySelector('.very-wide');
		var width = (cont.offsetWidth - component.offsetWidth) - 8;
		var left = Number(cont.style.left.replace('px', ''));
		left += step * 368;
		if(left > 0) left = 0;
		if(left < -width) left = -width;
		cont.style.left = left+'px';
	};

	var components = document.querySelectorAll('.carosel');
	for(var i = 0; i < components.length; i++){
		var component = components[i];
		component.querySelector('.arrow-left').addEventListener('click', function(){
			rotate(component, 1);
		});
		component.querySelector('.arrow-right').addEventListener('click', function(){
			rotate(component, -1);
		});
	}
});