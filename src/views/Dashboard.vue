<template>
<v-app>
  <v-row>
  <v-card
    height="630"
    width="256"
  >
    <v-navigation-drawer permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title mt-4">
            Woodworker Dashboard
          </v-list-item-title>
          <v-list-item-subtitle>
            {{woodworker.displayName}}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>

  <v-col class="col-lg-4">
  <v-card>
    <v-col>
      <v-form>
        <v-card-title class="justify-center">
          <h3>Upload Produk</h3>
        </v-card-title>
        <v-card-text>
          <v-text-field label="Nama Produk" v-model="product.name"></v-text-field>
          <v-select
          :items="wood"
          label="Jenis Kayu"
          v-model="product.type"
          ></v-select>
          <v-select
          :items="category"
          v-model="product.category"
          label="Kategori"
          ></v-select>
          <v-file-input
            label="Input gambar"
            prepend-icon="mdi-camera"
            accept="image/*"
            v-model="product.file"
          ></v-file-input>
        </v-card-text>
        <v-card-actions class="justify-center">
          <div v-if="product.name === '' || product.type === '' || product.category === '' || product.file === null">
            <v-btn color="success" :disabled="isDisabled" @click="handleStore">Submit</v-btn>
          </div>
          <div v-else>
            <v-btn @click="handleStore" color="success">Submit</v-btn>
          </div>
        </v-card-actions>     
      </v-form>
    </v-col>                
  </v-card>
  </v-col>
  <v-col>
      <v-card>
        <v-list-item v-for="data in products" :key="data.id">
          <v-list-item-content>
            <v-list-item-title>
              <v-img v-if="data.image"
              :src="data.image">
              </v-img>
            </v-list-item-title>
              <v-list-item-title>Nama Produk : {{data.name}}</v-list-item-title>
              <v-list-item-title>Jenis Kayu : {{data.type}}</v-list-item-title>
              <v-list-item-title>Kategori : {{data.category}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-card>
  </v-col>   
  </v-row>
</v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import { auth, productsCollection, storage } from '../firebase'

  export default {
    data: () => ({
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' }
        ],
        product: {
          name: '',
          type: '',
          category: '',
          file: null
        },
        wood: ['Kayu Jati', 'Kayu Mahoni', 'Kayu Trembesi'],
        category: ['Kursi', 'Meja', 'Lemari'],
        products: []
    }),
    computed: {
      ...mapGetters({
        woodworker: "woodworker"
      }),
      isDisabled: function() {
        return !this.data
      }
    },
    methods: {
      handleStore() {
        this.$store.dispatch('uploadProduct', {
          productName : this.product.name,
          productType : this.product.type,
          productCategory : this.product.category,
          productFile : this.product.file
        })
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
    },
    async mounted() {
      await this.getProducts()
    }
  }
</script>