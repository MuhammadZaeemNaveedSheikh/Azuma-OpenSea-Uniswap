import { useEffect } from "react";
import { Grid, Container } from "@material-ui/core";
import styled from "styled-components";
import {
  img1,
  img2,
  img4,
  img5,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img24,
  img25,
  img26,
  img27,
  img28,
} from "../../assets/images/nfts";

// @ts-ignore
import Reveal from "react-reveal/Reveal";

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
  .grid {
    gap: 10px;
  }
  .grid-sm img {
    width: 92px;
    height: 92px;
  }
  .grid2-lg {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 4px;
    margin-right: 4px;
    img {
      width: 295px;
      height: 295px;
    }
  }
  .grid-box {
    width: 50%;
  }
  .reversed img {
    margin-left: -25px;
  }
  .row {
    @media (min-width: 1280px) {
      flex-wrap: nowrap !important;
    }
  }
  @media (max-width: 1280px) {
    .grid-sm img {
      margin-right: 10px;
    }
    .grid2.grid-box {
      justify-content: center !important;
    }
    .grid-lg {
      display: flex;
      justify-content: center;
      margin-bottom: 5px;
    }
    .middle {
      display: none;
    }
    .reversed img {
      margin-left: 0px !important;
    }
  }
  @media (max-width: 959px) {
    .grid-box {
      width: 100%;
      flex-direction: column;
    }
    .grid-sm {
      flex-direction: row !important;
      img {
        margin-right: 10px;
        width: 100%;
        height: 100%;
        max-width: 92px;
        :nth-child(3) {
          margin-right: 0px;
        }
      }
    }
    .grid-lg img {
      width: 100%;
      height: 100%;
    }
  }
  @media (max-width: 350px) {
    .grid-sm img {
      width: 72px;
      height: 72px;
    }
    .grid2-lg img {
      width: 240px;
      height: 240px;
      margin-bottom: 10px;
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
`;

const first_box = [img17, img12, img16, img8, img15, img9, img26];
const second_box = [img11, img28, img27, img18, img13, img19, img10];
const third_box = [img1, img25, img2, img14, img4, img24, img5];
const fourth_box = [img4, img24, img5, img20, img21, img7, img22];

const GridBox = ({
  reverse,
  imgs,
}: {
  reverse: boolean;
  imgs: Array<string>;
}) => {
  return (
    <Grid
      container
      item
      xs={12}
      className="grid grid-box"
      direction={reverse ? "row-reverse" : "row"}
      justifyContent="center"
      alignItems="center"
    >
      <Grid xs={12} md={4} lg={2} item className="grid grid-sm">
        <img src={imgs[0]} alt="" />
        <img src={imgs[1]} alt="" />
        <img src={imgs[2]} alt="" />
      </Grid>
      <Grid xs={12} md={4} lg={2} item className="grid grid-sm">
        <img src={imgs[3]} alt="" />
        <img src={imgs[4]} alt="" />
        <img src={imgs[5]} alt="" />
      </Grid>
      <Grid
        xs={12}
        md={12}
        lg={6}
        item
        className={`grid grid-lg ${reverse ? "reversed" : ""}`}
      >
        <img src={imgs[6]} alt="" />
      </Grid>
    </Grid>
  );
};

const GridBox2 = ({
  justify,
  imgs,
}: {
  justify: "flex-start" | "center" | "flex-end";
  imgs: Array<string>;
}) => {
  return (
    <Grid
      container
      item
      xs={12}
      direction="row"
      className="grid2 grid-box"
      justifyContent={justify}
      alignItems="center"
    >
      <Grid xs={12} md={4} lg={2} item className="grid grid-sm">
        <img src={imgs[0]} alt="" />
        <img src={imgs[1]} alt="" />
        <img src={imgs[2]} alt="" />
      </Grid>
      <Grid
        xs={12}
        md={12}
        lg={7}
        item
        className="grid grid2-lg"
        justifyContent="center"
        alignItems="center"
      >
        <img src={imgs[3]} alt="" />
      </Grid>
      <Grid xs={12} md={4} lg={2} item className="grid grid-sm">
        <img src={imgs[4]} alt="" />
        <img src={imgs[5]} alt="" />
        <img src={imgs[6]} alt="" />
      </Grid>
    </Grid>
  );
};

const Nfts = () => {
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
    document.body.classList.add("secondary-color");
    return () => {
      document.body.classList.remove("secondary-color");
    };
  }, []);
  return (
    <ContentArea>
      <Reveal effect="fadeInUp">
        <Container maxWidth="lg">
          <Grid
            container
            direction="row"
            justify-content="center"
            alignItems="center"
            className="contentdata"
          >
            <Grid item xs={12} sm={12} md={12}>
              <Title className="ml16">AYUMI NFTs</Title>
              <TextParagrap>
                An elite group of individuals from various professional works
                with deep-rooted enthusiasm and experience in the crypto sphere
                founded Ayumi.
              </TextParagrap>
            </Grid>
          </Grid>
          <Container maxWidth="lg">
            <Grid
              container
              direction="row"
              spacing={1}
              justifyContent="center"
              alignItems="center"
              className="row"
            >
              <GridBox reverse={false} imgs={first_box} />
              <Grid
                xs={12}
                md={1}
                item
                direction="column"
                className="grid-sm middle"
              >
                <img src={img17} alt="" />
                <img src={img12} alt="" />
                <img src={img16} alt="" />
              </Grid>
              <GridBox reverse={true} imgs={second_box} />
            </Grid>
          </Container>
          <Container maxWidth="lg">
            <Grid
              container
              direction="row"
              spacing={1}
              justifyContent="center"
              alignItems="center"
              className="row"
            >
              <GridBox2 imgs={third_box} justify="flex-end" />
              <Grid
                xs={12}
                md={1}
                item
                direction="column"
                className="grid2 middle"
              >
                <img src={img17} alt="" />
                <img src={img12} alt="" />
                <img src={img16} alt="" />
              </Grid>
              <GridBox2 imgs={fourth_box} justify="flex-start" />
            </Grid>
          </Container>
        </Container>
      </Reveal>
    </ContentArea>
  );
};

export default Nfts;
