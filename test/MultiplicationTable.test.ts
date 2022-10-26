import {MultiplicationTable} from '../src/MultiplicationTable'

describe('Multiplication Table', () => {
  it('should render multiplication table of (1, 1)', () => {
    const table = new MultiplicationTable()
    const start = 2
    const end = 5

    const rendered = table.render(start, end)

    expect(rendered).toBe(`2*2=4
3*2=6  3*3=9
4*2=8  4*3=12  4*4=16
5*2=10  5*3=15  5*4=20  5*5=25
`)
  })

  it('should return null string when start lager than end', () => {
    const table = new MultiplicationTable()
    const start = 2
    const end = 1
    const expected = ''

    const rendered = table.render(start, end)

    expect(rendered).toBe(expected)

  })

  it('should return null string when number range extend', () => {
    const table = new MultiplicationTable()
    const start = 1
    const end = 11
    const expected = ''

    const rendered = table.render(start, end)

    expect(rendered).toBe(expected)

  })
})
