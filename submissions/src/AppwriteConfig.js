import { Client,Databases,Account} from 'appwrite';

export const PROJECT_ID = '64e99e2a6f083eaca059';
export const DATABASE_ID = '68fa661300109ed84bec';
export const COLLECTION_ID = '64e9a3bc9f2757d56258';

const client = new Client();


client
.setEndpoint('https://nyc.cloud.appwrite.io/v1')
.setProject('68f77d8a0024aa209079');

export const databases= new Databases(client);
export const account = new Account(client);


export default client;
