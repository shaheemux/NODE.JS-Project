<template>
  <div>
    <main class="container text-center mt-5 animate__animated animate__swing animate__backInDown">
      <div class="home-page">
        <div class="text">
          <span class="landingP rotate-3d bold p" data-char="#">WELCOME</span>
          <span class="landingP rotate-3d bold" data-char="#">TO</span>
          <span class="landingP rotate-3d bold" data-char="#"> SUNPOWER</span>
          <span class="landingP rotate-3d bold" data-char="#">INNOVATIONS. </span>
          <router-link to="/products">
            <img height="170px" width="170px" id="B"
              src="https://www.bing.com/th/id/OGC.b6076d6f0386031080765619009ee35f?pid=1.7&rurl=https%3a%2f%2fi.pinimg.com%2foriginals%2fb6%2f07%2f6d%2fb6076d6f0386031080765619009ee35f.gif&ehk=qztaC2g4k%2bv7FP2EnMDJp%2bfmSy4FR%2f4fo19L%2f5z5Lb4%3d"
              loading="lazy" alt="takesmeproductpage">
          </router-link>
         
        </div>
        <div class="mt-5">
          <p class="lead">
            "Where we're dedicated to providing innovative solutions for a sustainable future. Explore our range of
            cutting-edge products and services designed to help you save money and reduce your carbon footprint. Join us
            in our mission to create a cleaner, greener world for generations to come. Together, we can make a
            difference!".
          </p>
        </div>
      </div>
    </main>
  </div>
</template>

<style>
body {
   background-image: url('https://i.postimg.cc/9M738L0t/OIP-1.jpg');
 background-size:cover;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

header {
    background-color: #f9f9f9; /* Light Gray */
    padding: 20px;
    text-align: center;
}

h1 {
    color: #333; /* Dark Gray */
    margin-top: 0;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.content {
    padding: 20px;
    background-color: palevioletred; 
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

footer {
    background-color: #333; /* Dark Gray */
    color: #fff; /* White */
    padding: 10px 20px;
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 100%;
}

.text {
  color: #000000;
  padding: 40px;
  font-size: large;
}
#B {
  border-radius: 50%;
  margin-left: 65px;
}
.landingP {
  font-family: "Honk", system-ui;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings: "MORF" 15, "SHLN" 40;
  background-color: #a7bcb9;
  font-size: 2rem;
  margin-bottom: 3%;
  border-radius: 10%;
}
.rotate-3d {
  display: inline-block;
  transform-style: preserve-3d;
  transform: perspective(1000px) rotateY(10deg);
  transition: transform 0.2s;
}
.rotate-3d:hover {
  transform: perspective(1000px) rotateY(320deg);
}
.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}
.btn-primary:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}
.centered {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.home-page {
 background-color: #a7bcb9;
  width: 100%;
  height: 70vh;
  background-repeat: no-repeat;
}
</style>