
# Student Directory Viewer

## Laboratory 6 - IT313 Mobile Programming

### Description

Student Directory Viewer is a React Native application
developed using Expo.

The application allows an academic adviser to view
student profiles, search for students, and flag students
who need academic advising.

### Features

- Displays five student profiles
- Shows student names and year levels
- Loads profile pictures from remote URLs
- Searches students by name
- Supports case-insensitive filtering
- Displays students in a scrollable list
- Allows flagging and unflagging students
- Changes button appearance when pressed

### Component Structure

#### StudentCard.js

Displays an individual student profile with a picture,
name, year level, and advising flag button.

#### StudentDirectory.js

Manages student records using useState.
It handles searching, filtering, and flag status updates.

#### App.js

Serves as the main entry point of the application.

### React Native Components Used

- View
- Text
- Image
- ScrollView
- TextInput
- Pressable
- StyleSheet

### How to Run

1. Install Node.js.
2. Open the project in Visual Studio Code.
3. Run `npm install`.
4. Run `npx expo start`.
5. Open the application using Expo Go or an Android emulator.

### Author

John Mark A. Melicio
IT313 - Mobile Programming
