/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() 
{
  arr.map((item, index)=>
  {
    if(arr[index].profession==="developer")
      console.log(item)
  })
  //Write your code here , just console.log
}

function PrintDeveloperbyForEach() {
  arr.forEach((item,index)=>
  {
    if(arr[index].profession==="developer")
      console.log(item)
  })
  //Write your code here , just console.log
}

function addData() {
  let employee={id:4, name:"susan", age:"20", profession:"intern"}
  arr.push(employee);
  console.log(arr);

  
  //Write your code here, just console.log
}

    function removeAdmin() {
      
      arr= arr.filter((item,index)=>{
        if(arr[index].profession!="admin")
          return item
      })
        console.log(arr)
    
  //Write your code here, just console.log
}

function concatenateArray() {
  let arr2 = [
    { id: 4, name: "jn", age: "8", profession: "abc" },
    { id: 5, name: "ja", age: "0", profession: "def" },
    { id: 6, name: "ka", age: "9", profession: "ghi" },
  ]
  arr= arr.concat(arr2)
  console.log(arr)
  //Write your code here, just console.log
}
PrintDeveloperbyMap()
PrintDeveloperbyForEach()
addData()
removeAdmin()
concatenateArray()
