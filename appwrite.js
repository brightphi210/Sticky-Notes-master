import { Client, Databases } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('666c81b8002c139d5d6b')

const databases = new Databases(client)

export {client, databases};