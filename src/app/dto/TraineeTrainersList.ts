export class TraineeTrainersList{
  traineeUserName: string | undefined;
  trainersUserName: string[] | undefined ;


  constructor(traineeUserName: string | undefined, trainersUserName: string[] | undefined) {
    this.traineeUserName = traineeUserName;
    this.trainersUserName = trainersUserName;
  }
}
