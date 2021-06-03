import {
	ICredentialType,
	NodePropertyTypes,
} from 'n8n-workflow';

export class CircleCiApi implements ICredentialType {
	name = 'circleCiApi';
	displayName = 'CircleCI API';
	documentationUrl = 'circleCi';
	properties = [
		{
			displayName: 'Personal API Token',
			name: 'apiKey',
			type: 'string' as NodePropertyTypes,
			default: '',
		},
	];
}
