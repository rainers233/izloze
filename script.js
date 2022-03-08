const vardi = ['Edgars', 'Blaumanis', 'Soņa', 'Plancis Ceriņš', 'Oto Glizzy'];
const balvas = ['ak-47', 'Fortnite figure', 'Prezidenta apmeklējums', 'Nazis', 'Cigarete'];
const naudaKopa = 100000;
let uzvaretajuSkaits = 5;
let rindas = document.querySelector('.rindas');
rindas.innerHTML = ' ';
//rindas.innerHTML = ' ';
for (let i = 0; i < uzvaretajuSkaits;i++) {
    let rand = Math.random() * vardi.length;
    rand = Math.floor(rand);


    let uzvaretajs = vardi[rand];
    let laimesti = balvas[rand];
    
    
        rindas.innerHTML += `
<tr>
<td>${i + 1}</td>
<td>${uzvaretajs}</td>
<td>${laimesti}</td>
</tr>`
    }