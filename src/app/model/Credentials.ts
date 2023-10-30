

export  class Credentials{
  userName:string;
  password:string;
  constructor(name:string, pass:string) {
    this.userName = name;
    this.password = pass;
  }

  toString(): string{
    return ""+this.userName+" "+this.password;
  }

}
