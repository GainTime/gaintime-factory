closes = [] .slice.call(document.getElementsByClassName('close'));
deletes = [] .slice.call(document.getElementsByClassName('deleter'));
bars = [] .slice.call(document.getElementsByClassName('bar'));
toValidate = [] .slice.call(document.querySelectorAll('[data-validate]'));
dropdowns = [] .slice.call(document.querySelectorAll('.dropdown, .dropdown-right, .dropdown-left, .dropup, .dropup-left, .dropup-right'));
menuToggles = [] .slice.call(document.getElementsByClassName('menu-toggle'));
tooltips = [] .slice.call(document.querySelectorAll('[data-tooltip]'));

tooltips.forEach(function(x) {tooltip(x)});
menuToggles.forEach(function(x) {menuToggle(x)});
bars.forEach(function(x) {bar(x)});
closes.forEach(function(x) {close(x)});
deletes.forEach(function(x) {deleter(x)});
dropdowns.forEach(function(x) {makeDropdown(x)});

toValidate.forEach(function(x) {
  formater(x);
  validates(x);
  switchValidations(x);
});


document.addEventListener("click", function() {
  closeMenus()
  closeDropdowns()
});

function menuToggle(x) {
  var nav = x.nextElementSibling;
  x.addEventListener("click", function(e) {
    e.stopPropagation();
    x.checked = !x.checked;
    (x.checked) ? nav.style.maxWidth = "400px" : nav.style.removeProperty('max-width');
  });
}

function closeMenus() {
  menuToggles.forEach(function(x) {
    x.nextElementSibling.style.removeProperty('max-width');
  });
}

function makeDropdown(x) {
  x.setAttribute("role", "button");
  x.setAttribute("tabindex", "0");
  x.addEventListener("click", function(e) {
    e.stopPropagation();
    toogleDropdown(x);
  });
  x.addEventListener("keypress", function(e) {
    // e.stopPropagation();
    if (e.keyCode === 13) {
      e.preventDefault();
      toogleDropdown(x);
    }
    if (e.keyCode === 27) closeDropdowns()
  });
}

function toogleDropdown(x) {
  var list = x.getElementsByTagName('ul')[0];
  var isOpen = (!list.style.display)? false: true;
  closeDropdowns();
  (!isOpen)? list.style.display = "inline-table": list.style.removeProperty('display');
}

function closeDropdowns() {
  dropdowns.forEach(function(x) {
    x.getElementsByTagName('ul')[0].style.removeProperty('display');
  });
}

function bar(x) {
  var progress = document.createElement("div");
  progress.setAttribute("class", "percentage " + x.dataset.color);
  progress.setAttribute("style", "width: " + x.dataset.percentage)

  x.appendChild(progress);
}

function tooltip(x) {
  x.style.position = "relative";
  var text = document.createTextNode(x.dataset.tooltip)
  var tooltip = document.createElement("div");
  tooltip.appendChild(text);
  tooltip.setAttribute("class", "tooltip");
  x.appendChild(tooltip);
}

function close(x) {
  x.addEventListener("click", function(e) {
    e.stopPropagation();
    remove(x.parentElement);
  });
}

function fadeOut(el) {
  var id = setInterval(frame, 1);
  function frame() {
    el.style.opacity = "0";
    el.style.padding = "0";
    el.style.maxHeight = '0px';
    clearInterval(id);
  }
}

function remove(el) {
  el.parentElement.removeChild(el);
}

function deleter(x) {
  x.addEventListener("click", function(e) {
    if (!confirm("Deseja continuar?")) {
      e.preventDefault()
      return false;
    }
  });
}

function formater(x) {
  x.addEventListener("keypress", function(e) {
    switch (x.dataset.validate) {
      case "cpf":
        formatCpf(x, e);
        break;
    }
  });
}

function formatCpf(x, ev) {
  if (ev.keyCode != 8 && ev.keyCode != 46) {
    if (x.value.length == 3 || x.value.length == 7) x.value = x.value + '.';
    if (x.value.length == 11) x.value = x.value + '-';
  }
}

function validates(x) {
  x.addEventListener("blur", function(e) {
    switchValidations(x);
  });
}

function switchValidations(x) {
  switch (x.dataset.validate) {
    case 'text':
      searcher(x, /^[a-zA-ZÃẼĨÕŨãẽĩõũÁÉÍÓÚáéíóúÂÊÎÔÛâêîôûÀÈÌÒÙàèìòùÄËÏÖÜäëïöü' ]*$/);
      break;
    case 'num':
      searcher(x, /^[\d]*$/g);
      break;
    case 'email':
      searcher(x, /^(([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+(\.([A-Za-z]{2,4}))*)*$/)
      break;
    case 'cpf':
      (cpf(x) || x.value == "")? x.style.removeProperty('border'): x.style.border = "1px solid #F00";
      break;
    default:
      searcher(x, new RegExp(x.dataset.validate));
      break;
  }
}

function searcher(x, pattern) {
  var matches = x.value.match(pattern);
  (matches == null)? x.style.border = "1px solid #F00": x.style.removeProperty('border');
}

function cpf(x) {
  var cpf = x.value.replace(/\./g, "");
  cpf = cpf.replace(/\-/g, "");

	var sum;
  var mod;
  sum = 0;

	if (cpf == "00000000000") return false;

	for (i = 1; i <= 9; i ++) sum += parseInt(cpf.substring(i-1, i)) * (11 - i);

  mod = (sum * 10) % 11;

  if ((mod == 10) || (mod == 11))  mod = 0;
  if (mod != parseInt(cpf.substring(9, 10)) ) return false;

	sum = 0;

  for (i = 1; i <= 10; i++) sum = sum + parseInt(cpf.substring(i-1, i)) * (12 - i);
  mod = (sum * 10) % 11;

  if ((mod == 10) || (mod == 11))  mod = 0;
  if (mod != parseInt(cpf.substring(10, 11) ) ) return false;

  return true;
}
