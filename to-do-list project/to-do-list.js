let result=JSON.parse(localStorage.getItem('result'))||[{
  name:'eat',
  dueDate:'2024-01-06'},
  {
  name:'study',
  dueDate:'2024-01-06'
  },
  
  ];
   renderDisplayTodo();
   function renderDisplayTodo(){
  let res=' ';
  for(let i=0;i<result.length;i++){
    const dataToDisplayObject=result[i];
   // const name=dataToDisplayObject.name;
   // const duedate=dataToDisplayObject.dueDate;
   const { name , dueDate}=dataToDisplayObject;
    
    res+=`<div> ${name} </div>
    <div>${dueDate}</div>
      <button class="delete-todo-button" onclick="
      result.splice(${i},1);
      renderDisplayTodo();
      saveToStorage();
      " > Delete</button>
      `;
     
  }
  document.querySelector('.display').innerHTML=res;
   }
      
      //  console.log(result);
    function arrayOnConsole(){  
   let dataValue = document.querySelector('.input-data');
   const dateInput=document.querySelector('.js-due-date-input');
   const dueDate=dateInput.value;
    let name = dataValue.value;
  
     result.push({
     // name:name,
      //dueDate:dataValue,
     name,
      dueDate,
     });
    
    // console.log(result);
    renderDisplayTodo();
  
  saveToStorage();
      }
      function saveToStorage()
      {
  localStorage.setItem('result',JSON.stringify(result));
      }