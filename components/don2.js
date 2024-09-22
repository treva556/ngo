

import React from 'react';
import DonationCard from './donation';

const DonationSection = () => {
  const donations = [
    {
        tag: 'Education',
        title: 'Support education for underprivileged children',
        description: 'Providing quality education to children in remote and underserved areas.',
        raised: 1500000,
        goal: 2000000,
      },
      {
        tag: 'Water',
        title: 'Clean water for rural communities',
        description: 'Building sustainable water sources to provide clean drinking water to rural areas.',
        raised: 2500000,
        goal: 3500000,
      },
      {
        tag: 'Employment',
        title: 'Creating job opportunities for local youth',
        description: 'Empowering youth by providing training and job opportunities in local industries.',
        raised: 1800000,
        goal: 3000000,
      },
    ];

  return (
    <div className="flex flex-col lg:flex-row md:flex-row justify-center gap-6">
      {donations.map((donation, index) => (
        <DonationCard
          key={index}
        //   image={donation.image}
          tag={donation.tag}
          title={donation.title}
          description={donation.description}
          raised={donation.raised}
          goal={donation.goal}
        />
      ))}
    </div>
  );
};

export default DonationSection;

