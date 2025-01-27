import models from '../models/index.js';
import db from '../config/connection.js';

export default async (modelName: "Question", collectionName: string) => {
  try {
    if (
      models[modelName]?.db?.db
    ) {
      const modelExists = await models[modelName].db.db.listCollections({
        name: collectionName,
      }).toArray();

      if (modelExists.length > 0) {
        await db.dropCollection(collectionName);
      }
    } else {
      throw new Error(`Database or model not properly initialized for ${modelName}`);
    }
  } catch (err) {
    console.error(`Error in dropping collection "${collectionName}":`, err);
    throw err;
  }
};
