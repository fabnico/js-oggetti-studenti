//Primo esercizio

var es1 = document.getElementById('one');
var es2 = document.getElementById('two');
var es3 = document.getElementById('three');

var studentObj = {
   'nome': 'Fabrizio',
   'cognome': 'Nicolosi',
   'età': 30
};

for (var i in studentObj){
   es1.innerHTML += ' ' + studentObj[i];
}

//Secondo esercizio

var studentArray = [
   {
      'nome': 'Fabrizio',
      'cognome': 'Nicolosi',
      'età': 30
   },
   {
      'nome': 'Luisa',
      'cognome': 'Luisella',
      'età': 16
   },
   {
      'nome': 'Martino',
      'cognome': 'Martinello',
      'età': 24
   }
];

for(var i = 0; i < studentArray.length; i++){
   es2.innerHTML += ' ' + studentArray[i].nome;
   es2.innerHTML += ' ' + studentArray[i].cognome;
}
