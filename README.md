## Setup

- This project includes API and UI both in same repo.
- Install server dependencies by running `yarn` in root folder and runnig migrations `npx knex migrate:latest`.
- Install UI dependencies for: `cd client` and `yarn`
- Start server from root directory: `yarn server`
- Start React app: `cd client` and `yarn start`

## API

- There are 3 apis provided by server. Explore `index.js` to see which APIs are provided.
- UI consumes these APIs and attempts to implement Login, Register and view jokes functionality.

## Goal

After recent rewrite, we are getting complaints that app is not working for users. And you are hired to get the app working again. Your job is to determine how the app is broken and to fix it.
