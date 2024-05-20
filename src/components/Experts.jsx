import { React, useState } from 'react';
import { expertsList } from './ExpertsList';
import ExpertCard from './ui/ExpertCard';
import Modal from './ui/Modal';

export default function Experts() {
  
  const [selectedExpert, setSelectedExpert] = useState(null);

  const handleExpertClick = (expert) => {
    setSelectedExpert(expert);
  };

  const handleCloseModal = () => {
    setSelectedExpert(null);
  };
  return (
    <div id="2" className="experts">
      <div className="experts-container container">
          <h2 className="section-title">
            Эксперты премии
          </h2>
          <div className="experts-list flex">
            {
              expertsList.map((expert) =>
                  <ExpertCard 
                    key={expert.id} 
                    expert={expert}
                    onClick={() => handleExpertClick(expert)}
                  />
              )
            }
          </div>
          {selectedExpert && (
          <Modal
            expert={selectedExpert}
            onCloseModal={handleCloseModal}
          />
        )}
      </div>
    </div>
  )
}
