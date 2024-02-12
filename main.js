let computerNum = 0;
let playButton = document.getElementById("playButton");
let UserInput = document.getElementById("UserInput");
let resultArea = document.getElementById("result-area");
let ResetButton = document.getElementById("ResetButton");
let chances = 5;
let GameOver = false;
let ChanceArea = document.getElementById("chance-area");
let history=[];


playButton.addEventListener("click",play);
ResetButton.addEventListener("click",reset);
UserInput.addEventListener("focus", function(){UserInput.value =""});

function pickRandomNum(){
    computerNum = Math.floor(Math.random() *100)+1;
    console.log("정답",computerNum);
}

function play(){
    let userValue = UserInput.value;

    if(userValue <1 || userValue > 100){
        resultArea.textContent ="1에서 100까지의 숫자만을 입력하세요!";
        return;
    }
    if(history.includes(userValue)){
        resultArea.textContent ="이미 입력한 숫자입니다. 다른 숫자를 입력해주세요!";
        return;
    }
    chances--;
    console.log("chances:"+chances)
    ChanceArea.textContent = `남은기회:${chances}번`
    if(userValue<computerNum){
        resultArea.textContent ="UP!!";
    }else if(userValue>computerNum){
        resultArea.textContent ="DOWN!!";
    }else{
        resultArea.textContent ="정답입니다!!";
        GameOver = true;
    }

    history.push(userValue)
    console.log(history)

    if (chances<1){
        GameOver=true;
    }
    
    if(GameOver){
        playButton.disabled = true;
        ChanceArea.textContent = "남은 기회는 없습니다!"
    }}

function reset(){
     UserInput.value =" ";
     pickRandomNum();
     resultArea.textContent ="결과값이 여기 나옵니다.";
     chances = 5;
     play()


}

pickRandomNum();