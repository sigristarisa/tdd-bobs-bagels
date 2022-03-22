const Bagel = require('../src/Bagel.js')

describe ('Bagel', () => {
  /* --- REQUIREMENT PART 1 --- */
  it ('adds a bagel and returns the basket with that bagel', () => {
    // setup
    const bagel = new Bagel()

    const expected = ['poppy']
    // execute
    const result = bagel.addToBasket('poppy')
    // verify
    expect(result).toEqual(expected)
  })

  it ('adds another bagel and returns the basket with multiple bagels', () => {
    // setup
    const bagel = new Bagel()
    bagel.addToBasket('poppy')

    const expected = ['poppy', 'sesame']
    // execute
    const result = bagel.addToBasket('sesame')
    // verify
    expect(result).toEqual(expected)
  })

  it ('adds a bagel, then removes, and returns an empty basket', () => {
    // setup
    const bagel = new Bagel()
    bagel.addToBasket('poppy')
    bagel.removeFromBasket('poppy')

    const expected = []
    // execute
    const result = bagel.removeFromBasket('poppy')
    // verify
    expect(result).toEqual(expected)
  })

  it ('remove a specific bagel and returns the basket without that bagel', () => {
    // setup
    const bagel = new Bagel()
    bagel.addToBasket('poppy')
    bagel.addToBasket('sesame')
    bagel.addToBasket('plain')
    bagel.addToBasket('cheese')

    const expected = ['poppy', 'sesame', 'cheese']
    // execute
    const result = bagel.removeFromBasket('plain')
    // verify
    expect(result).toEqual(expected)
  })

  /* --- REQUIREMENT PART 2 --- */
  it ('returns "Your basket is full"', () => {
    // setup
    const bagel = new Bagel()
    bagel.addToBasket('poppy')
    bagel.addToBasket('sesame')
    bagel.addToBasket('plain')
    bagel.addToBasket('cheese')
    bagel.addToBasket('raisin')
    bagel.addToBasket('cinammon')

    const expected = 'Your basket is full'
    // execute
    const result = bagel.isFull()
    // verify
    expect(result).toEqual(expected)
  })

  it ('returns "Continue to order; 3 bagels left"', () => {
    // setup
    const bagel = new Bagel()
    bagel.addToBasket('poppy')
    bagel.addToBasket('sesame')

    const expected = 'Continue to order; 3 bagels left'
    // execute
    const result = bagel.isFull()
    // verify
    expect(result).toEqual(expected)
  })

  fit ('returns "Continue to order; 6 bagels left"', () => {
    // setup
    const bagel = new Bagel()
    bagel.addToBasket('poppy')
    bagel.addToBasket('sesame')
    bagel.addToBasket('plain')
    bagel.addToBasket('cheese')
    bagel.addToBasket('raisin')
    bagel.addToBasket('cinammon')
    bagel.createBigBasket()

    const expected = 'Continue to order; 6 bagels left'
    // execute
    const result = bagel.isFull()
    // verify
    expect(result).toEqual(expected)
  })
})