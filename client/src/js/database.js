import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// method that accepts some content and adds it to the database
export const putDb = async (content) => {

 // Create connection to db 
 const contactDb = await openDB('jate', 1);
  
 // Create transaction and specify the db / privileges.
 const tx = contactDb.transaction('jate', 'readwrite');

 // Open object store
 const store = tx.objectStore('jate');

 // insert content into store
 const request = store.put({ id: 1, value: content });

 // Get confirmation of request.
 const result = await request;
 console.log('🚀 - data saved to the database', result);
};


// method that gets all the content from the database
export const getDb = async () => {
  console.log('GET from the database');

  // Create connection to db
  const contactDb = await openDB('jate', 1);

  // Create transaction & specify db privileges
  const tx = contactDb.transaction('jate', 'readonly');

  // Open object store
  const store = tx.objectStore('jate');

  // get all data in the database
  const request = store.getAll();

  // Get confirmation of request
  const result = await request;
  console.log('result.value', result);
  return result?.value;
};

initdb();
