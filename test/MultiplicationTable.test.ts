import {render, createRow} from '../src/MultiplicationTable'

describe('Multiplication Table', () => {
  it('should render multiplication table of (1, 1)', () => {
    // given
    const start = 1
    const end = 1

    // when
    const rendered = render(start, end)

    // then
    expect(rendered).toBe('1*1=1')
  })
})

describe('Invalid input', () => {
  it('should return false given (2, 1)', () => {
    // given
    const start = 2
    const end = 1

    // when
    const rendered = render(start, end)

    // then
    expect(rendered).toBe('')
  })
  it('should return false given (12, 11)', () => {
    // given
    const start = 12
    const end = 11

    // when
    const rendered = render(start, end)

    // then
    expect(rendered).toBe('')
  })
})

describe('Create a line', () => {
  it('should return proper table line given (2, 4)', () => {
    const line: string = createRow(2, 4)
    expect(line).toBe('2*4=8  3*4=12  4*4=16')
  })
})

describe('Create a table', () => {
  it('should render multiplication table of (2, 4)', () => {
    const table: string = render(2, 4)
    expect(table).toBe(`2*2=4
2*3=6  3*3=9
2*4=8  3*4=12  4*4=16`)
  })
  it('should render multiplication table of (2, 2)', () => {
    const table: string = render(2, 2)
    expect(table).toBe('2*2=4')
  })
})
