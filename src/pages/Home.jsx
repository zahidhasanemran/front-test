import { Link } from "react-router-dom"
import Footer from "../components/inc/Footer"
import Header from "../components/inc/Header"
import { Button } from "@mui/material"

function Home() {
  return (
    <>
      <Header />
      <div className="content-wrapper hero-img">
        <section className="content-section">
          <div
            className="container"
          >
            <div className="wrap" >
              <div className="content">
                <h1>We are awesome teamfor your business dream </h1>
                <p>Integrated workflow designed for product teams. We create world-class development and branding</p>
                <Button
                        sx={{ px: 5, my: 3 }}
                        className="btn ml-auto"
                        type="text"
                        variant="contained"
                        color="primary"
                      >
                          Explore
                      </Button>
              </div>
              <div className="img">
                <img src="/banner1.png" alt="" />
              </div>
            </div>
            
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Home;
