function makeA(e) {
  e.addEventListener("click", function(t) {
    var o = e.href.split("/"),
    n = o[o.length - 1].split("#"),
    a = document.location.toString().split("/"),
    l = a[a.length - 1].split("#");
    if (f = n[1], void 0 != f && l[0] === n[0]) {
      t.preventDefault();
      var r = document.scrollingElement || document.documentElement,
      s = document.getElementById(f).offsetTop - 60;
      smoothScroll(r, s, 600)
    }
  })
}

function menuToggle(e) {
  var t = e.nextElementSibling;
  e.addEventListener("click", function(e) {
    e.stopPropagation(), t.style.maxWidth ? t.style.removeProperty("max-width") : t.style.maxWidth = "400px"
  })
}

function closeMenus() {
  menuToggles.forEach(function(e) {
    e.nextElementSibling.style.removeProperty("max-width")
  })
}

function makeDropdown(e) {
  e.setAttribute("role", "button"), e.setAttribute("tabindex", "0"), e.addEventListener("click", function(t) {
    t.stopPropagation(), toogleDropdown(e)
  }), [].slice.call(e.getElementsByTagName("ul")[0].getElementsByTagName("li")).forEach(function(i) {
    i.setAttribute("tabindex", "-1")
  }), e.addEventListener("keypress", function(t) {
    13 === t.keyCode && (toogleDropdown(e)), 27 === t.keyCode && closeDropdowns()
  }), e.addEventListener("keydown", function(t) {
    (38 === t.keyCode || 40 === t.keyCode) && (t.preventDefault(), dropdownsNavKeys(e, t.keyCode))
  })
}

function dropdownsNavKeys(e, k) {
  var n = [].slice.call(e.getElementsByTagName("ul")[0].getElementsByTagName("li")),
  s = n.indexOf(document.activeElement);
  -1 == s && (s = n.indexOf(document.activeElement.parentElement)), 40 == k? s++: s--;

  if (s >= 0 && s < n.length)
  (n[s].firstChild.nodeName == "A")? n[s].firstChild.focus(): n[s].focus();
}

function toogleDropdown(e) {
  var t = e.getElementsByTagName("ul")[0],
  o = !!t.style.display;
  closeDropdowns(), o ? t.style.removeProperty("display") : t.style.display = "list-item"
  e.focus();
}

function closeDropdowns() {
  dropdowns.forEach(function(e) {
    e.getElementsByTagName("ul")[0].style.removeProperty("display")
  })
}

function bar(e) {
  var t = document.createElement("div");
  t.setAttribute("class", "percentage " + e.dataset.color), t.setAttribute("style", "width: " + e.dataset.percentage);
  var o = document.createTextNode(e.dataset.text);
  if ("undefined" != o.data) {
    var n = document.createElement("span");
    n.appendChild(o), n.style.padding = "0 10px", t.appendChild(n), e.style.height = "20px"
  }
  e.appendChild(t)
}

function tooltip(e) {
  e.style.position = "relative";
  var t = document.createTextNode(e.dataset.tooltip),
  o = document.createElement("div");
  o.appendChild(t), o.setAttribute("class", "tooltip"), e.appendChild(o)
}

function close(e) {
  e.addEventListener("click", function(t) {
    t.stopPropagation(), remove(e.parentElement)
  })
}

function fadeOut(e) {
  function t() {
    e.style.opacity = "0", e.style.padding = "0", e.style.maxHeight = "0px", clearInterval(o)
  }
  var o = setInterval(t, 1)
}

function remove(e) {
  e.parentElement.removeChild(e)
}

function ask(e) {
  e.addEventListener("click", function(t) {
    return confirm(e.dataset.ask) ? void 0 : (t.preventDefault(), !1)
  })
}

function formater(e, text) {
  var n = text ? e.textContent: e.value;
  var a = "";
  if (n) {
    switch (e.dataset.validate) {
      case "cpf":
        a = preformatCpf(e, n);
        break;
      case "cnpj":
        a = preformatCnpj(e, n);
        break;
      case "brPhone":
        a = preformatPhone(e, n);
        break;
      case "cep":
        a = preformatCep(e, n);
        break;
      case "date":
        a = preformatDate(e, n);
        break;
    }
    text && (e.innerHTML = a), e.value = a
  } else text ? e.textContent = "": e.value = ""

  if (!text) {
    e.addEventListener("keyup", function(t) {
      switch (e.dataset.validate) {
        case "date":
          formatDate(e, t);
          break;
      }
    })

    e.addEventListener("keydown", function(t) {
      switch (e.dataset.validate) {
        case "cpf":
        formatCpf(e, t);
        break;
        case "cnpj":
        formatCnpj(e, t);
        break;
        case "brPhone":
        formatBrPhone(e, t);
        break;
        case "cep":
        formatCep(e, t);
        break;
      }
    })
  }
}

