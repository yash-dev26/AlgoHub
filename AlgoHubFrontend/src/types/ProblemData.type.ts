export type ProblemData = {
    _id: string;
    title: string;
    url?: string;
    difficulty?: 'EASY' | 'MEDIUM' | 'HARD';
    tags?: string[];
};

export type TopicGroup = {
    topic: string;
    topicId: string;
    problems: ProblemData[];
};