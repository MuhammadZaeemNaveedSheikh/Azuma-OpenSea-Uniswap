import React, { useEffect } from "react";
import { Grid, Container } from "@material-ui/core";
import styled from "styled-components";
// import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
// import Hidden from "@material-ui/core/Hidden";
import PathwayModal from "../../components/pathway-modal";
// @ts-ignore
import Reveal from "react-reveal/Reveal";

import pathwayKanemiVault from "../../assets/images/pathways/kanemivalut.png";
import pathwayExclusiveAirdrops from "../../assets/images/pathways/exclusiveairdrops.png";
import pathwayMerchandise from "../../assets/images/pathways/merchandise.png";
import pathwayLiveEvents from "../../assets/images/pathways/liveevents.png";
// import pathwayMetaverse from "../../assets/images/pathways/metaverse.png";
// import pathwayDao from "../../assets/images/pathways/dao.png";
// import pathwayCommunity from "../../assets/images/pathways/community.png";
// import pathwayFuture from "../../assets/images/pathways/future.png";
// import { ReactComponent as Uparrow } from "../../assets/images/team/uparrow.svg";
import { ReactComponent as RightArrow } from "../../assets/images/pathways/right-arrow.svg";

const ContentArea = styled.div`
  padding: 40px 0px;
`;
const Title = styled.h1`
  font-family: "Jost";
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 81px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 40px;

  .letter {
    display: inline-block;
    line-height: 1em;
  }
`;

const PathwayBox = styled.button`
  width: 100%;
  /* margin-bottom: 30px; */
  height: 243px;
  border: 1px solid #000000;
  background: #f8f8f8;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  transform: skewX(-6deg);
  position: relative;

  * {
    transform: skewX(3deg);
  }

  .pathwayImage {
    position: absolute;
    bottom: 0;
    right: 0;
    width: auto;
    height: 95%;
    object-fit: contain;
    z-index: -1;
  }

  .initImage {
    display: inline-block;
    opacity: 0.6;
  }
  .hoverImage {
    display: none;
  }

  &:hover {
    background: #3835c2;
    cursor: pointer;

    .innerBox {
      .numberTitle {
        text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
          1px 1px 0 #fff;
      }
      .pathwayTitle {
        color: #fff;

        svg {
          filter: brightness(0) invert(1);
          transition: left 0.2s ease-in-out;
          position: relative;
          left: 10px;
          top: 2px;
        }
      }
    }

    .initImage {
      display: none;
    }
    .hoverImage {
      display: inline-block;
      opacity: 1;
    }
  }

  .innerBox {
    padding: 15px 15px 15px 25px;
    width: 70%;

    @media only screen and (max-width: 992px) {
      width: 100%;
    }

    .numberTitle {
      font-family: "Jost";
      width: 95px;
      height: 104px;
      margin: 0 0;
      font-style: normal;
      font-weight: 700;
      font-size: 72px;
      line-height: 104px;
      color: #f8f8f8;
      text-transform: capitalize;
      /* height: 104px; */
      text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
        1px 1px 0 #000;
    }
    .pathwayTitle {
      font-style: normal;
      font-weight: 600;
      font-size: 17px;
      line-height: 27px;
      text-transform: capitalize;
      color: #464646;
      text-align: left;
      white-space: nowrap;

      @media only screen and (max-width: 992px) {
        white-space: normal !important;
      }

      span {
        font-style: inherit;
        font-weight: inherit;
        font-size: inherit;
        line-height: inherit;
        text-transform: inherit;
        color: inherit;
        text-align: inherit;
        white-space: inherit;
      }

      svg {
        position: relative;
        left: 5px;
        top: 2px;
        transition: left 0.2s ease-in-out;
      }
    }
  }

  .pathwayImage {
    /* width: 112px;
    height: 175px; */
  }
`;

// const DetailsBTN = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   align-items: flex-start;
//   flex-direction: column;

//   &:last-child {
//     margin-left: 30px;
//   }

