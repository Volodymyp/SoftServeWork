const container = document.querySelector('.rent-container');
const rooms = document.querySelectorAll('.row .room:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const total2 = document.getElementById('total2');
const floorSelect = document.getElementById('floor');



populateUI();

let rentPrice = +floorSelect.value;


function setFloorData(floorIndex, floorPrice) {
	localStorage.setItem('selectedFloorIndex', floorIndex);
	localStorage.setItem('selectedFloorPrice', floorPrice);
}


function updateSelectedCount() {
	const selectedRooms = document.querySelectorAll('.row .room.selected');

	const roomsIndex = [...selectedRooms].map(room => [...rooms].indexOf(room));

	localStorage.setItem('selectedRooms', JSON.stringify(roomsIndex));

	const selectedRoomsCount = selectedRooms.length;

	count.innerText = selectedRoomsCount;

	let resultTotal = 0;
	let squareMetres = 0;
	for (let i = 0; i < selectedRooms.length; i++) {
		resultTotal += Number(selectedRooms[i].getAttribute("value"));
		squareMetres += Number(selectedRooms[i].getAttribute("value"));
	}
	total.innerText = resultTotal * rentPrice;
	total2.innerText = resultTotal;

	setFloorData(floorSelect.selectedIndex, floorSelect.value);
}


function populateUI() {
	const selectedRooms = JSON.parse(localStorage.getItem('selectedRooms'));

	if (selectedRooms !== null && selectedRooms.length > 0) {
		rooms.forEach((room, index) => {
			if (selectedRooms.indexOf(index) > -1) {
				room.classList.add('selected');
			}
		});
	}

	const selectedFloorIndex = localStorage.getItem('selectedFloorIndex');

	if (selectedFloorIndex !== null) {
		floorSelect.selectedIndex = selectedFloorIndex;
	}
}


floorSelect.addEventListener('change', e => {
	rentPrice = +e.target.value;
	setFloorData(e.target.selectedIndex, e.target.value);
	updateSelectedCount();
});


container.addEventListener('click', e => {
	if (
		e.target.classList.contains('room') &&
		!e.target.classList.contains('occupied')
	) {
		e.target.classList.toggle('selected');

		updateSelectedCount();
	}

});


updateSelectedCount();

