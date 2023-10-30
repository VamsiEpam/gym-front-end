import {TrainerBasicDetails} from "./TrainerBasicDetails";

export class TraineeDetailsDTO{
  userName : string = '';
  firstName : string = '';
  lastName : string = '';
  dateOfBirth : Date | undefined;
  address : string = '';
  trainersList: TrainerBasicDetails[] = []
  email ='';
  active = true;
}
