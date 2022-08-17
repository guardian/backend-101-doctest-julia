import 'source-map-support/register';
import { App } from 'aws-cdk-lib';
import { Backend101DoctestJulia } from '../lib/backend-101-doctest-julia';

const app = new App();
new Backend101DoctestJulia(app, 'Backend101DoctestJulia-CODE', {
	stack: 'deploy',
	stage: 'CODE',
});
