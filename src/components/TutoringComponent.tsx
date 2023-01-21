import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { useQuery } from "@apollo/client";
import { TutoringBasicInfoQuery } from "../graphql/queries/tutoring/TutoringQueries";
import { Tutoring } from "../../models/tutoring.model";

interface TutoringProps {
    tutoringId: number;
}

export default function TutoringComponent(props: TutoringProps) {
    const { loading, error, data } = useQuery(TutoringBasicInfoQuery, {
        variables: { id: props.tutoringId },
    });
    if (error) {
        console.error(error);
        return (
            <View>
                <Text>we have some problems</Text>
            </View>
        );
    }
    if (loading)
        return (
            <View style={styles.container2}>
                <Text
                    style={{ textAlign: "center", backgroundColor: "#D3D3D3" }}
                >
                    Loading...
                </Text>
            </View>
        );
    const tutoring: Tutoring = data?.tutoringBasicInfo;
    let bookings = [];
    if (tutoring?.sessions?.length > 0) {
        bookings = tutoring.sessions[0].bookings;
    }
    // const sessions = tutoring?.sessions[0].bookings;
    return (
        <View style={styles.container}>
            <Text>Poster : {tutoring.posterProfile?.name}</Text>
            <Text style={{ textAlign: "center" }}>title: {tutoring.title}</Text>
            <Text style={{ textAlign: "center" }}>
                description: {tutoring.description}
            </Text>
            {tutoring?.photoPath != null ? (
                <Image
                    source={{
                        uri: tutoring.photoPath,
                    }}
                    style={{ width: 200, height: 200, marginHorizontal: 100 }}
                />
            ) : (
                <View
                    style={{
                        width: 200,
                        height: 200,
                        marginHorizontal: 100,
                        backgroundColor: "#d3d3d3",
                    }}
                >
                    <Text>no media found!</Text>
                </View>
            )}
            <View>
                <Text>
                    {" "}
                    {bookings.length} attendee{bookings.length > 1 ? "s" : ""}:
                </Text>
                {bookings?.map((booking) => (
                    <Text>{booking?.profile?.name}</Text>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        marginVertical: 10,
        textAlign: "center",
    },
    container2: {
        backgroundColor: "#D3D3D3",
        marginVertical: 10,
        textAlign: "center",
    },
});
