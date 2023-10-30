export class TrainerBasicDetails{
  userName : string = '';
  firstName : string = '';
  lastName : string = '';
  specialization : string = '';
  isActive: boolean = true;


  constructor(userName: string, firstName: string, lastName: string, specialization: string) {
    this.userName = userName;
    this.firstName = firstName;
    this.lastName = lastName;
    this.specialization = specialization;
  }
}
