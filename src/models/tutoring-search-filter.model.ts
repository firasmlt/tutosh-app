import {Reference} from "./reference.model";
import {Material} from "./material.model";
import {Language} from "./language.model";
import {TutoringType} from "./tutoring-type.model";

export type TutoringSearchFilter = {
    tutoringLanguages?: Language[];
    types?: TutoringType[];
    materials?: Material[];
    thematic?: Reference;
    hashTagIds?: number[];
    searchText?: string;
};
