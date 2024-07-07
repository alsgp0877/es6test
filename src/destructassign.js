// let arr = [10,20,30,40];
// let [a1,a2,a3] = arr;
// console.log(a1,a2,a3);

// let p1 = {name:"홍길동", age:20, gender:"M"}
// let {name:n, age:a, gender} = p1;
// console.log(n,a,gender);


// function addContatct2(contact){
//     if(!contact.email) contact.email="이메일없음";
//     if(!contact.age) contact.age=0;
//     let {name, phone, email, age} = contact
//     console.log(name,phone,email,age);
// }
// addContatct2({name:"홍길동", phone:"010-222-3331"});


// function addContatct1({name, phone, email="이메일없음", age=0}){;
//     console.log(name,phone,email,age);
// }

// addContatct1({name:"홍길동", phone:"010-222-3331"});

// function addContatct3(name, phone, email="이메일없음", age=0){
//     console.log(name,phone,email,age);
// }

// addContatct3("홍길동","010-222-3331");

const response = {
    status : 200,
    data1 : { data2 :{ data3 :"홍길동"}, otherInfo:'some other information'}
}

const {status,data1:{data2:{data3}}} = response;
const {data1} = response;



console.log(status)
console.log('data1' + data1.data2.data3);
console.log('data3' + data3);








