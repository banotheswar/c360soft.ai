import React from "react";

const Hero = () => {
  return (
    <div>
      <div class="herobanner">
        <div class="container">
          <div class="show-on-scroll">
            <div class="heading">
              <h1 class=" ">
                The Future of
                <br />
                <span> AI </span> Is here{" "}
              </h1>
              <p>
                <a
                  href="#"
                  class=""
                  data-toggle="modal"
                  data-target="#get_trained"
                >
                  Get In Touch
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
        <div class="globe zoom">
          {" "}
          <img
            src="images/world.svg"
            class=""
            alt="C360 soft"
            title="C360 soft"
            width="1920"
            height="556"
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default Hero;
