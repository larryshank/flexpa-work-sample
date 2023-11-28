# Flexpa Work Sample

This is a simple application that interfaces with Flexpa Link and uses the Flexpa API to get and display an Explanation of Benefit resource from a payer with test credentials.

## Instructions

### Setup .env with API keys

Rename `template.env` in both the server and client directory to `.env`. Then add the required values for your Flexpa test mode API keys. In the client `,env`, make sure `VITE_SERVER_URL=http://localhost:9000` is set to be able to talk to the backend.

### Run the backend

Run the backend server by running the following in the terminal:

```
cd server

nvm use

npm install

npm run build

npm run start
```

### Run the frontend

From the project directory, run the following in a separate terminal:

```
cd client

npm install

npm run dev
```

### Test the application

Open [http://localhost:3000](http://localhost:3000) in your browser. Follow the onscreen instructions to link your health plan with Flexpa Link. You'll need to use test credentials for your health plan of choice, which can be found [here](https://www.flexpa.com/docs/getting-started/test-mode#test-credentials). Once you have linked your plan, you should see cards appear giving you a summary of your claims.
