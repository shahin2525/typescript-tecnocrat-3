{
  //

  class BankAccount {
    constructor(
      public readonly id: number,
      public name: string,
      protected _balance: number
    ) {}
    set deposit(money: number) {
      this._balance = money + this._balance;
    }
    set subtract(money: number) {
      if (money > this._balance) {
        throw new Error("your balance is less than your expected money");
      }
      this._balance = this._balance - money;
    }
    get balance() {
      return this._balance;
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      this.balance;
    }
  }

  const user = new BankAccount(222, "rakib", 2000);
  //   user.addDeposit(20);
  //   user.subtractDeposit(20);
  //   console.log(user.getBalance());
  user.deposit = 20;
  user.subtract = 20;
  const myBalance = user.balance;
  console.log(myBalance);

  //
}
