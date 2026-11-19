
function Experience() {
  const skills = [
    "Python",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SQL",
    "C#",
    "Git",
    "GitHub",
    "Visual Studio Code",
    
  ];

  return (
    <section>
      <h2 className="mb-5 border-b-2 border-black pb-3 text-2xl font-bold text-slate-900">
        Технічні навички
      </h2>

      <div className="mb-5 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="cursor-pointer rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-black transition hover:scale-105 hover:bg-blue-200"
          >
            {skill}
          </span>
        ))}
      </div>

      <h3 className="mb-3 text-lg font-semibold text-slate-800">
        Інструменти та технології
      </h3>

      <p className="leading-7 text-slate-600">
        Маю базові знання мов програмування, веброзробки та роботи
        з базами даних. Використовую Git і GitHub для роботи з кодом,
        а Visual Studio Code — для розробки програм.
      </p>
    </section>
  );
}

export default Experience;
