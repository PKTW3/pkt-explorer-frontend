# PacketCrypt explorer

This is a block explorer designed for the PacketCrypt [PKTC] blockchain.
PacketCrypt is based on bitcoin code so this explorer can be used with bitcoin but will need
some minor development in order to disable PKTC-specific information.

## Installation
In order to run this block explorer, you will need to first install the API server
which you will find at https://github.com/PKTW3/pkt-explorer-backend

Once the backend API server has been setup, you can compile this block explorer using
the following:

    REACT_APP_BACKEND_URL=https://path.to.your.server npm run build

Afterword a production version of the app will be placed in the `build` folder.
If you do not set the `REACT_APP_BACKEND_URL` environment variable, your explorer
will not function

This is a reactjs app so you can read about deployment on react's
[deployment documentation](https://facebook.github.io/create-react-app/docs/deployment).

## Development
For development, you will want to run the app in development mode using:

    REACT_APP_BACKEND_URL=https://path.to.your.server npm run start

Once the server is running, you can open [http://localhost:3000](http://localhost:3000)
to view it in the browser.

Whenever you edit a page in the app, your browser will reload after you save it.

## Storybook
This application is developed using [StorybookJS](https://storybook.js.org/).
If you want to use the Storybook server, you can do so by running:

    npm run storybook

And then you can open [http://localhost:9009](http://localhost:9009) to see the
storybook for this app.
