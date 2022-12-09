const input = document.querySelector('input');
const h1 = document.querySelector('h1');


// input.addEventListener('change', function(e){
//     console.log("FDFSFEGSFESF")   // 수정하고 엔터를 누를 때
// })

input.addEventListener('input', function(e){
    h1.innerText = input.value  // 실시간
})