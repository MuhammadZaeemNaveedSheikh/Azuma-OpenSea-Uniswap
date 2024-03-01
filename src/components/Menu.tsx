import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components";
import logo from "../assets/images/logo.png";
import ConnectWalletModal from "../components/connect-wallet-modal";
import { ReactComponent as TwitterLogo } from "../assets/images/twitter.svg";
import { ReactComponent as TelegramLogo } from "../assets/images/telegram.svg";
import { ReactComponent as DexTools } from "../assets/images/dextools.svg";
import { ReactComponent as OpenseaLogo } from "../assets/images/opensea.svg";
import { ReactComponent as MenuClose } from "../assets/images/menuclose.svg";
import { ReactComponent as MenuOpen } from "../assets/images/menuopen.svg";

const useStyles = makeStyles({
  root: {
    "& .MuiToolbar-gutters": {
      display: "flex",
      justifyContent: "space-between",
      padding: 0,
    },
    "& .MuiAppBar-root": {
      boxShadow: "unset",
      zIndex: 9,
    },
    "& .MuiIconButton-edgeStart ": {
      marginRight: "-12px",
    },
  },
  drawerPaper: {
    width: 586,
    backgroundColor: "#FFFFFF",
  },
});

const MenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px 24px 0 48px;
  @media (max-width: 959px) {
    margin: 23px 22px 0px 23px;
  }
  & b {
    font-family: "Jost";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 27px;
    text-transform: uppercase;
    color: #000000;
    margin-right: 24px;
  }
  & button {
    padding: 0;
    &:hover {
      background-color: transparent;
    }
  }
`;
const MenuList = styled.ul`
  & li {
    padding-bottom: 34px;

    &:last-child {
      padding-bottom: 0;
    }
  }

  pointer-events: none;

  li {
    pointer-events: none;
  }

  li a {
    pointer-events: auto;
  }

  &:hover > li a {
    color: #c9c9c9;
  }

  & li a:hover {
    color: #000000;
    margin-left: 20px;
  }

  & a {
    font-family: "Jost";
    font-style: normal;
    font-weight: 700;
    font-size: 42px;
    line-height: 61px;
    text-transform: uppercase;
    color: #000000;
    transition: 0.6s;
  }

  @media (max-width: 959px) {
    & li {
      padding-bottom: 29px;

      &:last-child {
        padding-bottom: 47px;
      }
    }

    & a {
      font-size: 33px;
      line-height: 48px;
    }
  }
`;
const Logo = styled(Link)`
  font-size: 20px;
  color: var(--colorHead);
  font-weight: 700;
  display: inline-block;
  & span {
    color: var(--themeColor);
  }
`;
const SocialMedia = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 4px;
  justify-content: left;
  padding: 0 0 25px 48px;
  @media (max-width: 959px) {
    text-align: center;
    padding: 0 0 23px 23px;
  }
  & > li {
    width: 55px;
    height: 32px;
    text-align: center;
    background: #f7f7f7;
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
    @media (max-width: 959px) {
    }
  }
`;
const MainMenu = styled.div`
  padding: 78px 0 78px 48px;

  @media (max-width: 959px) {
    padding: 47px 22px 47px 23px;
  }

  .connectButton {
    display: none;

    @media (max-width: 959px) {
      display: block;
    }

    .MuiButton-root {
      padding: 12px 0;
      width: 100%;
      background-color: #3835c2;
      font-family: "Jost";
      font-style: normal;
      font-weight: 600;
      font-size: 15px;
      line-height: 27px;
      text-transform: uppercase;
      color: #ffffff;
      border-radius: 0;

      &:hover {
        background-color: #630004;
      }
    }
  }
`;
const Menu = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="relative" color="transparent">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx("", open && "")}
          >
            <MenuOpen />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
        BackdropProps={{ invisible: false }}
      >
        <MenuHeader>
          <Logo to="/">
            <img src={logo} width={128} alt="" />
          </Logo>

          <IconButton onClick={handleDrawerClose}>
            <Hidden only={["xs", "sm"]}>
              <b>CLOSE</b>
            </Hidden>
            <MenuClose />
          </IconButton>
        </MenuHeader>
        <MainMenu onClick={handleDrawerClose}>
          <MenuList>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/erc-404">AYUMI ERC 404</Link>
            </li>
            <li>
              <Link to="/coinomics">COINOMICS</Link>
            </li>
            <li>
              <Link to="/nfts">AYUMI NFTs</Link>
            </li>
            <li>
              <Link to="/pathway">PATHWAY</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
          </MenuList>
        </MainMenu>
        {/* <ConnectWalletModal open={open} setOpen={setOpen} /> */}
        <SocialMedia>
          <li>
            <a
              href="https://twitter.com/kaneminft"
              target="_blank"
              rel="noreferrer"
              className="twitter-logo"
            >
              <TwitterLogo />
            </a>
          </li>
          <li>
            <a
              href="https://discord.gg/gQmbq9QN"
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
      </Drawer>
    </div>
  );
};
export default Menu;
