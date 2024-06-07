var word=["A", "B", "C", "D", "E", "F"];

function changeValue(){
    let s = word.pop();
    word.unshift(s);

    $('.div1>span').text(word[0]);
    $('.div2>span').text(word[1]);
    $('.div3>span').text(word[2]);
    $('.div4>span').text(word[3]);
    $('.div5>span').text(word[4]);
    $('.div6>span').text(word[5]);

}

setInterval(changeValue,1000);