const numeroSenha = document.querySelector('.parametro-senha_texto');
let tamanhoSenha = 12;

numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha_botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho() {
   //tamanhoSenha = tamanhoSenha-1;
   if (tamanhoSenha > 1) {
    tamanhoSenha--;
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
   }

   }
}

function aumentaTamanho() {
   if  (tamanhoSenha > 20) {
    tamanhoSenha++;
    numeroSenha.textContent = tamanhoSenha;
    geraSenha()
   };
}

const campoSenha = document.querySelector("#campo-senha");

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '!@%*?';

const checkbox = document.querySelectorAll('.checkbox');

function geraSenha() {
   let alfabeto = '';
   if (checkbox[0].checked) {
      alfabeto =alfabeto + letrasMaiusculas;
   }
   if (checkbox[1].checked) {
      alfabeto =alfabeto + letrasMinusculas
   }
   if (checkbox[2].checked) {
      alfabeto =alfabeto + numeros
   }
   if (checkbox[3].checked) {
      alfabeto =alfabeto + simbolos;
   }
   console.log(alfabeto);
   let senha = '';
   for (let i=0; i < tamanhoSenha; i++) {
      let numeroAleatorio = Math.random()*alfabeto.length;
      numeroAleatorio = Math.floor(numeroAleatorio);
      senha = senha + alfabeto[numeroAleatorio];
   }
   campoSenha.value = senha;

}


geraSenha();

for (i=0; i< checkbox.length; i++); {
   checkbox[1].onclick = geraSenha;
}