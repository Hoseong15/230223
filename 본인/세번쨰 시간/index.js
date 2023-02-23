const div = document.querySelector('div');

const regex = /\d{3}-\d{4}-\d{4}/;

const result = regex.test('010-2876-3982')
div.innerHTML=result;

// apple이라는 단어 필터링
// const regex2 = /apple/;
// const text = "Hello banana and apple"
// const result2 = text.match(regex2)
// const result3 = text.replace(regex2, 'watermelon')
// div.innerHTML = result3