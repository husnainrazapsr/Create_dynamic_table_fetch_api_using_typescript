"use strict";
// interface TableData {
//     id : number;
//     title:string;
//     category:string;
//     price:number;
//     description:string;
//     image:string;
// const TableData = () => {
//   const [data, setData] = <IData[]>([]);
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(data)
function table() {
    fetch('https://fakestoreapi.com/products')
        .then(responce => { return responce.json(); })
        .then(data => {
        console.log(data[1].id);
        let newArr = '';
        data.map((value) => {
            console.log("id => " + value.id);
            console.log("category => " + value.category);
            console.log("price => " + value.price);
            console.log("description => " + value.description);
        });
    });
}
console.log("Function chal gia");
table();
