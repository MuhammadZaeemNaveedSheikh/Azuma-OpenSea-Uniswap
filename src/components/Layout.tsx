import styled from "styled-components";
import Header from "./Header";
import ScrollToTop from "./ScrollToTop";

const MainArea = styled.main`
  /* height: calc(100vh - 130px); */

  /* &.mint-page {
    height: calc(100vh - 120px);
  }
  &.decree-page {
    height: calc(100vh - 88px);
  } */
`;

const MainParent = styled.div`
  font-family: "Jost" !important;
  &.darkThemeMode {
    background-color: #000000;
  }
  &.secondaryThemeMode {
    background-color: #3835c2;
  }

  &.whiteContentMode {
    //Header

    .headerEleSection {
      background-color: transparent !important;
    }

    * {
      color: white;
    }
    .white-button {
      background-color: #3835c2 !important;
      color: white;

      &:hover {
        background-color: #630004 !important;
      }
    }

    svg,
    svg * {
      fill: white !important;
    }

    .twitter-logo path {
      stroke: white !important;
      fill: transparent !important;
    }

    .social-media-icons {
      z-index: 2;
      position: relative;
      li {
        background-color: rgba(232, 232, 232, 0.2) !important;
      }

      a:hover {
        svg,
        svg * {
          fill: #3835c2 !important;
        }
      }
    }
  }
`;

const Layout: React.FC<any> = ({ children, themeMode, pageName }) => {
  let themeName = "";

  if (themeMode === "dark") {
    themeName = "darkThemeModer whiteContentMode";
  } else if (themeMode === "secondary") {
    themeName = "secondaryThemeMode whiteContentMode";
  } else {
    themeName = "";
  }

  return (
    <MainParent className={`mainContainer ${themeName}`}>
      <ScrollToTop />
      <Header />
      <MainArea className={pageName}>{children}</MainArea>
    </MainParent>
  );
};

export default Layout;
