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
    expect(rendered).toBe("1*1=1")
  })

  it('should return "" of (0, 1)', () => {
    const table = new MultiplicationTable()
    const start = 0
    const end = 1

    const rendered = table.render(start, end)
    expect(rendered).toBe("")
  });

  it('should return "2*4  3*4  4*4"', () => {
    const table = new MultiplicationTable()
    const start = 2
    const end = 4

    const rendered = table.render(start, end)
    expect(rendered).toBe("2*4=8  3*4=12  4*4=16")
    
  });
})
