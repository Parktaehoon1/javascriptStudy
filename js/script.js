window.onload = function(){
// 서버연동시 자주 활용하는 케이스
// request 라는 변수는 일반적인 변수
// 통상 서버에 요청(GET), 입력(POST), 수정(PATCH), 삭제(DELETE)..
// 위의 부분을 리퀘스트(Request) 한다고 합니다.

// let request = {  
//   // 자료를 요청하는 함수
//   get(_url) {
//     return fetch(_url);
//   },
//   // 자료를 입력하는 함수
//   post(_url, _payload) {
//     return fetch(_url, {
//       method: 'POST',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify(_payload)
//     });
//   },
//   // 자료를 수정하는 함수
//   patch(_url, _payload){
//     return fetch(_url, {
//       method: 'PATCH',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify(_payload)
//     });
//   },
//   // 자료를 삭제하는 함수
//   delete(_url, _payload) {
//     return fetch(_url, {
//       method: 'DELETE'
//     });
//   }
// }

// // 자료 요청
// request.get('https://api.odcloud.kr/api/15097368/v1/uddi:4ef1ceb1-f791-4db8-9edf-d85845bee754?page=1&perPage=10')
// .then(res => {
//   // GET 으로 호출하였다.
//   // console.log(res);
//   if(res.ok) {
//     // JavaScript 객체로 만든다.
//     // Promise 결과물을 돌려준다.
//     return res.json();
//   }
// })
// .then( res => {
//   // 최종 결과를 활용한다.
//   console.log('GET 결과', res) 
//   let html = `<table>` 
//   // console.log(res[0])
//   res.forEach(function(value, index){
//   // console.log('url확인', value[0].url)
//   console.log('img', value.url)
//   html += `<tr>
//   <td>${value.author}</td>
//   <td><img src="${value.url}"></td>
//   </tr>`
//   });
//   // for(let i = 0; i < 1; i++){
//   //   console.log('GET방식으로 받기',res[0].title);
//   //   console.log('GET방식으로 받기',res[0].url);
//   //   html += `<li>
//   //   ${res[0].title}
//   //   <img src="${res[0].url}">
//   //   </li>`
//   // }

//   html += `</table>`;

//   document.getElementById('gnb').innerHTML = html;
// })
// .catch(err => {
//   console.log(err)
// });



//1.입력받으면 입력값 초기화
//2. 입력값 댓글로들어가기
//3. 댓글 삭제, 수정기능
//4. 좋아요 투표기능
//5. 타임스템프기능
//6. 무작위 아이디  
//7. 댓글 삭제기능
//8. 댓글 수정기능

const inputBar = document.querySelector("#comment-input");
const rootDiv = document.querySelector("#comments");
const btn = document.querySelector("#submit");
const mainCommentCount = document.querySelector('#count'); //맨위 댓글 숫자 세는거.
// keyup event




//타임스템프 만들기, 최대한 상세하게 만들자.
function generateTime(){
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const wDate = date.getDate();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    const time = year+'-'+month+'-'+wDate+' '+hour+':'+min+':'+sec;
    return time;

}

//유저이름 발생기
//유저이름은 8글자로 제한.
function generateUserName(){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';  // length 26;
    let makeUsername = '';
    for(let i=0; i<4;i++){
        let index = Math.floor(Math.random() * alphabet.length); 
        console.log("index",index)
        makeUsername += alphabet[index]; // 위에 정의한 알파벳 인덱스 수로 값 추출       
    }
    for(let j=0;j<4;j++){
        makeUsername += "*";
    }
    return makeUsername;    
}

function numberCount(event){
    console.log("event타겟",event.target);
    if(event.target === voteUp){
      return voteUp.value.innerHTML++; 
      
    }else if(event.target === voteDown){
      return voteDown.value.innerHTML++; 
    }   
}
// count up down 고려해야됨


function deleteComments(event){    
    const btn = event.target; // 아래에서 잡은 (delBtn 잘 잡음) 
    console.log("deleteComments의 이벤트 타겟",btn)  
    const list = btn.parentNode.parentNode;//btn 즉 delBtn의 부모의 부모. eachComment를 뜻함
    console.log("btn의 부모의 부모",list)
    //parentNode와 parentElement 는 크게 Node는 조금 더 큰 영역, Element는 조금 더 작은영역
    //즉 Html tag를 바로 특정하거나 id값, class 속성을 뜻한다.
    rootDiv.removeChild(list);  // global 영역에서 참조 
    console.log("deleteComments안의",rootDiv)
    //메인댓글 카운트 줄이기.
    if(mainCommentCount.innerHTML <='0'){
        mainCommentCount.innerHTML = 0; // 음수로 내려가지 않게 막기 
    }else{
        mainCommentCount.innerHTML--;
    }
}


//댓글보여주기
function showComment(comment){
    console.log("showComment의 값",comment)
    const userName = document.createElement('div');
    const inputValue = document.createElement('span');
    const showTime = document.createElement('div');
    const voteDiv = document.createElement('div');
    const countSpan = document.createElement('span')
    const voteUp = document.createElement('button');
    const voteDown = document.createElement('button');  
    const commentList = document.createElement('div'); // comentList안에 다들어가있음  
    const delBtn = document.createElement('button');

    delBtn.className ="deleteComment";
    delBtn.innerHTML="삭제";
    commentList.className = "eachComment";
    userName.className="name";
    inputValue.className="inputValue";
    showTime.className="time";
    voteDiv.className="voteDiv";
    //유저네임가져오기 

    userName.innerHTML = generateUserName();    
    userName.appendChild(delBtn);  // 자식요소로 delBtn 을 마는다. 
    //입력값 넘기기
    inputValue.innerText = comment; // showComment가 실행됐을때 입력값을 innerHTML에 출력
    //타임스템프찍기
    showTime.innerHTML = generateTime();
    countSpan.innerHTML=0;
    //투표창 만들기, css먼저 입혀야함.  
    voteUp.id = "voteUp";
    voteUp.innerHTML = '↑';    
    voteDown.id = "voteDown";
    voteDown.innerHTML = '↓';       
    voteDiv.appendChild(voteUp);
    voteDiv.appendChild(voteDown);

    //댓글뿌려주기       
    commentList.appendChild(userName);
    commentList.appendChild(inputValue);
    commentList.appendChild(showTime);
    commentList.appendChild(voteDiv);
    rootDiv.prepend(commentList); // 콘텍츠를 선택한 요소의 시작부분에 삽입
    console.log("rootDiv",rootDiv)

    voteUp.addEventListener("click",numberCount);
    voteDown.addEventListener("click",numberCount);

    delBtn.addEventListener("click",deleteComments); // delBtn 을 클릭하면 deleteComments가 실행

}

//버튼만들기+입력값 전달
function pressBtn(){ 
   const currentVal = inputBar.value;
   console.log("currentVal 값",currentVal)
   if(!currentVal.length){ // length가 없을때 
      alert("댓글을 입력해주세요!!");
   }else{
      showComment(currentVal);  
      mainCommentCount.innerHTML++;
      inputBar.value =''; // 초기화 해주기
   }
}

btn.onclick = pressBtn; 
console.log("btn의 값",btn);

}