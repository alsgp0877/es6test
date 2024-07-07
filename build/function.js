// const test1 = function(a,b){
//     return a+b;
// }

// const test2 = (a,b)=>{
//     return a+b;
// }

// const test3=(a,b) =>a+b;

// test1(1,2)
// test2(1,2)
// test3(1,2)


var obj = { result: 0 };
obj.add = function (x, y) {
    this.result = x + y;
};
var add2 = obj.add;

//위와 같이 add2와 obj가 있을 경우에 
//객체를 설정하지 않고 함수를 호출할 경우 
//global.result, window.result 처럼 전역으로 호출된다.
add2(3, 4);
console.log(global.result);

// add(3,4)
// console.log(obj);
// console.log(result)


var add = function (x, y) {
    this.result = x + y;
};

var obj = { result: 0 };
obj.add = function (x, y) {
    // function inner(){
    //     this.result = x+y;
    // }
    // inner = inner.bind(this);
    const inner = () => {
        this.result = x + y;
    };
    inner();
};
obj.add(3, 4);

console.log(obj);

const fetchNoticeDetail = noticeId => {
    ({ id: notice.value.id, title: notice.value.title, contents: notice.value.contents } = noticeStore.fetchNoticeDetail(noticeId));
};