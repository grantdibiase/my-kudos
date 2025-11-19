// src/App.tsx
import { useState } from 'react';
import { KudosCard } from './components/KudosCard';
import { KudosForm } from './components/KudosForm';
import './components/KudosCard.css';
import './App.css';

export type Kudos = {
  recipient: string;
  message: string;
  giver: string;
  type: "kudos" | "feedback";
  date: string;
};

function App() {
  // 1️⃣ Move sampleKudos into STATE
  const [kudosList, setKudosList] = useState<Kudos[]>([
    {
      recipient: "Jane Smith",
      message: "Amazing work on the authentication refactor! Your attention to detail made the whole team more productive.",
      giver: "John Doe",
      type: "kudos",
      date: "Mar 22, 2024"
    },
    {
      recipient: "Bob Wilson",
      message: "Could improve code documentation in the API module.",
      giver: "Alice Chen",
      type: "feedback",
      date: "Mar 20, 2024"
    }
  ]);

  // 2️⃣ Append the new kudos into state
  const handleAddKudos = (newKudos: Kudos) => {
    setKudosList(prev => [...prev, newKudos]);  // ← THIS updates UI
  };

  return (
    <div className="app-container">
      <div className="app-content">
        <h1 className="app-title">🎉 Kudos Board</h1>

        {/* 3️⃣ Form receives callback */}
        <KudosForm onSubmit={handleAddKudos} />

        <div className="cards-grid">
          {kudosList.map((kudos, index) => (
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
