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

//Terzo esercizio

var userStudentObj = {};

var nome = prompt('Inserisci il nome');
var cognome = prompt('Inserisci il cognome');
var età = parseInt(prompt("Inserisci l'età"));

userStudentObj.nome = (nome);
userStudentObj.cognome = (cognome);
userStudentObj.età = (età);

studentArray.push(userStudentObj);

console.log(userStudentObj);
console.log(studentArray);

for(var i = 0; i < studentArray.length; i++){
   es3.innerHTML += ' ' + studentArray[i].nome;
   es3.innerHTML += ' ' + studentArray[i].cognome;
   es3.innerHTML += ' ' + studentArray[i].età;
}
