import {MultiplicationTable} from '../src/MultiplicationTable'

describe('Multiplication Table', () => {
  it('should render multiplication table of (1, 1)', () => {
    const table = new MultiplicationTable()
    const start = 2
    const end = 2

    const rendered = table.render(start, end)

    expect(rendered).toBe('1*1=1  \n2*1=2  2*2=4  ')
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
