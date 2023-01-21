import {Tutoring} from "./tutoring.model";
import {Session} from "./session.model";
import {McqQuestion} from "./mcq-question.model";
import {McqAnswer} from "./mcq-answer.model";

export class McqResponse {
    tutoring?: Tutoring;
    session?: Session;
    question?: McqQuestion;
    answer?: McqAnswer;
}
