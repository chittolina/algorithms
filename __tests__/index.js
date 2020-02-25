import {insert, remove} from '../bst'

describe('Algorithms', () => {
  describe('BST', () => {
    it('insert 1', () => {
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
   
    it('insert 2', () => {
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
  
      const valueToInsert = 1
      const expectedTree = {
        value: 10,
        left: {
          value: 3,
          left: {
            value: 2,
            left: {
              value: 1,
              left: null,
              right: null
            },
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
  
      expect(insert(tree, valueToInsert)).toEqual(expectedTree)
    })
  
    it('remove 1', () => {
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

    it('remove 2', () => {
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
  
      const valueToRemove = 2
      const expectedTree = {
        value: 10,
        left: {
          value: 3,
          left: null,
          right: {
            value: 4,
            left: null,
            right: null
          }
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