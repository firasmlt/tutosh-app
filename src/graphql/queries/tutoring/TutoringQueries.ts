import { gql } from "@apollo/client";

export const TutoringQuery = gql`
    query tutoring($id: Float!, $authenticated: Boolean! = true) {
        tutoring(id: $id) {
            id
            title
            description
            posterProfileId
            photoPath
            videoPath
            documentPath
            sessions {
                id
                meetingDate
                duration
                cost
                attendees {
                    profile {
                        id
                        photoPath
                        name
                        user {
                            id
                            firstName
                        }
                    }
                    bookingStatus {
                        id
                        label
                    }
                }
                attendeesCount
                status {
                    id
                    label
                }
                bookings {
                    id
                    status {
                        id
                        label
                    }
                    profile {
                        id
                        name
                    }
                }
                applyings {
                    id
                    profile {
                        id
                    }
                    status {
                        id
                    }
                }
                totalBudgetSum
                attendeesCount
                tutee1ProfileId
                tutee2ProfileId
                tutee3ProfileId
                tutor1ProfileId
                tutor2ProfileId
                tutor3ProfileId
            }
            preferredTutorId
            language {
                label
            }
            hashTagIds
            hashTags {
                id
                label
            }
            type {
                id
                label
            }
            mcqQuestions {
                question
                answers {
                    label
                    isGoodAnswer
                }
                timer
            }
            createdAt
            updatedAt
            deletedAt
            posterProfile {
                id
                name
                photoPath
                user {
                    firstName
                    lastName
                }
                reviews {
                    profileId
                }
                rating
                score
            }
            bookings {
                id
                status {
                    id
                    label
                }
                profile {
                    id
                    name
                }
                session {
                    id
                }
            }
            tutorProfile {
                id
                name
                photoPath
                user {
                    firstName
                    lastName
                }
                reviews {
                    profileId
                }
                rating
                score
            }
            applyings {
                id
                status {
                    id
                    label
                }
                profile {
                    id
                    name
                    photoPath
                    user {
                        firstName
                        lastName
                    }
                }
            }
            appliers {
                id
                name
                photoPath
                user {
                    firstName
                    lastName
                }
            }
            reviews {
                profileId
                score
                description
                session {
                    meetingDate
                    id
                }
            }
            rating
            tutorials {
                id
                description
                recordingId
                source
                session {
                    id
                    meetingDate
                    duration
                    attendeesCount
                    cost
                    status {
                        id
                    }
                }
                thumbnail
                createdAt
            }
            thematic {
                id
                label
            }
            material {
                country {
                    id
                    label
                }
                grade {
                    id
                    label
                }
                subject {
                    id
                    label
                }
                category {
                    id
                    label
                }
                subCategory {
                    id
                    label
                }
            }
            mcqPassed @include(if: $authenticated)
            hasMcq
        }
    }
`;

export const TutoringsByDateQuery = gql`
    query tutoringsByDate($date: DateTime!) {
        tutoringsByDate(date: $date) {
            id
            title
            description
            posterProfileId
            photoPath
            videoPath
            documentPath
            language {
                label
            }
            hashTagIds
            hashTags {
                id
                label
            }
            type {
                id
                label
            }
            mcqQuestions {
                question
                answers {
                    label
                }
            }
            createdAt
            updatedAt
            deletedAt
            posterProfile {
                name
                photoPath
                user {
                    firstName
                    lastName
                }
            }
        }
    }
`;

export const TutoringReviewQuery = gql`
    query tutoring($id: Float!) {
        tutoring(id: $id) {
            id
            title
            description
            reviews {
                profileId
                score
                description
                session {
                    meetingDate
                    id
                }
                profile {
                    id
                    name
                    photoPath
                    user {
                        firstName
                        lastName
                    }
                }
                createdAt
            }
            rating
        }
    }
`;

export const IsAllowedToPostQuery = gql`
    query isAllowedToPost {
        isAllowedToPost
    }
`;

export const ListTutoringsIdsQuery = gql`
    query tutoringsIds($after: DateTime, $pageSize: Float!) {
        tutoringsIds(after: $after, pageSize: $pageSize) {
            id
            updatedAt
        }
    }
`;

export const ListTutoringsQuery = gql`
    query tutorings {
        tutorings {
            id
            title
            description
            posterProfileId
            photoPath
            videoPath
            documentPath
            language {
                label
            }
            hashTagIds
            hashTags {
                id
                label
            }
            type {
                label
            }
            mcqQuestions {
                question
                answers {
                    label
                }
            }
            createdAt
            updatedAt
            deletedAt
            posterProfile {
                name
                photoPath
                user {
                    firstName
                    lastName
                }
            }
            bookings {
                id
                status {
                    id
                    label
                }
                profile {
                    id
                    name
                }
            }
            bookers {
                id
                name
                photoPath
                user {
                    firstName
                    lastName
                }
            }
            reviews {
                profileId
                score
                description
                session {
                    meetingDate
                    id
                }
            }
            rating
        }
    }
`;

export const SearchTutoringsQuery = gql`
    query searchTutorings($filter: TutoringSearchInput!) {
        searchTutorings(filter: $filter) {
            id
            updatedAt
        }
    }
`;

export const TutoringBasicInfoQuery = gql`
    query tutoringBasicInfo($id: Float!, $authenticated: Boolean! = true) {
        tutoringBasicInfo(id: $id) {
            id
            title
            description
            bookings {
                id
                status {
                    id
                }
                profile {
                    id
                }
            }
            sessions {
                id
                duration
                cost
                status {
                    id
                    label
                }
                bookings {
                    id
                    status {
                        id
                        label
                    }
                    profile {
                        id
                        name
                    }
                }
                applyings {
                    id
                    profile {
                        id
                    }
                    status {
                        id
                    }
                }
                totalBudgetSum
                attendeesCount
                meetingDate
                tutee1ProfileId
                tutee2ProfileId
                tutee3ProfileId
                tutor1ProfileId
                tutor2ProfileId
                tutor3ProfileId
            }
            posterProfileId
            photoPath
            videoPath
            documentPath
            type {
                id
                label
            }
            createdAt
            updatedAt
            posterProfile {
                id
                name
                photoPath
                user {
                    firstName
                    lastName
                }
                reviews {
                    profileId
                }
                rating
                score
            }
            tutorProfile {
                id
                name
                photoPath
                user {
                    firstName
                    lastName
                }
                reviews {
                    profileId
                }
                rating
                score
            }
            reviews {
                profileId
            }
            thematic {
                id
                label
            }
            material {
                country {
                    id
                    label
                }
                grade {
                    id
                    label
                }
                subject {
                    id
                    label
                }
                category {
                    id
                    label
                }
                subCategory {
                    id
                    label
                }
            }
            applyings {
                id
                status {
                    id
                    label
                }
                profile {
                    id
                    name
                    photoPath
                    user {
                        firstName
                        lastName
                    }
                }
            }
            appliers {
                id
                name
                photoPath
                user {
                    firstName
                    lastName
                }
            }
            rating
            mcqPassed @include(if: $authenticated)
            hasMcq
        }
    }
`;
