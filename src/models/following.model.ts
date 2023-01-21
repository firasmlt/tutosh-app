import {Profile} from "./profile.model";

export type Following = {
    profileFollower?: Profile;
    profileFollowing?: Profile;
};
