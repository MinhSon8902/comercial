import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
import { auth, db } from './firebase'
import { doc, setDoc } from 'firebase/firestore'

const userApi = {
  async register(data) {
    const { name, email, password } = data
    try {
      const userRegister = await createUserWithEmailAndPassword(auth, email, password).catch(
        (err) => console.log(err)
      )
      const newUser = await userRegister.user
      await setDoc(doc(db, 'carts', newUser.uid), {
        items: [],
      })
      await updateProfile(auth.currentUser, { displayName: name }).catch((err) => console.log(err))
      return newUser
    } catch (err) {
      console.log(err)
    }
  },
  async login(data) {
    const { email, password } = data
    try {
      const userLogin = await signInWithEmailAndPassword(auth, email, password)
      return userLogin.user
    } catch (err) {
      throw new Error(err)
    }
  },
}
export default userApi
