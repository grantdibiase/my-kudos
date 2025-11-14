import { useState } from 'react';
import './KudosForm.css';

// Define what props this component accepts
interface KudosFormProps {
  onSubmit: (kudos: {
    recipient: string; // recipient name as a string
    message: string; // kudos message as a string
    giver: string; // kudos giver as a string
    type: 'kudos' | 'feedback'; // type (kudos or feedback)
    date: string; // date as a string
  }) => void;
}

export function KudosForm({ onSubmit }: KudosFormProps) {
  return (
    <form className = "kudos-form">
        <h2 className = "form-title">✨ Give Kudos</h2>
        <div className="form-group">
            <label htmlFor="recipient">To:</label>
            <input
            id="recipient"
            type="text"
            placeholder="Enter recipient name"
            required
            />
        </div>
        <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          placeholder="Write your kudos or feedback..."
          rows={4}
          required
        />
      </div>
       <div className="form-group">
        <label htmlFor="giver">From:</label>
        <input
          id="giver"
          type="text"
          placeholder="Your name"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="type">Type:</label>
        <select id="type">
          <option value="kudos">Kudos</option>
          <option value="feedback">Feedback</option>
        </select>
      </div>
      <button type="submit" className="submit-button">
        Send Kudos 🎉
      </button>
    </form>
  );
}