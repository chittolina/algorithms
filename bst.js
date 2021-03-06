function insert(tree, value) {
  if (value < tree.value) {
    if (!tree.left) {
      tree.left = {
        value,
        left: null,
        right: null
      }
      return tree
    }
    tree.left = insert(tree.left, value)
    return tree
  }

  if (value > tree.value) {
    if (!tree.right) {
      tree.right = {
        value,
        left: null,
        right: null
      }
      return tree
    }
    tree.right = insert(tree.right, value)
    return tree
  }

  return tree
}

function remove(tree, value) {
  if (value < tree.value) {
    if (tree.left) {
      tree.left = remove(tree.left, value)
    }
    return tree
  }

  if (value > tree.value) {
    if (tree.right) {
      tree.right = remove(tree.right, value)
    }
    return tree
  }
  
  if (tree.value) {
    // The new "parent" is the right node  
    if (tree.right) {
      tree.value = tree.right.value
      tree.right = tree.right.right
    } else {
      return null
    }
  }

  return tree
}

function find(tree, value) {
  if (!value) {
    return null
  }
  
  if (value < tree.value) {
    if (tree.left) {
      return find(tree.left, value)
    }

    return null
  }

  if (value < tree.value) {
    if (tree.right) {
      return find(tree.right, value)
    }

    return null
  }

  if (value === tree.value) {
    return value
  }

  return null
}


export {find, insert, remove}