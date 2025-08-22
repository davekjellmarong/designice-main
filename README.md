# twoday | Avento's Sanity starter

This starter uses [Next.js][nextjs] for the frontend and [Sanity][sanity-homepage] to handle its content. It does the nitty gritty base configuration to start building av new website. Inspiration for this starter is taken from [Blog starter][blog-starter]

## Table of content

- [twoday | Avento's Sanity starter](#twoday--aventos-sanity-starter)
  - [Table of content](#table-of-content)
  - [Configuration](#configuration)
    - [Clone the repository](#clone-the-repository)
    - [Set up a new Sanity project](#set-up-a-new-sanity-project)
    - [Create environment variables](#create-environment-variables)
    - [Install dependencies and run the project](#install-dependencies-and-run-the-project)
    - [Git local repository](#git-local-repository)
    - [Create Github repository](#create-github-repository)
    - [Hosting on Vercel](#hosting-on-vercel)
  - [Important files and folders](#important-files-and-folders)
  - [How to](#how-to)
    - [Create a new page module in Sanity Studio](#create-a-new-page-module-in-sanity-studio)
    - [Connect the frontend to a Studio module](#connect-the-frontend-to-a-studio-module)
  - [Need help - channels](#need-help---channels)

## Configuration

### Clone the repository

Clone the repository to your local machine and remove the git history

### Set up a new Sanity project

Create a new Sanity project from a terminal at the root of the project:

Then run the following command to create a new Sanity project:

```bash
npm create sanity@latest
```

Follow the instructions and create a new project.

1. Project name: Input the name of the new project. Select organization to attach project to: Choose twoday Avento, if this fails for some reason, the project will be created under your own space and can be moved later on in [Sanity Manage][sanity-manage].
2. Use the default dataset configuration (This will be production, hit Enter or Y followed by Enter)
3. Project output path: (At this stage you can cancel this process)

### Create environment variables

Copy the `.env.local.example` to a new file `.env.local` file and fill in the values. You can find the values in [Sanity Manage][sanity-manage]. Project ID is visible in the top of the project page. Token is generated in the API section of the project page. Dataset is normally just `production`.  
Add SANITY_API_READ_TOKEN and copy the token in to the `.env` file. SANITY_API_READ_TOKEN is used for the preview mode.

### Install dependencies and run the project

```bash
npm install
npm run dev
```

### Git local repository

```bash
git init
git add .
git commit 'Initial commit'
```

### Create Github repository

Log in to twoday github account.

Add a new repository.

Use the commands from Github to connect the local repository to the remote repository.

### Hosting on Vercel

Log in to Vercel and select twoday account.
Select "Add new Project".
You will get a "Import Git Repository" option. Follow the steps.
Create the enviroment variables in Vercel. Same setup as your local `.env` file.

## Important files and folders

| File(s)                                     | Description                                              |
| ------------------------------------------- | -------------------------------------------------------- |
| `sanity.config.ts`                          |  Config file for Sanity Studio                           |
| `sanity.cli.ts`                             |  Config file for Sanity CLI                              |
| `/pages`                                    |  Where pages is defined                                  |
| `/pages/studio/[[...index]].tsx`            |  Where Sanity Studio is mounted                          |
| `/pages/api/revalidate.ts`                  |  Serverless route for triggering ISR                     |
| `/pages/api/preview.ts`                     |  Serverless route for triggering Preview mode            |
| `/schemas`                                  |  Where Sanity Studio gets its content types from         |
| `/plugins`                                  |  Where the advanced Sanity Studio customization is setup |
| `/lib/sanity.api.ts`,`/lib/sanity.image.ts` | Configuration for the Sanity Content Lake client         |
| `/lib/sanity.preview.ts`                    | Configuration for the live Preview Mode                  |
| `/lib/sanity.queries.ts`                    | Main queries/groq is defined here                        |
| `/components`                               | Where components and modules is defined                  |

## How to

### Create a new page module in Sanity Studio

- Add a new file in `/schemas/modules` with the name of the module. Example `hero.ts`
- Register the module in `/schemas/modules/index.ts`
- If you want it as a standard module for the frontpage and pages add it to `contants.ts` in array `STANDARD_MODULES`

### Connect the frontend to a Studio module

- See the example modules in `/components/modules` with the name of the module. Example `hero.ts`
- Create a groq query in `/lib/queries/modules` for the module
- Add it to the array in `/lib/queries/modules/index.ts`
- For typescript support create an interface in `/lib/types.ts`
- Add a new file in `/components/modules` with the name of the module. Example `Hero.tsx`
- Add the new module to `/components/sections/ModuleBuilder.tsx` in the same way as the other modules

## Need help - channels

- [GitHub Discussions for Next.js][vercel-github]
- [Sanity's GitHub Discussions][sanity-github]
- [Sanity's Community Slack][sanity-community]

[nextjs]: https://github.com/vercel/next.js
[sanity-homepage]: https://www.sanity.io
[sanity-manage]: https://www.sanity.io/manage
[blog-starter]: https://www.sanity.io/templates/blog-with-built-in-content-editing
[vercel-github]: https://github.com/vercel/next.js/discussions
[sanity-github]: https://github.com/sanity-io/sanity/discussions
[sanity-community]: https://slack.sanity.io/
