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
      message: "Amazing work on the authentication refactor! Your clean code and thorough testing saved us so much time.",
      giver: "John Doe",
      type: "kudos" as const,
      date: "Mar 22, 2024"
    },
    {
      recipient: "Mike Johnson", 
      message: "Thanks for staying late to help debug the payment integration. Your persistence really paid off!",
      giver: "Sarah Wilson",
      type: "kudos" as const,
      date: "Mar 21, 2024"
    },
    {
      recipient: "Alex Chen",
      message: "Great job presenting the technical architecture to stakeholders. You explained everything so clearly!",
      giver: "Emily Davis", 
      type: "feedback" as const,
      date: "Mar 20, 2024"
    }
  ];

  return (
    <div className="app-container">
      <div className="app-content">
        <h1 className="app-title">
          - Kudos Cards Demo -
        </h1>
        
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