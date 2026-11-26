
import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
} from 'react-native';

// Displays an individual student profile
export default function StudentCard({
  id,
  name,
  year,
  photoUrl,
  flagged,
  onToggleFlag,
}) {
  return (
    <View style={styles.card}>

      {/* Student Profile Picture */}
      <Image
        source={{ uri: photoUrl }}
        style={styles.photo}
      />

      {/* Student Information */}
      <View style={styles.info}>
        <Text style={styles.name}>
          {name}
        </Text>

        <Text style={styles.year}>
          {year}
        </Text>
      </View>

      {/* Flag for Advising Button */}
      <Pressable
        onPress={() => onToggleFlag(id)}
        style={({ pressed }) => [
          styles.flagButton,
          flagged && styles.flaggedButton,
          pressed &&
            (flagged
              ? styles.flaggedPressed
              : styles.pressedButton),
        ]}
      >
        <Text
          style={[
            styles.flagText,
            flagged && styles.flaggedText,
          ]}
        >
          {flagged ? '★ Flagged' : '☆ Flag'}
        </Text>
      </Pressable>

    </View>
  );
}

// Student Card Styles
const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#faf9fd',
    borderWidth: 1,
    borderColor: '#e5e1ef',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 8,
  },

  photo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: '#ddd9ee',
  },

  info: {
    flex: 1,
    justifyContent: 'center',
  },

  name: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#252345',
  },

  year: {
    fontSize: 11,
    color: '#8883a0',
    marginTop: 3,
  },

  flagButton: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#9790bd',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },

  flaggedButton: {
    backgroundColor: '#d89400',
    borderColor: '#d89400',
  },

  pressedButton: {
    backgroundColor: '#c4bde5',
  },

  flaggedPressed: {
    backgroundColor: '#aa7200',
    borderColor: '#aa7200',
  },

  flagText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#5d5689',
  },

  flaggedText: {
    color: '#ffffff',
  },
});
