console.log('ths is javascript file');
shownotes();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) 
{
  let addTxt = document.getElementById("addTxt");
  let addTitle=document.getElementById("addTitle");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj =[];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myobj={
    title:addTitle.value,
    text:addTxt.value
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  //console.log('notesObj');
   shownotes();
});
function shownotes(){
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
      } else {
        notesObj = JSON.parse(notes);
      }
      let html="";
      notesObj.forEach(function(element,index,text) {
          html+= ` <div class="notecard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Note ${index+1} </h5>
                    <p class="card-text">${element}</p>
                    <button  id="${index}" onclick="deletenote(this.id)"class="btn btn-primary">Delete Note</button>
                </div>
            </div>`;
          
      });
      let noteselem=document.getElementById('notes');
      if(notesObj.length!=0){
          noteselem.innerHTML=html;
      }
      else{
        noteselem.innerHTML=`Nothing To Show! "Use Add a Note" Section to Add a Note`   
      }
}

function deletenote(index){
  console.log("i am deleteing",index);
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj =[];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index,1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  shownotes();
}

let search = document.getElementById('searchtxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
     console.log('Input event fired!', inputVal);

   let noteCards = document.getElementsByClassName('notecard');
    Array.from(noteCards).forEach(function(element){
        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        if(cardtxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})
