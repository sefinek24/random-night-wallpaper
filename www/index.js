const IMAGE_NAMES = [
	'1.jpg',
	'2.jpg',
	'3.jpg',
	'4.jpg',
	'5.jpg',
	'6.jpg',
	'7.jpg',
	'8.jpg',
	'9.jpg',
	'10.jpg',
	'11.jpg',
	'12.jpg',
	'13.jpg',
	'14.jpg',
	'15.jpg',
	'16.jpg',
];

const randomImageContainer = document.querySelector('#random-image-container');
const randomImageDiv = createRandomImageElement(getRandomImageUrl());
setInterval(changeImage, 2000);

function getRandomElement(elements) {
	if (elements.length === 0) {
		return null;
	}
	const randomIndex = Math.floor(Math.random() * elements.length);
	return elements[randomIndex];
}

function getRandomImageUrl() {
	const randomImageName = getRandomElement(IMAGE_NAMES);
	return `images/${randomImageName}`;
}

function createRandomImageElement(imageUrl) {
	const div = document.createElement('div');
	div.id = 'image';
	const img = document.createElement('img');
	img.alt = 'Error';
	img.addEventListener('error', () => {
		console.error(`Failed to load image: ${imageUrl}`);
		div.removeChild(img);
		div.innerHTML = '<p>Failed to load image</p>';
	});
	img.src = imageUrl;
	div.appendChild(img);
	randomImageContainer.appendChild(div);
	return div;
}

function changeImage() {
	const img = randomImageDiv.querySelector('img');
	if (img.classList.contains('fade-out')) {
		return;
	}
	img.classList.add('fade-out');
	setTimeout(() => {
		img.src = getRandomImageUrl();
		img.classList.remove('fade-out');
	}, 920);
}