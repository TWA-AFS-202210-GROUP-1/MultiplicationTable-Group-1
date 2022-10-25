export class MultiplicationTable {
  public render(start: number, end: number): string{
    const isValid = this.isValidInput(start, end)

    if (isValid) {
      return this.GenerateMulTable(start, end)
    }else{
      return ""
    }
    
    // return '1*1=1'
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

  private GenerateMulTable(start: number, end: number): string{
    return "1*1=1"
  }

  // [2, 3, 4] => "2*4  3*4  4*4"
  // private GenerateEachLine(lineStart: number, lineEnd: number): string{
  //   const lineLength = lineEnd - lineStart + 1
  //   const eachLine = ""
  //   for (let index = 0; index < lineLength; index++) {
  //     const newCell = lineStart + '*' + lineEnd + '=' + lineStart * lineEnd + '  '
  //     const element = array[index];
  //   }
  // }

  // rows: 
  // array.from :生成range 输入1，4 得到（1，2，3，4）
  // .map(=>)
  // .join("\n")

}
