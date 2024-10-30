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

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('https://opentdb.com/api.php?amount=10&category=9');
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        setQuestions(data.results);
      } else {
        setError('No questions received from the API');
      }
    } catch (error) {
      setError('Failed to fetch questions. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

}