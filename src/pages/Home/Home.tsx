import "./Home.css";
import img1 from "../../assets/t1.jpg";
import img2 from "../../assets/mikail-duran-Kv5WiqG_3NA-unsplash.jpg";

function Home() {
  return (
    // <div></div>
    <div className="container">
      <div className="taglineContainer">
        <div className="tagline">
          <p className="para">Unleash your </p>
          <h1 className="highlight"> Brand's creativity </h1>
          <p className="para"> with our bespoke branded tees!!</p>
        </div>
      </div>

      <div className="imageContainerVertical">
      <div className="imageContainer">
        <img src={img1} className="model" />
        <img src={img2} className="model2" />
      </div>
      </div>
    </div>
  );
}

export default Home;
