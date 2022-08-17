import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Backend101DoctestJulia } from './backend-101-doctest-julia';

describe('The Backend101DoctestJulia stack', () => {
	it('matches the snapshot', () => {
		const app = new App();
		const stack = new Backend101DoctestJulia(app, 'Backend101DoctestJulia', {
			stack: 'deploy',
			stage: 'TEST',
		});
		const template = Template.fromStack(stack);
		expect(template.toJSON()).toMatchSnapshot();
	});
});
