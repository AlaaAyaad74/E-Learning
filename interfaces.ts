export interface ICourse {
  id: string;
  title: string;
  description: string;
  views: number;
  image: string;
  sections: ISection[];
}

export interface ISection {
  id: string;
  title: string;
  videos: IVideo[];
}

export interface IVideo {
  id: string;
  title: string;
  duration: string;
  url: string;
}







