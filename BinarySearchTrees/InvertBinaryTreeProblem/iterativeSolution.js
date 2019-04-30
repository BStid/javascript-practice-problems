var invertTree = function(root) {
  let node = root;
  let queue = [];
  let temp;
  if (!node) {
    return null;
  }
  queue.push(node);
  while (queue.length > 0) {
    node = queue.shift();
    temp = node.left;
    node.left = node.right;
    node.right = temp;
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  return root;
};
