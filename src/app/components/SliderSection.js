import Link from "next/link";

const SliderSection = () => {
  return (
    <section className="slider_section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="img-box">
              <img
                src="./assets/images/filmingGreen.svg"
                alt="website template image"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="detail-box">
              <div className="details">
                <h1>
                  FILM <br />
                  PRODUCTION
                </h1>
                <p>
                  Bringing your vision to life through creative video production, <br />
                  stunning photography, and cutting-edge content creation. <br />
                  We craft stories that resonate and websites that inspire.
                </p>
                <div className="btn-box">
                  <div className="btnDiv">
                    <Link href="https://www.instagram.com/adem_ben_amor/" className="btn1">
                      Contact Us
                      <div className="arrowContainer">
                        <div className="arrow-wrapper">
                          <div className="arrow"></div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
