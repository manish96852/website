'use client';

const WhatsAppButton = () => {
  const handleClick = () => {
    const phoneNumber = '919876543210';
    const message = encodeURIComponent('Hello! I\'d like to know more about NetEdge Solutions services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5C] text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path
          d="M12 2C6.48 2 2 6.48 2 12c0 2.17.7 4.19 1.94 5.86L2.1 22l4.14-1.84C7.91 21.3 9.9 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.73 0-3.41-.47-4.87-1.35l-.35-.17-3.58 1.58 1.58-3.58-.17-.35A7.93 7.93 0 013 12c0-4.96 4.04-9 9-9s9 4.04 9 9-4.04 9-9 9z"
        />
        <path
          d="M17.21 14.57l-2.91-2.91c-.39-.39-1.02-.39-1.41 0l-1.89 1.89-1.89-1.89c-.39-.39-1.02-.39-1.41 0l-2.91 2.91c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L9 13.99l1.89 1.89c.39.39 1.02.39 1.41 0l1.89-1.89 2.91 2.91c.39.39 1.02.39 1.41 0 .38-.39.38-1.03 0-1.42z"
        />
      </svg>
    </button>
  );
};

export default WhatsAppButton;
