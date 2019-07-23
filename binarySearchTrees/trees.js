class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }

    find(value){
        if(this.root === null) return false;
        let current = this.root;
        let found = false;
        while(!found && current){
            if(value < current.value){
                current = current.left;
            } else if (value > current.value){
                current = current.right;
            } else {
                found = true; //return true
            }
        }
        if(!found) return undefined;
        return current;//return false
    }

    breadthFirstSearch(){
        let node = this.root;
        let visited = [];
        let queue = [];
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            visited.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return visited;
    }

    depthFirstSearchPreOrder(){
        let visited = [];
        let current = this.root;
        function traverse(node){
            visited.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return visited;
    }

    depthFirstSearchPostOrder(){
        let visited = [];
        let current = this.root;
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            visited.push(node.value);
        }
        traverse(current);
        return visited;
    }

    depthFirstSearchInOrder(){
        let visited = [];
        let current = this.root;
        function traverse(node){
            node.left && traverse(node.left);
            visited.push(node.value);
            node.right && traverse(node.right);
            
        }
        traverse(current);
        return visited;
    }

}


let tree = new BinarySearchTree();
tree.insert(4);
tree.insert(8);
tree.insert(2);
console.log(tree.depthFirstSearchPreOrder());
console.log(tree.depthFirstSearchPostOrder());
console.log(tree.depthFirstSearchInOrder());


//console.log(tree);