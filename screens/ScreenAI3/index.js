import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';

const ProfileScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.profileImage} />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.bio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo ac nunc tincidunt aliquet. Fusce auctor, nunc id aliquam tincidunt, nunc nunc lacinia nunc, id lacinia nunc nunc id nunc.</Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20
  }
});
export default ProfileScreen;