<template>
  <div>
    <h1>John Kirby Soliven</h1>
    <img src="/images/Profile.png" alt="Profile Photo" />
    <p>BSIT student from the Philippines at St. Dominic College of Asia.</p>

    <h2>About</h2>
    <p>Building greatness.</p>

    <h2>Skills</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>Git and GitHub</li>
    </ul>

    <h2>Contact</h2>
    <p>GitHub: <a href="https://github.com/SuTanMon">github.com/SuTanMon</a></p>
  </div>
</template>

<style>
/* Playfair Display font from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap');

/* The whole page: a thick red bar on top */
html {
  border-top: 16px solid #d62828;
}

/* One narrow column left aligned text */
body {
  max-width: 36rem;
  margin: 0 auto;
  padding: 2rem 1.25rem 4rem;
  background: #ffffff;
  color: #111111;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.15rem;
  line-height: 1.7;
}

/* Big name with a thick black line under */
h1 {
  font-size: 3rem;
  font-weight: 900;
  line-height: 1.1;
  margin: 0 0 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 6px solid #111111;
}

/* Section titles in red */
h2 {
  font-size: 1.6rem;
  font-weight: 700;
  color: #d62828;
  margin: 2.5rem 0 0.5rem;
}

/* Red bullet points */
li::marker {
  color: #d62828;
}

/* Links: red and bold black box when hover */
a {
  color: #d62828;
  font-weight: 700;
}
a:hover {
  background: #111111;
  color: #ffffff;
}

/* Profile photo: small, with a red border */
img {
  width: 9rem;
  height: 9rem;
  object-fit: cover;
  border: 4px solid #d62828;
  margin-bottom: 1rem;
}

</style>
