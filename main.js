let input=document.getElementById("input-id");
let task=document.getElementById("task");

let btn=document.getElementById("btn");
btn.addEventListener("click" , () => {
  if(input.value==""){
    alert("Enter any Task First")
    return;
  }
  // console.log(input.value);

    let list=document.createElement("li");
    list.innerHTML=input.value;

    let complt = document.createElement("button");
    complt.innerHTML="Complete";

    complt.addEventListener("click" , () => {
    list.style.textDecoration="line-through";
    })
  

  let dlt= document.createElement("button");
  dlt.innerHTML="Delete";
  dlt.addEventListener("click" , () => {
    list.remove();
    
  })
  input.value="";

  task.appendChild(list)
  list.appendChild(complt)
  list.appendChild(dlt);
  
})


