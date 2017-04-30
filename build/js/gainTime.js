function makeA(a) {
  a.addEventListener("click", function(e) {
    var d = a.href.split("/");
    var f = d[d.length - 1];
    if (f.charAt(0) == '#') {
      e.preventDefault();
      f = f.replace(/\#/g,"");
      var target = document.getElementById(f);
      animate(document.scrollingElement || document.documentElement, "scrollTop", "", currentYPosition(), target.offsetTop - 60, 500, true);
    }
  })
}

function currentYPosition() {
  // Firefox, Chrome, Opera, Safari
  if (self.pageYOffset) return self.pageYOffset;
  // Internet Explorer 6 - standards mode
  if (document.documentElement && document.documentElement.scrollTop) return document.documentElement.scrollTop;
  // Internet Explorer 6, 7 and 8
  if (document.body.scrollTop) return document.body.scrollTop;
  return 0;
}

function elmYPositioneID(id) {
  var elm = document.getElementById(id);
  var y = elm.offsetTop;
  var node = elm;
  while (node.offsetParent && node.offsetParent != document.body) {
    node = node.offsetParent;
    y += node.offsetTop;
  }
  return y;
}

function animate(elem, style, unit, from, to, time, prop) {
    var distance = to > from ? to - from : from - to;
    if ( distance <= 30) { return false; }
    if (!elem) { return; }
    var start = new Date().getTime(),
        timer = setInterval(function () {
            var step = Math.min(1, (new Date().getTime() - start) / time);
            if (prop) {
                elem[style] = (from + step * (to - from))+unit;
            } else {
                elem.style[style] = (from + step * (to - from))+unit;
            }
            if (step === 1) {
                clearInterval(timer);
            }
        }, 25);
    if (prop) {
    	  elem[style] = from+unit;
    } else {
    	  elem.style[style] = from+unit;
    }
}

function menuToggle(a) {
    var b = a.nextElementSibling;
    a.addEventListener("click", function(c) {
        c.stopPropagation(), !b.style.maxWidth ? b.style.maxWidth = "400px" : b.style.removeProperty("max-width")
    })
}

function closeMenus() {
    menuToggles.forEach(function(a) {
        a.nextElementSibling.style.removeProperty("max-width")
    })
}

function makeDropdown(a) {
    a.setAttribute("role", "button"), a.setAttribute("tabindex", "0"), a.addEventListener("click", function(b) {
        b.stopPropagation(), toogleDropdown(a)
    }), a.addEventListener("keypress", function(b) {
        13 === b.keyCode && (b.preventDefault(), toogleDropdown(a)), 27 === b.keyCode && closeDropdowns()
    })
}

function toogleDropdown(a) {
    var b = a.getElementsByTagName("ul")[0],
        c = !!b.style.display;
    closeDropdowns(), c ? b.style.removeProperty("display") : b.style.display = "inline-table"
}

function closeDropdowns() {
    dropdowns.forEach(function(a) {
        a.getElementsByTagName("ul")[0].style.removeProperty("display")
    })
}

function bar(a) {
    var b = document.createElement("div");
    b.setAttribute("class", "percentage " + a.dataset.color), b.setAttribute("style", "width: " + a.dataset.percentage);
    var c = document.createTextNode(a.dataset.text);
    if ("undefined" != c.data) {
        var d = document.createElement("span");
        d.appendChild(c), d.style.padding = "0 10px", b.appendChild(d), a.style.height = "20px"
    }
    a.appendChild(b)
}

function tooltip(a) {
    a.style.position = "relative";
    var b = document.createTextNode(a.dataset.tooltip),
        c = document.createElement("div");
    c.appendChild(b), c.setAttribute("class", "tooltip"), a.appendChild(c)
}

function close(a) {
    a.addEventListener("click", function(b) {
        b.stopPropagation(), remove(a.parentElement)
    })
}

function fadeOut(a) {
    function c() {
        a.style.opacity = "0", a.style.padding = "0", a.style.maxHeight = "0px", clearInterval(b)
    }
    var b = setInterval(c, 1)
}

function remove(a) {
    a.parentElement.removeChild(a)
}

function ask(a) {
    a.addEventListener("click", function(e) {
        if (!confirm(a.dataset.ask)) return e.preventDefault(), !1
    })
}

function formater(a) {
    a.addEventListener("keypress", function(b) {
        switch (a.dataset.validate) {
            case "cpf":
                formatCpf(a, b)
        }
    })
}

function formatCpf(a, b) {
    8 != b.keyCode && 46 != b.keyCode && (3 != a.value.length && 7 != a.value.length || (a.value = a.value + "."), 11 == a.value.length && (a.value = a.value + "-"))
}

function validates(a) {
    a.addEventListener("blur", function(b) {
        switchValidations(a)
    })
}

function switchValidations(a) {
    switch (a.dataset.validate) {
        case "text":
            searcher(a, /^[a-zA-ZÃẼĨÕŨãẽĩõũÁÉÍÓÚáéíóúÂÊÎÔÛâêîôûÀÈÌÒÙàèìòùÄËÏÖÜäëïöü' ]*$/);
            break;
        case "num":
            searcher(a, /^[\d]*$/g);
            break;
        case "email":
            searcher(a, /^(([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+(\.([A-Za-z]{2,4}))*)*$/);
            break;
        case "cpf":
            cpf(a) || "" == a.value ? a.style.removeProperty("border") : a.style.border = "1px solid #F00";
            break;
        default:
            searcher(a, new RegExp(a.dataset.validate))
    }
}

function searcher(a, b) {
    null == a.value.match(b) ? a.style.border = "1px solid #F00" : a.style.removeProperty("border")
}

function cpf(a) {
    var b = a.value.replace(/\./g, "");
    b = b.replace(/\-/g, "");
    var c, d;
    if (c = 0, "00000000000" == b) return !1;
    for (i = 1; i <= 9; i++) c += parseInt(b.substring(i - 1, i)) * (11 - i);
    if (d = 10 * c % 11, 10 != d && 11 != d || (d = 0), d != parseInt(b.substring(9, 10))) return !1;
    for (c = 0, i = 1; i <= 10; i++) c += parseInt(b.substring(i - 1, i)) * (12 - i);
    return d = 10 * c % 11, 10 != d && 11 != d || (d = 0), d == parseInt(b.substring(10, 11))
}
askers = [].slice.call(document.querySelectorAll("[data-ask]")),
as = [].slice.call(document.getElementsByTagName('a')),
closes = [].slice.call(document.getElementsByClassName("close")), deletes = [].slice.call(document.getElementsByClassName("deleter")), bars = [].slice.call(document.getElementsByClassName("bar")), toValidate = [].slice.call(document.querySelectorAll("[data-validate]")), dropdowns = [].slice.call(document.querySelectorAll(".dropdown, .dropdown-right, .dropdown-left, .dropup, .dropup-left, .dropup-right")), menuToggles = [].slice.call(document.getElementsByClassName("menu-toggle")), tooltips = [].slice.call(document.querySelectorAll("[data-tooltip]")), tooltips.forEach(function(a) {
    tooltip(a)
}), menuToggles.forEach(function(a) {
    menuToggle(a)
}), bars.forEach(function(a) {
    bar(a)
}), closes.forEach(function(a) {
    close(a)
}), deletes.forEach(function(a) {
    deleter(a)
}), dropdowns.forEach(function(a) {
    makeDropdown(a)
}), as.forEach(function(a) {
    makeA(a)
}), askers.forEach(function(a) {
    ask(a)
}), toValidate.forEach(function(a) {
    formater(a), validates(a), switchValidations(a)
}), document.addEventListener("click", function() {
    closeMenus(), closeDropdowns()
});
