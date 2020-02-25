import {find, insert, remove} from '../bst'

describe('Algorithms', () => {
  describe('BST', () => {
    it('insert', () => {
      let tree = {
        value: 10,
        left: {
          value: 3,
          left: {
            value: 2,
            left: null,
            right: null,
          },
          right: {
            value: 4,
            left: null,
            right: null,
          }
        },
        right: {
          value: 11,
          left: null,
          right: null
        }
      }
      const expectedTree = {
        value: 10,
        left: {
          value: 3,
          left: {
            value: 2,
            left: null,
            right: null,
          },
          right: {
            value: 4,
            left: null,
            right: {
              value: 8,
              left: {
                value: 5,
                left: null,
                right: null
              },
              right: null
            },
          }
        },
        right: {
          value: 11,
          left: null,
          right: null
        }
      }
    
      const valueToInsert1 = 8
      const valueToInsert2 = 5
    
      insert(tree, valueToInsert1)
      tree = insert(tree, valueToInsert2)

      expect(tree).toEqual(expectedTree)
    })
  
    it('remove', () => {
      let tree = {
        value: 10,
        left: {
          value: 3,
          left: {
            value: 2,
            left: null,
            right: null,
          },
          right: {
            value: 4,
            left: null,
            right: null,
          }
        },
        right: {
          value: 11,
          left: null,
          right: null
        }
      }
      const expectedTree = {
        value: 10,
        left: {
          value: 4,
          left: null,
          right: null,
        },
        right: {
          value: 11,
          left: null,
          right: null
        }
      }
    
      const valueToRemove1 = 3
      const valueToRemove2 = 2
      
      remove(tree, valueToRemove1)
      tree = remove(tree, valueToRemove2)
    
      expect(tree).toEqual(expectedTree)
    })

    it('find', () => {
      const tree = {
        value: 10,
        left: {
          value: 3,
          left: {
            value: 2,
            left: null,
            right: null,
          },
          right: {
            value: 4,
            left: null,
            right: null,
          }
        },
        right: {
          value: 11,
          left: null,
          right: null
        }
      }
  
      const valueToFind1 = 2
      const valueToFind2 = 7
  
      expect(find(tree, valueToFind1)).toEqual(valueToFind1)
      expect(find(tree, valueToFind2)).toEqual(null)
    })
  })
})