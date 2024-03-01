import React, { useEffect } from "react";
import { Grid, Container } from "@material-ui/core";
import styled from "styled-components";
// @ts-ignore
import Reveal from "react-reveal/Reveal";
import animeImg from "../../assets/images/kanemiverse/anime.png";
import arrowBackward from "../../assets/images/kanemiverse/arrow-backward.svg";
import { Link } from "react-router-dom";

const KanemiversePage = styled.div`
  margin-top: 80px;
  @media (min-width: 959px) {
    margin-top: 60px;
  }
  @media (min-width: 1280px) {
    .MuiContainer-root {
      padding-left: 0;
      // margin-right: 34.5px;
      width: unset;
    }
  }
  .MuiContainer-root {
    @media (max-width: 959px) {
      padding-left: 0;
      padding-right: 0;
    }
    @media (min-width: 600px) {
      padding-left: 0;
    }
  }
  .MuiGrid-container {
    align-items: center;
  }
  .fullwidth {
    @media (max-width: 959px) {
      width: 100%;
    }
  }
  .contentSection {
    @media (min-width: 960px) and (max-width: 1279px) {
      padding-left: 16px;
    }
    @media (max-width: 959px) {
      padding: 0 22px 0 23px;
    }
  }
`;
const Title = styled.h1`
  font-family: "Jost";
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 81px;
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
`;
const TextParagrap = styled.p`
  font-family: "Jost";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 27px;
  color: #000000;
  max-width: 640px;
  margin: 0 0 16px 0;
  @media (max-width: 959px) {
    br {
      display: none;
    }
    max-width: unset;
  }
  @media (min-width: 1441px) {
    max-width: unset;
  }
`;
const RoundSection = styled.div`
  display: flex;
  align-items: center;
  padding: 35px 0 35px 0px;
  p {
    margin: 0 0 0 15px;
    font-family: "Jost";
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 27px;
    text-transform: uppercase;
    color: #000000;
  }
  .roundcircle {
    width: 80px;
    height: 80px;
    background-color: #3835c2;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: #212075;
    }
  }
  @media (max-width: 959px) {
    padding-left: 23px;
  }
`;
const ImgSection = styled.div`
  text-align: left;
  img {
    @media (min-width: 959px) {
      max-width: 100%;
    }
    @media (max-width: 959px) {
      margin-bottom: 40px;
      max-width: 100%;
      width: 100%;
      object-fit: cover;

      position: absolute;
      top: 70%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
      opacity: 0.3;
    }
  }
`;
const Story = () => {
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
    <KanemiversePage>
      <Reveal effect="fadeInUp">
        <Container>
          <Grid container>
            <Grid item xs={12} sm={12} md={6} className="fullwidth">
              <ImgSection>
                <img src={animeImg} alt="" />
              </ImgSection>
            </Grid>
            <Grid item xs={12} sm={12} md={6} className="contentSection">
              <Title className="ml16">OUR STORY</Title>
              <TextParagrap>
                The world is slowly dying; continuous wars, plagues, and strife
                seem to be ravaging the earth. Humans no longer remember what it
                meant to have fun, be happy, and be creative, and this has
                turned into a gloomy dark place. Almost everyone has given up.
                In the Kanemiverse, an Elite group of people from various life
                works has taken it upon themselves to restore LIGHT (fun,
                happiness, tranquility) to the dying gloomy earth. We call them
                "The Firstborns of Kanemi," and hereon, the story continues...
              </TextParagrap>
              <TextParagrap>
                Kanemi will bridge the gap between the Kanemiverse and the dying
                gloomy earth as 5000 NFTs will be set free on the blockchain to
                execute our mission. Owning a Kanemi NFT makes you a citizen of
                the "Kanemiverse."
              </TextParagrap>
              <TextParagrap>It does not end there.</TextParagrap>
              <TextParagrap>
                You will gain access to live events (concerts, recreation, and
                entertainment), artworks, unique merchandise, collectibles, etc.
              </TextParagrap>
              <TextParagrap>
                Our objectives will always be for the benefit of the community,
                and we will work together to create, construct, and innovate.
              </TextParagrap>
              <RoundSection>
                <Link to="/kanemiverse" className="roundcircle">
                  <img src={arrowBackward} alt="" />
                </Link>
                <p>AYUMI ERC404</p>
              </RoundSection>
            </Grid>
          </Grid>
        </Container>
      </Reveal>
    </KanemiversePage>
  );
};
export default Story;
