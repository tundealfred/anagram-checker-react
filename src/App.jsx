import { useState, useEffect } from "react";
import "./App.css";
import WordPairDisplay from "./components/WordPairDisplay";

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
}

export default App;
