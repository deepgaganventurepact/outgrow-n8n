

import {
  ICredentialType,
  INodeProperties,
  ICredentialTestRequest,
} from 'n8n-workflow';

export class OutgrowApi implements ICredentialType {
  name = 'outgrowApi';
  displayName = 'Outgrow API';
  documentationUrl = 'https://docs.n8n.io/integrations/creating-nodes/build/credentials/';

  properties: INodeProperties[] = [
    {
      displayName: 'API Key',
      name: 'apiKey',
      type: 'string',
      typeOptions: {
        password: true,
      },
      default: '',
      required: true,
      description: 'Your Outgrow API key',
    },
  ];

  test: ICredentialTestRequest = {
    request: {
	  url: '={{"https://api-calc.outgrow.co/api/v1/get_cal/" + $credentials.apiKey}}',
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    },
  };
}
