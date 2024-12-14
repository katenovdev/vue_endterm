<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()

const goToAuth = () => {
  router.push('/auth')
}
</script>

<template>
  <div class="get-job-container">
    <header class="header">
      <div class="outer-container">
        <div class="logo">
          <img src="/assets/HeadHunter_logo.png" alt="hh Logo" />
        </div>
      </div>
      <div class="outer2-container">
        <button @click="goToAuth" class="login-btn">Войти</button>
      </div>
    </header>

    <div class="main-section">
      <h1>Найди работу мечты</h1>
      <div class="search-bar">
        <input
          type="text"
          placeholder="Профессия, должность или компания"
          class="search-input"
        />
        <button class="search-btn">Найти</button>
      </div>
      <button class="find-employee-btn">Я ищу сотрудника</button>
   </div>
   
    <footer class="footer">
      <div class="outer-container">
        <div class="statistics">
          <span>
            <strong>5 858 226</strong><br />
            резюме
          </span>
          <span>
            <strong>49 022</strong><br />
            вакансии
          </span>
          <span>
            <strong>117 013</strong><br />
            компаний
          </span>
        </div>
      </div>
      <div class="apps">
        <!-- <img src="/path/to/appstore-logo.png" alt="App Store" />
        <img src="/path/to/googleplay-logo.png" alt="Google Play" />
        <img src="/path/to/appgallery-logo.png" alt="App Gallery" /> -->
      </div>
    </footer>
  </div>
</template>

<style scoped>
.outer-container {
  display: flex;
  width: 100%;
  justify-content: space-between; /* Ensures logo and button are spaced */
  padding-left: 100px
}
.outer2-container {
  padding-right: 100px
}
.get-job-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  min-height: 100vh;
  background: url('/assets/background.jpg') no-repeat center center;
  background-size: cover;
  padding: 30;
}

.header {
  display: flex;
  justify-content: space-between; /* Aligns logo to the left and button to the right */
  align-items: center; /* Vertically center the logo and button */
  width: 100%;
  margin-bottom: 100px;
  position: relative;
  padding-top: 50px
}

.logo img {
  height: 50px;
  width: 100%;
}

.login-btn {
  padding: 15px 30px; /* Increased padding for a larger button */
  border-radius: 25px; /* Adjust if needed for roundness */
  background-color: transparent;
  border: 2px solid #007BFF; /* Blue border */
  color: #007BFF; /* Blue text color */
  cursor: pointer;
  font-size: 18px; /* Increased font size */
  font-weight: bold; /* Make the font bold */
}

.login-btn:hover {
  background-color: #007BFF; /* Blue background on hover */
  color: white; /* White text on hover */
}




.help-btn {
  background-color: transparent;
  border: none;
  color: #000;
  font-size: 18px;
  cursor: pointer;
}

.main-section {
  text-align: center;
  color: #fff;
}

.main-section h1 {
  font-size: 48px;
  margin-bottom: 20px;
}

.search-bar {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 20px; /* Spacing between the heading and search bar */
}

.search-input {
  width: 400px;
  padding: 10px;
  font-size: 18px;
  border-radius: 10px; /* Adjust this value for more or less roundness */
  border: 1px solid #ccc; /* Optional: gives it a border */
}

.search-btn {
  margin-left: 10px; /* Space between the input field and search button */
  padding: 10px 20px;
  border-radius: 20px; /* Rounds the search button */
  background-color: #007bff; /* Change background color */
  color: white;
  border: none;
  cursor: pointer;
}

.search-btn:hover {
  background-color: #0056b3; /* Darker blue on hover */
}

.find-employee-btn {
  margin-top: 20px; /* Space between search button and "Я ищу сотрудника" */
  padding: 10px 20px;
  border-radius: 20px; /* Rounded corners for "Я ищу сотрудника" button */
  background-color: #28a745; /* Green button */
  color: white;
  border: none;
  cursor: pointer;
}

.find-employee-btn:hover {
  background-color: #218838; /* Darker green on hover */
}

.find-employee-btn {
  background: none;
  border: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
}

.footer {
  display: flex;
  justify-content: space-between;
  width: 100%;
  /* padding: 20px; */
  color: #fff;
}

.statistics {
  display: flex;
  justify-content: center; /* Center the statistics horizontally */
  gap: 40px; /* Increased gap for better spacing */
  padding: 20px;
  background-color: #f8f9fa; /* Subtle background to differentiate section */
  border-radius: 10px;
}

.statistics span {
  font-size: 18px;
  text-align: center; /* Center text in each block */
  color: #333; /* Darker text for better readability */
}

.statistics strong {
  display: block;
  font-size: 24px;
  font-weight: bold;
  color: #007bff; /* Use a primary color for emphasis */
}

@media (max-width: 768px) {
  /* Responsive: Stack the statistics vertically on smaller screens */
  .statistics {
    flex-direction: column;
    gap: 15px;
  }
}

.apps img {
  width: 120px;
  margin-left: 10px;
}
</style>
