import { useEffect } from "react";
import { Grid, Container } from "@material-ui/core";
import styled from "styled-components";
// import { Link } from "react-router-dom";
// @ts-ignore
import Reveal from "react-reveal/Reveal";

import Graph from "../../assets/images/coinomics/graph.png";
import GraphMob from "../../assets/images/coinomics/graph-mob.png";
import AnimeBoy1 from "../../assets/images/coinomics/anime_girl.png";
import AnimeBoy2 from "../../assets/images/coinomics/anime_boy_2.png";
// import { ReactComponent as Uparrow } from "../../assets/images/team/uparrow.svg";

const ContentArea = styled.div`
  padding: 84px 0 88px 0;
  @media (max-width: 959px) {
    padding: 60px 0;
  }
  .contentdata {
    max-width: 900px;
    margin: 0 auto;
    @media (max-width: 959px) {
      max-width: unset;
    }
    .MuiGrid-root {
      @media (min-width: 600px) and (max-width: 700px) {
        max-width: 100%;
        flex-basis: 100%;
      }
    }
  }
  .imgGrid {
    width: 100%;
    & > * {
      display: flex;
      justify-content: center;

      img {
        max-height: 500px;
        min-height: 370px;
        height: 30vw;
      }

      @media (max-width: 1280px) {
        position: fixed;
        opacity: 0.3;
        :nth-child(1) {
          left: 20px;
          bottom: 0;
        }
        :nth-child(3) {
          right: 0px;
          bottom: 0;
        }
      }

      @media (max-width: 425px) {
        :nth-child(1) {
          left: 0px;
          bottom: 0;
        }
        :nth-child(3) {
          right: -50px;
          bottom: 0;
        }
      }
    }
    .graph {
      z-index: 10;
      img {
        height: 20vw;
        min-height: 400px;
      }
      @media (max-width: 1280px) {
        position: relative;
        opacity: 1;
      }
    }
    .graphSm {
      display: none;
    }
    @media (max-width: 959px) {
      .graphSm {
        display: block;
      }
      .graphLg {
        display: none;
      }
    }
  }
`;

const TextParagrap = styled.p`
  font-family: "Jost";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 27px;
  text-align: center;
  color: #000000;
  margin: 0 0 40px 0;
  @media (max-width: 574px) {
    text-align: left;
  }
`;
const Title = styled.h1`
  font-family: "Jost";
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 81px;
  text-align: center;
  text-transform: uppercase;
  color: #000000;
  margin: 0 0 20px 0;
  .letter {
    display: inline-block;
    line-height: 1em;
  }
  @media (max-width: 959px) {
    font-size: 36px;
    line-height: 52px;
  }
  @media (max-width: 574px) {
    text-align: left;
  }
`;

const Coinomics = () => {
  useEffect(() => {
    // Wrap every letter in a span
    //var textWrapper = "";
    const textWrapper = document.querySelector(".ml16");
    if (textWrapper) {
      textWrapper.innerHTML =
        textWrapper?.textContent?.replace(
          /\S/g,
          "<span class='letter'>$&</span>"
        ) ?? "";
    }

    // @ts-ignore
    anime
      .timeline({ loop: false })
      .add({
        targets: ".ml16 .letter",
        translateY: [-100, 0],
        easing: "easeOutExpo",
        duration: 1400,
        delay: (el: any, i: number) => 30 * i,
      })
      .add({
        targets: ".ml16",
        // opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
      });
  }, []);
  return (
    <ContentArea>
      <Reveal effect="fadeInUp">
        <Container maxWidth="xl">
          <Grid
            container
            direction="row"
            justify-content="center"
            alignItems="center"
            className="contentdata"
          >
            <Grid item xs={12} sm={12} md={12}>
              <Title className="ml16">Coinomics</Title>
              <TextParagrap>
                An elite group of individuals from various professional works
                with deep-rooted enthusiasm and experience in the crypto sphere
                founded Kanemi. Kanemi is a movement that belongs to all, and as
                such, the core founding team has decided to remain anonymous as
                it is believed that just a small group of people should not be
                the face of Kanemi.
              </TextParagrap>
            </Grid>
          </Grid>
          <Grid container className="imgGrid">
            <Grid item xs>
              <img src={AnimeBoy1} alt="" />
            </Grid>
            <Grid item xs={12} sm={12} lg={7} className="graph">
              <img src={Graph} alt="" className="graphLg" />
              <img src={GraphMob} alt="" className="graphSm" />
            </Grid>
            <Grid item xs>
              <img src={AnimeBoy2} alt="" />
            </Grid>
          </Grid>
        </Container>
      </Reveal>
    </ContentArea>
  );
};
export default Coinomics;
