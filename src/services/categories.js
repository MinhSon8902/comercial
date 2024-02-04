import { doc, getDoc } from 'firebase/firestore'
import { db } from './firebase'

export async function getCategories() {
  try {
    const docRef = doc(db, 'categories', 'ljTHyhDHtgGLc79oETEf')
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      return docSnap.data().dataCategory
    } else {
      throw new Error('There was an error loading categories...')
    }
  } catch (error) {
    console.error('Error loading categories:', error)
    throw error
  }
}
