
function Information() {
  return (
    <section>
      <h2 className="mb-5 border-b-2 border-black pb-3 text-2xl font-bold text-slate-900">
        Інформація про мене
      </h2>

      <ul className="space-y-4">
        <li className="flex flex-wrap gap-2">
          <span className="font-semibold  text-slate-600">ПІБ:</span>
          <span>Зірянов Дмитро</span>
        </li>

        <li className="flex flex-wrap gap-2">
          <span className="font-semibold text-slate-600">Місто:</span>
          <span>м. Львів</span>
        </li>

        <li className="flex flex-wrap gap-2">
          <span className="font-semibold text-slate-600">GitHub:</span>
          <a
            href="https://github.com/dmytoziri anovkb2025-lab"
            className="break-all text-black hover:text- hover:underline"
            target="_blank"
            
          >
            Мій GitHub
          </a>
        </li>

        <li className="flex flex-wrap gap-2">
          <span className="font-semibold text-slate-600">Email:</span>
          <a
            href="mailto:dmyto.zirianov.kb.2025@lpnu.ua"
            className="break-all text-black hover:underline"
          >
            dmyto.zirianov.kb.2025@lpnu.ua
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Information;
