/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Hidden from "@material-ui/core/Hidden";
import logo from "../assets/images/logo.png";
import Menu from "./Menu";
import { Typography, Grid, Container } from "@material-ui/core";

import { ReactComponent as TwitterLogo } from "../assets/images/twitter.svg";
import { ReactComponent as TelegramLogo } from "../assets/images/telegram.svg";
import { ReactComponent as DexTools } from "../assets/images/dextools.svg";
import { ReactComponent as OpenseaLogo } from "../assets/images/opensea.svg";

const HeaderSection = styled.div`
  padding-top: 24px;
  position: sticky;
  top: 0px;
  z-index: 999;
  background: #ebe3e6;

  .MuiTypography-noWrap {
    overflow: unset;
  }

  .MuiTypography-h6 {
    font-size: unset;
    line-height: unset;

    a {
      display: inline-block;
    }
  }
`;
const SocialMedia = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 4px;
  @media (max-width: 767px) {
    text-align: center;
    margin: 20px 0 0;
  }

  & > li {
    width: 55px;
    height: 32px;
    text-align: center;
    background: rgba(232, 232, 232, 0.2);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    a {
      display: flex;
    }
    :last-child {
      margin-right: 0;
    }
    &:hover {
      background: rgba(201, 201, 201, 0.2);

      & svg {
        path {
          fill: #3835c2;
        }
      }
      .twitter-logo {
        & svg {
          path {
            stroke: #3835c2 !important;
            fill: transparent !important;
          }
        }
      }
    }
    @media (max-width: 420px) {
      padding: 7px;
      margin-right: 15px;
      & svg {
        width: 30px;
      }
      & img {
        width: 30px !important;
      }
    }
    @media (max-width: 340px) {
      & svg {
        width: 26px;
      }
      & img {
        width: 26px !important;
      }
    }
  }
`;
const MenuArea = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  column-gap: 24px;

  .menutext {
    font-family: "Jost";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 27px;
    text-transform: uppercase;
    color: #000000;
  }

  & button {
    &:hover {
      background-color: transparent;
    }
  }
`;

const Header = () => {
  return (
    <HeaderSection className="headerEleSection">
      <Container
        maxWidth="lg"
        style={{ borderBottom: "solid 1px", borderBottomColor: "#000000" }}
      >
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs={4} md={3}>
            <Typography variant="h6" noWrap>
              <Link href="#" to={""}>
                <img src={logo} alt="logo" width={128} title="Kanemi" />
              </Link>
            </Typography>
          </Grid>
          <Hidden only={["xs", "sm"]}>
            <Grid item xs={6} md={7}>
              <SocialMedia className="social-media-icons">
                <li>
                  <a
                    href={process.env.REACT_APP_TWITTER}
                    target="_blank"
                    rel="noreferrer"
                    title="twitter"
                    className="twitter-logo"
                  >
                    <TwitterLogo />
                  </a>
                </li>
                <li>
                  <a
                    href={process.env.REACT_APP_TELEGRAM}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <TelegramLogo />
                  </a>
                </li>
                <li>
                  <a
                    href={process.env.REACT_APP_OPENSEA}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <OpenseaLogo />
                  </a>
                </li>
                <li>
                  <a
                    href={process.env.REACT_APP_DEXTOOLS}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <DexTools />
                  </a>
                </li>
              </SocialMedia>
            </Grid>
          </Hidden>
          <Grid item xs={2} md={2}>
            <MenuArea>
              <Hidden only={["xs", "sm"]}>
                <span className="menutext">MENU</span>
              </Hidden>
              <Menu />
            </MenuArea>
          </Grid>
        </Grid>
      </Container>
    </HeaderSection>
  );
};

export default Header;
