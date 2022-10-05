// let bts = {
//     name : "방탄",
//     num: 7
// }

// // let name = bts.name  // 방탄
// // let num = bts.num // 7
// // console.log(name, num)

// // es6 에서는
// let {name, num} = bts  
// // 조건이 키값과 같을때만 작동, 다른 이름을 주면 작동하지 않음 ex) nameValue, numValue
// console.log(name,num)

// let arr = [1,2,3]
// let [a,b,c] = arr
// console.log(a,b,c)
// console.log(c)// holy moly

// let [d,...res] = arr
// console.log(res)

// let person = {
//     name:"hohoh",
//     age:19,
//     cute:true
// }

// let {name,...res} = person
// console.log(res)

// let a = [1,2]
// let b = [3,4]
// let c = [5,6]

// // let result = a.concat(1,2,4,5,"ㅎㅇㅎㅇ")
// let result = [...a, ...b, ...c]
// console.log(result) // concat 메서드는 변수, 숫자, 글자 다 받음

// let name=`noona's${fruits} store`
// let fruits = ["banana","apple","mango"]
// let location="Seoul"
// let store = {    name,    fruits,    location}
// console.log(store)

// let name="noona store"
// let fruits = ["banana","apple","mango"]
// let address={
//     country:"Korea",
//     city:"Seoul"
// }

// function findStore(obj){
//    let {name,address:{city}} = obj
//     return name=="noona store" && city=="Seoul"
// }

// console.log(findStore({name,fruits,address}))


//ES6 문법 문제
// 정답 https://hackmd.io/@oW_dDxdsRoSpl0M64Tfg2g/HkqRMUYvF

//1. 다음의 코드를 es6 문법을 이용하여 재작성 하시오
// let name="noona's fruit store"
// let fruits = ["banana","apple","mango"]
// let location="Seoul"
// let store = {    name:name,    fruits:fruits,    location:location}
// console.log(store)
 
//2. es6 문법을 이용하여 다음과 같이 출력하시오
//제 가게 이름은 noona's fruit store 입니다. 위치는 Seoul 에 있습니다
 

//3. 다음 코드를 Destructoring을 이용하여 해결하시오
// function calculate(obj){    // 함수 안을 바꾸시오
//     let {a,b,c} = obj;
//     return a+b+c}
//     calculate({a:1,b:2,c:3})
 
//4. 다음 문제에 정답이 true가 나오게 하시오
// let name="noona store"
// let fruits = ["banana","apple","mango"]
// let address={
//     country:"Korea",
//     city:"Seoul"
// }
//     function findStore(obj){
//     let {name,address:{city}} = obj    
//     return name="noona store" && city == "Seoul"
// }
//     console.log(findStore({name,fruits,address}))
 
//5. 다음과같이 프린트되게 코드를 바꾸시오
// function getNumber(){
//     let array = [1,2,3,4,5,6]    // 여기서부터 바꾸시오
//     let [first,,third,forth] = array
//     return {first,third,forth}
//     }
//     console.log(getNumber()) //  결과값 { first: 1, third: 3, forth: 4 }
 

//6. 다음의 결과가 true가 되게 하시오
// function getCalendar(first, ...rest) {

//   return (

//     first === "January" &&

//     rest[0] === "Febuary" &&

//     rest[1] === "Febuary" &&

//     rest[2] === undefined

//   );}
//   console.log("gg",getCalendar("January", "Febuary", "Febuary",undefined)); // 여기를 바꾸시오
 

//7. 두 어레이들중 최소값을 찾는 함수를 완성하시오
// function getMinimum(){

//     let a= [45,23,78]

//     let b = [54,11,9]

//     return Math.min(...a,...b) // array합치기 
// }
// console.log(getMinimum())
 

//8. 다음의 함수를 화살표 함수로 바꾸시오
// function sumNumber() {

//   // 여기서부터 바꾸시오

//   const sum = function (a, b) {

//     return a + b;

//   };

//   return sum(40, 10);}
 

//9. 다음함수를 화살표 함수로 바꾸시오
// function sumNumber() {

//   //여기를 바꾸시오

//   return addNumber(1)(2)(3);

//   function addNumber(a) {

//     return function (b) {

//       return function (c) {

//         return a + b + c;

//       };

//     };

//   }} 
//   console.log(sumNumber());

// map 함수 
// let names = [1,2,3,4]
// let data = names.map((item)=>{
//     return item+"haha"
// })

// console.log(data) 
// map 함수는 배열에 추가하여 사용도 가능하다

//map의 주된 사용
let ceoList = [
    {name:1, age:23, ceo:true},
    {name:10, age:231, ceo:true},
    {name:100, age:233, ceo:true}
]

// let aaa = ceoList.map((item)=>{
//     return item.name
// })
// console.log(aaa)

// let gg = ceoList.filter((item)=> {
//     return item.age > 200
// })
// console.log(gg)

// filter 는 조건을 주면 true 인것만 반환

let data2 = ceoList.some((item) => {
    return item.age > 200;
})
console.log(data2)

// some은 반환값이 하나라도 있으면 true 줌


// let names = [

//     "Steven Paul Jobs",
//     "Bill Gates",
//     "Mark Elliot Zuckerberg",
//     "Elon Musk",
//     "Jeff Bezos",
//     "Warren Edward Buffett",
//     "Larry Page",
//     "Larry Ellison",
//     "Tim Cook",
//     "Lloyd Blankfein",];
   
//   map 문제
//   모든 이름을 대문자로 바꾸어서 출력하시오.
//   성을제외한 이름만 출력하시오. (예-[“Steven”,“Bill”,“Mark”,“Elon”…])
//   이름의 이니셜만 출력하시오. (예-[“SPU”,“BG”,“MEZ”,“EM”…])
   
//   filter 문제
//   이름에 a를 포함한 사람들을 출력하시오.
//   이름에 같은 글자가 연속해서 들어간 사람을 출력하시오. (예-tt,ff,ll 이런 글자들)
   
//   some 문제
//   전체 이름의 길이가 20자 이상인 사람이 있는가?
//   성을 제외한 이름에 p를 포함한 사람이 있는가?(대소문자 상관 no)
   
//   every 문제
//   모두의 전체 이름의 길이가 20자 이상인가?
//   모두의 이름에 a 가 포함되어 있는가?
   
//   find 문제
//   전체 이름의 길이가 20자 이상인 사람을 찾으시오.
//   미들네임이 포함되어있는 사람을 찾으시오.(예-Steven Paul Jobs)
   
//   findIndex 문제
//   전체 이름의 길이가 20자 이상인 사람의 인덱스 번호를 찾으시오.
//   미들네임이 포함되어있는 사람의 인덱스 번호를 찾으시오.
   

// 답 https://hackmd.io/@oW_dDxdsRoSpl0M64Tfg2g/rkMXvayvK