import {Tutoring} from "./tutoring.model";
import {McqAnswer} from "./mcq-answer.model";

export class McqQuestion {
    id: number;
    tutoring: Tutoring;
    sorting: number;
    question: string;
    answers: McqAnswer[];
    timer?: number;
}
