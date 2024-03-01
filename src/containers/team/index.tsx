import { useEffect } from 'react'
import { Grid, Container } from '@material-ui/core'
import styled from 'styled-components'
// import { Link } from "react-router-dom";
// @ts-ignore
import Reveal from 'react-reveal/Reveal'

import Team1 from '../../assets/images/team/team1.png'
import Team2 from '../../assets/images/team/team2.png'
import Team3 from '../../assets/images/team/team3.png'
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
  .member {
    @media (max-width: 959px) {
      width: 290px;
      margin: 0 auto;
      padding-bottom: 40px;
    }
  }
`
const MemberTitle = styled.h2`
  font-family: 'Jost';
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 35px;
  text-align: center;
  color: #000000;
  margin: 13px 0 5px 0;
`
const TextMember = styled.p`
  font-family: 'Jost';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  color: #7e7e7e;
  margin: 0 0 10px 0;
`
const TextParagrap = styled.p`
  font-family: 'Jost';
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
`
const Title = styled.h1`
  font-family: 'Jost';
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
`
// const DetailsBTN = styled.div`
//   a {
//     font-family: "Jost";
//     font-style: normal;
//     font-weight: 600;
//     font-size: 15px;
//     line-height: 22px;
//     text-transform: lowercase;
//     color: #000000;
//     text-align: center;
//     margin: 0 0 5px 0;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     &:hover {
//       color: #770207;
//       svg {
//         path {
//           stroke: #770207;
//         }
//       }
//     }
//     &:last-child {
//       margin-bottom: 0;
//     }
//     svg {
//       margin-left: 10px;
//     }
//   }
// `;
const Team = () => {
  useEffect(() => {
    // Wrap every letter in a span
    //var textWrapper = "";
    const textWrapper = document.querySelector('.ml16')
    if (textWrapper) {
      textWrapper.innerHTML =
        textWrapper?.textContent?.replace(
          /\S/g,
          "<span class='letter'>$&</span>",
        ) ?? ''
    }

    // @ts-ignore
    anime
      .timeline({ loop: false })
      .add({
        targets: '.ml16 .letter',
        translateY: [-100, 0],
        easing: 'easeOutExpo',
        duration: 1400,
        delay: (el: any, i: number) => 30 * i,
      })
      .add({
        targets: '.ml16',
        // opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 1000,
      })
  }, [])
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
              <Title className="ml16">Forged by Elites</Title>
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
          <Grid
            container
            direction="row"
            justify-content="center"
            alignItems="center"
            className="contentdata"
          >
            <Grid item xs={12} sm={6} md={4}>
              <div className="member">
                <div>
                  <img src={Team1} alt="" />
                </div>
                <MemberTitle>KG Ginu</MemberTitle>
                <TextMember>Founder</TextMember>
                {/* <DetailsBTN>
                  <Link href="" to={""}>
                    linkedin
                    <Uparrow />
                  </Link>
                  <Link href="" to={""}>
                    twitter
                    <Uparrow />
                  </Link>
                </DetailsBTN> */}
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div className="member">
                <div>
                  <img src={Team2} alt="" />
                </div>
                <MemberTitle>Aira Agacan</MemberTitle>
                <TextMember>Artist</TextMember>
                {/* <DetailsBTN>
                  <Link href="" to={""}>
                    linkedin
                    <Uparrow />
                  </Link>
                  <Link href="" to={""}>
                    twitter
                    <Uparrow />
                  </Link>
                </DetailsBTN> */}
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div className="member">
                <div>
                  <img src={Team3} alt="" />
                </div>
                <MemberTitle>Alex</MemberTitle>
                <TextMember>CMO</TextMember>
                {/* <DetailsBTN>
                  <Link href="" to={""}>
                    linkedin
                    <Uparrow />
                  </Link>
                  <Link href="" to={""}>
                    twitter
                    <Uparrow />
                  </Link>
                </DetailsBTN> */}
              </div>
            </Grid>
          </Grid>
        </Container>
      </Reveal>
    </ContentArea>
  )
}
export default Team
