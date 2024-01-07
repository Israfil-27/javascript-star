// let a = '';
// let n = 5;
// let m = (n-1); 
// for(i=1; i <= n; i++)
// {
//     a = a.trim();
//     a = ' '.repeat(m) + a + (i > 1 ? ' ' : '') + '*';
//     console.log(a);
//     m--;
// }





// let n = 5;
// let string = "";

// for(let i = 0; i < n; i++) {
//   for(let j = 0; j < n; j++) { 
//     if(i === 0 || i === n - 1) {
//       string += "*";
//     }
//     else {
//       if(j === 0 || j === n - 1) {
//         string += "*";
//       }
//       else {
//         string += " ";
//       }
//     }
//   }
//   string += "\n";
// }
// console.log(string);





let a=1;
let total=""

for(let c=1;c<=10;c++){
    for(let i=1 ; i<=10;i++){
        for(a=1; a<=i ; a++){
             total = `${c}*${a}=${c*a}`
        }
        total+='</br>'
        document.write(total);
    }
}