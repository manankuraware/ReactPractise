import React from "react";

export default function HeroBanner() {
  return (
    <>
      <main className="hero-section main ">
        <div className="container">
          <div className=" banner-column ">
            <div className="banner-inner">
              <h1 className="heading-xl">
                All Your Files in One Secure Location.
              </h1>
              <p className="paragraph">
                We stores all your most important files in one secure location.
                Access them whenever needed, share and collaborate with your
                connections.
              </p>
              <button className="btn btn-darken btn-inline">
                Get Started<i className="bx bx-right-arrow-alt"></i>
              </button>
            </div>
            <div className="banner-img">
              <img
                className="banner-image"
                src="https://media.istockphoto.com/id/899652610/photo/concentrated-woman-making-plan-on-sticky-notes.jpg?b=1&s=612x612&w=0&k=20&c=1gPUBsNe4uJRW-Vlg4QkSTULRHibyW-JglHLirr-2CQ="
                alt="Illustration"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
