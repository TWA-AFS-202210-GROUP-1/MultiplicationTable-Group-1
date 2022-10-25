export class MultiplicationTable {
  public render(start: number, end: number): string{
    const isNumberValid = this.isNumberValid(start, end)
    if (isNumberValid) {
      return this.generateMultiplicationResult(start, end)
    }
    else {
      return ''
    }
  }

  private isNumberValid(start: number, end: number): boolean{
    const isEndNotGreaterThanStart = this.isEndNotGreaterThanStart(start, end)
    const isNumberRangeBetween1And10 = this.isNumberRangeBetween1And10(start,end)
    return isEndNotGreaterThanStart && isNumberRangeBetween1And10
  }

  private isEndNotGreaterThanStart(start: number, end: number): boolean{
    return start <= end
  }

  private isNumberRangeBetween1And10(start: number, end: number): boolean{
    return start<=10 && start >=1 && end<=10 && end >=1
  }

  private generateMultiplicationResult(start: number, end: number): string{
    let formatResult = ''
    for (let i = 1; i <= start; i++) {
      for (let j = 1; j <= end; j++){
        if(i>=j){
          formatResult += `${i}*${j}=${i*j}  `
        }
        else{
          formatResult += '\n'
        }
      }
    }
    console.log(formatResult)
    return formatResult
  }
}
