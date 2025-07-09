import { ICredentialType, INodeProperties } from 'n8n-workflow';

export class OutgrowApi implements ICredentialType {
	name = 'outgrowApi'; // 👈 Must match what you use in the node
	displayName = 'Outgrow API';
	documentationUrl = 'https://docs.n8n.io/integrations/creating-nodes/build/credentials/';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'Your Outgrow API key',
		},
	];

}
