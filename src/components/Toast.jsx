import { useEffect } from 'react';

const Toast = ({ message, type = 'success', onClose, duration = 3000 }) => {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const bgColor = {
    success: 'bg-gradient-to-r from-green-500 to-emerald-600',
    error: 'bg-gradient-to-r from-red-500 to-rose-600',
    warning: 'bg-gradient-to-r from-yellow-500 to-orange-600',
    info: 'bg-gradient-to-r from-blue-500 to-cyan-600'
  }[type] || 'bg-gradient-to-r from-gray-500 to-slate-600';

  const icon = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ'
  }[type] || 'ℹ';

  return (
    <div
      className={`${bgColor} text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 min-w-[300px] max-w-md animate-slide-in`}
      role="alert"
      aria-live="polite"
    >
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center font-bold">
        {icon}
      </div>
      <p className="flex-1 font-medium">{message}</p>
      <button
        onClick={onClose}
        className="flex-shrink-0 w-6 h-6 rounded-full hover:bg-white/20 flex items-center justify-center transition-all duration-200"
        aria-label="Close notification"
      >
        ×
      </button>
    </div>
  );
};

export default Toast;

