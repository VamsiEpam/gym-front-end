import {TrainerBasicDetails} from "./TrainerBasicDetails";

export class TrainerDetailsDTO{
  userName : string = '';
  firstName : string = '';
  lastName : string = '';
  specialization : string = '';
  active : boolean = true;
  traineeDetailsList : TrainerBasicDetails[] = [];
}
