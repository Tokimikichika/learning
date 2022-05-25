const openTokens = ['(', '[', '{'];

const closeTokens = [')', ']', '}'];

let stack = [];

const push = () => {
    stack.push();
}
const pop = () => {
    return stack.pop();
}

const isBalanced = str => {
    

    for (let i = 0; i < str.length; i++) {
        let brackets = str[i];
        if (brackets === openTokens) {
            push(brackets);
        } else if (brackets === closeTokens) {
            pop(brackets);
            
        }
        
    }
        return !stack.length;
    }
console.log(isBalanced('()[]{}'));
console.log(isBalanced('[{()}]'));
console.log(isBalanced('[)}'));

        
function isIsogram(str) {
    let mass = {};
    let char = str.toLowerCase();
    while(char[i] != -1) {
        if (char[i] > 1) {

        }
    }
}

console.log(isIsogram('abc'))
console.log(isIsogram('abb'))
console.log(isIsogram('abcifhi'))