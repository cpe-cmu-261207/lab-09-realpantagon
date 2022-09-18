import react from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <div style={{ backgroundColor: "#905583" }}>
        <Navbar />

        <div className={" justify-content-evenly"}>
          <div className="d-flex justify-content-evenly">
            <div style={{ margin: "10px" }}>
              <img
                src="A.jpg"
                style={{ objectFit: "cover", width: "200px" }}
                className="rounded-circle"
              />
            </div>
            <div
              style={{ backgroundColor: "#eaeaea" }}
              className={"d-flex p-5 rounded-5 vstack"}
            >
              <h3 style={{ color: "rgb(0, 0, 0)" }}>Pichayoot Hunchainao</h3>
              <p
                style={{
                  margin: "10px",
                  margin: "bottom 10px",
                  color: "rgb(0, 0, 0)",
                }}
              >
                Hi, My name is Pichayoot Hunchainao. You can called me Peterpan
                or Pan. I graduate from Montfort college Chiangmai. I loved to
                sleep all day until night i wake up then eat. I think i love
                programming html with css more than other computer progarm. It
                {"'"}s make me interest in website development. In my future
                <span style={{ fontWeight: "700" }}>
                  I{"'"}m Gonna Be King Of The Pirates!
                </span>
              </p>
            </div>
          </div>
          {/* ---------------------------------------------------------- */}
          <div>
            <hr style={{ color: "white" }} />
            <div>
              <div className={"d-flex justify-content-evenly"}>
                <h3 style={{ color: "white" }}>My skills</h3>
              </div>
              <div
                className={
                  "d-flex p-3 rounded-4 hstack gap-2 justify-content-evenly"
                }
                style={{ backgroundColor: "#D7B7BC" }}
              >
                <div
                  className={"card;d-flex flex-colum p-4 rounded-4"}
                  style={{ width: "15rem", backgroundColor: "white" }}
                >
                  <img src="coding.png" className={"card-img-top"} />
                  <div className={"card-body"}>
                    <h5 className={"card-title"}>coding</h5>
                    <p className={"card-text"}>
                      Now i interest in html language. It{"'"}s make me want to
                      be Website developer. I think it easy than other language.
                    </p>
                  </div>
                </div>

                <div
                  className={"card;d-flex flex-colum p-4 rounded-4"}
                  style={{ width: "15rem", backgroundColor: "white" }}
                >
                  <img src="console.png" className={"card-img-top"} />
                  <div className={"card-body"}>
                    <h5 className={"card-title"}>Gaming</h5>
                    <p className={"card-text"}>
                      I loved to play game in my freetime. I have been Game
                      competition. I love FPS type game
                    </p>
                  </div>
                </div>

                <div
                  className={"card;d-flex flex-colum p-4 rounded-4"}
                  style={{ width: "15rem", backgroundColor: "white" }}
                >
                  <img src="swimming.png" className={"card-img-top"} />
                  <div className={"card-body"}>
                    <h5 className={"card-title"}>swimming</h5>
                    <p className={"card-text"}>
                      I am swimming cause i like it. I swim since i was 7 year
                      old. I go all province in Thailand to Win. I also have
                      International Match
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ------------------------ */}
        </div>
        <hr style={{ color: "white" }} />
        <div className={"d-flex m-3 justify-content-evenly"}>
          <p style={{ color: "#ffffff" }}>
            © 2022 pichayoothunchainao.com by Pichayoot Hunchainao
          </p>
        </div>
      </div>
    </div>
  );
}
