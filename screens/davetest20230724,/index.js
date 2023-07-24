import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, View, TextInput, Button } from "react-native";

const ProfileEditScreen = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.formGroup}>
          <TextInput style={styles.input} placeholder="First Name" />
        </View>
        <View style={styles.formGroup}>
          <TextInput style={styles.input} placeholder="Last Name" />
        </View>
        <View style={styles.formGroup}>
          <TextInput style={styles.input} placeholder="Email" />
        </View>
        <View style={styles.formGroup}>
          <TextInput style={styles.input} placeholder="Phone Number" />
        </View>
        <View style={styles.formGroup}>
          <Button title="Save" onPress={() => {// Save profile changes
        }} />
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  container: {
    backgroundColor: "#f0f0f1",
    padding: 10,
    flexGrow: 1
  },
  formGroup: {
    marginBottom: 10
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10
  }
});
export default ProfileEditScreen;