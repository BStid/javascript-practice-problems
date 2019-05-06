function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var constructMaximumBinaryTree = function(nums) {
  if (nums.length === 0) {
    return null;
  }
  let maxNum = Math.max(...nums);
  let maxIndex = nums.indexOf(maxNum);
  let rightSplit = nums.slice(maxIndex + 1);
  let leftSplit = nums.slice(0, maxIndex);

  let node = new TreeNode(maxNum);
  node.left = constructMaximumBinaryTree(leftSplit);
  node.right = constructMaximumBinaryTree(rightSplit);

  return node;
};
