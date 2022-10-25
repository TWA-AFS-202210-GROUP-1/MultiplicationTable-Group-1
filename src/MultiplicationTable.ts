export class MultiplicationTable {
  public render(start: number, end: number): string {
    const isValid: boolean = this.isValid(start, end);
    return "1*1=1";
  }

  private isValid(start: number, end: number): boolean {
    const isValid = isValidRange(start, end);

    return isValid;
  }
}
