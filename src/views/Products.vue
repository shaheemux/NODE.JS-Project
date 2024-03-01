
   <template>
       <div class="row">
        <div v-for="product in products" :key="product.id" class="card col-3" style="width: 18rem;">
            <img :src="product.prod_url" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">{{ product.prod_name }}</h5>
              <p class="card-text">
                Quantity: {{ product.quantity }}<br>
                : {{ product.price }}<br>
                Description: {{ product.description }}<br>
              </p>
              <router-link :to="{name: 'product', params: {id: product.id}}">View More</router-link>
            </div>
          </div>
    </div>
    
   </template>
   
   <script>
   export default {
     computed: {
       products() {
         return this.$store.state.products;
       },
     },
     mounted() {
       this.$store.dispatch('fetchProducts');
     },
   };
   </script>
  
   <style scoped>
  
   </style>