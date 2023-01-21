import {McqQuestion} from "./mcq-question.model";

export class McqAnswer {
    id?: number;
    mcqQuestion?: McqQuestion;
    label?: string;
    isGoodAnswer?: boolean;
}
