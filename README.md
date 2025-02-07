# 🚀 Aggregated Public Information

This project uses [Strapi](https://strapi.io) as a CMS backend.

## Dev Environment Setup

### Local Development 🏠

If you'd like to develop locally, follow these steps. Otherwise, you can skip to Gitpod development below.

#### 1. Clone this repository

```sh
git clone git@github.com:distributeaid/aggregated-public-information.git
cd aggregated-public-information
```

#### 2. Install nvm 🔧

To develop or contribute to this project, you will need Node.js. We recommend you install [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating) to manage Node.js versions.

#### 3. Install yarn 🧶

To build dependencies, you should also have yarn installed on your system.
If it is not yet installed, you can run:

```sh
npm install --global corepack
corepack enable
hash -r
```

### Gitpod Development ☁️

If you'd prefer to develop on the cloud, Gitpod provides a fully automated development environment for this Strapi project, and the development environment is set up with just a single click. If you'd prefer to use Gitpod, follow these steps to get started:

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/distributeaid/aggregated-public-information)

1. Click the `Open in Gitpod` button above. Note: you'll need to have an account on [Gitpod](https://gitpod.io/login/) before proceeding with the next steps (this requires a GitHub account).
2. Click the `Continue` button.
3. Relax, a development environment is being set up for you in the first terminal.

> [!NOTE]
> To access your workspace later, go to [Gitpod Workspaces](https://gitpod.io/workspaces). Pin the `aggregated-public-information` workspace to prevent auto-deletion after 14 days by clicking the three dots next to the workspace name and selecting "Pin".

## Get Up and Running 🚀

Once you have a development environment, you can set up your local site!

### 1. Set Up Local Private Keys 🔑

```sh
./setup.bash
```

### 2. Install your packages

```sh
yarn
```

### 3. Start Your Server 🌐

In one terminal, run `develop`, this will live rebuild your application as you make changes:

```sh
yarn develop
```

If you want autoreload disabled, you can just run `build` and then `start`:

```sh
yarn build
yarn start
```

### 4. Run Tests ✅

```sh
yarn test
```

> [!NOTE]
> This depends on your application being built! If you don't run `yarn develop` then you must run `yarn build` after each change before running `yarn test`. We have provided `yarn test:with-build` as a convenience in this case.

### 5. View the Site and Set Up an Admin User 👤

If you are running locally, your site should be available in the output after you run `yarn develop` - you will see something like

```sh
One more thing...
Create your first administrator 💻 by going to the administration panel at:
┌─────────────────────────────┐
│ http://localhost:1337/admin │
└─────────────────────────────┘
```

To access the your deployment on Gitpod, you will have to confirm the message that pops up telling you where to access it. You can see your open ports with

```sh
gp ports list
```

## Contributing

Before creating a pull request, test a final time and check for errors:

```sh
yarn check:all
```

We provide a couple of scripts to automatically fix linting and formatting issues, where possible:

```sh
yarn lint:fix
yarn format:fix
```

### Gitpod

If gitpod give you an error like the following:

```bash
Pushing to https://github.com/distributeaid/aggregated-public-information.git
remote: Permission to distributeaid/aggregated-public-information.git denied to [my github username].
fatal: unable to access 'https://github.com/distributeaid/aggregated-public-information.git/': The requested URL returned error: 403
```

You may not have the GitHub providers configured correctly. You can fix this by going to [the integrations page in Gitpod's integrations settings](https://gitpod.io/user/integrations) and ensuring Github and its permissions are enabled.

![Settings page](docs/gitlab-settings-page.jpg)

![Correct settings](docs/gitlab-correct-settings.jpg)

At this point, Gitpod will open GitHub to complete the integration. Once you've done that, you should be able to push to the repository.

## Learn more 📚

### Distribute Aid 🌍

- [Distribute Aid home](https://distributeaid.org/) - see what we're about and how to get in touch
- [DA Github home](https://github.com/distributeaid) - an overview of our projects
- [DA Project page](https://github.com/orgs/distributeaid/projects) - see where to jump in!

### Strapi

- Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.
- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

### ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.
