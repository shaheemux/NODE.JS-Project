<template>
    <div>
      <div class="container">
        <div class="row">
          <div class="col d-flex justify-content-center flex-md-row flex-column gap-3">
            <button class="btn btn-primary me-2" @click="showUsers">
              Users
            </button>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <button class="btn btn-success ms-2" @click="toggleSorting">
              {{ sorting ? 'Disable Sorting' : 'Enable Sorting' }}
            </button>
          </div>
          <div class="col">
            <button class="btn btn-success me-2" data-bs-toggle="modal" data-bs-target="#addNewProduct">
              Add New Product
            </button>
          </div>
        </div>
        <div class="modal fade" id="addNewProduct" tabindex="-1" aria-labelledby="addNewProductLabel" aria-hidden="true">
          <!-- Modal content -->
        </div>
        <div class="row mt-3">
          <table class="table table-responsive">
            <thead>
              <tr>
                <th scope="col" @click="sort('name')">Name</th>
                <th scope="col">Image</th>
                <th scope="col" @click="sort('amount')">Amount</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, index) in sortedProducts" :key="index">
                <td>{{ product.name }}</td>
                <td><img :src="product.image" :alt="product.name" style="max-width: 50px; max-height: 50px;"></td>
                <td>R{{ product.amount }}</td>
                <td>
                  <button class="btn btn-light btn-sm" @click="editProduct(index)">Edit</button>
                  <button class="btn btn-danger btn-sm" @click="deleteProduct(index)">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        productsData: [
          { name: '', image: '', amount: 5 },
          { name: ' ', image: '', amount: 7 },
          { name: '  ', image: '', amount: 53 },
          { name: '  ', image: '', amount: 241 },
          { name: ' ', image: '', amount: 6 },
        ],
        sorting: false,
      };
    },
    computed: {
      sortedProducts() {
        return this.sorting ? [...this.productsData].sort((a, b) => a.name.localeCompare(b.name)) : this.productsData;
      },
    },
    methods: {
      toggleSorting() {
        this.sorting = !this.sorting;
      },
      editProduct(index) {
        const newName = prompt('Enter new name:');
        const newAmount = prompt('Enter new amount:');
        if (newName !== null && newAmount !== null) {
          this.$set(this.productsData, index, { ...this.productsData[index], name: newName, amount: parseFloat(newAmount) });
        }
      },
      deleteProduct(index) {
        const confirmDelete = confirm('Are you sure you want to delete this product?');
        if (confirmDelete) {
          this.productsData.splice(index, 1);
        }
      },
      sort(prop) {
        this.sorting = !this.sorting;
        this.productsData.sort((a, b) => {
          const aValue = prop === 'name' ? a[prop].toLowerCase() : a[prop];
          const bValue = prop === 'name' ? b[prop].toLowerCase() : b[prop];
          return this.sorting ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
        });
      },
      showUsers() {
        // Implement logic to show users
      },
    },
    mounted() {
      // Initial setup
      // You can fetch or set the initial product data here
      this.productsData = [
        { name: '', image: '', amount: 9 },
        { name: '', image: '', amount: 9 },
        { name: '', image: '', amount: 9 },
        { name: '', image: '', amount: 9 },
        { name: '', image: '', amount: 9 },
        // Add more products as needed
      ];
    },
  };
  </script>
  
  <style scoped>
  .container {
    padding: 20px;
  }
  .btn-success {
    background-color: #28A745 !important;
    color: #fff !important;
    margin: 1%;
    font-size: large;
  }
  .btn-primary {
    background-color: #007BFF !important;
    color: #fff !important;
  }
  .btn-danger {
    background-color: #DC3545 !important;
    color: #fff !important;
  }
  .product-image {
    max-width: 100px;
    max-height: 100px;
    border-radius: 10px;
  }
  table {
    background-color: rgba(255, 253, 253, 0.007);
    border-collapse: collapse;
    width: 100%;
  }
  th, td {
    border: 5px solid #9A9EA3;
    padding: 10px;
  }
  th {
    text-align: center;
    background-color: #F9F8FA;
    color: black;
    font-size: larger;
  }
  </style>
  