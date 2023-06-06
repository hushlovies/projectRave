import * as React from 'react';
import { Text, View, StyleSheet, Button, FlatList, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Audio } from 'expo-av';

//import redux
// import {
//     startRecording,
//     stopRecording,
//     startPlayback,
//     stopPlayback,
// } from '../redux/Actions';

const RecordScreen = () => {
    const [recording, setRecording] = React.useState();

    async function startRecording() {
        try {
            console.log('Requesting permissions..');
            await Audio.requestPermissionsAsync();
            await Audio.setAudioModeAsync({
                allowsRecordingIOS: true,
                playsInSilentModeIOS: true,
            });

            console.log('Starting recording..');
            const { recording } = await Audio.Recording.createAsync(Audio.RecordingOptionsPresets.HIGH_QUALITY
            );
            setRecording(recording);
            console.log('Recording started');
        } catch (err) {
            console.error('Failed to start recording', err);
        }
    }

    async function stopRecording() {
        console.log('Stopping recording..');
        setRecording(undefined);
        await recording.stopAndUnloadAsync();
        await Audio.setAudioModeAsync({
            allowsRecordingIOS: false,
        });
        const uri = recording.getURI();

        //this is where we store the recording
        console.log('Recording stopped and stored at', uri);
        const { sound, status } = await recording.createNewLoadedsoundAsync();
        updateRecord.push({

        })
    }

    //functions to play record and stop record
    const playRecord = async (position) => {
        dispatch(startRecording({ position: position }));
    }
    const deleteRecord = async (position) => {
        dispatch(deleteRecording({ position: position }));
    }
    const handlePlaybackPress = async (recording) => {
        try {
            const soundObject = new Audio.Sound();
            await soundObject.loadAsync({ uri: recording.uri });
            await soundObject.playAsync();
        } catch (error) {
            console.log('Error playing recording', error);
        }
    };
    const renderRecordingItem = ({ item }) => (
        <View>
            <Text>Recording: {item.name}</Text>
            <Button
                title="Play"
                onPress={() => handlePlaybackPress(item)}
            />
        </View>
    );

    return (
        <SafeAreaView>
            <View style={styles.wrapper}>
                <Button
                    title={recording ? 'Stop Recording' : 'Start Recording'}
                    onPress={recording ? stopRecording : startRecording}
                />
                <FlatList
                    // data={recordings}
                    renderItem={renderRecordingItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },

});
export default RecordScreen