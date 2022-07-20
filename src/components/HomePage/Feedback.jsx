import React, { Component } from "react";
import { Container, Text, Button, ButtonGroup } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../App.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ background: "#fff" }} onClick={onClick}>
      <Button color="black"> {" > "} </Button>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ background: "#fff" }} onClick={onClick}>
      <Button color="black">{" < "}</Button>
    </div>
  );
}

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div style={{ width: "80%", margin: "auto" }}>
        <Slider {...settings}>
          <Container className="FAQ" margin="3rem 2rem">
            <div style={{ marginTop: "-84px" }}>
              <img
                src="https://drive.google.com/uc?export=view&id=1vjqrIMVjppUXR0eMR3LdY15Ou4virADE"
                alt="123"
              />
            </div>
            {/* https://drive.google.com/file/d/1vjqrIMVjppUXR0eMR3LdY15Ou4virADE/view?usp=sharing */}
            <Container marginTop="20px">
              <Text fontSize="lg" fontWeight="800">
                Joshua Anderton
              </Text>
              <br />
              <Text fontSize="sm" fontWeight="400">
                Just signed up for @Mailtrap and I’m loving it. So easy to set
                up. Provides so much peace of mind. Ahh just love it.
              </Text>
            </Container>
          </Container>
          <Container className="FAQ" margin="3rem 2rem">
            <div style={{ marginTop: "-84px" }}>
              <img
                src="https://drive.google.com/uc?export=view&id=1vjqrIMVjppUXR0eMR3LdY15Ou4virADE"
                alt="123"
              />
            </div>
            {/* https://drive.google.com/file/d/1vjqrIMVjppUXR0eMR3LdY15Ou4virADE/view?usp=sharing */}
            <Container marginTop="20px">
              <Text fontSize="lg" fontWeight="800">
                DeveloperMitch
              </Text>
              <br />
              <Text fontSize="sm" fontWeight="400">
                After all these years of web development, how have I only JUST
                started using @Mailtrap. I had heard about it, but never got
                round to using it. An awesome way of testing emails.
              </Text>
            </Container>
          </Container>
          <Container className="FAQ" margin="3rem 2rem">
            <div style={{ marginTop: "-84px" }}>
              <img
                src="https://drive.google.com/uc?export=view&id=1vjqrIMVjppUXR0eMR3LdY15Ou4virADE"
                alt="123"
              />
            </div>
            {/* https://drive.google.com/file/d/1vjqrIMVjppUXR0eMR3LdY15Ou4virADE/view?usp=sharing */}
            <Container marginTop="20px">
              <Text fontSize="lg" fontWeight="800">
                Alessandro Rodi
              </Text>
              <br />
              <Text fontSize="sm" fontWeight="400">
                I love @Mailtrap. It removes all the asshole of configuring
                email servers in test environments. Great service! Is totally
                worth your money!
              </Text>
            </Container>
          </Container>
          <Container className="FAQ" margin="3rem 2rem">
            <div style={{ marginTop: "-84px" }}>
              <img
                src="https://drive.google.com/uc?export=view&id=1vjqrIMVjppUXR0eMR3LdY15Ou4virADE"
                alt="123"
              />
            </div>
            {/* https://drive.google.com/file/d/1vjqrIMVjppUXR0eMR3LdY15Ou4virADE/view?usp=sharing */}
            <Container marginTop="20px">
              <Text fontSize="lg" fontWeight="800">
                Mr. Glass
              </Text>
              <br />
              <Text fontSize="sm" fontWeight="400">
                Shout out to @Mailtrap, hands down the best way to handle mail
                sending in local/test environments.
              </Text>
            </Container>
          </Container>
          <Container className="FAQ" margin="3rem 2rem">
            <div style={{ marginTop: "-84px" }}>
              <img
                src="https://drive.google.com/uc?export=view&id=1vjqrIMVjppUXR0eMR3LdY15Ou4virADE"
                alt="123"
              />
            </div>
            {/* https://drive.google.com/file/d/1vjqrIMVjppUXR0eMR3LdY15Ou4virADE/view?usp=sharing */}
            <Container marginTop="20px">
              <Text fontSize="lg" fontWeight="800">
                Rado Georgiev
              </Text>
              <br />
              <Text fontSize="sm" fontWeight="400">
                One thing we started using recently is @Mailtrap for our dev &
                staging environments. We were previously either turning email
                sending entirely off for staging or running SES + whitelist.
                Turns out, having a fake SMTP mailbox is great and you can test
                better with it.
              </Text>
            </Container>
          </Container>
          <Container className="FAQ" margin="3rem 2rem">
            <div style={{ marginTop: "-84px" }}>
              <img
                src="https://drive.google.com/uc?export=view&id=1vjqrIMVjppUXR0eMR3LdY15Ou4virADE"
                alt="123"
              />
            </div>
            {/* https://drive.google.com/file/d/1vjqrIMVjppUXR0eMR3LdY15Ou4virADE/view?usp=sharing */}
            <Container marginTop="20px">
              <Text fontSize="lg" fontWeight="800">
                Doug Black Jr
              </Text>
              <br />
              <Text fontSize="sm" fontWeight="400">
                Can we all agree @Mailtrap is a gift to developers everywhere?
                It just works SO easily out of the box!!!!
              </Text>
            </Container>
          </Container>
        </Slider>
      </div>
    );
  }
}
