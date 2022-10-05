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