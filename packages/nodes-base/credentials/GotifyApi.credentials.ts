import {
	ICredentialType,
	NodePropertyTypes,
} from 'n8n-workflow';

export class GotifyApi implements ICredentialType {
	name = 'gotifyApi';
	displayName = 'Gotify API';
	documentationUrl = 'gotify';
	properties = [
		{
			displayName: 'App API Token',
			name: 'appApiToken',
			type: 'string' as NodePropertyTypes,
			default: '',
			description: '(Optional) Needed for message creation.',
		},
		{
			displayName: 'Client API Token',
			name: 'clientApiToken',
			type: 'string' as NodePropertyTypes,
			default: '',
			description: '(Optional) Needed for everything (delete, getAll) but message creation.',
		},
		{
			displayName: 'URL',
			name: 'url',
			type: 'string' as NodePropertyTypes,
			default: '',
			description: 'The URL of the Gotify host.',
		},
	];
}
