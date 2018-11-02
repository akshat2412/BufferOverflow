import { IAuthor } from './Author.Model';

export interface IQuestion {
    id: string;
    title: string;
    description: string;
    answerCount: number;
    createdAt: Date;
    updatedAt: Date;
    tags: string[];
    author: IAuthor;
}