function onlyNumbers(t) {
  if (isNaN(t.key) && ctrlButtons(t) && !t.ctrlKey && t.key != "Tab" && t.key != "ArrowLeft" && t.key != "ArrowRight" && t.key != "ArrowDown" && t.key != "ArrowUp" && t.key != "Enter" || " " == t.key) {
    t.preventDefault();
    return false;
  }
}

function ctrlButtons(t) {
  return 0 != t.keyCode && 8 != t.keyCode && 46 != t.keyCode;
}

function preformatPhone(e, n, t){
  s2 = ("" + n).replace(/\D/g,"");
  if (s2.length == 10) {
    m = s2.match(/^(\d{2})?[- ]??[\s]?(\d{4})?[\s]?(\d{4})?(.*)?$/);
  } else {
    m = s2.match(/^(\d{2})?[- ]??[\s]?(\d{5})?[\s]?(\d{4})?(.*)?$/);
  }

  return m ? "(" + m[1] + ") " + m[2] + "-" + m[3] : null;
}

function preformatCpf(e, n, t){
  s2 = ("" + n).replace(/\D/g,"");
  m = s2.match(/^(\d{3})?[- ]??[\s]?(\d{3})?[\s]?(\d{3})?(.*)?$/);
  return m ? m[1] + "." + m[2] + "." + m[3] + "-" + m[4] : null;
}

function preformatCnpj(e, n, t){
  s2 = ("" + n).replace(/\D/g,"");
  m = s2.match(/^(\d{2})?[- ]??[\s]?(\d{3})?[\s]?(\d{3})?(\d{4})?(\d{2})?(.*)?$/);
  return m ? m[1] + "." + m[2] + "." + m[3] + "/" + m[4] + "-" + m[5] : null;
}

function preformatCep(e, n, t){
  s2 = ("" + n).replace(/\D/g,"");
  m = s2.match(/^(\d{5})?[- ]??[\s]?(\d{3})?(.*)?$/);
  return m ? m[1] + "-" + m[2]: null;
}

function preformatDate(e, n, t){
  s2 = ("" + n).replace(/\D/g,"");
  m = s2.match(/^(\d{2})?[- ]??[\s]?(\d{2})?(.*)?$/);
  return m ? m[1] + "/" + m[2] + "/" + m[3]: null;
}

function formatCpf(e, t) {
  onlyNumbers(t);
  ctrlButtons(t) && (3 != e.value.length && 7 != e.value.length || (e.value = e.value + "."), 11 == e.value.length && (e.value = e.value + "-"))
}

function formatCnpj(e, t) {
  onlyNumbers(t);
  ctrlButtons(t) && (2 != e.value.length && 6 != e.value.length || (e.value = e.value + "."), 10 == e.value.length && (e.value = e.value + "/"), 15 == e.value.length && (e.value = e.value + "-"))
}

function formatBrPhone(e, t) {
  onlyNumbers(t);
  ctrlButtons(t) && ((0 != e.value.length && e.selectionStart > 1 || t.key == "Tab" || t.key == "Enter" || t.ctrlKey) || (e.value = "\("), e.value[5] == "9" && 10 == e.value.length && (e.value = e.value + "-"), e.value[5] != "9" && 9 == e.value.length && (e.value = e.value + "-"), (3 != e.value.length || (e.value = e.value + "\) ")))
}

function formatCep(e, t) {
  onlyNumbers(t);
  ctrlButtons(t) && (5 != e.value.length || (e.value = e.value + "-"))
}

function formatDate(e, t) {
    onlyNumbers(t);
    ctrlButtons(t) && (2 != e.value.length && 5 != e.value.length || (e.value = e.value + "/"))
}


function validates(e) {
  e.addEventListener("blur", function(t) {
    switchValidations(e)
  })
}

