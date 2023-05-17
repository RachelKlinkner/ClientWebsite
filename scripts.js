function toggleNav() {
    let elements = document.getElementsByClassName('toggle-nav');
    for(let i = 0; i < elements.length; i++){
    elements[i].classList.toggle('show');
    }
}
// gallery component
document.addEventListener('DOMContentLoaded', function(){
	let rotate = function(component, step){
		// figure out width of container
		let cont = component.querySelector('.very-wide');
		let width = (cont.offsetWidth - component.offsetWidth) - 40;
		let left = Number(cont.style.left.replace('px', ''));
		left += step * 400;
		if(left > 0) left = 0;
		if(left < -width) left = -width;
		cont.style.left = left+'px';
	};

	let components = document.querySelectorAll('.carosel');
	for(let i = 0; i < components.length; i++){
		let component = components[i];
		component.querySelector('.arrow-left').addEventListener('click', function(){
			rotate(component, 1);
		});
		component.querySelector('.arrow-right').addEventListener('click', function(){
			rotate(component, -1);
		});
	}
});