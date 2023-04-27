import React from "react";

const articleContent = {
  articles: [
    {
      id: 1,
      title: "Usefulness of the tongue scraper",
      description:
        "Tongue scraping is a simple and effective way to maintain oral hygiene. By removing bacteria and debris from the tongue, it can reduce bad breath, improve taste perception, and prevent oral health problems. Tongue scraping also promotes overall health by reducing the risk of infections and promoting good oral health, which is linked to overall health.",
      image: require("../assets/img/blog/tongue-scrapper.jpg"),
      content: `The tongue scraper has been used for centuries in various cultures to maintain oral hygiene. It is a simple tool that is used to clean the surface of the tongue, removing bacteria and debris that can cause bad breath and other oral health problems. Despite its long history of use, many people are still unaware of the many benefits of using a tongue scraper. In this article, we will explore the different virtues and benefits of tongue scraping.

      What is a tongue scraper?
      
      A tongue scraper is a small, handheld tool that is designed to clean the surface of the tongue. It is typically made of plastic or metal and features a long, flat surface that is gently dragged across the tongue. Tongue scrapers come in different shapes and sizes, but they all serve the same purpose: to remove bacteria, food particles, and other debris from the tongue.
      
      The benefits of tongue scraping
      
      1. Reduces bad breath
      
      Bad breath, also known as halitosis, is a common problem that can be caused by bacteria buildup on the tongue. Tongue scraping is an effective way to remove this buildup and reduce bad breath. In fact, studies have shown that tongue scraping can reduce halitosis by up to 75%.
      
      2. Improves oral hygiene
      
      Tongue scraping is an important part of oral hygiene. It helps to remove bacteria and debris from the tongue, which can prevent cavities, gum disease, and other oral health problems. Regular tongue scraping can also help to keep your teeth clean and white.
      
      3. Enhances taste perception
      
      The tongue is responsible for detecting different flavors, and a buildup of bacteria and debris on the tongue can dull your taste perception. By removing this buildup with a tongue scraper, you can enhance your ability to taste different flavors.
      
      4. Reduces the risk of infections
      
      Bacteria on the tongue can also lead to infections in the mouth, such as thrush and oral herpes. Tongue scraping can reduce the risk of these infections by removing the bacteria before it has a chance to cause an infection.
      
      5. Promotes overall health
      
      Oral health is linked to overall health, and tongue scraping can help to promote both. By removing bacteria and debris from the tongue, you can reduce the risk of oral health problems that can lead to more serious health issues.
      
      How to use a tongue scraper
      
      Using a tongue scraper is easy, and it only takes a few minutes a day. Here's how to do it:
      
      1. Start by rinsing your mouth with water.
      
      2. Hold the tongue scraper with both hands and place it at the back of your tongue.
      
      3. Gently drag the tongue scraper forward along your tongue, applying slight pressure.
      
      4. Rinse the tongue scraper with water after each pass.
      
      5. Repeat this process until you have scraped your entire tongue.
      
      6. Rinse your mouth with water again to remove any remaining debris.
      
      7. Clean the tongue scraper with warm water and soap after each use.
      
      It's important to use a gentle touch when using a tongue scraper. Applying too much pressure can cause irritation and even bleeding. If you experience any discomfort, stop using the tongue scraper and consult with your dentist.
      
      Conclusion
      
      Tongue scraping is a simple and effective way to improve oral hygiene and promote overall health. By removing bacteria and debris from the tongue, you can reduce bad breath, improve taste perception, and reduce the risk of oral health problems. If you haven't tried using a tongue scraper yet, give it a try and see the benefits for yourself. Your mouth (and your taste buds) will thank you!`,
    },
    {
      id: 2,
      title: "Titre de l'article 2",
      description: "Contenu de l'article 2",
      image: "https://example.com/image2.jpg",
    },
    {
      id: 3,
      title: "Titre de l'article 3",
      description: "Contenu de l'article 3",
      image: "https://example.com/image2.jpg",
    },
    {
      id: 4,
      title: "Titre de l'article 4",
      description: "Contenu de l'article 4",
      image: "https://example.com/image2.jpg",
    },
    {
      id: 5,
      title: "Titre de l'article 5",
      description: "Contenu de l'article 5",
      image: "https://example.com/image2.jpg",
    },
  ],
};

const Article = ({ id }) => {
  const article = articleContent.articles.find((article) => article.id === id);

  return (
    <div>
      <h2>{article.title}</h2>
      <img src={article.image} alt={article.title} />
      <p>{article.description}</p>
    </div>
  );
};

export default Article;
