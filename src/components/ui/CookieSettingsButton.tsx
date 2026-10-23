'use client';

export default function CookieSettingsButton() {
  const handleClick = () => {
    localStorage.removeItem('cookieConsent');
    localStorage.removeItem('cookiePreferences');
    window.location.reload();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="text-sm text-gray-300 hover:text-white transition-colors"
    >
      Cookie Settings
    </button>
  );
}
