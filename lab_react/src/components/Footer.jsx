import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [systemInfo, setSystemInfo] = useState('');

  useEffect(() => {
    
    const info = `Браузер: ${navigator.userAgent} | Платформа: ${navigator.platform}`;
    
    
    localStorage.setItem('systemInfo', info);
    
    
    const savedInfo = localStorage.getItem('systemInfo');
    setSystemInfo(savedInfo);
  }, []); 

  return (
    <footer className="rounded-2xl bg-slate-800 px-6 py-6 text-center text-slate-300 shadow-lg mt-10">
      <p className="mb-2 text-lg font-semibold text-white">
        Дякую за увагу!
      </p>
      <p className="text-sm mb-4">
        Буду радий зворотному зв'язку.
      </p>
      
      
      {systemInfo && (
        <p className="text-xs text-slate-400 border-t border-slate-700 pt-3 mb-2">
          {systemInfo}
        </p>
      )}

      <p className="text-xs text-slate-500">
        © 2026 Зірянов Дмитро
      </p>
    </footer>
  );
};

export default Footer;