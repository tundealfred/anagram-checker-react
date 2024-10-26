import React, { useState, useEffect } from "react";
import "./App.css";
import WordPairDisplay from "./components/WordPairDisplay";
import Result from "./components/Result";
import ScoreBoard from "./components/ScoreBoard";
import RestartButton from "./components/RestartButton";

const wordPairs = [
  ["Listen", "Silent"],
  ["Dusty", "Study"],
  ["Night", "Thing"],
  ["Race", "Care"],
  ["Angel", "Glean"],
  ["Debit card", "Bad credit"],
  ["Stressed", "Desserts"],
  ["Brag", "Grab"],
  ["Save", "Vase"],
  ["Fired", "Fried"],
  ["Earnest", "Nearest"],
  ["Act", "Cat"],
  ["Cinema", "Iceman"],
  ["Clint Eastwood", "Old West Action"],
  ["Alert", "Later"],
  ["Drawer", "Reward"],
  ["Elbow", "Below"],
  ["State", "Taste"],
  ["Cider", "Cried"],
  ["Dare", "Read"],
  ["Fate", "Feat"],
  ["Loop", "Polo"],
  ["Army", "Mary"],
  ["Notes", "Stone"],
  ["Shout", "South"],
  ["Pots", "Stop"],
  ["Meet", "Teem"],
  ["Bored", "Robed"],
  ["Stew", "West"],
  ["Snap", "Pans"],
  ["Racecar", "Cerrace"],
  ["Flow", "Wolf"],
  ["Neat", "Ante"],
  ["Gallery", "Largely"],
  ["Earn", "Near"],
  ["Listen", "Inlets"],
  ["Flesh", "Shelf"],
  ["Nightmare", "Mating her"],
  ["Least", "Slate"],
  ["Looped", "Poodle"],
  ["Strain", "Trains"],
  ["Spare", "Spears"],
  ["Peach", "Cheap"],
  ["Par", "Rap"],
  ["Covers", "Vectors"],
  ["Inches", "Chines"],
  ["Trainee", "Retinae"],
  ["Sadder", "Dreads"],
  ["Fate", "Feat"],
  ["Sting", "Tings"],
  ["Horse", "Shore"],
  ["Scar", "Cars"],
  ["Master", "Stream"],
  ["Earth", "Heart"],
  ["Rescue", "Secure"],
  ["Plaid", "Lipid"],
  ["Swipe", "Wipes"],
  ["Diet", "Tide"],
  ["Clothes", "Clohes"],
  ["Care", "Race"],
  ["Fries", "Rifes"],
  ["Cheat", "Teach"],
  ["Actors", "Costar"],
  ["Mile", "Lime"],
  ["Enlist", "Silent"],
  ["Silent", "Listen"],
  ["Tired", "Tried"],
  ["Listen", "Inlets"],
  ["Emits", "Items"],
  ["Reins", "Rinse"],
  ["Anagram", "Nag a ram"],
  ["Time", "Item"],
  ["Dates", "Stade"],
  ["Mode", "Dome"],
  ["Rifle", "Flier"],
  ["Earn", "Near"],
  ["Flap", "Palf"],
  ["Gallery", "Largely"],
  ["Apple", "Pepla"],
  ["Sink", "Skin"],
  ["Glean", "Angel"],
  ["Brag", "Grab"],
  ["Rope", "Pore"],
  ["Arrest", "Rarest"],
  ["Elapse", "Please"],
  ["Trades", "Stared"],
  ["Below", "Elbow"],
  ["Dirt", "Drip"],
  ["Mister", "Remits"],
  ["Night", "Thing"],
  ["Slight", "Lights"],
  ["Tacos", "Coats"],
  ["Rope", "Pore"],
  ["Male", "Meal"],
  ["Rise", "Sire"],
  ["Cheating", "Teaching"],
  ["File", "Life"],
  ["Save", "Vase"],
  ["Sore", "Rose"],
  ["Dare", "Read"],
];

function App() {
  const [currentPair, setCurrentPair] = useState([]);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [timeLeft, setTimeLeft] = useState(10);
  const [result, setResult] = useState("");
  const [gameOver, setGameOver] = useState(false);

  // Helper function to check if two words are anagrams
  const areAnagrams = (str1, str2) => {
    const normalize = (str) => str.replace(/[^a-z]/gi, "").toLowerCase();
    return (
      normalize(str1).split("").sort().join("") ===
      normalize(str2).split("").sort().join("")
    );
  };

  // Get a random pair of words
  const getRandomPair = () => {
    const randomIndex = Math.floor(Math.random() * wordPairs.length);
    return wordPairs[randomIndex];
  };

  const newRound = () => {
    if (level > 10) {
      setGameOver(true);
      return;
    }
    const pair = getRandomPair();
    setCurrentPair(pair);
    setResult("");
    setTimeLeft(Math.max(3, 10 - level)); // Reduce time based on level, but no lower than 3 seconds
  };

  // Handle player's answer
  const handleChoice = (isAnagram) => {
    const correctAnswer = areAnagrams(currentPair[0], currentPair[1]);
    if (isAnagram === correctAnswer) {
      setScore(score + 1);
      setResult("Correct!");
    } else {
      setScore(Math.max(0, score - 1));
      setResult("Wrong!");
    }
    setLevel(level + 1);
  };

  // Timer Effect
  useEffect(() => {
    if (timeLeft > 0 && !gameOver) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setResult("Time's up!");
      setScore(Math.max(0, score - 1));
      setLevel(level + 1);
    }
  }, [timeLeft, gameOver]);

  // Start new round when level changes
  useEffect(() => {
    if (!gameOver) {
      newRound();
    }
  }, [level, gameOver]);

  // Restart game
  const restartGame = () => {
    setScore(0);
    setLevel(1);
    setGameOver(false);
    newRound();
  };

  return (
    <div className="App">
      <h1>Anagram Game</h1>
      {gameOver ? (
        <div>
          <h2>Game Over! You reached Level 10</h2>
          <RestartButton onRestart={restartGame} />
        </div>
      ) : (
        <>
          <WordPairDisplay pair={currentPair} />
          <div>
            <button onClick={() => handleChoice(true)}>Yes</button>
            <button onClick={() => handleChoice(false)}>No</button>
          </div>
          <Result result={result} />
          <ScoreBoard score={score} level={level} timeLeft={timeLeft} />
        </>
      )}
    </div>
  );
}

export default App;
