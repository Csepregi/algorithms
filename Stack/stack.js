class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }


    push(val){
        let newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            let currentfirst = this.first;
            this.first = newNode;
            this.first.next = currentfirst;
        }
        return ++this.size;
    }

    pop(){
        if(!this.first) return null;
        let removedNode = this.first;
        if(this.first === this.last){
            this.last = null;
        } else{
            this.first = this.first.next;
            this.size--;
            return removedNode.val;
        }
        
    }
}

let stack = new Stack()
stack.push(11);
stack.push(12);
console.log(stack.pop());
console.log(stack);