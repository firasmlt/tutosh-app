import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Tutoring } from "../../models/tutoring.model";
import { Session } from "../../models/session.model";
import { useQuery, gql } from "@apollo/client";
import TutoringComponent from "../../components/TutoringComponent";
import { ListTutoringsIdsQuery } from "../../graphql/queries/tutoring/TutoringQueries";

const HomeScreen = () => {
    const { loading, error, data } = useQuery(ListTutoringsIdsQuery, {
        variables: {
            pageSize: 10,
        },
    });
    if (error) console.log(error);
    const tutoringIds: Tutoring[] = data?.tutoringsIds;
    console.log(tutoringIds);
    // if (data)
    return (
        <ScrollView>
            {tutoringIds &&
                tutoringIds.map((tutoring) => (
                    <TutoringComponent tutoringId={tutoring?.id || 0} />
                ))}
            {loading && <Text>loading...</Text>}
        </ScrollView>
    );
};

export default HomeScreen;
