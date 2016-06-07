function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

function htmlDecode(input){
  var e = document.createElement('div');
  e.innerHTML = input;
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}
