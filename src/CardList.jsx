import React from "react";

const Card = ({ title, description, icon }) => (
  <div className=" rounded-xl shadow-md p-6 w-72 mt-4 flex flex-col items-center text-center  hover:shadow-xl transition">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const CardList = () => {
  const cards = [
    {
      title: "Investment Tips",
      description: "Learn how to grow your wealth with smart investments.",
      icon: "💰",
    },
    {
      title: "Budget Planning",
      description: "Master the art of managing monthly expenses effectively.",
      icon: "📊",
    },
    {
      title: "Tax Advice",
      description: "Stay updated with the latest tax-saving techniques.",
      icon: "🧾",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardList;
