var es1 = document.getElementById('one');
var es2 = document.getElementById('two');
var es3 = document.getElementById('three');

var studentObj = {
   'nome': 'Fabrizio',
   'cognome': 'Nicolosi',
   'età': 30
}

for (var i in studentObj){
   es1.innerHTML += ' ' + studentObj[i];
}
