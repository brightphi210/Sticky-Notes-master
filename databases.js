import { databases } from "./appwrite";
import { ID } from "appwrite";

const DATABASE__ID = '666c82e70025ee5c58a5'
const COLLECTION_NOTES_ID = '666c830a0002765648b2'

const collections = [
    {
        'name':'notes',
        'id':COLLECTION_NOTES_ID
    }
]

const db = {};


collections.forEach(collection => {
    db[collection.name] = {
            create: async (payload, id = ID.unique()) => {
                return await databases.createDocument(
                    DATABASE__ID,
                    collection.id,
                    id,
                    payload
                );
            },
            update: async (id, payload) => {
                return await databases.updateDocument(
                    DATABASE__ID,
                    collection.id,
                    id,
                    payload
                );
            },
            delete: async (id) => {
                return await databases.deleteDocument(
                    DATABASE__ID,
                    collection.id,
                    id
                );
            },
            get: async (id) => {
                return await databases.getDocument(
                    DATABASE__ID,
                    collection.id,
                    id
                );
            },
            list: async (queries) => {
                return await databases.listDocuments(
                    DATABASE__ID,
                    collection.id,
                    queries
                );
            }
    }
})

export {db};

