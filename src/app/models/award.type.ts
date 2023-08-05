export class Award {
  public title: string;
  public description: string;
  public date: string;
  public location: string;
  public imageUrl: string | undefined;

  constructor(
    title: string,
    description: string,
    date: string,
    location: string,
    imageUrl: string | undefined,
  ) {
    this.title = title
    this.description = description
    this.date = date
    this.location = location
    this.imageUrl = imageUrl
  }

}
