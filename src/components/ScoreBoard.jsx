export default function ScoreBoard({ score, total, current }) {
    return (
        <div className="flex justify-between items-center mb-6 px-4">
            <div className="text-blue-900 font-medium">
                Question {current} of {total}
            </div>
            <div className="bg-white rounded-full px-4 py-2 shadow-md">
                <span className="text-blue-900 font-medium">Score: {score}</span>
            </div>
        </div>
    );
}