//   a {
//     font-family: "Jost";
//     font-style: normal;
//     font-weight: 600;
//     font-size: 15px;
//     line-height: 22px;
//     text-transform: lowercase;
//     color: white;
//     text-align: center;
//     margin: 0 0 10px 0;
//     display: flex;
//     justify-content: center;
//     align-items: center;

//     &:hover {
//       cursor: pointer;
//       color: white;
//       svg,
//       svg * {
//         stroke: #cbcbcb;
//       }
//     }
//     &:last-child {
//       margin-bottom: 0;
//     }
//     svg {
//       margin-left: 10px;
//       path {
//         stroke: #ffffff;
//       }
//     }
//   }
// `;

const PathWay1 = () => {
  return (
    <p>
      Kanemi will be put aside 7.5% of Royalties for future project needs within
      Kanemiverse. As a movement, we will keep forging ahead, creating an impact
      with the help of the Elites who have been “kivilized” to ensure we stand
      apart from the rest.
    </p>
  );
};
const PathWay2 = () => {
  return (
    <p>
      To reward the Kanemi NFT holders, who are considered the "Firstborns of
      the "Kanemiverse," Special edition NFTs will be airdropped to them. These
      exclusive airdrops will grant holders access to special features/events
      within the Kanemiverse.{" "}
    </p>
  );
};
const PathWay3 = () => {
  return (
    <>
      <p>
        Kanemi is an Elite Movement within the metaverse via Kanemivese, which
        will be extended to the physical world as our core reason to exist is to
        restore light to the dark, gloomy earth.
      </p>
      <p>
        Our movement comprises elite professionals experienced in various fields
        of arts who would pull their skills and passion into a tangible form by
        floating our merchandise within kanemiverse and the physical world. Our
        merchandise will offer a lot ranging from wearables to 3D collectibles.
      </p>
    </>
  );
};
const PathWay4 = () => {
  return (
    <p>
      Kanemi will be hosting a live event soon for all Kanemi "Firstborns" -
      holders of the first NFT collection in the physical world. These events
      could be in the form of music, live concerts, live meetups, art
      exhibitions, etc. Kanemi will relay all events information to the
      community soon.
    </p>
  );
};
// const PathWay5 = () => {
//   return (
//     <>
//       <p>
//         The Metaverse is all around us. This has motivated us to create the
//         first-ever elite movement called Kanemi, which has an elite community in
//         the Metaverse called Kanemiverse.
//       </p>

//       <p>
//         The Kanemiverse will be fully developed and designed to give all Kanemi
//         NFT holders the ultimate metaverse experience.
//       </p>

//       <p>
//         Kanemiverse will be exploring the following within the Metaverse:
//         <br />
//         i. Lands in the Metaverse
//         <br />
//         ii. Collaborations within the Metaverse
//         <br />
//         iii. Host virtual events
//       </p>
//       <p>
//         We believe that we will evolve our ecosystem together with the future
//         developments in the near future.
//       </p>
//     </>
//   );
// };
// const PathWay6 = () => {
//   return (
//     <>
//       <p>
//         Kanemi DAO will be launched to allow users to vote on certain
//         developments within Kanemiverse.
//       </p>

//       <h3 className="mb-0">1. FULL IP RIGHTS</h3>
//       <p>
//         As an owner of the Kanemi NFT, you will be eligible for full IP rights.
//       </p>

