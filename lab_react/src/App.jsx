import React, { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";
import Footer from "./components/Footer.jsx";
import Information from "./components/Information.jsx";
import Reviews from "./components/Reviews.jsx";
import ContactForm from "./components/ContactForm.jsx";

function App() {
  const [theme, setTheme] = useState("light");

  
  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour >= 7 && currentHour < 21) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, []);

  
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <main
      className={`min-h-screen px-4 py-10 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-slate-900 text-slate-100"
          : "bg-slate-100 text-slate-800"
      }`}
    >
      <div className="mx-auto max-w-3xl space-y-6">
        
        <Header theme={theme} onToggleTheme={toggleTheme} />

        <section className={`rounded-2xl p-6 shadow-lg sm:p-8 ${theme === 'dark' ? 'bg-slate-800' : 'bg-white'}`}>
          <Information />
        </section>

        <section className={`rounded-2xl p-6 shadow-lg sm:p-8 ${theme === 'dark' ? 'bg-slate-800' : 'bg-white'}`}>
          <Experience />
        </section>

        <section className={`rounded-2xl p-6 shadow-lg sm:p-8 ${theme === 'dark' ? 'bg-slate-800' : 'bg-white'}`}>
          <Education />
        </section>

        
        <section className={`rounded-2xl p-6 shadow-lg sm:p-8 ${theme === 'dark' ? 'bg-slate-800' : 'bg-white'}`}>
          <Reviews />
        </section>

        
        <Footer />

        
        <ContactForm />
      </div>
    </main>
  );
}

export default App;