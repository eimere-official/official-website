import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PlaceholderPage() {
  const location = useLocation();
  const title = location.pathname
    .replace('/', '')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ') || 'Page';

  return (
    <div className="min-h-screen bg-[#F7F7F8] flex flex-col items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-2xl w-full bg-white rounded-3xl p-10 md:p-16 shadow-xl shadow-gray-200/50 border border-gray-100">
        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        </div>
        <h1 className="text-4xl font-black text-[#111827] tracking-tight mb-4">
          {title}
        </h1>
        <p className="text-lg text-gray-500 mb-10 leading-relaxed">
          This is a placeholder page demonstrating routing capability. In a full implementation, this route would render the dedicated {title} content.
        </p>
        <Link 
          to="/"
          className="inline-flex items-center gap-2 bg-[#111827] text-white px-6 py-3 rounded-full font-medium hover:bg-black transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
