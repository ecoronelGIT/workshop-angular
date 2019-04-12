
export interface ITask {
  id: number;
  name: string;
  value: number;
  divided: boolean;
  state: StateEnum;
}

export enum StateEnum {
  HOLD = "HOLD",
  WAITING = "WAITING",
  RUNNING = "RUNNING",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
}

