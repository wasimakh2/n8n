import {
	ICredentialType,
	NodePropertyTypes,
} from 'n8n-workflow';

export class PushcutApi implements ICredentialType {
	name = 'pushcutApi';
	displayName = 'Pushcut API';
	documentationUrl = 'pushcut';
	properties = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string' as NodePropertyTypes,
			default: '',
		},
	];
}
