class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //add new item at the end
    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;   
    }

    pop(){
        if(!this.head) return undefined;
        let currentTail = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = currentTail.previous;
            this.tail.next = null;
            currentTail.previous = null;
        }
        this.length--;
        return currentTail;
    }
    //removing a node from the begining
    shift(){
        if(this.length === 0) return undefined;
        let oldhead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldhead.next;
            this.head.previous = null;
            oldhead.next = null;
        }
        this.length--;
        return oldhead;
    }
    //add node to the begining of the list
    unshifting(val){
        let newNode = new Node(val);
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        } else {
            this.head.previous = newNode; 
            //same
            //newNode.next = this.head;
            this.head = newNode.next;
            this.head = newNode;
        }
        this.length++;
        return newNode;
    }
    // get value at index
    get(idx){
        if(idx < 0 || idx >= this.length) return null;
        let middle = this.length / 2;
        let counter, current;
        if(idx <= middle){
            counter = 0;
            current = this.head;
            while(counter != idx){
                current = current.next;
                counter++;
            }
        } else {
            counter = this.length-1;
            current = this.tail;
            while(counter != idx){
                current = current.previous;
                counter--;
            } 
        }
        return current;
    }

    // set value, change, at index
    set(idx, val){
        idx = this.get(idx);
        if(idx){
            idx.val = val;
            return true;
        }
        return false;
    }

    // insert value at the given position
    insert(idx, val){
        if(idx < 0 || idx >= this.length) return false;
        if(idx === 0) this.unshifting(val);
        if(idx === this.length) push(val);
        let newNode = new Node(val);
        let beforNode = this.get(idx -1);
        let afterNode = beforNode.next;
        beforNode.next = newNode; 
        newNode.prev = beforNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        this.length++;
        return true;
    }

    //remove node from that index
    remove(idx){
        if(idx < 0 || idx >= this.length) return false;
        if(idx === 0) return this.shift();
        if(idx === this.length-1) return this.pop();
        let removedNode = this.get(idx);
        let beforNode = removedNode.previous;
        let afterNode = removedNode.next;
        beforNode.next = afterNode;
        afterNode.prev = beforeNode;
        //removedNode.previous.next = removedNode.next;
        //removedNode.next.previous = removedNode.previous;
        removedNode.next = null;
        removedNode.previous = null;

        this.length--;
        return removedNode;
    }

//      reverse(head) {
//         if (head === null || head.next === null) {
//                return head;
//         }
      
//        let temp = head;
//        let newHead = head;
//        while (temp != null) {
//            let prev = temp.prev;
//            temp.prev = temp.next;
//            temp.next = prev;
//            newHead = temp;
//            temp = temp.prev;
//        }
//        return newHead;
   
//    }
}


let first = new Node(12);
first.next = new Node(13);
first.next.previous = first;

let list = new DoublyLinkedList();
list.push(100);
list.push(200);
list.push(300);
list.push(400);
list.push(500);
list.push(600);
list.push(700);
list.push(800);
list.push(900);
list.remove(1);
//console.log(list.remove(1));
console.log(list.get(1));
