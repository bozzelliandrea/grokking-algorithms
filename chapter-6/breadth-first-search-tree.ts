/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function findNodeInTree(tree: TreeNode | null, target: TreeNode | null): TreeNode | null {

    if(cloned.val == target.val)
        return cloned

    const queue = [];

    if(cloned.left != null)
        queue.push(cloned.left);
    if(cloned.right != null)
        queue.push(cloned.right);

    while(queue.length > 0) {
        const node = queue.pop();

        if(node.val == target.val)
            return node
        else {
            if(node.left != null)
                queue.push(node.left);
            if(node.right != null)
                queue.push(node.right);
        }

    }
    return null;
};
