import React from "react";
import { Grid, Button, Container, Hidden } from "@material-ui/core";
import styled from "styled-components";
import ConnectWalletModal from "../../components/connect-wallet-modal";
// @ts-ignore
import Reveal from "react-reveal/Reveal";
import mainBg from "../../assets/images/home/mainbgimage.png";
import { ReactComponent as Questionmark } from "../../assets/images/home/questionmark.svg";
import { ReactComponent as OpenSeaLogo } from "../../assets/images/opensea.svg";
import { ReactComponent as UniSwapLogo } from "../../assets/images/uniswap.svg";
import { Link } from "react-router-dom";
import { TextContent } from "./content";

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
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin-top: 30px;
    button:first-child {
      margin-right: 30px;
    }
    @media (max-width: 959px) {
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
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

      & svg {
        path {
          fill: #ffffff;
        }
      }
    }

    &:hover {
      background-color: #29278f;
    }
    @media (max-width: 470px) {
      width: 100%;
      margin-bottom: 10px;
    }
  }
  .get-button {
    width: 191px;
    height: 51px;
    border: 1px solid #000000;
    text-transform: none;

    & a {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
    }

    @media (max-width: 470px) {
      width: 100%;
    }
    a {
      color: #000000;
    }
  }
  .text-home {
    @media (max-width: 959px) {
      margin-top: 20px;
    }
    p {
      @media (max-width: 959px) {
        margin: 0 0 16px 0;
        max-width: unset;
      }
    }
  }
`;
const MainBackground = styled.div`
  background-image: url(${mainBg});
  width: 100%;
  height: 524px;
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 1200px) {
    background-size: contain;
  }
  @media (max-width: 767px) {
    height: 300px;
  }
  @media (max-width: 375px) {
    height: 146px;
  }
`;
const RoundSec = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  .round {
    width: 24px;
    height: 24px;
    background-color: #000000;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }
  h4 {
    font-family: "Jost";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 27px;
    text-transform: uppercase;
    color: #000000;
  }
  &:hover {
    .round {
      background-color: #3835c2;
    }
    h4 {
      color: #3835c2;
    }
  }
`;

const Home = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Reveal effect="fadeInUp">
      <Dashbord>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12}>
              <MainBackground />
            </Grid>
            <div className="text-home">
              <Hidden only={["md", "lg", "xl"]}>
                <TextContent />
              </Hidden>
            </div>
            <Grid item xs={12} className="buttonSection">
              <div></div>
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
              <Link to="/homecontent" className="roundlink">
                <RoundSec>
                  <div className="round">
                    <Questionmark />
                  </div>
                  <h4>What is Ayumi?</h4>
                </RoundSec>
              </Link>
            </Grid>
          </Grid>
        </Container>
        <ConnectWalletModal open={open} setOpen={setOpen} />
      </Dashbord>
    </Reveal>
  );
};
export default Home;
