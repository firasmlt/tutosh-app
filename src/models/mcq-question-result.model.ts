import {McqAnswerResult} from "./mcq-answer-result.model";
import {McqQuestion} from "./mcq-question.model";

export class McqQuestionResult {
  question?: McqQuestion;
  result?: McqAnswerResult[];
  score?: number;
}
