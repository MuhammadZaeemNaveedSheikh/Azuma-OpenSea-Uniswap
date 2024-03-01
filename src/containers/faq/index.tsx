import React, { useEffect } from 'react'
import styled from 'styled-components'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { Container, Hidden } from '@material-ui/core'

import MobileAccordion from './mobile'

const ContentArea = styled.div`
  padding: 80px 0 70px 0;
  @media (max-width: 959px) {
    padding: 60px 0 50px 0;
  }
  .MuiBox-root-10 {
    padding: 47px 24px 24px 24px;
  }
`
const PageHead = styled.div`
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.12);
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  & h4 {
    font-family: 'Jost';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 27px;
    text-transform: uppercase;
    color: #000000;
    margin: 0;
  }
  @media (max-width: 959px) {
    display: inherit;
  }
`
const Title = styled.h1`
  font-family: 'Jost';
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 81px;
  text-transform: uppercase;
  color: #000000;
  margin: 0;
  min-width: 412px;
  .letter {
    display: inline-block;
    line-height: 1em;
  }
  @media (max-width: 959px) {
    margin-bottom: 20px;
    font-size: 36px;
    line-height: 52px;
    min-width: unset;
  }
`
const TextParagrap = styled.p`
  font-family: 'Jost';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 27px;
  color: #000000;
  margin-top: 0;
`
const SubTitle = styled.h3`
  font-family: 'Jost';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 27px;
  color: #000000;
  margin: 20px 0 20px 0;
`

interface TabPanelProps {
  children?: React.ReactNode
  index: any
  value: any
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'transparent',
    display: 'flex',
    height: 600,
  },
  tabs: {
    minWidth: '270px',
  },
}))

export default function VerticalTabs() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

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
      <Container maxWidth="lg">
        <PageHead>
          <Title className="ml16">FAQ</Title>
          <h4>Have a question? Look here.</h4>
        </PageHead>
        <Hidden only={['xs', 'sm']}>
          <div className={classes.root}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              className={classes.tabs}
            >
              <Tab label="What is Kanemi?" {...a11yProps(0)} />
              <Tab
                label="What is the theme of the Kanemi NFT?"
                {...a11yProps(1)}
              />
              <Tab
                label="What is the total supply of the Kanemi NFT collection?"
                {...a11yProps(2)}
              />
              <Tab label="Where can I buy the Kanemi NFT?" {...a11yProps(3)} />
              <Tab
                label="Will I be contacted by any Community Admin or Team Member?"
                {...a11yProps(4)}
              />
              <Tab
                label="What does it mean to be Kivilized?"
                {...a11yProps(5)}
              />
              <Tab
                label="How do I become a part of Kanemiverse?"
                {...a11yProps(6)}
              />
              <Tab label="What's next for Kanemi?" {...a11yProps(7)} />
            </Tabs>
            <TabPanel value={value} index={0}>
              <SubTitle>What is Kanemi?</SubTitle>
              <TextParagrap>
                Kanemi is not just a name but the first "Elite Movement." within
                the metaverse whose origin is the Kanemiverse. Kanemi NFT starts
                with a collection of 5,000 unique PFP NFTs deployed on the
                ethereum blockchain that grants its holders membership into the
                "Kanemiverse."
              </TextParagrap>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <SubTitle>What is the theme of the Kanemi NFT?</SubTitle>
              <TextParagrap>
                Anime themed with a fusion of the K-pop style.
              </TextParagrap>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <SubTitle>
                What is the total supply of the Kanemi NFT collection?
              </SubTitle>
              <TextParagrap>
                The first NFT collection has a total supply of 5,000.
              </TextParagrap>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <SubTitle>Where can I buy the Kanemi NFT?</SubTitle>
              <TextParagrap>
                At first, users can mint on the kanemi website but after the
                public sales, Kanemi NFTs will be traded on secondary NFT
                markets such as opensea, looksrare etc.
              </TextParagrap>
            </TabPanel>
            <TabPanel value={value} index={4}>
              <SubTitle>
                Will I be contacted by any Community Admin or Team Member?
              </SubTitle>
              <TextParagrap>
                No, you are advised to disregard any messages that come from
                anyone who claims to be a team member or admin. Do not also
                click on any unofficial links claiming to be Kanemi.
              </TextParagrap>
            </TabPanel>
            <TabPanel value={value} index={5}>
              <SubTitle>What does it mean to be Kivilized?</SubTitle>
              <TextParagrap>
                The word "kivilized" only exists in the Kanemiverse and it
                refers to the kanemi civilization.
              </TextParagrap>
            </TabPanel>
            <TabPanel value={value} index={6}>
              <SubTitle>How do I become a part of Kanemiverse?</SubTitle>
              <TextParagrap>
                The first way to becoming a citizen of Kanemiverse is holding
                any of the 5,000 Kanemi NFT
              </TextParagrap>
            </TabPanel>
            <TabPanel value={value} index={7}>
              <SubTitle>What's next for Kanemi?</SubTitle>
              <TextParagrap>
                You can check the Kanemi Pathway, where all these are outlined
                clearly.
              </TextParagrap>
            </TabPanel>
          </div>
        </Hidden>
        <Hidden only={['md', 'lg', 'xl']}>
          <MobileAccordion />
        </Hidden>
      </Container>
    </ContentArea>
  )
}
