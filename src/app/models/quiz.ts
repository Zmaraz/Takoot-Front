export class Quiz {
    quiz_id: number;
    title: string;
    author_id:number;
    dateCreated: string;
    dateLastUpdated: string;
    categoryId: number;
    difficultyId: number;
    defaultId: number;

    constructor(title:string, dateCreated: string, dateLastUpdated: string, categoryId: number, difficultyId: number, defaultId: number) {
        this.title = title;
        this.dateCreated = dateCreated;
        this.dateLastUpdated = dateLastUpdated;
        this.categoryId = categoryId;
        this.difficultyId = difficultyId;
        this.defaultId = defaultId;

    }
}

