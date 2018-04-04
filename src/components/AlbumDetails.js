import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";

const AlbumDetails = ({ record }) => {
    const { title, artist, thumbnail_image, image } = record;
    return (
        <Card>

            <CardSection>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={styles.headerContent}>
                    <Text style={styles.headerText}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image
                    style={styles.albumImage}
                    source={{ uri: image }} />
            </CardSection>

            <CardSection>
                <Button />
                </CardSection>
        </Card>
    )
};

const styles = {
    headerContent: {
        flexDirection: 'column',
        justifyContent: "space-around"
    },
    headerText: {
        fontSize: 17
    },
    image: {
        height: 50,
        width: 50
    },
    imageContainer: {
        margin: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    albumImage: {
        flex: 1,
        height: 300,
        width: null

    }
}

export default AlbumDetails;