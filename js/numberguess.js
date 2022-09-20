window.onload = function(){
    // 로직 생각하기
    // 1. 랜덤 번호 지정.
    // 2. 유저가 번호 입력 후 go버튼 누름
    // 3. 만약 유저가 ㅂ랜덤 번호를 맞추면, 맞췄습니다, 
    // 4. 랜덤번호가 < 다운, > 업 이라고 알려준다
    // 5. Reset버튼을 누르면 게임이 리셋
    // 6. 5번의 기회를 다 쓰면 게임은 끝, (더이상 추측 불가, 버튼 비활성화)
    // 7. 유저가 1~100 범위를 벗어난 숫자를 입력하면 알려주고, 기회는 깍지 않는다.
    // * 이미 입력한 숫자를 또 입력하면 알려주고 기회를 깍지 않는다. 
    let computerNum = 0;
    let playButton = document.getElementById('play-button');
    let userInput = document.getElementById('user-input');
    let resultArea = document.getElementById('result-area');
    let resetButton = document.getElementById('reset-button');
    let chances = 5;
    let gameOver = false;
    let chanceArea = document.getElementById('chance-area');
    let history = [];


    playButton.addEventListener("click", play)  // play 함수에 () 하면 바로 실행되는거 변수로서 넘기는거라 () 없이 간다. 
    resetButton.addEventListener("click", reset);
    userInput.addEventListener("focus", function(){
        userInput.value = ""
    })


    function pickRandomNum (){
        computerNum = Math.floor(Math.random() * 100) + 1;
        console.log("정답",computerNum)
    }

    function play(){
        let userValue = userInput.value;
    
        if(userValue <1 || userValue>100){
            alert('1과 100사이 숫자를 입력해 주세요!')
            userInput.value = ""
            return
        }

        if(history.includes(userValue)){
            resultArea.textContent = "이미 입력한 숫자 입니다."
            return
        }

        chances --;
        chanceArea.textContent = `남은 찬스: ${chances}번`
        if(userValue < computerNum){
            resultArea.textContent = "UP!!!"
        } else if(userValue > computerNum){
            resultArea.textContent = "DOWN!!!"
        } else {
            resultArea.textContent = "맞추셨습니다!"
            gameOver=true;
        }

        history.push(userValue);
        console.log(history)

        if(chances < 1){
            gameOver = true
        }

        if(gameOver == true){
            playButton.disabled = true;
        }
    }

    function reset(){
        // user input 창 깨긋하게 정리,
        userInput.value = "";
        // 새로운 랜덤 번호 생성
        resultArea.textContent = "결과값이 여기 나옵니다."
        pickRandomNum()
    }

    pickRandomNum()

}