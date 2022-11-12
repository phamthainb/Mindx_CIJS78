// const page = {

// }

// console.dir(document.get);

// const titleEl = document.getElementById("title");
// console.dir(titleEl);

// const h2Title = document.createElement("h2");
// h2Title.innerText = "Day la H2";
// console.log(h2Title);

// h2Title.className = "new-h2";
// h2Title.style.color = "blue";
// document.getElementById("root").appendChild(h2Title);
// // <h2>Day la H2</h2>

// const button = document.querySelector("#btn-change");
// console.log(button);

// button.addEventListener("click", changeColor);

// function changeColor() {
//   console.log("Change color");
//   titleEl.className = "new-class";
//   titleEl.style.color = "red";
//   titleEl.style.background = "blue";
//   window.location.href = "http://127.0.0.1:8080/lesson_01/login.html";
// }

// const urlSearch = new URLSearchParams(window.location.search);

// console.log(urlSearch.get("name"));

// callback promise, async await

// (JS - Fun) -> Java, .Net (OOP - Class) -> Class - Entity
// class Animal {
//     constructor(age, name) {
//         this.age = age;
//         this.name = name;
//     }

//     bay() {
//         console.log("bay nef");
//     }

//     getInfo() {
//         console.log(`name: ${this.name} - age: ${this.age}`);
//     }
// }

// console.log("Animal::", Animal);

// const dog = new Animal(2, "Dog");

// console.log(dog);

// dog.getInfo();

// const meo = new Animal(2, "TOm");
// meo.getInfo();

// callback promise, async await
// callback

// function calc(a, b, callback) {
//   let res = a + b;
//   //   print(res);
//   //   add2(res);
//   callback(res);
// }

// function print(number) {
//   console.log(number);
// }

// function add2(number) {
//   let res = number + 2;
//   console.log(res);
// }

// calc(1, 2, print);
// calc(1, 2, add2);

// promise

// // main thread
// let myPromise = new Promise(function (resolve, reject) {
//   // do something
//   let hetCho = false;
//   if (hetCho == true) {
//     reject(false);
//   } else {
//     resolve(true);
//   }
// });

// myPromise
//   .then(function (kq) {
//     console.log(kq);
//     if (kq === true) {
//       return "Ve nha an com roi di choi";
//     }
//     // render product
//   })
//   .then(function (kq2) {
//     console.log(kq2);
//   })
//   .then(function (kq3) {
//     console.log(kq3);
//   })
//   .catch(function (err) {
//     console.log("err", err);
//     // di toi cay xang khac de do
//   });
// console.log(myPromise);
// console.log("Tat nuoc, vi nuoc day roi");

// console.log("Hoc bai");
// setTimeout(() => {
//   console.log("Danh rang");
// }, 3000);
// console.log("Di ngu");

// setTimeout(() => {
//   let a = prompt("Enter your number");
//   console.log(a);
// }, 3000);
// console.log("render footer");

// nau com : 15p
// giat do: 30p
// quet nha: 15p
// an com: 30p

// async function(){}
// new Promise()

async function getListUsers() {
    // ds sv toan quoc
    // list trg dh
    // list khoa dh
    // list sv thuoc khoa

    // lan 1
    // request
    //   .then(function (response) {
    //     if (response.status === 200) {
    //       return response.json();
    //       // lan 2
    //       request
    //         .then(function (response) {
    //           if (response.status === 200) {
    //             return response.json();
    //             // lan 3
    //             request
    //               .then(function (response) {
    //                 if (response.status === 200) {
    //                   return response.json();
    //                 }
    //               })
    //               .then(function (data) {
    //                 renderUsers(data.data);
    //               });
    //           }
    //         })
    //         .then(function (data) {
    //           renderUsers(data.data);
    //         });
    //     }
    //   })
    //   .then(function (data) {
    //     renderUsers(data.data);
    //   });

    // GET - lấy về
    // POST - gửi dữ liệu đi - tạo ra dữ liệu
    // PUT -  gửi dữ liệu đi - cập nhật dữ liệu
    // DELETE - xóa dữ liệu
    const API_URL =
        "https://api.themoviedb.org/3/trending/all/day?api_key=85ac6156be17ea981b54c406910fdc7a&page=1";

    const request1 = await fetch(API_URL, {
        method: "GET",
    });

    const data = await request1.json();
    console.log(data);
    renderUsers(data.results);

    // const request2 = await fetch(API_URL, {
    //   method: "GET",
    // });
    // const data2 = await request1.json();

    // const request3= await fetch(API_URL, {
    //   method: "GET",
    // });
    // const data3= await request1.json();
}

getListUsers();

function renderUsers(users) {
    console.log("users", users);
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        const userHtml = generatorUserHtml(user);
        console.log(userHtml);
        document.getElementById("user-container").innerHTML += userHtml;
    }
}

function generatorUserHtml(movies) {
    return `
        <div class="user">
        <img src="${movies.backdrop_path}" alt="" />
        <h2>${movies.first_name} ${movies.last_name}</h2>
        <h5>${movies.email}</h5>
    </div>
    `;
}

// console.log(request);