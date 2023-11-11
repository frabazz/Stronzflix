setTimeout(() => {
  const loader = document.getElementById("loader")
  loader.remove()
}, 2000)

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.FormSelect.init(elems, {});
  });
