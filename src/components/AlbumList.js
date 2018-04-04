import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetails from "./AlbumDetails";

class AlbumList extends Component {
    constructor() {
        super();
        this.state = {
            albums: []
        }
    }

    componentDidMount() {
        fetch('http://rallycoding.herokuapp.com/api/music_albums')
            .then(response => response.json())
            .then(response => {
                this.setState({ albums: response })
            });
    }

    renderAlbumList() {
        return this.state.albums.map((item) => {
            return (
                <AlbumDetails
                    key={item.title}
                    record={item}
                />
            )
        })
    }

    render() {
        console.log(this.state.albums)
        return (
            <ScrollView>
                {this.renderAlbumList()}
            </ScrollView>
        );
    }
};

export default AlbumList;