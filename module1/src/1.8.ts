{
  //

  class BankAccount {
    constructor(
      public readonly id: number,
      public name: string,
      protected balance: number
    ) {}
    addDeposit(money: number) {
      this.balance = money + this.balance;
    }
    subtractDeposit(money: number) {
      if (money > this.balance) {
        throw new Error("your balance is less than your expected money");
      }
      this.balance = this.balance - money;
    }
    getBalance() {
      return this.balance;
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      this.balance;
    }
  }

  const user = new BankAccount(222, "rakib", 2000);
  user.addDeposit(20);
  user.subtractDeposit(20);
  console.log(user.getBalance());

  //
}
