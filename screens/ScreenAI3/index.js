import React from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Card, Title, Paragraph } from "react-native-paper";

const ProfileScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <Avatar.Image source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} size={150} />
        <Card>
          <Card.Content>
            <Title style={styles.name}>John Doe</Title>
            <Paragraph style={styles.bio}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
              justo ac nunc tincidunt aliquet. Fusce auctor, nunc id aliquam
              tincidunt, nunc nunc lacinia nunc, id lacinia nunc nunc id nunc.
            </Paragraph>
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  profileContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10
  },
  bio: {
    fontSize: 16,
    textAlign: "center",
    marginHorizontal: 20
  }
});
export default ProfileScreen;