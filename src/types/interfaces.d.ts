interface IQuizzCard {
    id: string;
    name: string;
    icon: string;
    categories: string;
    difficulty: string;
}

interface IQuizzAnswer {
    id: number;
    answer: string;
}
type IQuizzQuestion = any