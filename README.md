# my-first-project-with-frontity

npm install - to add project dependences;
npx frontity dev - to started project on localhost:3000

This project was bootstrapped with [Frontity](https://frontity.org/).

#### Table of Contents

- [Launch a development server](#launch-a-development-server)
- [Create your custom theme](#create-your-custom-theme)
- [Create a production-ready build](#create-a-production-ready-build)
- [Deploy](#deploy)

### Launch a development server

```
npx frontity dev
```

The site will automatically reload if you make changes inside the `packages` folder. You will see the build errors in the console.

> Have a look at our [Quick Start Guide](https://docs.frontity.org/getting-started/quick-start-guide)

### Create your custom theme

```
npx frontity create-package your-custom-theme
```

Use the command `npx frontity create-package` to create a new package that can be set in your `frontity.settings.js` as your theme.

> Have a look at our blog post [How to Create a React WordPress Theme in 30 Minutes](https://frontity.org/blog/how-to-create-a-react-theme-in-30-minutes/)

### Create a production-ready build

```
npx frontity build
```

Builds the app for production to the `build` folder.

This will create a `/build` folder with a `server.js` (a [serverless function](https://vercel.com/docs/v2/serverless-functions/introduction)) file and a `/static` folder with all your javascript files and other assets.

Your app is ready to be deployed.

> Get more info about [Frontity's architecture](https://docs.frontity.org/architecture)

### Deploy

With the files generated in the _build_ you can deploy your project.

#### As a node app

Use `npx frontity serve` to run it like a normal Node app.

This command generates (and runs) a small web server that uses the generated `server.js` and `/static` to serve your content.

#### As a serverless service

Upload your `static` folder to a CDN and your `server.js` file to a serverless service, like Vercel or Netlify.

> Get more info about [how to deploy](https://docs.frontity.org/deployment) a Frontity project
