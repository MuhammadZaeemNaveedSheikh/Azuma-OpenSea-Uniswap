import { Grid, Container } from "@material-ui/core";
import styled from "styled-components";
// @ts-ignore
import Reveal from "react-reveal/Reveal";
import ourDecree from "../../assets/images/our-decree/our-decree@2x.png";
import { useEffect } from "react";

const ContentArea = styled.div`
  align-items: baseline;
  margin-bottom: 50px;
  background-color: transparent;
  display: flex;
`;

const Title = styled.h1`
  font-family: "Jost";
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 81px;
  margin-bottom: 15px;
  text-transform: uppercase;
  @media (max-width: 991px) {
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 52px;
  }
`;

const DecreeContent = styled.div`
  p {
    font-family: "Jost";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 27px;

    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }
`;

const BottomBarText = styled.p`
  font-family: "Aclonica";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 19px;
  text-transform: uppercase;
  margin: 30px 0 15px;

  @media (max-width: 991px) {
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 19px;
  }
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  position: relative;

  img {
    position: absolute;
    top: 0;
    right: 5%;
    width: auto;
    max-height: 90vh;
    height: 100%;
    z-index: 1;
    transform: scale(1.2);

    @media (min-width: 991px) {
      max-height: 90vh;
      top: 6%;
    }

    @media (min-width: 1441px) {
      right: calc(10% + 50px);
      max-height: 75vh;
    }
  }

  @media (max-width: 991px) {
    display: none;
  }
`;

const Speca = () => {
  useEffect(() => {
    // document.body.classList.add("secondary-color");
    return () => {
      document.body.classList.remove("secondary-color");
    };
  }, []);

  return (
    <Reveal effect="fadeInUp">
      <ContentArea>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12} sm={12} md={8} lg={6}>
              <Title>Our Decree</Title>
              <DecreeContent>
                <p>An Elite ray of hope emerges...</p>

                <p>Humanity is being restored.</p>

                <p>
                  Forging light from the dark, gloomy earth.
                  <br />
                  Creating a new Elite community.
                </p>

                <p>
                  A Movement that distributes wealth, happiness, creativity, and
                  oneness. <br />
                  We are not leaving the world behind,
                  <br />
                  We want them to join us,
                </p>

                <p>Because we believe WAGMI (we all gonna make it) </p>

                <p>
                  We salute the ones who have forged this path with us,
                  <br />
                  The ones who fought alongside us to restore light to the dark,
                  gloomy world...
                </p>

                <p>
                  From the Kanemiverse, we say
                  <br />
                  You are welcome
                  <br />
                  You are special
                  <br />
                  You are loved
                </p>
              </DecreeContent>
              <BottomBarText>Ready to be Kivilized?</BottomBarText>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={6}>
              <ImageBox>
                <img src={ourDecree} className="fluid" alt="" />
              </ImageBox>
            </Grid>
          </Grid>
        </Container>
      </ContentArea>
    </Reveal>
  );
};
export default Speca;
