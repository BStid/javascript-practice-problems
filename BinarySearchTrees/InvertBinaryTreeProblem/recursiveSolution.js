var invertTree = function(root) {
  let node = root;
  if (node) {
    let temp = node.left;
    node.left = invertTree(node.right);
    node.right = invertTree(temp);
    return node;
  }
  return null;
};
