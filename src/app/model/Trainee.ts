import {Trainer} from "./Trainer";

export class Trainee{
  firstName : string | undefined;
  lastName : string | undefined;
  address : string | undefined;
  dateOfBirth : Date | undefined;
  trainersList : Trainer[] = [];
  email : string = ''
  isActive : boolean = true;
}
