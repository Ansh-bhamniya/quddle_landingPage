import { useState } from 'react';

interface DataRoomProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DataRoom({ isOpen, onClose }: DataRoomProps) {
  const [password, setPassword] = useState('');

  const handlePasswordSubmit = () => {
    // Add your password validation logic here
    console.log('Password submitted:', password);
    // For now, just close the modal
    onClose();
    setPassword('');
  };

  const handleClose = () => {
    onClose();
    setPassword('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg p-6 w-96 max-w-md mx-4 border border-gray-600">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-white">Data Room Access</h3>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
            Enter Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your password"
            autoFocus
          />
        </div>
        
        <div className="flex justify-end gap-3">
          <button
            onClick={handleClose}
            className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handlePasswordSubmit}
            className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
