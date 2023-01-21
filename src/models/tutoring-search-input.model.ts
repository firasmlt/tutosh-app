import {Reference} from "./reference.model";
import {MaterialInput} from "./material-input.model";

export type TutoringSearchInput = {
    languageIds?: number[];
    typeIds?: number[];
    materials?: MaterialInput[];
    hashTagIds?: number[];
    searchText?: string;
    thematic?: Reference;
};
