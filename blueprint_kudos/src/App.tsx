// src/App.tsx
import { useState } from 'react';
import { KudosCard } from './components/KudosCard';
import { KudosForm } from './components/KudosForm';  // ← Add this
import './components/KudosCard.css';
import './App.css';

function App() {
  const sampleKudos = [
     {
      recipient: "Jane Smith",
      message: "Amazing work on the authentication refactor! Your attention to detail made the whole team more productive.",
      giver: "John Doe",
      type: "kudos" as const,
      date: "Mar 22, 2024"
    },
    {
      recipient: "Bob Wilson",
      message: "Could improve code documentation in the API module.",
      giver: "Alice Chen",
      type: "feedback" as const,
      date: "Mar 20, 2024"
    }
  ];

  // Temporary function - we'll make this work properly later!
  const handleAddKudos = (kudos: any) => {
    console.log('New kudos submitted:', kudos);
  };

  return (
  <div className="app-container">
    <div className="app-content">
      <h1 className="app-title">🎉 Kudos Board</h1>
      
      {/* Add the form here! */}
      <KudosForm onSubmit={handleAddKudos} />
      
      <div className="cards-grid">
        {sampleKudos.map((kudos, index) => (
          <KudosCard
            key={index}
            recipient={kudos.recipient}
            message={kudos.message}
            giver={kudos.giver}
            type={kudos.type}
            date={kudos.date}
          />
        ))}
      </div>
    </div>
  </div>
);
}

export default App;