import { format } from 'date-fns';

export class Team {
  constructor(
    private _id: number,
    private _name: string,
    private _homePlace: string,
    private _startDate: Date,
    private _history: string
  ) {}

  getformat(): string {
    return format(this.startDate, 'yyyy年MM年dd月');
  }
  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }
  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get homePlace(): string {
    return this._homePlace;
  }

  public set homePlace(homePlace: string) {
    this._homePlace = homePlace;
  }

  public get startDate(): Date {
    return this._startDate;
  }

  public set startDate(startDate: Date) {
    this._startDate = startDate;
  }

  public get history(): string {
    return this._history;
  }

  public set history(history: string) {
    this._history = history;
  }
}
