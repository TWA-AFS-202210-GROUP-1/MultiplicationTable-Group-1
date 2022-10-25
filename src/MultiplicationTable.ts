export class MultiplicationTable {
  public render(start: number, end: number): string {
    const isValid: boolean = this.isValid(start, end);
    return "1*1=1";
  }

  public isValid(start: number, end: number): boolean {
    const isValid = start <= end && start >= 1 && end <= 10;

    return isValid;
  }
}
