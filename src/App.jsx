import Header from "./components/Header.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";
import Footer from "./components/Footer.jsx";
import Information from "./components/Information.jsx";
function App() {
  return(
      <div>
        <Header/>
          <Information/>
          <Experience/>
          <Education/>
          <Footer/>
      </div>
  );
}
export default App;