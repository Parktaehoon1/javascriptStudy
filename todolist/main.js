// 유저가 값을 입력
// + 버튼 클릭시, 할일 추가
// delete 버튼을 누르면 할일이 삭제
// check버튼을 누르면 할일이 끝나면서 밑줄
// 진행중 끝남 탭 누르면 언더바 진행 
// 1. 체크 하는 순간 false -> true
// 2. true 면 끝난걸로 간주 밑줄 보여주기
// 끝난탭은 끝난 아이템만, 진행중은 진행중 아이템만
// 전체탭을 누르면 다시 전체아이템으로 

let taskInput = document.getElementById('task-input');
console.log("taskINPUT",taskInput)
let addButton = document.getElementById('add-button');
console.log(addButton)
let taskList = []
let tabs = document.querySelectorAll(".task-tabs div");
let mode = 'all';
let filterList = [];

console.log(tabs)
for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function (event) {
        filter(event)
    })
}
// addButton.addEventListener('click', addTask)
// addButton.addEventListener("mousedown", addTask);
taskInput.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        addTask(event);
    }
});


function addTask() {
    let task = {
        id: randmIDGenerate(),
        taskContent: taskInput.value,
        isComplete: false
    }
    taskList.push(task)  // 푸쉬될떄 그려줘야되니까!! 밑에 render
    console.log(taskList)
    taskInput.value="";
    render()
}

function render() {
    let list = [];
    if (mode == "all") {
        list = taskList;
    } else if (mode == "going" || mode == "done") {
        list = filterList;
    }


    let resultHTML = '';
    for (let i = 0; i < list.length; i++) {
        if (list[i].isComplete == true) {
            resultHTML += `
        <div class="task">
        <div class="task-done">${list[i].taskContent}</div>
        <div>
          <button onclick="toggleComplete('${list[i].id}')">Check</button>
          <button onclick="deleteTask('${list[i].id}')">Delete</button>
        </div>
        </div>`;
        } else {
            resultHTML += `
        <div class="task">
        <div>${list[i].taskContent}</div>
        <div>
          <button onclick="toggleComplete('${list[i].id}')">Check</button>
          <button onclick="deleteTask('${list[i].id}')">Delete</button>
        </div>
        </div>`;
        }

    }
    document.getElementById('task-board').innerHTML = resultHTML
}

function toggleComplete(id) {
    console.log("id", id)
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].id == id) {
            taskList[i].isComplete = !taskList[i].isComplete;
            break;
        }
    }
    render()
    console.log(taskList)
}

function deleteTask(id) {
    console.log("id", id)
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].id == id) {
            taskList.splice(i, 1)
            break;
        }
    }
    render()
}

function filter(event) {
    mode = event.target.id;
    filterList = [];
    console.log('filter클릭됨', mode);
    if (mode == 'all') {
        render()
    } else if (mode == "going") {
        for (let i = 0; i < taskList.length; i++) {
            if (taskList[i].isComplete == false) {
                filterList.push(taskList[i])
            }
        }

        render()
    } else if (mode == "done") {
        for (let i = 0; i < taskList.length; i++) {
            if (taskList[i].isComplete == true) {
                filterList.push(taskList[i])
            }
        }
        render()
    }

}

function randmIDGenerate() {
    return '_' + Math.random().toString(36).substr(2, 9);
}