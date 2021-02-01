import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { auth } from '../firebase'

const CustomListItem = ({ id, chatName, enterChat }) => {
    return (
        <View>
            <ListItem>
                <Avatar 
                    rounded
                    source={{
                        uri: "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png", 
                    }}/>
                <ListItem.Content>
                    <ListItem.Title style={{ fontWeight: "800" }} >
                        Youtube Chat
                    </ListItem.Title>

                    <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                        This is a test subtitle This is a test subtitle This is a test subtitle 
                    </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
            
        </View>
    )
}

export default CustomListItem;

const styles = StyleSheet.create({})
