import {Language} from "./language.model";
import {Profile} from "./profile.model";
import {HashTag} from "./hash-tag.model";
import {ExperienceLevel} from "./experience-level.model";
import {TutoringStatus} from "./tutoring-status.model";
import {TutoringType} from "./tutoring-type.model";
import {SubCategory} from "./sub-category.model";
import {McqQuestion} from "./mcq-question.model";
import {Booking} from "./booking.model";
import {Applying} from "./applying.model";
import {SessionReview} from "./session-review.model";
import {TutoringTutorialLink} from "./tutoring-tutorial-link.model";
import {Reference} from "./reference.model";
import {Material} from "./material.model";
import {Session} from "./session.model";

export type Tutoring = {
    preferredTutorId?: number;
    id?: number;
    title?: string;
    description?: string;
    posterProfile?: Profile;
    photoPath?: string;
    videoPath?: string;
    documentPath?: string;
    //dueDate?: Date;
    language?: Language;
    hashTags?: HashTag[];
    //experienceLevel?: ExperienceLevel;
    //status?: TutoringStatus;
    type?: TutoringType;
    subCategory?: SubCategory;
    mcqQuestions?: McqQuestion[];
    //tutorsCount?: number;
    //tuteesCount?: number;
    bookings?: Booking[];
    isBooked?: boolean;
    bookers?: Profile[];
    applyings?: Applying[];
    isApplied?: boolean;
    appliers?: Profile[];
    reviews?: SessionReview[];
    rating?: number;
    tutorials?: TutoringTutorialLink[];
    thematic?: Reference;
    material?: Material;
    mcqPassed?: boolean;
    hasMcq?: boolean;
    //score?: number;
    updatedAt?: Date;
    sessions?: Session[];
};
