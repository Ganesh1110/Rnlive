import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ZegoUIKitPrebuiltLiveStreaming, {
  HOST_DEFAULT_CONFIG,
} from '@zegocloud/zego-uikit-prebuilt-live-streaming-rn';
import {useNavigation, useRoute} from '@react-navigation/native';

const HostScreen = () => {
  const routes = useRoute();
  const navigation = useNavigation();
  const {userId, userName, liveId} = routes.params;
  const appId = 1983959749;
  const appSigned =
    '63c1d63210d20f62f5a70ca672c058905b4150424f77839e1e69a83335282b4f';
  return (
    <View style={styles.container}>
      <ZegoUIKitPrebuiltLiveStreaming
        appID={appId}
        appSign={appSigned}
        userID={userId}
        userName={userName}
        liveID={liveId}
        config={{
          ...HOST_DEFAULT_CONFIG,
          onLeaveLiveStreaming: () => {
            navigation.navigate('Home');
          },
        }}
      />
    </View>
  );
};

export default HostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
