export class MultiplicationTable {
  public render(start: number, end: number): string{
    const isValid = this.isValidInput(start, end)

    if (isValid) {
      return this.GenerateMulTable(start, end)
    }else{
      return ""
    }
  }

  private isValidInput(start: number, end: number): boolean{
    return this.IsStartLessEqualToEnd(start, end) && this.IsInRange10(start, end)
  }

  private IsStartLessEqualToEnd(start: number, end: number): boolean{
    return start <= end
  }

  private IsInRange10(start: number, end: number): boolean{
    return start >= 1 && end <= 10
  }

  // 2, 4 => [2,2], [2,3], [2,4]
  private GenerateMulTable(start: number, end: number): string{
    let mulTable = ""
    for (let index = start; index <= end; index++) {
      mulTable += this.GenerateEachLine(start, index) + '\n'
    }
    return mulTable.substring(0,mulTable.length-1)
  }

  // [2, 4] => "2*4  3*4  4*4"
  private GenerateEachLine(lineStart: number, lineEnd: number): string{
    let eachLine = ""
    for (let index = lineStart; index <= lineEnd; index++) {
      eachLine += index + '*' + lineEnd + '=' + index * lineEnd + '  '
    }
    return eachLine.substring(0,eachLine.length-2)
  }
}
