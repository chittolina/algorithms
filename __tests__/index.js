import {insert, remove} from '../bst'

describe('Algorithms', () => {
  describe('BST', () => {
    it('insert', () => {
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
          value: 7,
          left: null,
          right: null
        }
      }
  
      const valueToInsert = 5
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
              value: valueToInsert,
              left: null,
              right: null
            },
          }
        },
        right: {
          value: 7,
          left: null,
          right: null
        }
      }
  
      expect(insert(tree, valueToInsert)).toEqual(expectedTree)
    })
   
    it('remove', () => {
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
  
      const valueToRemove = 3
      const expectedTree = {
        value: 10,
        left: {
          value: 4,
          left: {
            value: 2,
            left: null,
            right: null,
          },
          right: null,
        },
        right: {
          value: 11,
          left: null,
          right: null
        }
      }
      
      expect(remove(tree, valueToRemove)).toEqual(expectedTree)
    })
  })
})