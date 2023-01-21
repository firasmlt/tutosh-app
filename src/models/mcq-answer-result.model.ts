import {McqAnswer} from "./mcq-answer.model";

export class McqAnswerResult {
  correctAnswer?: McqAnswer;
  userAnswer?: McqAnswer;
  isCorrect?: boolean;
  answer?: McqAnswer;
}
