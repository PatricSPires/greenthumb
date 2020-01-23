<h1 align="center">

![greenthumb logo](src/assets/logo/logo-greenthumb.svg)

</h1>

Hey there, nice to meet you. This application is a _plant simulator_. Here the user can choose an ideal plant, based on three questions:

- _Sun quantity_
- _Watering frequency_
- _Presence of animals_

After reply to these questions, we gonna show a list based on questions. Our client can choose one plant and made a solicitation using a form in the last step.

<h1>
Running the project
</h1>

```
git clone https://github.com/PatricSPires/greenthumb
cd greenthumb
yarn install
yarn start
```

<h1>
Basic project structure
</h1>

```
src/
├─ App.js
├─ assets/
│   ├─ icons/
│   ├─ illustrations/
│   └─ logo/
├─ components/
├─ index.js
├─ pages/
├─ routes.js
├─ services/
├─ shared/
├─ store/
│   ├─ index.js
│   └─ modules/
│       ├─ rootReducer.js
└─ styles/
```

<h1>
About project definitions
</h1>

To build this project I choose to use the [reactJs](https://reactjs.org/) because is a lib that I start to study a few months ago. To style the application I choose to use [styled-components](https://styled-components.com/) because it is an easy way to create components, change style based on props and a lot of stuff, this is a powerful lib. I was afraid when my coworkers talk about the [Redux](https://redux.js.org/), so, to handle the state here I start to use and it's opened my mind and I see that wasn't a big monster. I used to the [feature branch](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow) to organize the git and used to the [Karma Commit](https://karma-runner.github.io/4.0/dev/git-commit-msg.html) to semantics commits, you can check some Pull requests and commits here I describe what I do and try explaining to the _team_ about de feature:

- Pull requests:

  - [Creating Routes](https://github.com/PatricSPires/greenthumb/pull/1)
  - [Redux implementation](https://github.com/PatricSPires/greenthumb/pull/47)

- Commits:
  - [Using karma](https://github.com/PatricSPires/greenthumb/commits/master)

<h1>
Author
</h1>

[Patric Pires](https://twitter.com/PiresPatric)

### Here you can see the deploy status

[![Netlify Status](https://api.netlify.com/api/v1/badges/62d6ac72-42f4-4732-ade0-13c8f567b6ab/deploy-status)](https://app.netlify.com/sites/angry-pasteur-399ade/deploys)
