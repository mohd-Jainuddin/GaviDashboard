import React, { useState } from 'react'
import '../HeaderComponent/Header.css';
import Registration from '/Users/admin/CovidAppProject/COVID-APP-GROUP-R1/src/Component/Registration/Registration.jsx'
import image from "./logo/Gavi-logo_1b.png";

function Header() {
  const [isToggle, setisToggle]=useState(false)

  const sublink = [
    [
      "About",
      "Operating model",
      "Governance",
      "Market Shaping",
      "Global Health & Development",
      "Work with us",
    ],
    [
      "How our support works",
      "Types of support",
      "Country Hub",
      "Our Impact",
      "Programmatic Policies",
    ],
    [
      "Resource mobilisation process",
      "Funding",
      "Partnering with business",
      "Innovative financing",
      "INFUSE",
    ],
    [
      "About VaccinesWork",
      "The science behind COVID-19",
      "Emerging threats",
      "Tales from the past",
      "News from the lab",
      "Stories from the community",
    ],
    ["Media room", "Publications", "Document library", "Knowledge Produts"],
  ];
  return (
    <>
      <nav className="navbar">
        <div className="left">
          <img src={image} alt="logo" />
        </div>
        <div className="right">
          <ul className="list">
            <li>
              <a href="#">OUR ALLIANCE</a>
              <div className="sublinks1">
                <ul>
                  {sublink[0].map((item) => {
                    return (
                      <li>
                        <a href="#">{item}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>

            <li>
              <a href="#">PROGRAMMERS & IMPACT</a>
              <div className="sublinks2">
                <ul>
                  {sublink[1].map((item) => {
                    return (
                      <li>
                        <a href="#">{item}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>

            <li>
              <a href="#">INVESTING IN GAVI</a>
              <div className="sublinks3">
                <ul>
                  {sublink[2].map((item) => {
                    return (
                      <li>
                        <a href="#">{item}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>

            <li>
              <a href="#">VACCINESWORK</a>
              <div className="sublinks4">
                <ul>
                  {sublink[3].map((item) => {
                    return (
                      <li>
                        <a href="#">{item}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>

            <li>
              <a href="#">NEWS & RESOURCES</a>
              <div className="sublinks5">
                <ul>
                  {sublink[4].map((item) => {
                    return (
                      <li>
                        <a href="#">{item}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
            <li>
              <div>
              <a onClick={()=>setisToggle(!isToggle)}>
                Register
              </a>
              {isToggle && <Registration/>}
              </div>
            </li>
          </ul>
          <span></span>
        </div>
      </nav>
    </>
  )
}


export default Header