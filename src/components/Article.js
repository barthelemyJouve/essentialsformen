import React from "react";

const articleContent = {
  articles: [
    {
      id: 1,
      title: "Titre de l'article 1",
      content: "Contenu de l'article 1",
      image: "https://example.com/image1.jpg",
    },
    {
      id: 2,
      title: "Titre de l'article 2",
      content: "Contenu de l'article 2",
      image: "https://example.com/image2.jpg",
    },
    {
      id: 3,
      title: "Titre de l'article 3",
      content: "Contenu de l'article 3",
      image: "https://example.com/image2.jpg",
    },
    {
      id: 4,
      title: "Titre de l'article 4",
      content: "Contenu de l'article 4",
      image: "https://example.com/image2.jpg",
    },
    {
      id: 5,
      title: "Titre de l'article 5",
      content: "Contenu de l'article 5",
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
      <p>{article.content}</p>
    </div>
  );
};

export default Article;
