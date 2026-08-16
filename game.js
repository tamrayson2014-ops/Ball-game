const ball = document.getElementById('ball');
document.addEventListener('keydown', handleKeyPress);
let xPos = 0;
let yPos = 0;
let moveSize = 10;

function handleKeyPress(e) {
	if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
    	e.preventDefault();
  	}
	if (e.code === 'ArrowLeft') {
		xPos = xPos - moveSize;
	}
	if (e.code === 'ArrowRight') {
		xPos = xPos + moveSize;
	}
	if (e.code === 'ArrowUp') {
		yPos = yPos - moveSize;
	}
	if (e.code === 'ArrowDown') {
		yPos = yPos + moveSize;
	}
	if (xPos < 0) {
		xPos = 0;
	}
	if (yPos < 0) {
		yPos = 0;
	}
	refresh();
}
function refresh() {
	ball.style.left = xPos + 'px';
	ball.style.top = yPos + 'px';
}
