export class MultiplicationTable {
  public render(start: number, end: number): string {
    if (!this.isnNumbersValid(start, end)) {
      return ''
    }

    return this.generateMultiplicationTable(start, end)
  }

  isnNumbersValid(start: number, end: number): boolean {
    return this.isStartNotGreaterEnd(start, end) && this.isStartEndOutRange(start, end)
  }

  isStartNotGreaterEnd(start: number, end: number): boolean {
    return start <= end
  }

  isStartEndOutRange(start: number, end: number): boolean {
    return start >= 1 && end <= 10
  }

  generateMultiplicationTable(start: number, end: number): string {
    let table = ''
    for (let i = start; i <= end; i++) {
      table += this.generateLine(start, i)
      if (i < end) {
        table += '\n'
      }
    }

    return table
  }

  generateLine(columnStart: number, columnEnd: number): string {
    let line = ''
    for (let i = columnStart; i <= columnEnd; i++) {
      line += this.generateItem(i, columnEnd)
      if (i < columnEnd) {
        line += '  '
      }
    }

    return line
  }

  generateItem(numberA: number, numberB: number): string {
    return `${numberA}*${numberB}=${numberA * numberB}`
  }
}
