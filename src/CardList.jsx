import React from "react";

const Card = ({ title, description, icon, numbers, color }) => (
  <div className={`rounded-xl shadow-md p-6 w-72 mt-4 flex flex-col items-center text-center hover:shadow-xl transition ${color}`}>
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 capitalize">{title}</h3>
    <h3 className="text-xl text-green-800 font-semibold mb-2 capitalize">{numbers}</h3>
    <p className="text-sm">{description}</p>
  </div>
);

const CardList = () => {
  const cards = [
    {
      title: "AUM",
      description: "Understand Assets Under Management and how it reflects your financial advisor's credibility.",
      icon: "💰",
      color: "bg-yellow-100 text-yellow-800",
      numbers: "₹10 Cr",
    },
    {
      title: "Average returns",
      description: "Track and analyze your investment returns to make informed financial decisions.",
      icon: "📊",
      color: "bg-blue-100 text-blue-800",
      numbers: "12% p.a.",
    },
    {
      title: "Happy Clients",
      description: "Discover how personalized financial strategies lead to satisfied and loyal clients.",
      icon: "🧾",
      color: "bg-green-100 text-green-800",
      numbers: "150+",
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
