import React, { useState, useEffect } from 'react';
import QuizCard from './components/QuizCard';
import ScoreBoard from './components/ScoreBoard';
import LoadingScreen from './components/LoadingScreen';
import { Droplet } from 'lucide-react';

export default function QuizApp() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState(null);

}