function switchValidations(e) {
  switch (e.dataset.validate) {
    case "text":
      searcher(e, /^[a-zA-ZÃẼĨÕŨãẽĩõũÁÉÍÓÚáéíóúÂÊÎÔÛâêîôûÀÈÌÒÙàèìòùÄËÏÖÜäëïöü' ]*$/);
      break;
    case "num":
      searcher(e, /^[\d]*$/g);
      break;
    case "email":
      searcher(e, /^(([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+(\.([A-Za-z]{2,4}))*)*$/);
      break;
    case "cpf":
      validateCpf(e.value) || "" == e.value ? validsIt(e) : invalidsIt(e, "Este CPF é inválido.");
      break;
    case "cnpj":
      validateCnpj(e.value) || "" == e.value ? validsIt(e) : invalidsIt(e, "Este CNPJ é inválido.");
      break;
    case "brPhone":
      validateBrPhone(e.value) || "" == e.value ? validsIt(e) : invalidsIt(e, "Este Telefone é inválido.");
      break;
    case "date":
      validateDate(e.value) || "" == e.value ? validsIt(e) : invalidsIt(e, "Esta data é inválida.");
      break;
    case "cep":
      break;
    default:
      searcher(e, new RegExp(e.dataset.validate))
  }
}

function invalidsIt(a, b) {
  a.style.border = '1px solid #F00', (b)? a.setCustomValidity(b) : a.setCustomValidity("Invalid field.");
}

function validsIt(a) {
  a.style.removeProperty("border"), a.setCustomValidity("");
}

function searcher(e, t) {
  null == e.value.match(t) ? invalidsIt(e, false) : validsIt(e)
}

function validateBrPhone(e) {
  var p = e.replace(/\D/g, '');

  if (!(p.length >= 10 && p.length <= 11) || (p.length == 11 && parseInt(p.substring(2, 3)) != 9)) return !1;

  var ddds = [
    11, 12, 13, 14, 15, 16, 17, 18, 19, 21,
    22, 24, 27, 28, 31, 32, 33, 34, 35, 37,
    38, 41, 42, 43, 44, 45, 46, 47, 48, 49,
    51, 53, 54, 55, 61, 62, 64, 63, 65, 66,
    67, 68, 69, 71, 73, 74, 75, 77, 79, 81,
    82, 83, 84, 85, 86, 87, 88, 89, 91, 92,
    93, 94, 95, 96, 97, 98, 99];

  return !(ddds.indexOf(parseInt(p.substring(0, 2))) == -1);
}

function validateDate(e) {
  var p = e.replace(/\D/g, '');

  var day = parseInt(p.substring(0,2));
  var month = parseInt(p.substring(2,4));
  var year = parseInt(p.substring(4));

  if (day > 30 && (month == 4 || month == 6 || month == 9 || month==11)) return !1;
  if (month == 2) {
    if ((year % 4 == 0) && ((year % 100 != 0) || (year % 400 == 0))) {
      if (day > 29) return !1;
    }
    else if (day > 28) return !1;
  }
  if (p.length < 5 || month > 12 || day > 31 || day < 1) return !1;

  return 1;
}

function validateCpf(e) {
  var t = e.replace(/\./g, "");
  t = t.replace(/\-/g, "");
  var o, n;
  if (o = 0, "00000000000" == t) return !1;
  for (i = 1; i <= 9; i++) o += parseInt(t.substring(i - 1, i)) * (11 - i);
  if (n = 10 * o % 11, 10 != n && 11 != n || (n = 0), n != parseInt(t.substring(9, 10))) return !1;
  for (o = 0, i = 1; i <= 10; i++) o += parseInt(t.substring(i - 1, i)) * (12 - i);
  return n = 10 * o % 11, 10 != n && 11 != n || (n = 0), n == parseInt(t.substring(10, 11))
}

function validateCnpj(u) {
  if (u = u.replace(/[^\d]+/g, ""), "" == u) return !1;
  if (14 != u.length) return !1;
  if ("00000000000000" == u || "11111111111111" == u || "22222222222222" == u || "33333333333333" == u || "44444444444444" == u || "55555555555555" == u || "66666666666666" == u || "77777777777777" == u || "88888888888888" == u || "99999999999999" == u) return !1;
  for (n = u.substring(0, 12), d = u.substring(12), t = 12, s = 0, p = 5, i = t; i >= 1; i--) s += n.charAt(t - i) * p--, p < 2 && (p = 9);
  if (r = s % 11 < 2 ? 0 : 11 - s % 11, r != d.charAt(0)) return !1;
  for (n = u.substring(0, 13), t = 13, s = 0, p = 6, i = t; i >= 1; i--) s += n.charAt(t - i) * p--, p < 2 && (p = 9);
  return r = s % 11 < 2 ? 0 : 11 - s % 11, r != d.charAt(1) ? !1 : !0
}

function closeModal(e) {
  e.removeAttribute("style")
  document.getElementsByTagName('body')[0].style.overflow = ""
}

var smoothScroll = function(e, t, o) {
  if (t = Math.round(t), o = Math.round(o), 0 > o) return Promise.reject("bad duration");
  if (0 === o) return e.scrollTop = t, Promise.resolve();
  var n = Date.now(),
  a = n + o,
  l = e.scrollTop,
  r = t - l,
  s = function(e, t, o) {
    if (e >= o) return 0;
    if (o >= t) return 1;
    var n = (o - e) / (t - e);
    return n * n * (3 - 2 * n)
  };
  return new Promise(function(t, o) {
    var i = e.scrollTop,
    c = function() {
      var o = Date.now(),
      d = s(n, a, o),
      u = Math.round(l + r * d);
      return e.scrollTop = u, o >= a ? void t() : e.scrollTop === i && e.scrollTop !== u ? void t() : (i = e.scrollTop, void setTimeout(c, 0))
    };
    setTimeout(c, 0)
  })
};
gtModals = [].slice.call(document.getElementsByClassName("gt-modal")), modals = [].slice.call(document.querySelectorAll("[data-modal]")), askers = [].slice.call(document.querySelectorAll("[data-ask]")), as = [].slice.call(document.getElementsByTagName("a")), closes = [].slice.call(document.getElementsByClassName("close")), deletes = [].slice.call(document.getElementsByClassName("deleter")), bars = [].slice.call(document.getElementsByClassName("bar")), toValidate = [].slice.call(document.querySelectorAll("[data-validate]")), dropdowns = [].slice.call(document.querySelectorAll(".dropdown, .dropdown-right, .dropdown-left, .dropup, .dropup-left, .dropup-right")), menuToggles = [].slice.call(document.getElementsByClassName("menu-toggle")), tooltips = [].slice.call(document.querySelectorAll("[data-tooltip]")), tooltips.forEach(function(e) {
  tooltip(e)
}), menuToggles.forEach(function(e) {
  menuToggle(e)
}), bars.forEach(function(e) {
  bar(e)
}), closes.forEach(function(e) {
  close(e)
}), deletes.forEach(function(e) {
  deleter(e)
}), dropdowns.forEach(function(e) {
  makeDropdown(e)
}), as.forEach(function(e) {
  makeA(e)
}), askers.forEach(function(e) {
  ask(e)
}), toValidate.forEach(function(e) {
  formater(e), validates(e), switchValidations(e)
}), document.addEventListener("click", function() {
  closeMenus(), closeDropdowns()
}), gtModals.forEach(function(e) {
  e.addEventListener("click", function(t) {
    t.stopPropagation();
    if (-1 < t.target.className.indexOf("gt-modal") || -1 < t.target.className.indexOf("modal-close")) {
      closeModal(e);
    }
  })
}), document.addEventListener("keypress", function(e) {
  27 == e.keyCode && gtModals.forEach(function(e) {
    e.removeAttribute("style")
    document.getElementsByTagName('body')[0].style.overflow = ""
  })
}), modals.forEach(function(e) {
  e.addEventListener("click", function(t) {
    var o = document.getElementById(e.dataset.modal);

    o.parentElement.style.display = "block"
    document.getElementsByTagName('body')[0].style.overflow = "hidden"
    var focusable = [].slice.call(o.querySelectorAll('button, [href], input, select, textarea, [tabindex]'));
    var first = focusable[0];
    var last = focusable[focusable.length - 1];
    first.focus()

    first.addEventListener("keypress", function(e) {
      if (e.shiftKey && e.key == "Tab") {
        e.preventDefault();
        last.focus();
      }
    })
    last.addEventListener("keypress", function(e) {
      if (!e.shiftKey && e.key == "Tab")  {
        e.preventDefault();
        first.focus()
      }
    })
  })
});
