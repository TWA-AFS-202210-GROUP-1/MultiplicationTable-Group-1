import { MultiplicationTable } from '../src/MultiplicationTable'

describe('Multiplication Table', () => {
  it('should render multiplication table of (2, 4)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 2
    const end = 4

    // when
    const rendered = table.render(start, end)

    // then
    expect(rendered).toBe('2*4=8')
  })

  it('should return true given numbers [1, 5]', () => {
    const table = new MultiplicationTable()
    const start = 1
    const end = 5

    const isValid = table.isValid(start, end)

    expect(isValid).toBeTruthy()
  })

  it('should return false given numbers [5, 1]', () => {
    const table = new MultiplicationTable()
    const start = 5
    const end = 1

    const isValid = table.isValid(start, end)

    expect(isValid).toBeFalsy()
  })

  it('should return false given numbers [0, 11]', () => {
    const table = new MultiplicationTable()
    const start = 0
    const end = 11

    const isValid = table.isValid(start, end)

    expect(isValid).toBeFalsy()
  })
})
