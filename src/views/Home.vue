<template>
  <div class="container-fluid">
    <section>
      <div class="row">
        <div class="col-lg-7">
          <h2 class="text-banner">Website Layanan Custom Woodworking<br>Sesuai Keinginan Anda</h2>
          <p class="text-body">Kami membantu anda untuk menjangkau<br> woodworker handal di seluruh Indonesia</p>
          <p></p>
          <v-btn color="success" class="btn-banner">Selengkapnya</v-btn>
        </div>
        <div class="col-lg-5">
          <v-img class="img-vector" src="../assets/vector.png"></v-img>
        </div>
      </div>
    </section>

    <section>
      <div class="row justify-center mt-16 mb-16">
         <h2>Our Portfolios</h2>
      </div>
      <div class="row justify-center">
        <div class="col-lg-3">
          <v-card>
            <v-img src="../assets/image/product1.jpeg" height="300px" width="300px"></v-img>
            <v-card-title>Meja Custom</v-card-title>
            <v-card-subtitle>
              <v-list>Jenis Kayu : Kayu Jati</v-list>
              <v-list>Kategori : Meja</v-list>
            </v-card-subtitle>
          </v-card>
        </div>
        <div class="col-lg-3">
          <v-card>
            <v-img src="../assets/image/product2.jpeg" height="300px" width="300px"></v-img>
            <v-card-title>Dipan Custom</v-card-title>
             <v-card-subtitle>
              <v-list>Jenis Kayu : Kayu Mahoni</v-list>
              <v-list>Kategori : Dipan</v-list>
            </v-card-subtitle>
          </v-card>
        </div>
        <div class="col-lg-3">
          <v-card>
            <v-img src="../assets/image/product3.jpeg" height="300px" width="300px"></v-img>
            <v-card-title>Kursi Custom</v-card-title>
             <v-card-subtitle>
              <v-list>Jenis Kayu : Kayu Trembesi</v-list>
              <v-list>Kategori : Kursi</v-list>
            </v-card-subtitle>
          </v-card>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    
  }
}
</script>

<style lang="scss">
  .text-banner {
    position: absolute;
    left: 80px;
    top: 200px;
    color: #FB643A;
    font-size: 34px;
  }
  .text-body {
    position: absolute;
    left: 80px;
    top: 320px;
    color: #FB643A;
    font-size: 20px;
  }
  .btn-banner {
    position: absolute;
    left: 80px;
    top: 400px;
  }
  .img-vector {
    position: relative;
    margin-top: 140px;
  }
</style>