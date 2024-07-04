const gridBox = document.querySelector("#gridBox")


fetch("./workschema.json")
.then(resp => resp.json())
.then(data =>{
  data.forEach(element => {
    gridBox.innerHTML+=`
    <div class="grid_card">
    <div class="number_box">
      <span>${element.num}</span>
      <div class="brown_line"></div>
    </div>
    <p>${element.text}</p>
  </div>
    `
  });
})