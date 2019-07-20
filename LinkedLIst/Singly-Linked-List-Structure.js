// piece of data - val
//reference to next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // add element to the end
    push(val){
        let newnode = new Node(val);
        if(!this.head){
            this.head = newnode;
            this.tail = this.head;
        } else {
            this.tail.next = newnode;
            this.tail = newnode;
        }
        this.length++;
        return this;
    }

    // traverse(){
    //     let current = this.head;
    //     while(current){
    //         console.log(current.val)
    //         current = current.next;
    //     }
    // }

    //remove the last item
    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;   
        }
        return current;
    }
    //remove node from the begining
    shift(){
        if(!this.head) return undefined;
        let current = this.head;
        this.head = current.next;
        this.length++;
        return current;
    }
    //adding new node to the begining
    unShifting(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(idx){
        if(idx < 0 || idx >= this.length) return null;
        let current = this.head;
        let counter = 0;
        while(counter < idx){
            counter++;
            current = current.next;
        }
        return current;
    }

    set(idx, val){
        idx = this.get(idx);
        if(idx){
            idx.val = val;
            return true;
        }
        return false;
        
    }

    insert(idx, val){
        let current = this.head;
        let nextval = current.next;
        idx = this.get(idx);
        if(idx < 0 || idx > this.length){
            return false;
        }
        else if(idx === this.length){
            return this.push(val);
        }
        else if(idx === 0){
           return this.unShifting(val);
        } else {
            let newNode = new Node(val);
            let prev = this.get(idx - 1);
            let temp = prev.next;
            prev.next = newNode;
            newNode.next = temp;
            this.length++;
            return true;
        }
       
    }

    remove(idx){
        if(idx < 0 || idx > this.length) return undefined;
        if(idx === this.length-1) return this.pop()
        if(idx === 0) return this.shift();
        let prev = this.get(idx - 1);
        let removed = prev.next;
        prev.next = removed.next;
        this.length--;
        return removed;
    }

    // reverse(){
    //     let node = this.head;
    //     this.head = this.tail;
    //     this.tail = node;
    //     let next;
    //     let prev = null;
    //     for(let i = 0; i < this.length; i++){
    //         next = node.next;
    //         node.next = prev;
    //         prev = node;
    //         node = next;
    //     }
    //     return this;
       
    // }
    reverse() {
        if (this.head === null || this.head.next === null) {
            return this.head;
        }
        let remaining = this.reverse(this.head.next);
        this.head.next.next = this.head; 
        this.head.next = null;  
        return remaining;
    }
}

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

var list = new SinglyLinkedList()
list.push(100);
list.push(200);
list.push(300);
list.push(400)
list.reverse();

console.log(list);

