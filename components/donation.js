
import React from 'react';

const DonationCard = ({ image, tag, title, description, raised, goal }) => {
  // Calculate the percentage of the goal achieved
  const progressPercentage = (raised / goal) * 100;

  return (
    <div className="border border-green-950 shadow-lg rounded-lg p-1 w-full md:w-1/3">
      {/* <img src={image} alt={title} className="w-full h-16 object-cover rounded-lg" /> */}
      <div className="text-green-600 font-bold mt-4">{tag}</div>
      <h3 className="text-xl font-semibold mt-2">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      
      {/* Progress Bar */}
      <div className="relative w-full bg-yellow-400 rounded-full h-4 mt-4">
        <div
          className="absolute top-0 left-0 h-full bg-green-800 rounded-full"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      {/* Donation Info */}
      <div className="flex justify-between mt-4">
        <p className="font-bold text-green-600">Ksh. {raised.toLocaleString()} Achieved</p>
        <p>Goal: Ksh. {goal.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default DonationCard;