//       <h3 className="mb-0">2. Kanemi LOTTERY‍</h3>
//       <p>
//         We will launch the Kanemi Lottery sometime in the future. This event
//         will host competitions, games, giveaways, etc.{" "}
//       </p>
//     </>
//   );
// };
// const PathWay7 = () => {
//   return (
//     <>
//       <p>
//         As a movement, Community is the core of what we stand for. We are
//         building a solid community in the metaverse called the "Kanemiverse". We
//         also have several communities on social media:
//       </p>
//       <div className="pathway-socialLink">
//         <DetailsBTN>
//           <a
//             href="https://twitter.com/kaneminft"
//             target="_blank"
//             rel="noreferrer"
//           >
//             Twitter
//             <Uparrow />
//           </a>
//           {/* <Link href="" to={''}>
//             instagram
//             <Uparrow />
//           </Link> */}
//         </DetailsBTN>
//         <DetailsBTN>
//           <a
//             href="https://discord.gg/gQmbq9QN"
//             target="_blank"
//             rel="noreferrer"
//           >
//             Discord
//             <Uparrow />
//           </a>
//           {/* <Link href="" to={''}>
//             opensea
//             <Uparrow />
//           </Link> */}
//         </DetailsBTN>
//       </div>
//     </>
//   );
// };
// const PathWay8 = () => {
//   return (
//     <>
//       <p>
//         We are looking at venturing into the following areas as develop Kanemi
//         and the Kanemiverse:
//       </p>
//       <ul className="dotul">
//         <li>Games</li>
//         <li>Platform Token</li>
//         <li>Partnerships</li>
//         <li>More...</li>
//       </ul>
//     </>
//   );
// };

interface PathwayItemContent {
  id: number;
  title: string;
  Content: () => JSX.Element;
  pathwayImage: string;
}

const modalJson: PathwayItemContent[] = [
  {
    id: 1,
    title: "Kanemi Vault",
    Content: PathWay1,
    pathwayImage: pathwayKanemiVault,
  },
  {
    id: 2,
    title: "Exclusive Airdrops",
    Content: PathWay2,
    pathwayImage: pathwayExclusiveAirdrops,
  },
  {
    id: 3,
    title: "Merchandise",
    Content: PathWay3,
    pathwayImage: pathwayMerchandise,
  },
  {
    id: 4,
    title: "Live Events",
    Content: PathWay4,
    pathwayImage: pathwayLiveEvents,
  },
  // {
  //   id: 5,
  //   title: "Into the Metaverse and Beyond",
  //   Content: PathWay5,
  //   pathwayImage: pathwayMetaverse,
  // },
  // {
  //   id: 6,
  //   title: "Kanemi DAO",
  //   Content: PathWay6,
  //   pathwayImage: pathwayDao,
  // },
  // {
  //   id: 7,
  //   title: "Community",
  //   Content: PathWay7,
  //   pathwayImage: pathwayCommunity,
  // },
  // {
  //   id: 8,
  //   title: "Future Projections ",
  //   Content: PathWay8,
  //   pathwayImage: pathwayFuture,
  // },
];
const Journey = () => {
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
    <Reveal effect="fadeInUp">
      <ContentArea>
        <Container maxWidth="lg">
          <Title className="ml16">Ayumi Pathway</Title>
          <Grid container spacing={0}>
            {modalJson.map((item: any, index: any) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  key={item.id}
                  style={{
                    padding: 7.5,
                  }}
                >
                  <PathwayItem {...item} num={index + 1} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </ContentArea>
    </Reveal>
  );
};

interface PathWayItemProps extends PathwayItemContent {
  num: string;
  pathwayBoxImage: string;
}

const PathwayItem = ({
  title,
  Content,
  num,
  pathwayImage,
}: PathWayItemProps) => {
  const [modelOpen, setModalOpen] = React.useState(false);
  return (
    <>
      <PathwayBox
        title={title}
        onClick={() => {
          setModalOpen(true);
        }}
      >
        <div className="innerBox">
          <p className="numberTitle">{num < "10" ? `0${num}` : num}</p>
          <h3 className="pathwayTitle">
            <span>{title}</span>
            <RightArrow />
          </h3>
        </div>
        <img className="initImage pathwayImage " src={pathwayImage} alt="" />
        <img className="hoverImage pathwayImage" src={pathwayImage} alt="" />

        {/* <Content /> */}
      </PathwayBox>
      <PathwayModal
        pathwayNumber={num}
        title={title}
        pathwayBoxImage={pathwayImage}
        ModelInfo={Content}
        open={modelOpen}
        setOpen={setModalOpen}
      />
    </>
  );
};
export default Journey;
