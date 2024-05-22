// crate array to store project data

const project = [
  {
    key: 1,
    title: "Portfolio WebPage",
    description:
      "This portfolio has been meticulously crafted using HTML, CSS, JavaScript, and jQuery, with a focus on enhancing the web page's visual appeal and user experience, ensuring an engaging and user-friendly interface",
    image: "./images/p-1.jpg",
    github: "https://github.com/Amaar015/Amaar_Portfolio_4",
  },
  {
    key: 2,
    title: "FiyGym WebPage",
    description:
      "FitGym is a frontend project created using React.js and CSS, designed to offer a high-quality user experience and user-friendly design.",
    image: "./images/p-6.jpg",
    github: "https://github.com/Amaar015/FitGym-Club-Starter",
  },
  {
    key: 3,
    title: "Social Media WebApp",
    description:
      "This social media frontend app, built with React.js and Material UI, features a user interface designed for displaying and adding posts along with various other functionalities.",
    image: "./images/p-9.png",
    github: "https://github.com/Amaar015/Social-media-web",
  },
  {
    key: 4,
    title: "Real-time Chat Application",
    description:
      "This portfolio has been meticulously crafted using HTML, CSS, JavaScript, and jQuery, with a focus on enhancing the web page's visual appeal and user experience, ensuring an engaging and user-friendly interface",
    image: "./images/p-8.png",
    github: "https://github.com/Amaar015/Amaar_Portfolio_4",
  },
  {
    key: 5,
    title: "Academia Online Education & learing",
    description:
      "This portfolio has been meticulously crafted using HTML, CSS, JavaScript, and jQuery, with a focus on enhancing the web page's visual appeal and user experience, ensuring an engaging and user-friendly interface",
    image: "./images/p-8.jpg",
    github: "https://github.com/Amaar015/Amaar_Portfolio_4",
  },
  {
    key: 6,
    title: "AClinic",
    description:
      "This portfolio has been meticulously crafted using HTML, CSS, JavaScript, and jQuery, with a focus on enhancing the web page's visual appeal and user experience, ensuring an engaging and user-friendly interface",
    image: "./images/p-6.png",
    github: "https://github.com/Amaar015/Amaar_Portfolio_4",
  },
  {
    key: 7,
    title: "Tour and Travel",
    description:
      "This portfolio has been meticulously crafted using HTML, CSS, JavaScript, and jQuery, with a focus on enhancing the web page's visual appeal and user experience, ensuring an engaging and user-friendly interface",
    image: "./images/p-11.jpg",
    github: "https://github.com/Amaar015/Amaar_Portfolio_4",
  },
  {
    key: 8,
    title: "Abdullah Store",
    description:
      "This portfolio has been meticulously crafted using HTML, CSS, JavaScript, and jQuery, with a focus on enhancing the web page's visual appeal and user experience, ensuring an engaging and user-friendly interface",
    image: "./images/p-5.png",
    github: "https://github.com/Amaar015/Amaar_Portfolio_4",
  },
  {
    key: 9,
    title: "Gold WebPage",
    description:
      "This portfolio has been meticulously crafted using HTML, CSS, JavaScript, and jQuery, with a focus on enhancing the web page's visual appeal and user experience, ensuring an engaging and user-friendly interface",
    image: "./images/p-4.jpg",
    github: "https://github.com/Amaar015/Amaar_Portfolio_4",
  },
];

const portfolioContainer = document.getElementById("portfolio-container");

project.forEach((project) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
  <div class="image">
  <img src="${project.image}" alt="${project.title}">
</div>
<div class="content">
 <a href="#">
   <span class="title">
     ${project.title}
   </span>
 </a>

 <p class="desc">
    ${project.description}

 </p>
<br><br>
 <a class="btn"   href="${project.github}">
        Source Code
   <span aria-hidden="true">
     →
   </span>
 </a>
</div>
  `;
  portfolioContainer.appendChild(card);
});
