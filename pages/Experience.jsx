import react from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function HomeExperience() {
  return (
    <div style={{ backgroundColor: "#7D487A" }}>
      <Navbar />
      <div>
        <div
          className="d-flex justify-content-evenly"
          style={{ marginBottom: "10px" }}
        >
          <h1 style={{ color: "white" }}>Pichayoot Profiles</h1>
        </div>
        <div
          className="d-flex p-3 rounded-3 vstack gap-2"
          style={{ backgroundColor: "rgb(255, 255, 255)" }}
        >
          <div>
            <hr />
          </div>
          <div className="d-flex justify-content-evenly hstack">
            <div
              style={{ backgroundColor: "#D7B7BC" }}
              className="d-flex p-5 rounded-5 vstack"
            >
              <div className="d-flex justify-content-evenly hstack">
                <h1 style={{ color: "white" }}>My Experience</h1>
              </div>
              <hr style={{ color: "rgb(0, 0, 0)" }} />
              <div className="d-flex vstack">
                {/* ------------------------------------------------ */}
                <div className="d-flex justify-content-evenly">
                  <div className="card mb-3" style={{ maxWidth: "540px" }}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src="dev1.JPG"
                          className="img-fluid rounded-start"
                          style={{ objectFit: "contain" }}
                          alt="..."
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">
                            YOUNG GAME DEV CAMP 2019
                          </h5>
                          <p className="card-text">
                            YOUNG GAME DEV CAMP by camt Chiangmai university. I
                            make an delivery food game. Then i win 5{"'"}st
                            medal.
                          </p>
                          <p className="card-text">
                            <small className="text-muted">
                              Last updated 3 mins ago
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ----------------------------------- */}

                <div className="d-flex justify-content-evenly">
                  <div className="card mb-3" style={{ maxWidth: "540px" }}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src="game1.JPG"
                          className="img-fluid rounded-start"
                          style={{ objectFit: "contain" }}
                          alt="..."
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">
                            MONTFORT LEGENDARY ESOPRT
                          </h5>
                          <p className="card-text">
                            I Win Bronze medal in First Valorant competitive in
                            school.
                          </p>
                          <p className="card-text">
                            <small className="text-muted">
                              Last updated 3 mins ago
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ----------------------------------------------------- */}

                <div className="d-flex justify-content-evenly">
                  <div className="card mb-3" style={{ maxWidth: "540px" }}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src="math2.JPG"
                          className="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">
                            MONTFORT MATH CAMP 2020
                          </h5>
                          <p className="card-text">
                            I am organizer of this camp. To introduce student
                            that want to enroll gifted Mathematic. And educate
                            them.
                          </p>
                          <p className="card-text">
                            <small className="text-muted">
                              Last updated 3 mins ago
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* -------------------------------------------- */}

                <div className="d-flex justify-content-evenly">
                  <div className="card mb-3" style={{ maxWidth: "540px" }}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src="music1.JPG"
                          className="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">SINGER</h5>
                          <p className="card-text">
                            I am singer of mathcamp band to entertain all
                            member.
                          </p>
                          <p className="card-text">
                            <small className="text-muted">
                              Last updated 3 mins ago{" "}
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* -------------------------------------------- */}

                <div className="d-flex justify-content-evenly">
                  <div className="card mb-3" style={{ maxWidth: "540px" }}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src="swim2.jpg"
                          className="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">SEA DRIVER</h5>
                          <p className="card-text">
                            I got silver medal in Triathlon competitive at
                            Chonburi,Thailand in 16-18 Generation.
                          </p>
                          <p className="card-text">
                            <small className="text-muted">
                              Last updated 3 mins ago
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* -------------------------------------------- */}

                <div className="d-flex justify-content-evenly">
                  <div className="card mb-3" style={{ maxWidth: "540px" }}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src="swim3.jpg"
                          className="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">INTERNATIONAL SWIMMER</h5>
                          <p className="card-text">
                            I got 6 place in Thailand swimming competitive at
                            Thammasart University,Thailand in 16-18 Generation.
                          </p>
                          <p className="card-text">
                            <small className="text-muted">
                              Last updated 3 mins ago
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* -------------------------------------------- */}

                <hr />
              </div>
            </div>
          </div>
        </div>
        <hr style={{ color: "white" }} />
        <div className="d-flex m-3 justify-content-evenly">
          <p style={{ color: "#ffffff" }}>
            © 2022 pichayoothunchainao.com by Pichayoot Hunchainao
          </p>
        </div>
      </div>
    </div>
  );
}
