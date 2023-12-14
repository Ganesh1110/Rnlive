import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
} from 'react-native';

const Dashboard = () => {
  const [userId, setUserId] = useState('');
  const [liveId, setLiveId] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    setUserId(String(Math.floor(Math.random() * 1000000)));
    setLiveId(String(Math.floor(Math.random() * 10000)));
  }, []);

  const navigation = useNavigation();

  const joinOrStart = isHost => {
    navigation.navigate(isHost ? 'HostPage' : 'AudiencePage', {
      userId,
      userName,
      liveId,
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={[styles.container]}>
        <Text style={styles.userId}>Your User Id: {userId}</Text>
        <Text style={[styles.liveId, styles.leftPadding]}>Live Id:</Text>
        <TextInput
          placeholder="Enter the live id. eg.1234"
          style={styles.input}
          onChangeText={text => setLiveId(text)}
          maxLength={4}
          value={liveId}
        />
        <Text style={[styles.liveId, styles.leftPadding]}>Username:</Text>
        <TextInput
          placeholder="Enter your username. eg.john"
          style={styles.input}
          onChangeText={text => setUserName(text)}
          value={userName}
        />
        <View style={[styles.buttonLine, styles.leftPadding]}>
          <Button
            disabled={liveId.length === 0}
            title="Start a live"
            onPress={() => {
              joinOrStart(true);
            }}
          />
        </View>
        <View style={styles.buttonSpacing} />
        <Button
          disabled={liveId.length === 0}
          title="watch live"
          onPress={() => {
            joinOrStart(false);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  buttonLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 42,
  },
  buttonSpacing: {
    width: 13,
  },
  input: {
    height: 42,
    width: 300,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#000',
    marginLeft: 20,
    marginTop: 10,
    color: '#000',
  },
  userId: {
    fontSize: 14,
    color: 'red',
    marginBottom: 10,
    paddingBottom: 12,
    paddingTop: 12,
    paddingLeft: 12,
  },
  liveId: {
    fontSize: 14,
    color: 'red',
    paddingLeft: 12,
  },
});
