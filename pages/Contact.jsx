import react from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div style={{ backgroundColor: "#6A3E73" }}>
      <Navbar />
      <hr style={{ color: "white" }} />
      <div className="d-flex m-3 justify-content-evenly">
        <div>
          <div style={{ margin: "10px" }}>
            <img
              src="B.jpg"
              style={{ objectFit: "cover", width: "300px", height: "300px" }}
              className="rounded-circle"
            />
          </div>
        </div>
        <table style={{ color: "black" }}>
          <tr>
            <td>
              <h5 style={{ color: "white" }}>Name</h5>
            </td>
            <td style={{ marginLeft: "20px" }}>
              <span style={{ marginLeft: "20px", color: "white" }}>
                Pichayoot Hunchainao
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <h5 style={{ color: "white" }}>Nickname</h5>
            </td>
            <td>
              <span style={{ marginLeft: "20px", color: "white" }}>
                Peterpan
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <h5 style={{ color: "white" }}>Address</h5>
            </td>
            <td>
              <span style={{ marginLeft: "20px", color: "white" }}>
                282/1 Maerim Rimtai 50180 Chiangmai Thailand
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <h5 style={{ color: "white" }}>Facebook</h5>
            </td>
            <td>
              <a
                href="https://www.facebook.com/pichayoot.hunchainao/"
                target="_blank"
                rel="noreferrer"
              >
                <span style={{ marginLeft: "20px", color: "white" }}>
                  https://www.facebook.com/pichayoot.hunchainao
                </span>
                /
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <h5 style={{ color: "white" }}>Email</h5>
            </td>
            <td>
              <span style={{ marginLeft: "20px", color: "white" }}>
                pichayoot_h@cmu.ac.th
              </span>
            </td>
          </tr>
        </table>
        <hr />
      </div>
      <hr style={{ color: "white" }} />
      <p className="d-flex m-3 justify-content-evenly">
        <span style={{ color: "white" }}>
          © 2022 pichayoothunchainao.com by Pichayoot Hunchainao
        </span>
      </p>
      <hr />
    </div>
  );
}
