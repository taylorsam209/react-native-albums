
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import AlbumDetails from "./AlbumDetails";

class AlbumList extends Component {
    constructor(){
        super();
        this.state = {
            albums: []
        }
    }

    componentWillMount() {
        fetch('http://rallycoding.herokuapp.com/api/music_albums')
        .then(response => response.json())
        .then(response => {
            this.setState({albums: response })
        });
    }

    renderAlbumList() {
        return this.state.albums.map((item)=> {
           return( <AlbumDetails
                key={item.title} 
                record={item}      
            />
           )
        })
    }

    render() {
        console.log(this.state.albums)
    return (
        <View>
            {this.renderAlbumList()}
        </View>
        );
    }
};

export default AlbumList;