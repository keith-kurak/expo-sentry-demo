# Expo Sentry Demo
A simple project demonstrating testing a Sentry connection on a development build

## Setting up Sentry keys
- Edit **app.json**, providing your Sentry account and project-specific keys
- Edit **App.js**, providing your own DSN

## Creating the development build
- Run `eas build --profile development --platform ios`
- Install the resulting binary on your simulator

## Running and testing
- Run `yarn start`
- Open the URL on your development build
- Try the test buttons
- Wait for events to show up in Sentry
