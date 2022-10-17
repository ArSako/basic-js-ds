const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/* class Node {
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
*/
class BinarySearchTree {
  constructor(){
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    this._root = addIn(this._root, data);

    function addIn(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }
      
      if  (data < node.data) {
        node.left = addIn(node.left, data);
      } else {
        node.right = addIn(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return searchIn(this._root, data);

    function searchIn(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      return data < node.data ?
        searchIn(node.left, data) :
        searchIn(node.right, data);
    }
  }

  find(data) {
    let node = this._root;
    while(node) {
      if (data < node.data){
        node = node.left;
      } else if (data > node.data){
        node = node.right;
      } else {
        return node;
      }
    }
    return null;
  }

  remove(data, node = this._root) {
    this._root = removeNode(this._root, data);

    function removeNode(node, data) {
      if(!node) {
        return null;
      }
        if (data < node.data) {
          node.left = removeNode(node.left, data);
          return node;
        } else if(data > node.data) {
          node.right = removeNode(node.right, data);
          return node;
        } 

      else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        if (!node. left) {
          node = node.right;
          return node;
        }
      let minForRight = node.right;
      while (minForRight.left) {
        minForRight = minForRight.left;
      }
      node.data = minForRight.data;
      node.right = removeNode(node.right, minForRight.data);

      return node;
    }
    }
  }

  min() {
    if(!this._root){
      return;
    }

    let node = this._root;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if(!this._root){
      return;
    }

    let node = this._root;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }

}

module.exports = {
  BinarySearchTree
};