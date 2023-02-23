// const btn = document.querySelector('button');
// btn.addEventListener('click', function() {
//   text.innerHTML='Hello World'
//   text.style.color='red'
//   text.style.fontStyle='italic'
// })




// const text = document.querySelector('div');
// function changeText() {
//   const btn1 = document.getElementById('btn1');
//   // btn1.disabled = true;
//   btn1.style.display = 'none';
//   text.innerHTML='OK button disable'
//   text.style.color='red'
//   text.style.fontStyle='italic'
// }


// const btn1 = document.getElementById('mySelect')

// function enable() {
//   // btn1.style.display = 'block'
//   // btn1.disabled = false;
//   document.querySelector('#mySelect').disabled= false;
// }

// function disable() {
//   // btn1.style.display = 'none'
//   // btn1.disabled = true;
//   document.querySelector('#mySelect').disabled= true;
// }



const display = document.querySelector('#display')
const arr = document.querySelectorAll('p');

arr.forEach((a) => {
  display.innerHTML += a.innerHTML + " ";
  display.style.color='blue' 
})


for (let i = 0; i < arr.length; i++) {
  display.innerHTML += arr[i].innerHTML + " ";
  display.style.color = 'blue';
}


let i = 0;
while (i < arr.length) {
  display.innerHTML += arr[i].innerHTML + " ";
  display.style.color='blue';
  i++;
}