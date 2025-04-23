import { useState, useEffect } from "react";
import './App.css';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';


function App(){
  const [mood, setMood] = useState("🙂");
  const [log, setLog] = useState([]);
  const [bounceIndex, setBounceIndex] = useState(null);
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0]; // YYYY-MM-DD format
  });
  

  const moods = ['😀', '😐', '😢', '😡', '😴'];

    // ⬇️ Load mood log from localStorage when app starts
    useEffect(() => {
      const savedLog = localStorage.getItem('mood-log');
      if (savedLog) {
        setLog(JSON.parse(savedLog));
      }
    }, []);
  
    // ⬇️ Save mood log to localStorage every time it changes
    useEffect(() => {
      localStorage.setItem('mood-log', JSON.stringify(log));
    }, [log]);

  const handleMoodSelect = (selectedMood) => {
    setMood(selectedMood);
  };

  const saveMood = () => {
    const newEntry = { mood, date: selectedDate };
    setLog([...log, newEntry]);
  };

  // ⬇️ Count each mood to show in summary
  const moodCounts = moods.map(m => ({
    emoji: m,
    count: log.filter(entry => entry.mood === m).length,
  }));

  return (
    <div className="container">
      <h1>🌈 Daily Mood Tracker</h1>
      <p>How are you feeling today?</p>

      <div className="emoji-buttons">
      {moods.map((m,index) => (
        <button 
        key={index} 
        onClick={() => {
          handleMoodSelect(m);   
          setBounceIndex(index);
          setTimeout(() => setBounceIndex(null), 400); // remove bounce after animation
      }}
       className={"emoji-btn ${bounceIndex === index ? 'bounce' : ''}"}>
          {m}
        </button>
      ))}
      </div>

      <label>
        📅 Pick a date:
      <input
      type="date"
      value={selectedDate}
      onChange={(e) => setSelectedDate(e.target.value)}
      className="date-input"
      />
      </label>


      <p>Selected Mood: <span className="selected">{mood}</span></p>
      <button onClick={saveMood} className="save-btn">Save Mood</button>

      <h2>📝 Mood log</h2>
      <ul className="log-list">
        {log.map((entry,index) => (
          <li key = {index}>
            <span className="log-emoji">{entry.mood}</span> - <span className="log-date">{entry.date}</span>
          </li>
        ))}
      </ul>

      <h2>📊 Mood Summary</h2>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={moodCounts}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="emoji" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#ffb74d" />
          </BarChart>
        </ResponsiveContainer>
     </div>

    </div>
  );
}
export default App;