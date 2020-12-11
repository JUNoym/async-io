
'use strict';
// // promise の結果が then の中の関数の引数に渡される
// let promise = new Promise((resolve) => {
//     resolve(2);
// })

// promise.then((v1) => {
//     //v1 = 2
//     new Promise((resolve) => {
//         resolve(v1 * 3)
//     }).then((v2) => {
//         // v2 = 6
//         new Promise((resolve) => {
//             resolve(v2 * 4)
//         }).then((v3) => {
//             // v3 = 24
//             console.log(v3); //24が出力される
//         })
//     })
// })

const fs = require("fs");
const fileName = "./test.txt"

function appendFilePromise(fileName, str) {
    return new Promise((resolve) => {
        fs.appendFile(fileName, str, "utf8", () => resolve());
    });
}

async function main() {
    for (let count = 0; count < 500; count++) {
        await appendFilePromise(fileName, "あ");
        await appendFilePromise(fileName, "い");
        await appendFilePromise(fileName, "う");
        await appendFilePromise(fileName, "え");
        await appendFilePromise(fileName, "お");
        await appendFilePromise(fileName, "\n");
    }
}

main();
console.log("hoge") //main()関数自体は非同期でその中身は同期処理になる