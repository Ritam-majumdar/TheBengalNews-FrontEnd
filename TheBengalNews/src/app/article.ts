export class Article {
    _id: string;
    title: string;
    titleEnglish: string;
    author: string;
    place: string;
    mMenu: string;
    ddMenu: string;
    youtubeLink: string;
    content: string;
    articleImage: string;
    imageCaption: string;
    topNews: boolean;
    topNewsDdMenu: boolean;
    flashNews: boolean;
    keywords: [string];
    dateBengali: string;
    views: number;
    createdAt: Date;
  }