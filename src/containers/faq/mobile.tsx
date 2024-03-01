import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import styled from "styled-components";

const AccordionArea = styled.div`
  & p {
    font-family: "Jost";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 27px;
    color: #000000;
    margin-bottom: 30px;
  }
  & img {
    max-width: 100%;
    margin: 20px 0px;
  }
  .MuiAccordionSummary-root.Mui-expanded {
    border-bottom: 0;
  }
`;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: "33.33%",
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  }),
);

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <AccordionArea className="accordionArea">
      <div className={classes.root}>
        <Accordion expanded={expanded === "panel0"} onChange={handleChange("panel0")}>
          <AccordionSummary expandIcon={<AddIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
            <Typography variant="h2" className={classes.heading}>
              What is Kanemi?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Kanemi is not just a name but the first "Elite Movement." within the metaverse whose origin is the Kanemiverse. Kanemi NFT
              starts with a collection of 5,000 unique PFP NFTs deployed on the ethereum blockchain that grants its holders membership into
              the "Kanemiverse."
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
          <AccordionSummary expandIcon={<AddIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
            <Typography variant="h2" className={classes.heading}>
              What is the theme of the Kanemi NFT?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Anime themed with a fusion of the K-pop style.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
          <AccordionSummary expandIcon={<AddIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
            <Typography variant="h2" className={classes.heading}>
              What is the total supply of the Kanemi NFT collection?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>The first NFT collection has a total supply of 5,000.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
          <AccordionSummary expandIcon={<AddIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
            <Typography variant="h2" className={classes.heading}>
              Where can I buy the Kanemi NFT?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              At first, users can mint on the kanemi website but after the public sales, Kanemi NFTs will be traded on secondary NFT markets
              such as opensea, looksrare etc.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")}>
          <AccordionSummary expandIcon={<AddIcon />} aria-controls="panel4bh-content" id="panel4bh-header">
            <Typography variant="h2" className={classes.heading}>
              Will I be contacted by any Community Admin or Team Member?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              No, you are advised to disregard any messages that come from anyone who claims to be a team member or admin. Do not also click
              on any unofficial links claiming to be Kanemi.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === "panel5"} onChange={handleChange("panel5")}>
          <AccordionSummary expandIcon={<AddIcon />} aria-controls="panel4bh-content" id="panel4bh-header">
            <Typography variant="h2" className={classes.heading}>
              What does it mean to be Kivilized?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>The word "kivilized" only exists in the Kanemiverse and it refers to the kanemi civilization.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === "panel6"} onChange={handleChange("panel6")}>
          <AccordionSummary expandIcon={<AddIcon />} aria-controls="panel4bh-content" id="panel4bh-header">
            <Typography variant="h2" className={classes.heading}>
              How do I become a part of Kanemiverse?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>The first way to becoming a citizen of Kanemiverse is holding any of the 5,000 Kanemi NFT</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === "panel7"} onChange={handleChange("panel7")}>
          <AccordionSummary expandIcon={<AddIcon />} aria-controls="panel4bh-content" id="panel4bh-header">
            <Typography variant="h2" className={classes.heading}>
              What's next for Kanemi?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>You can check the Kanemi Pathway, where all these are outlined clearly.</Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </AccordionArea>
  );
}
