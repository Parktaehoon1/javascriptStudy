
    const inputBar = document.querySelector('#comment-input');
    const rootDiv = document.querySelector('#comments');
    const btn = document.querySelector('#submit');
    const mainCommentCount = document.querySelector('#count');

    function showComment(comments){
        console.log("showComment가 입력됐을때 들어오는 값",comments);
        // 상수가 입력되면 html 요소 생성
        const commentList = document.createElement('div'); // 아래 요소를 감싸게 할 예정
        const userName = document.createElement('div');
        const inputValue = document.createElement('span');
        const showTime = document.createElement('div');
        const voteDiv = document.createElement('div');
        const voteUp = document.createElement('button');
        const voteDown = document.createElement('button');  
        const countSpan = document.createElement('span');
        const delBtn = document.createElement('button');

        // css작업을 위한 class 명 설정
        commentList.className = 'eachComment';
        userName.className ='name';
        inputValue.className = 'inputValue';
        showTime.className = 'time';
        voteDiv.className = 'voteDiv';
        delBtn.className = 'deleteComment';

        delBtn.innerHTML = '삭제'; // 화면에 보여지는 텍스트 설정
        userName.innerHTML = generateUserName(); // 밑에 유저 이름 만드는 함수 넣기
        userName.appendChild(delBtn); // userName 의 자식요소 생성으로 delbtn 생성 (버튼임)
        inputValue.innerText = comments; // showComment 실행됐을때 입력값으로 inputValue에 출력
        // innerHTML, text 차이 구분하기 
        showTime.innerHTML = generateTime();
        countSpan.innerHTML = 0;

        voteUp.id = 'voteUp'; // id값 지정
        voteUp.innerHTML = 'Up';
        voteDown.id = 'voteDown';
        voteDown.innerHTML = 'Down';
        voteDiv.appendChild(voteUp);
        voteDiv.appendChild(voteDown);

        // 만들어진 요소 댓글로 출력하기
        commentList.appendChild(userName); // 30번 구문으로 자동 하위 el 생성
        commentList.appendChild(inputValue);
        commentList.appendChild(showTime);
        commentList.appendChild(voteDiv); // 40~41 구문으로 자동 하위 el 생성

        rootDiv.prepend(commentList); // prepend 는 콘텐츠를 선택한 요소 시작부분에 삽입 
        // 여기서 roodDiv 는 #comments 뜻함

        voteUp.addEventListener('click', numberCount) // 클릭했을때 숫자 카운팅되는거 아직 구현못함
        voteDown.addEventListener('click', numberCount) // 클릭했을때 숫자 카운팅되는거 아직 구현못함
    
        delBtn.addEventListener('click', deleteComments) // removechild 로 다 없앨 예정
    }


    // keyup event 는 index.html 에 기입

    // 유저가 댓글을 작성한 시간을 나타내줘야됨
    function generateTime(){
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth();
        const wDate = date.getDate();
        const hour = date.getHours();
        const min = date.getMinutes();
        const sec = date.getSeconds();

        const time = year+'-'+month+'-'+wDate+'-'+hour+'-'+min+':'+sec;
        return time;
    }   
    //유저이름 만들어줘야됨
    function generateUserName(){
        let createRandomID = 'abcdefghijklmnopqrstuvwxyz';
        let makeUsername = ''; // 여기에 for문 돌려서 나오는 값 넣을 거임
        for(let i = 0; i<4; i++){ // 총 8자리 만들거지만 4개만 하는게 뒤에꺼는 masking 표시되게하려고
            let index = Math.floor(Math.random() * createRandomID.length);
            // floor 는 Math.random 함수가 0.56414654 이렇게 소수자리가 나와서 소수자리를 버리기 위함
            // for문이 1번씩 돌때마다 createRandomID의 length(26) 에서 랜덤 값 추출하여 아이디 앞 4자리 
            // 임의 생성 
            makeUsername += createRandomID[index] // 4번 더한걸 makeUsername에 보관
        } 
        for(let j = 0; j<4; j++){
            makeUsername += '*';
        }
        // window.localStorage.setItem('makeUsername', makeUsername)
        return makeUsername;
    } 

    function numberCount(event){ // numberCount가 실행되는 이벤트의 타겟을 구함
        if(event.target === voteUp){
            return voteUp.value.innerHTML++;
        } else if(event.target === voteDown){
            return voteDown.value.innerHTML++; // 음수로 갈 필요 없음. 
        }
    }
    function deleteComments(event){
        const btn = event.target; // deleteComments가 실행되는 이벤트의 타겟을 구함
        const list = btn.parentNode.parentNode; // btn의 부모의 부모 commments 를 감싸는 태그를 지정할것임
        
        rootDiv.removeChild(list) // rootDiv는 많이 쓰여서 global에서 참조 예정
        if(mainCommentCount.innerHTML <= '0'){
            mainCommentCount.innerHTML = 0; // 음수로 내리면 안됨 댓글의 수를 나타내야되기때문에
        } else { // 양수라면 -- 해라
            mainCommentCount.innerHTML--;
        }
    }

    // input 태그에 값 받앗을때 유효성 검사? 
    function pressBtn(){
        const currentValue = inputBar.value;



        console.log("currentValue",currentValue)
        console.log("현재input값",currentValue)
        if(!currentValue.length){
            alert('댓글을 입력해주세요.')
        } else { // 댓글 출력
            showComment(currentValue);
            mainCommentCount.innerHTML++;
            // window.localStorage.setItem('currentValue', currentValue)
            inputBar.value = ''; // 다시 input태그 value 초기화해주기
        }
    }

    btn.onclick = pressBtn;  // submit 클릭하면 이제 함수실행


    const userTemp = {
        id : generateTime(),
        
    }

