<!-- <template>
    <div class="container">
      <div class="row">
        <div class="col">
          <input type="text" placeholder="Search product by name" class="form-control">
        </div>
        <div class="col">
          <button class="btn btn-success">Sorting by price</button>
        </div>
      </div>
      <div class="row" v-if="products">
        <Card v-for="product in products" :key="product.id">
          <template #cardHeader>
            <h4 class="card-title">{{ product.prod_name }}</h4>
          </template>
          <template #cardBody>
            <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
              Quantity: {{ product.quantity }}
            </p>
            <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
              Amount: R{{ product.price }}
            </p>
            <router-link :to="{name: 'product', params: {id: product.id}}">View More</router-link>
          </template>
        </Card>
      </div>
      <div class="row" v-else>
        <p class="lead">Loading...</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductsView',
    components: {
        Card
    },
    computed:{
        products(){
            return this.$store.state.products
        }
    },
    mounted() {
        this.$store.dispatch('fetchProducts')
    }
}
</script>

<style scoped>

</style>