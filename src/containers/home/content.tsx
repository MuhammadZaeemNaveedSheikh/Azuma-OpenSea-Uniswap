import React, { useEffect } from "react";
import { Grid, Button, Container } from "@material-ui/core";
import styled from "styled-components";
import ConnectWalletModal from "../../components/connect-wallet-modal";
// @ts-ignore
import Reveal from "react-reveal/Reveal";
import { Link } from "react-router-dom";
import bgopacity from "../../assets/images/home/bgimageopacity.svg";
import { ReactComponent as ArrowBackward } from "../../assets/images/kanemiverse/arrow-backward.svg";
import { ReactComponent as OpenSeaLogo } from "../../assets/images/opensea.svg";
import { ReactComponent as UniSwapLogo } from "../../assets/images/uniswap.svg";

const Dashbord = styled.div`
  min-height: calc(100vh - 130px);
  text-align: center;
  display: flex;
  align-items: center;
  padding: 98px 0;
  @media (max-width: 959px) {
    padding: 60px 22px 123px 24px;

    .MuiContainer-root {
      padding: 0;
    }
  }
  & h5 {
    font-weight: 800;
    font-size: 13px;
    line-height: 20px;
    text-transform: uppercase;
    margin-bottom: 30px;
  }
  & button {
    font-family: "Jost";
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 27px;
    text-transform: uppercase;
    color: #000000;
    border-radius: 0;
  }
  .buttonSection {
    text-align: left;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button:first-child {
      margin-right: 30px;
    }
    @media (max-width: 959px) {
      .roundlink {
        position: absolute;
        top: 125px;
      }
    }
  }
  .join-button {
    width: 197px;
    height: 51px;
    background-color: #3835c2;
    color: #ffffff;
    text-transform: none;

    & a {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
    }

    &:hover {
      background-color: #29278f;
    }

    @media (max-width: 460px) {
      width: 100%;
      margin-bottom: 10px;
    }
  }
  .get-button {
    width: 191px;
    height: 51px;
    border: 1px solid #ffffff;
    text-transform: none;

    & a {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
    }

    @media (max-width: 460px) {
      width: 100%;
    }
  }
  .mainbg {
    background-image: url(${bgopacity});
    width: 100%;
    height: 524px;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    filter: saturate(0);
  }
`;

const TextParagrap = styled.p`
  max-width: 575px;
  text-align: left;
  margin: 0 auto 16px;
  font-family: "Jost";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 27px;
  color: #000000;
  @media (max-width: 959px) {
    margin: 0 0 16px 0;
    max-width: unset;
  }
`;
const RoundSec = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  h4 {
    font-family: "Jost";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 27px;
    text-transform: uppercase;
    color: #000000;
    margin: 0;
  }
  .round-data {
    margin-right: 12px;
  }
  &:hover {
    svg {
      transition: 0.6s;
      position: relative;
      left: -5px;
    }
  }
`;

export const TextContent = () => {
  return (
    <>
      <TextParagrap>
        We are "Kanemi" - the first decentralized Elite Movement in the
        metaverse. We originated from the earth, so we cannot give up on our
        dying world. We are an elite community of individuals from all creative
        works of life. We will give our all, and amid the darkness hovering on
        the earth, we will forge our LIGHT to bring restoration.
      </TextParagrap>
      <TextParagrap>
        There is no "I" but "WE," for we all belong to the Web3 culture.
      </TextParagrap>
      <TextParagrap>
        Our vision is to create the first decentralized Elite Movement of
        artists, influencers, creators, developers, singers, and crypto lovers,
        within the metaverse.
      </TextParagrap>
    </>
  );
};

const HomeContent = () => {
  useEffect(() => {
    //
    document.body.classList.add("dark-theme-color");
    return () => {
      document.body.classList.remove("dark-theme-color");
    };
  }, []);

  const [open, setOpen] = React.useState(false);
  return (
    <Reveal effect="fadeInUp">
      <Dashbord>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12} className="mainbg">
              <TextContent />
            </Grid>

            <Grid item xs={12} className="buttonSection">
              <Link to="/" className="roundlink">
                <RoundSec>
                  <div className="round-data">
                    <ArrowBackward />
                  </div>
                  <h4>BACK</h4>
                </RoundSec>
              </Link>
              <div>
                <Button className="join-button">
                  <a
                    href={process.env.REACT_APP_OPENSEA}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <OpenSeaLogo />
                    Buy on OpenSea
                  </a>
                </Button>
                <Button className="get-button">
                  <Link to="/mint">
                    <UniSwapLogo />
                    Buy on Uniswap
                  </Link>
                </Button>
              </div>
              <div></div>
            </Grid>
          </Grid>
        </Container>
        <ConnectWalletModal open={open} setOpen={setOpen} />
      </Dashbord>
    </Reveal>
  );
};
export default HomeContent;
