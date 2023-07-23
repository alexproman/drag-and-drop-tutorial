let Text = document.getElementById('text-input');
let btnEle = document.querySelector('button');
let Boxs = document.querySelectorAll(".erea");
let drag = null;


btnEle.onclick=function(){
    if(Text.value !=""){
        Boxs[0].innerHTML +=`
        <p class="item" draggable="true">${Text.value}</p>
      `  
    }
    Text.value ="";
    dragItem();
}

function dragItem(){
  let items = document.querySelectorAll(".item");
  items.forEach(item=>{
    item.addEventListener('dragstart',function(){
      drag=item;
      item.style.background='#64773d'
      item.style.opacity='0.5'
    })
    item.addEventListener('dragend',function(){
      drag = null;
      item.style.background='#e4dfdf75'
      item.style.opacity='1'
    })
    Boxs.forEach(box=>{
      box.addEventListener('dragover',function(e){
        e.preventDefault();
        this.style.background='#23773d';
        this.style.opacity='0.5'
      })
      box.addEventListener('dragleave',function(){
        this.style.background='transparent';
        this.style.opacity='1'


      })
      box.addEventListener('drop',function(){
        this.append(drag);
        this.style.background='transparent';
        this.style.opacity='1'


      })
    })
  })
  
















}