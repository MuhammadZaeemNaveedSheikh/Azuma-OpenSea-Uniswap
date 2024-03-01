import styled from "styled-components";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";

import { ReactComponent as MenuClose } from "../../assets/images/menuclose.svg";

const ModalContentBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: flex-end;
  }
`;
const ModalInnerContent = styled.div`
  width: 70%;

  @media only screen and (max-width: 960px) {
    width: 100%;
  }
`;
const DialogContent = styled.div`
  width: 100%;

  .pathway-socialLink {
    display: flex;

    a:hover {
      color: #cbcbcb;
    }
  }

  * {
    color: white;
  }

  p,
  h3 {
    font-family: "Jost";
    font-style: normal;
    /* font-weight: 400; */
    font-size: 17px;
    line-height: 27px;
    margin-top: 0;
  }

  h3.mb-0 {
    margin-bottom: 0;
  }

  ul.dotul li {
    /* display: inline-flex;
    justify-content: flex-start;
    align-items: content;
    flex-direction: column ; */
  }

  ul.dotul li::before {
    content: "";
    width: 4px;
    height: 4px;
    border-radius: 10px;
    margin-right: 10px;
    background-color: white;
    display: inline-block;
  }
`;
const PathwayItemImage = styled.div`
  width: 30%;

  @media only screen and (max-width: 960px) {
    width: 100%;
    text-align: end;
  }

  .pathImage {
    width: auto;
    height: 100%;
    max-height: 550px;
    position: absolute;
    bottom: 20px;
    right: 0;

    @media only screen and (max-width: 960px) {
      position: relative !important;
      bottom: unset;
      right: unset;
      width: 100% !important;
      height: auto !important;
      max-height: unset !important;
    }
  }
`;

const ModalTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .pathwayNumber {
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
    margin-right: 10px;
    /* height: 104px; */
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
  }
  .pathwayTitle {
    font-family: "Jost";
    font-style: normal;
    font-weight: 600;
    font-size: 21px;
    line-height: 27px;
    text-transform: capitalize;
    color: #ffffff;
  }
`;

const IconCloseButton = styled(IconButton)`
  position: absolute !important;
  top: 8px !important;
  right: 8px !important;

  b {
    margin-right: 8px;
    font-family: "Jost";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 27px;
    color: #ffffff;
    text-transform: capitalize !important ;
  }

  svg,
  svg * {
    fill: white;
  }
`;

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h2">
        {children}
        {onClose ? (
          <IconCloseButton onClick={onClose}>
            <Hidden only={["xs", "sm"]}>
              <b>Close</b>
            </Hidden>
            <MenuClose />
          </IconCloseButton>
        ) : null}
      </Typography>
    </MuiDialogTitle>
  );
});

// const DialogContent = withStyles((theme: Theme) => ({
//   root: {
//     padding: theme.spacing(2),
//   },
// }))(MuiDialogContent);

interface IWallet {
  open: boolean;
  setOpen: (open: boolean) => void;
  pathwayNumber: any;
  title: any;
  ModelInfo: () => JSX.Element;
  pathwayBoxImage: string;
}
const PathwayModal: React.FC<IWallet> = ({
  open,
  setOpen,
  pathwayNumber,
  title,
  ModelInfo,
  pathwayBoxImage,
}) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog
      onClose={handleClose}
      fullWidth={true}
      maxWidth="lg"
      aria-labelledby="customized-dialog-title"
      open={open}
      className="homePageModal journeyPageModal pathwayPageModal"
    >
      <ModalContentBox>
        <ModalInnerContent>
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            <ModalTitle>
              <span className="pathwayNumber">
                {pathwayNumber < "10" ? `0${pathwayNumber}` : pathwayNumber}
              </span>
              <span className="pathwayTitle">{title}</span>
            </ModalTitle>
          </DialogTitle>

          <DialogContent>
            <ModelInfo />
          </DialogContent>
        </ModalInnerContent>
        <PathwayItemImage>
          <img className="pathImage " src={pathwayBoxImage} alt="" />
        </PathwayItemImage>
      </ModalContentBox>
    </Dialog>
  );
};
export default PathwayModal;
