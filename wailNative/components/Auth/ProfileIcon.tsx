import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useAuth } from '../../hooks/useAuth'; // Assuming you have a custom hook for authentication

const ProfileIcon: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.photoURL }} style={styles.profileIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default ProfileIcon;