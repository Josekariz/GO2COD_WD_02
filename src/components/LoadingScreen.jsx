import { Loader2 } from 'lucide-react';

export default function LoadingScreen() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-blue-100 
                    flex items-center justify-center">
            <div className="text-center">
                <Loader2 className="w-12 h-12 animate-spin text-blue-500 mx-auto mb-4" />
                <p className="text-blue-700 text-lg">Loading questions...</p>
            </div>
        </div>
    );
}