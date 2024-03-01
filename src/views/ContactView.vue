<template>
    <div>
      <nav class="navbar fixed-top"></nav>
      <main id="oi">
        <section class="mb-1">
          <h2 class="h1-responsive font-weight-bold text-center my-4">Contact Us</h2>
          <p class="text-center w-responsive mx-auto mb-5">Please fill out the form below to contact us.</p>
          <div class="row">
            <div class="col-md-6 mb-md-0 mb-5">
              <form @submit.prevent="submitForm" class="container" id="form">
                <div class="mb-3">
                  <label for="Inputfirstname" class="form-label">First Name</label>
                  <input type="text" name="first_name" class="form-control" id="Inputfirstname" required>
                </div>
                <div class="mb-3">
                  <label for="Inputlastname" class="form-label">Last Name</label>
                  <input type="text" name="surname" class="form-control" id="Inputlastname" required>
                </div>
                <div class="mb-3">
                  <label for="InputEmail1" class="form-label">Email address</label>
                  <input type="email" name="email" class="form-control" id="InputEmail1" required>
                  <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                  <label id="message" for="exampleInputmessage" class="form-label">Comments / Questions</label>
                  <input type="text" name="message" class="form-control" id="exampleInputmessage" required>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
            </div>
            <div class="col-md-6 text-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.380871333916!2d18.46468787551112!3d-33.93133087320282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5d0712ac6519%3A0xf14e5c3d07208c27!2s30%20Cole%20St%2C%20Observatory%2C%20Cape%20Town%2C%207925!5e0!3m2!1sen!2sza!4v1709193056183!5m2!1sen!2sza"
                width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </section>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      submitForm() {
      },
    },
  };
  </script>
  
  <style scoped>
  .text-center{
    margin-top: 40px;
  }
  p {
    color: #fff;
    font-size: 22px;
    line-height: 1.6;
  }
  
  h2 {
    color: #fff;
    font-size: 36px;
    margin-bottom: 30px;
    margin-top: -3%;
    font-family: "Honk", system-ui !important;
    font-optical-sizing: auto !important;
    font-weight: 400 !important;
    font-style: normal !important;
  }
  
  label {
    font-weight: bold;
  }
  
 
  
  .form-text {
    color: #fff;
  }
  
  #exampleInputmessage {
    padding: 2.5%;
  }
  
  .row {
    background: #e7eaf6;
  }
  </style>
  