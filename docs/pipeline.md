### CircleCi Pipeline Process

## Pipeline process

- **CircleCi Orbs**

  - node: circleci/node@5.0.0
  - aws-cli: circleci/aws-cli@2.0.0
  - eb: circleci/aws-elastic-beanstalk@2.0.1

- **CircleCi Environment Variables**

  <img src="https://raw.githubusercontent.com/mmm-066550/fwd-aws-hostingFullstackApp/main/screenshots/circleci_env.png" width="1024">

- **CircleCi Pipeline steps**

  <img src="https://raw.githubusercontent.com/mmm-066550/fwd-aws-hostingFullstackApp/main/screenshots/circleci_build.png" width="1024">

## Pipeline process

<img src="https://raw.githubusercontent.com/mmm-066550/fwd-aws-hostingFullstackApp/main/screenshots/pipeline.png" width="1024">

Once you commit and push your code to the application GitHub repository (in the main/master branch) which is linked to the CircleCI platform, CircleCI reads the `.circleci/config.yml` file which tells the service what actions has to be done.

In the case of Udagram application:
there are 2 approaches server-side approach (back-end) and client-side approach (front-end) to be run by CircleCI.

- **Frontend**:

- Runs the `install` script to install all the required dependencies.
- Runs the `build` script to tranpile typescript to javascript and build the app.
- Then uses AWS CLI to upload assets to S3 by running `deploy` script.

- **Server**:

- Runs the `install` script to install all the required dependencies.
- Runs the `build` script to tranpile typescript to javascript and build the app.
- Runs the `deploy` script to exports all environment variables from CircleCI configuration to a `.env` file.Then uses AWS CLI to upload archive to Elastic beanstalk Node.js server.
