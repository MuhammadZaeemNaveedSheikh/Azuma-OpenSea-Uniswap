import styled from 'styled-components'
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import MetaMask from '../../assets/images/metamask.svg'
import WalletConnect from '../../assets/images/walletconnect.svg'
import { ConnectorNames } from 'utils/web3React'
import useAuth from 'hooks/useAuth'

// enum Connectors {
//   metamask = "MetaMask",
//   walletConnect = "WalletConnect",
// }

const ModalTitle = styled.h2`
  font-size: 26px;
  font-family: NeueMachinaUltrabold;
  color: #ffffff;
  margin: 0;
  @media (max-width: 959px) {
    font-size: 18px;
  }
`
// const WalletImge = styled.div`
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   margin-bottom: 15px;

//   img {
//     width: 60px;
//     height: 60px;
//   }
// `;
// const WalletContentText = styled.p`
//   width: 100%;
//   text-align: center;
//   max-width: 280px;
//   width: 100%;
//   margin: 0 auto 40px;

//   @media (max-width: 959px) {
//     margin: 0 auto 10px;
//   }
// `;
// const WalletButton = styled.div`
//   width: 100%;
//   text-align: center;
//   margin: 0 auto 30px;

//   @media (max-width: 959px) {
//     display: none !important;
//   }

//   .join-button {
//     padding: 12px 50px;
//     border-radius: 0;
//     background-color: #770207;
//     color: #ffffff;

//     font-family: "Jost";
//     font-style: normal;
//     font-weight: 600;
//     font-size: 15px;
//     line-height: 27px;
//     text-transform: uppercase;

//     &:hover {
//       background-color: #630004;
//     }

//     @media (max-width: 350px) {
//       width: calc(105px - 15px);
//     }
//   }
// `;

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  })

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string
  children: React.ReactNode
  onClose: () => void
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent)

interface IWallet {
  open: boolean
  setOpen: (open: boolean) => void
}

const ConnectWalletModal: React.FC<IWallet> = ({ open, setOpen }) => {
  const { login } = useAuth()

  // const [showMetaMaskWarnModal, setShowMetaMaskWarnModal ] = useState(false);
  // const [walletName, setWalletName] = useState("");

  const handleClose = () => {
    setOpen(false)
  }

  // const warningModalhandleOpen = (walletName: string) => {
  //   setOpen(false);
  //   setShowMetaMaskWarnModal(true);
  //   setWalletName(walletName);
  // };

  return (
    <>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        className="homePageModal geneModal"
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <ModalTitle>CONNECT YOUR WALLET</ModalTitle>
        </DialogTitle>

        <DialogContent>
          <div className="button-group">
            <Button onClick={() => login(ConnectorNames['Injected'])}>
              <span>
                <img src={MetaMask} alt="" />
              </span>
              <span>Metamask</span>
            </Button>
            <Button onClick={() => login(ConnectorNames['WalletConnect'])}>
              <span>
                <img src={WalletConnect} alt="" />
              </span>
              <span>WalletConnect</span>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      {/* <WarningWalletModal openWarnWallet={showMetaMaskWarnModal} setOpenWarnWallet={setShowMetaMaskWarnModal} walletName={walletName} /> */}
    </>
  )
}

// interface IWarnWallet {
//   openWarnWallet: boolean;
//   setOpenWarnWallet: (open: boolean) => void;
//   walletName: string;
// }

// const WarningWalletModal: React.FC<IWarnWallet> = ({ openWarnWallet, setOpenWarnWallet, walletName }) => {
//   const handleClose = () => {
//     setOpenWarnWallet(false);
//   };
//   return (
//     <Dialog
//       onClose={handleClose}
//       aria-labelledby="customized-dialog-title"
//       open={openWarnWallet}
//       className="homePageModal geneModal warningModal"
//     >
//       <DialogTitle id="customized-dialog-title" onClose={handleClose}>
//         <ModalTitle>Warning</ModalTitle>
//       </DialogTitle>
//       <DialogContent>
//         <WalletImge>
//           {walletName === Connectors.metamask ? <img src={MetaMask} alt="" /> : <img src={WalletConnect} alt="" />}
//         </WalletImge>
//         <WalletContentText>{`You need to have ${walletName} installed to continue.`}</WalletContentText>
//         <WalletButton>
//           <Button className="join-button">{`Download ${walletName}`}</Button>
//         </WalletButton>
//       </DialogContent>
//     </Dialog>
//   );
// };

export default ConnectWalletModal
