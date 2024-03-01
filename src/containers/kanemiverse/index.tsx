import React, { useEffect } from "react";
import { Grid, Container } from "@material-ui/core";
import styled from "styled-components";
// @ts-ignore
import Reveal from "react-reveal/Reveal";
import animeBoy from "../../assets/images/kanemiverse/anime_boy.png";
import arrowForward from "../../assets/images/kanemiverse/arrow-forward.svg";
import { Link } from "react-router-dom";

const KanemiversePage = styled.div`
  margin-top: 80px;
  @media (min-width: 959px) {
    margin-top: 60px;
  }
  @media (min-width: 1280px) {
    .MuiContainer-root {
      padding-right: 0;
      margin-left: auto;
      margin-right: auto;
      width: unset;
    }
  }
  .MuiContainer-root {
    @media (max-width: 959px) {
      padding-left: 0;
      padding-right: 0;
    }
    @media (min-width: 600px) {
      padding-right: 0;
    }
  }
  .MuiGrid-container {
    align-items: center;
    @media (max-width: 959px) {
      flex-direction: column-reverse;
      align-items: flex-start;
    }
  }
  .fullwidth {
    @media (max-width: 959px) {
      width: 100%;
    }
  }
  @media (max-width: 959px) {
    .contentSection {
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
  margin: 0 16px 16px 0;
  @media (max-width: 959px) {
    br {
      display: none;
    }
    margin: 0 0 16px 0;
    max-width: unset;
  }
  @media (min-width: 1441px) {
    max-width: unset;
  }
`;
const RoundSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 35px 0px 35px 0px;
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
    padding-right: 22px;
  }
`;
const ImgSection = styled.div`
  text-align: right;
  img {
    @media (min-width: 959px) {
      max-width: 60%;
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
const Lore = () => {
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
            <Grid item xs={12} sm={12} md={6} className="contentSection">
              <Title className="ml16">AYUMI ERC404</Title>
              <TextParagrap>
                Kanemi is not just a name but an "Elite Movement."
                <br />
                <b>A Web-3 movement forged by all and for all.</b>
              </TextParagrap>
              <TextParagrap>
                Kanemi NFT starts with a collection of 5,000 unique PFP NFTs
                deployed on the Ethereum blockchain that grants its holders
                membership into the "Kanemiverse". Our collection combines
                anime-themed character traits with an infusion of the K-pop
                style. Kanemi NFT holders will receive access to future
                collections, exclusive NFT drops, entertainment, merchandise,
                etc. Kanemi is your DNA within the "Kanemiverse"
              </TextParagrap>
              <TextParagrap>
                The "Kanemiverse" is a unique decentralized space in the
                metaverse that houses an elite community of artists, creators,
                NFT/Crypto lovers, investors, developers, core team, and
                well-seasoned investors forging a Web3 culture movement.
              </TextParagrap>
              <RoundSection>
                <Link to="/ourstory" className="roundcircle">
                  <img src={arrowForward} alt="" />
                </Link>
                <p>OUR STORY</p>
              </RoundSection>
            </Grid>
            <Grid item xs={12} sm={12} md={6} className="fullwidth">
              <ImgSection>
                <img src={animeBoy} alt="" />
              </ImgSection>
            </Grid>
          </Grid>
        </Container>
      </Reveal>
    </KanemiversePage>
  );
};
export default Lore;
