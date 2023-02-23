////////////////// 노가다로 작성 /////////////////////

// const h1 = document.querySelector('h1');
// document.querySelector('h1').innerHTML='Hello World'
// h1.innerHTML='Hello World'
// const h2 = document.querySelector('h2');
// h2.innerHTML='Hello World'
// const h3 = document.querySelector('h3');
// h3.innerHTML='Hello World'
// const h4 = document.querySelector('h4');
// h4.innerHTML='Hello World'
// const h5 = document.querySelector('h5');
// h5.innerHTML='Hello World'
// const h6 = document.querySelector('h6');
// h6.innerHTML='Hello World'


/////////////////// 반복문으로 작성 ///////////////

// for(let i = 1; i <= 6; i++) {
//   const text = document.querySelector(`h${i}`);
//   text.innerHTML= 'Hello World'
//   // console.log(text)
// }




//////////////////////p태그 작성//////////////////////////


const div1 =document.querySelector('.divclass');
div1.style.color='blue'
document.querySelector('#divid').style.fontSize='24px';


for(let i = 1; i <= 3; i++) {
  const pp = document.getElementById(`p${i}`);
  pp.innerHTML='The standard chunk of Lorem Ipsum'
  pp.style.color='red'
  pp.style.fontStyle='italic'
}


// const ppp = document.querySelectorAll('.p');
// for(let i = 0; i <= ppp.length; i++) {
//   ppp[i].innerHTML='The standard chunk of Lorem Ipsum'  
//   ppp[i].style.color='red'
//   ppp[i].style.fontStyle='italic'   
// }

document.getElementById('p1').style.fontSize='20px'
document.getElementById('p2').style.fontSize='18px'
document.getElementById('p3').style.fontSize='16px'

const div = document.querySelector('div');
div.firstElementChild.innerHTML="Hi I'm p1"
div.lastElementChild.innerHTML="Hi I'm p3?"

const child = document.querySelector('#p2')
child.parentElement.style.fontSize='40px'              // 자식들의 부모(divclass)
child.nextElementSibling.style.color='black';          // 마지막 자식요소
child.previousElementSibling.style.color='gray'        // 첫번째 자식요소
// div.lastElementChild.remove();                      // 자식요소중 마지막번째 삭제 (p3)
// div.lastElementChild.remove();                      // 자식요소중 마지막번째 삭제 (p2)
// div.lastElementChild.remove();                      // 자식요소중 마지막번째 삭제 (p1)

