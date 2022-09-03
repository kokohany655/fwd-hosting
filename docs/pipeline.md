### CircleCi Pipeline Process

## Pipeline process

- **CircleCi Orbs**

  - node: circleci/node@5.0.0
  - aws-cli: circleci/aws-cli@2.0.0
  - eb: circleci/aws-elastic-beanstalk@2.0.1

- **CircleCi Environment Variables**

  [CI-Photo](https://github.com/kokohany655/fwd-hosting/blob/main/screenshots/ci.env.png)

- **CircleCi Pipeline steps**

  [CI-Build-Steps_photo](https://github.com/kokohany655/fwd-hosting/blob/main/screenshots/ci.build1.png)

## Pipeline process

  [CI-PipLine-Photo](https://github.com/kokohany655/fwd-hosting/blob/main/screenshots/pipeline.png)

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
