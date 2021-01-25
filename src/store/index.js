import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import { auth, woodworkersCollection, productsCollection, storage } from '../firebase'

Vue.use(Vuex)

const authModule = {
  state: {
    woodworker: {
      loggedIn: false
    }
  },
  getters: {
    woodworker (state) {
      return state.woodworker
    }
  },
  mutations: {
    setLoggedIn (state, value) {
      state.woodworker.loggedIn = value;
    },
    setWoodworkerProfile (state, payload) {
      state.woodworker = payload
    }
  },
  actions: {
    async getProfile({commit}, woodworker) {
      const userProfile = await woodworkersCollection.doc(woodworker.uid).get()
      commit('setWoodworkerProfile', userProfile.data())
    },
    async register({dispatch}, payload) {
      try {
        const { user } = await auth.createUserWithEmailAndPassword(payload.email, payload.password)
        await woodworkersCollection.doc(user.uid).set({
          displayName: payload.fullname
        })
        dispatch("getProfile", user)
      } catch (err) {
        console.log(err)
      }
    },
    async login({dispatch}, payload) {
      try {
          const { user } = await auth.signInWithEmailAndPassword(payload.email, payload.password)
          dispatch("getProfile", user)
          router.push('/dashboard')
      } catch(err) {
          console.log(err)
      }
    },
    async logout() {
      try {
        auth.signOut();
        router.push({ name: "Home" })
      } catch (error) {
        console.error(error)
      }
    }
  } 
}

const productModule = {
  actions: {
    async uploadProduct(store, payload) {
      try {
        const fileRef = 'upload/products/' + payload.productFile.name
        await storage.ref(fileRef).put(this.file)
        let data = {
          userId : auth.currentUser.uid,
          productName : payload.productName,
          productType : payload.productType,
          productCategory : payload.productCategory,
          productImage : fileRef
        }
        await productsCollection.add(data)
        alert('Product berhasil diupload!')
      } catch (err) {
        console.log(err)
      }
    },
    async getProducts() {
      try {
        const querySnapshot = await productsCollection.where('userId', '==', auth.currentUser.uid).get()
        querySnapshot.forEach( async (doc) => {
          let img = ''
          if (doc.data().image) {
            img = await storage.ref().child(doc.data().image).getDownloadURL()
          }
          this.products.push({
            id: doc.id,
            name: doc.data().productName,
            type: doc.data().productType,
            category: doc.data().productCategory,
            image: img,
            img: doc.data().productImage
          })
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}

export default new Vuex.Store({
  modules: {
    authModule: authModule,
    productModule: productModule
  }
})