import {McqQuestion} from "./mcq-question.model";
import {Applying} from "./applying.model";
import {MaterialInput} from "./material-input.model";
import {Session} from "./session.model";

export type TutoringInput = {
    preferredTutorId?: number;
    id?: number;
    title?: string;
    description?: string;
    photoPath?: string;
    videoPath?: string;
    documentPath?: string;
    languageId?: number;
    hashTagIds?: number[];
    typeId?: number;
    subCategoryId?: number;
    hashTagList?: any;
    mcqQuestions?: McqQuestion[];
    applyings?: Applying[];
    material?: MaterialInput;
    thematicId?: number;
    sessions?: Session[];
};
