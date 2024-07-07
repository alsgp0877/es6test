const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        var num = Math.random();
        if(num>=0.8){
            reject("생성된 숫자가 0.8 이상임-" + num);
        }
        resolve(parseFloat(0.9));
    },2000)
});

p.then((result)=>{
    console.log("처리결과:" + result);
})

.catch((error)=>{
    console.log("오류:", error);
})

console.log("## Promise 객체 생성!!");

var pp = new Promise((resolve, reject)=>{
    resolve("first");
})

pp.then((msg)=>{
    console.log(msg);
    throw new Error("에럴레얼레얼ㄹ")
    return "second"
})

.then((msg)=>{
    console.log(msg);
    return "third"
})

.then((msg)=>{
    console.log(msg)
})

.catch((error)=>{
    console.log("오류발생 =>" + error)
})

