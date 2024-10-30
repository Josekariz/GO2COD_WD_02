import React, { useState} from 'react';
import QuizCard from './components/QuizCard';
import ScoreBoard from './components/ScoreBoard';
import LoadingScreen from './components/LoadingScreen';
import { Droplet, Play} from 'lucide-react';

export default function QuizApp() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);

  const fetchQuestions = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('https://opentdb.com/api.php?amount=10&category=9');
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        setQuestions(data.results);
        setGameStarted(true);
      } else {
        setError('No questions received from the API');
      }
    } catch (error) {
      setError('Failed to fetch questions. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAnswer = (answer) => {
    if (answer) setScore(score + 1);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(curr => curr + 1);
      } else {
        setShowResults(true);
      }
    }, 1000);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
    setError(null);
    setGameStarted(false);
    setQuestions([]);
  };

  const startQuiz = () => {
    fetchQuestions();
  };

  const quitQuiz = () => {
    setShowResults(true);
  };

  if (isLoading) return <LoadingScreen />;

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-blue-100 flex items-center justify-center">
        <div className="bg-white rounded-xl p-8 shadow-xl text-center max-w-md mx-4">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Oops!</h2>
          <p className="text-gray-700 mb-6">{error}</p>
          <button
            onClick={restartQuiz}
            className="px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg
                     hover:from-blue-500 hover:to-blue-700 transition-all shadow-lg"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-blue-100">
      <div className="container mx-auto px-4 py-8 relative">
        {/* Animated water drops background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <Droplet
              key={i}
              className="absolute animate-float text-blue-300/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                fontSize: `${Math.random() * 20 + 10}px`
              }}
            />
          ))}
        </div>

        {/* Quiz title */}
        <h1 className="text-5xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-blue-700 drop-shadow-lg">
          Quizy
        </h1>

        <div className="max-w-2xl mx-auto relative">
          {!gameStarted && !showResults ? (
            <div className="bg-white rounded-xl p-8 shadow-xl text-center relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
                  Welcome to Quizy!
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Test your knowledge with our fun and challenging questions. Ready to dive in?
                </p>
                <button
                  onClick={startQuiz}
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg
                           hover:from-blue-500 hover:to-blue-700 transform transition-all
                           shadow-lg hover:shadow-xl"
                >
                  <span className="flex items-center justify-center">
                    <Play className="w-5 h-5 mr-2 animate-pulse group-hover:animate-none" />
                    Start Quiz
                  </span>
                  <div className="absolute inset-0 bg-white rounded-lg opacity-20 transform scale-0 group-hover:scale-100 transition-transform" />
                </button>
              </div>

              {/* Decorative water drops */}
              {[...Array(5)].map((_, i) => (
                <Droplet
                  key={i}
                  className="absolute text-blue-300/20 animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    fontSize: `${Math.random() * 30 + 20}px`
                  }}
                />
              ))}
            </div>
          )  : !showResults ? (
          <>
            
              <ScoreBoard
                score={score}
                total={questions.length}
                current={currentQuestion + 1}
              />
            
            <QuizCard
              question={questions[currentQuestion]}
              onAnswer={handleAnswer}
              onQuit={quitQuiz}
            />
          </>
          ) : (
            <div className="bg-white rounded-xl p-8 shadow-xl text-center">
              <h2 className="text-3xl font-bold mb-4 text-blue-700">
                Quiz {currentQuestion === questions.length - 1 ? 'Complete!' : 'Ended'}
              </h2>
              <p className="text-xl mb-6">
                Your score: {score} out of {questions.length}
              </p>
              <button
                onClick={restartQuiz}
                className="px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg
                         hover:from-blue-500 hover:to-blue-700 transform hover:scale-105 transition-all
                         shadow-lg hover:shadow-xl"
              >
                Play Again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}