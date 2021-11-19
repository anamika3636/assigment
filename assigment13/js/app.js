function todo() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const ulist= document.getElementById("ulist");
    const todo1={
        title: title,
        des: description
    };
    const list=document.createElement("li");
    list.innerHTML=JSON.stringify(todo1);
    ulist.appendChild(list);
    
}

