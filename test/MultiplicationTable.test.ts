import {MultiplicationTable} from '../src/MultiplicationTable'

describe('Multiplication Table', () => {
  it('should render multiplication table of (1, 1)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 1
    const end = 1

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('1*1=1')
  })

  it('should return null string', () => {
    // given
    const table = new MultiplicationTable()
    const start = 2
    const end = 1
    const expected = ''

    // when
    const rendered = table.render(start, end)

    // then
    expect(rendered).toBe(expected)

  })

  it('should return null string', () => {
    // given
    const table = new MultiplicationTable()
    const start = 0
    const end = 10
    const expected = ''

    // when
    const rendered = table.render(start, end)

    // then
    expect(rendered).toBe(expected)

  })
})
