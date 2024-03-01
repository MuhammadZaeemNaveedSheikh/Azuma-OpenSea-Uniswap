import styled from 'styled-components'
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import { Button, Hidden } from '@material-ui/core'

const ModalTitle = styled.h2`
  font-size: 26px;
  font-family: NeueMachinaUltrabold;
  color: #ffffff;
  margin: 0;
  display: flex;
  align-items: center;
  column-gap: 35px;
  @media (max-width: 959px) {
    font-size: 18px;
  }
`
const TypographyCust = styled(Typography)`
  color: #fff;
  justify-content: center;
  text-align: center;
  font-weight: normal;
  font-family: NeueMachinaRegular;
  font-size: 19px;
`
const ButtonCust = styled(Button)`
  background: #ffffff;
  border-radius: 16px;
  width: 123px;
  height: 50px;
  box-shadow: 0 0 16px 3px rgb(255 255 255 / 50%) !important;
  float: right;
  & span {
    font-family: NeueMachinaUltrabold;
    font-weight: 800;
    font-size: 14px;
    line-height: 14px;
  }
`
const Input = styled.input`
  background: #1c1c1c;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 16px;
  display: block;
  max-width: 420px;
  width: 100%;
  margin-bottom: 25px;
  color: #fff;
`
const Textarea = styled.textarea`
  background: #1c1c1c;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 16px;
  display: block;
  width: 100%;
  margin-bottom: 25px;
  color: #fff;
`

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
      <Typography variant="h2">
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}
          >
            <Hidden only={['xs', 'sm']}>
              <span>Close</span>
            </Hidden>
            <CloseIcon />
          </IconButton>
        ) : null}
      </Typography>
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
  modelInfo: any
}

const JourneyModal: React.FC<IWallet> = ({ open, setOpen, modelInfo }) => {
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <Dialog
      onClose={handleClose}
      fullWidth={true}
      maxWidth="lg"
      aria-labelledby="customized-dialog-title"
      open={open}
      className="homePageModal journeyPageModal geneModal"
    >
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        <ModalTitle>
          <img src={modelInfo.img} alt="" /> {modelInfo.title}
        </ModalTitle>
      </DialogTitle>

      <DialogContent>
        <TypographyCust
          variant="h5"
          dangerouslySetInnerHTML={{ __html: modelInfo.text }}
        />
        {modelInfo.title === 'Big Brain' && (
          <div style={{ width: '100%' }}>
            <Input type="text" placeholder="your discord id" />
            <Textarea placeholder="your idea" rows={4}></Textarea>
            <div>
              <ButtonCust variant="contained">Send</ButtonCust>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
export default JourneyModal
