// const openTokens = ['(', '[', '{'];

// const closeTokens = [')', ']', '}'];

// let stack = [];

// const push = () => {
//     stack.push();
// }
// const pop = () => {
//     return stack.pop();
// }

// const isBalanced = str => {
    

//     for (let i = 0; i < str.length; i++) {
//         let brackets = str[i];
//         if (brackets === openTokens) {
//             push(brackets);
//         } else if (brackets === closeTokens) {
//             pop(brackets);
            
//         }
        
//     }
//         return !stack.length;
//     }
// console.log(isBalanced('()[]{}'));
// console.log(isBalanced('[{()}]'));
// console.log(isBalanced('[)}'));

class Steck {
    constructor(el) {
        this.el = el;
        }
}
const steck = new Steck;
let el = steck;
el.push(10);
el.push(20);

el.pop(); //el === 20
