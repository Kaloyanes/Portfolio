export class Skill {
  public name: string;
  public skill: number;
  public imageUrl: string | undefined;


  constructor(name: string, skill: number, imageUrl: string | undefined = undefined) {
    this.name = name;
    this.skill = skill;
    this.imageUrl = imageUrl;
  }
}
