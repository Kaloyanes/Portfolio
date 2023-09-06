export class Project {
  public name: string;
  public description: string;
  public github: string;
  public imageUrl: string | undefined;
  public downloadFileLink: string | undefined;
  public startToEnd: string;
  public images: string[];


  constructor(
    name: string,
    description: string,
    github: string,
    imageUrl: string | undefined,
    downloadFileLink: string | undefined,
    startToEnd: string,
    images: string[]
  ) {
    this.name = name
    this.description = description
    this.github = github
    this.imageUrl = imageUrl
    this.downloadFileLink = downloadFileLink
    this.startToEnd = startToEnd
    this.images = images
  }
}
