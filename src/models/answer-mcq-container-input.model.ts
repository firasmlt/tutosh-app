import {AnswerMcqInput} from "./answer-mcq-input.model";

export class AnswerMcqContainerInput {
    tutoringId?: number;
    sessionId?: number;
    responses: AnswerMcqInput[];
}
