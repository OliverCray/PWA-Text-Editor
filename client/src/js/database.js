import { openDB } from 'idb'

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists')
        return
      }
      db.createObjectStore('jate', { keyPath: 'id' })
      console.log('jate database created')
    },
  })

// PUT to the database
export const putDb = async (content) => {
  console.log('PUT to the database')

  const db = await openDB('jate', 1)

  const tx = db.transaction('jate', 'readwrite')

  const store = tx.objectStore('jate')

  const request = store.put({ content, id: 1 })

  await request

  console.log('jate database updated')
}

// GET from the database
export const getDb = async () => {
  console.log('GET from the database')

  const db = await openDB('jate', 1)

  const tx = db.transaction('jate', 'readonly')

  const store = tx.objectStore('jate')

  const request = store.get(1)

  const result = await request

  console.log('jate database retrieved')

  return result
}

initdb()
