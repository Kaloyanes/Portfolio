export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  top: boolean;
  position: number;
  images: string[];
  createdAt: number;
  problem: string;
  solution: string;
  result: string;
  technologies: string[];
  selectedImageIndex: number;
  link: string;

}
