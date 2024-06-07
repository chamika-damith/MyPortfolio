var word=["red", "green", "blue", "yellow", "rosybrown", "deeppink"];

function changeColor(){
    let s = word.pop();
    word.unshift(s);

    $('.div1').css('background-color', word[0]);
    $('.div2').css('background-color', word[1]);
    $('.div3').css('background-color', word[2]);
    $('.div4').css('background-color', word[3]);
    $('.div5').css('background-color', word[4]);
    $('.div6').css('background-color', word[5]);
}

setInterval(changeColor,400);