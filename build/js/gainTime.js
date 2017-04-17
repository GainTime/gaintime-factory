closes = [] .slice.call(document.getElementsByClassName('close'));
deletes = [] .slice.call(document.getElementsByClassName('deleter'));

closes.forEach((x) => close(x));
deletes.forEach((x) => deleter(x));

function close(x) {
  x.addEventListener("click", function() {
    x.parentElement.parentElement.removeChild(x.parentElement);
  });
}

function deleter(x) {
  x.addEventListener("click", function(e) {
    if (!confirm("Deseja continuar?")) {
      e.preventDefault()
      return false;
    }
  });
}
