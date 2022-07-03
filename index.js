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

const isBalanced = str => {
    

    for (let i = 0; i < str.length; i++) {
        let brackets = str[i];
        if (brackets === openTokens) {
            stack.push(brackets);
        } else if (brackets === closeTokens) {
            stack.pop(brackets);
            
        }
        
    }
        return !stack.length;
    }
console.log(isBalanced('()[]{}'));
console.log(isBalanced('[{()}]'));
console.log(isBalanced('[)}'));




const stack = new Stack();

stack.push(10);

stack.push(20);

const el = stack.pop() // el === 20