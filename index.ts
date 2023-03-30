// interface TableData {
//     id : number;
//     title:string;
//     category:string;
//     price:number;
//     description:string;
//     image:string;

// }
//  class ModuleTable {
//             table: HTMLTableElement;
//             private thead: HTMLElement;
//             private tbody: HTMLElement;
//             constructor() {
//               this.table = document.createElement('table');
//               this.thead = this.table.createTHead();
//               this.tbody = this.table.createTBody();
//               var row = this.thead.insertRow();
//               var cell = row.insertCell();
//               cell.innerHTML = "Module ID";
//              }
//           }
// fetch('https://fakestoreapi.com/products')
//     .then(responce => { return responce.json() })
//     .then(data => {
//         // console.log(data[1].id);


//         let newArr: <any>  = '';
//         data.map((value) => {
//             newArr += `<tr>
//             <td>${value.id}</td>
//             <td>${value.title}</td>
//             <td>${value.category}</td>
//             <td>${value.price}</td>
//             <td>${value.description}</td>
//             <td><img src="${value.image}"/></td>
//           </tr>`;


//         });
//       document.getElementById("tbody").innerHTML = newArr;

//     });

interface IData {
  id: number;
  title: string;
  category: string;
  price: number;
  description: string;
 
}

// const TableData = () => {
//   const [data, setData] = <IData[]>([]);

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(data)
function table (){
fetch('https://fakestoreapi.com/products')
  .then(responce => { return responce.json() })
  .then(data => {
    console.log(data[1].id);
    let newArr: string | number[] = '';
    data.map((value: IData) => {
      console.log("id => " + value.id);
      console.log("category => " + value.category);
      console.log("price => " + value.price);
      console.log("description => " + value.description);
      
    }

    )
  });
}
console.log("Function chal gia");

table()
