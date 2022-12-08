document.querySelector('h1').onclick = () => {
    alert('you clicked the h1')
}

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function () {
    alert("clicked!")
})

const twist = () => {
    console.log("TWIST");
}

function shout() {
    console.log("SHOUT!")
}

const btn2 = document.querySelector('#v2');

btn2.addEventListener('click', twist)
btn2.addEventListener('dblclick', shout)