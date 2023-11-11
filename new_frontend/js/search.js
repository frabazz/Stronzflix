//orrenda, orrifica e terribile, ma sono pigro
function generateCard(title, image){
  return `
    <div class="col s6 m4 l3 xl2">
      <div class="card">
        <div class="card-image">
          <img class="materialboxed" width=400" src="${image}">
          <a class="btn-floating halfway-fab waves-effect waves-light orange"><i class="material-icons">play_arrow</i></a>
        </div>
        <div class="card-content white-text grey darken-3">
          <p>${title}</p>
        </div>
      </div>
    </div>
  `
}

const grid = document.getElementById("grid")
for(let i = 0; i < 10; i++){
  grid.innerHTML += generateCard(
    "christian de sica",
    "https://materializecss.com/images/sample-1.jpg"
   )
}
