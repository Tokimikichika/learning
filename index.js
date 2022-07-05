const openTokens = ['(', '[', '{'];

const closeTokens = [')', ']', '}'];

class Stack {
    constructor(initState = []) {
        this.stack = initState;
    }
    push(el) {
        this.stack.push(el);
    }
    pop() {
        return this.stack.pop();
    }
    
}
const stack = new Stack();

const isBalanced = str => {
    

    for (let i = 0; i < str.length; i++) {
        const bracket = str[i];
        if (openTokens[bracket]) {
            stack.push(bracket);
        } else {
            stack.pop();
            
        }
        
    }
        return !stack.length;
    }
console.log(isBalanced('()[]{}'));
console.log(isBalanced('[{()}]'));
console.log(isBalanced('[)}'));






stack.push(10);

stack.push(20);

const el = stack.pop() // el === 20