import { MultiplicationTable } from '../src/MultiplicationTable'

describe('Multiplication Table', () => {
  it('should render multiplication table of (1, 2)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 1
    const end = 2

    // when
    const rendered = table.render(start, end)

    //then
    const expectStr = '1*1=1\n1*2=2  2*2=4'

    expect(rendered).toBe(expectStr)
  })

  it('should render empty string when give (2,1)', () => {
    const table = new MultiplicationTable()
    const start = 2
    const end = 1

    // when
    const rendered = table.render(start, end)

    //then
    const expectStr = ''

    expect(rendered).toBe(expectStr)
  })

  it('should render empty string when give (0,2)', () => {
    const table = new MultiplicationTable()
    const start = 0
    const end = 2

    // when
    const rendered = table.render(start, end)

    //then
    const expectStr = ''

    expect(rendered).toBe(expectStr)
  })

  it('should render empty string when give (2,11)', () => {
    const table = new MultiplicationTable()
    const start = 2
    const end = 11

    // when
    const rendered = table.render(start, end)

    //then
    const expectStr = ''

    expect(rendered).toBe(expectStr)
  })
})
