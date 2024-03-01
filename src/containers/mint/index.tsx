import React, { useEffect } from 'react'
import { Button } from '@material-ui/core'
import styled from 'styled-components'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import { NotificationManager } from 'react-notifications'
import { useWeb3React } from '@web3-react/core'
// @ts-ignore
import Reveal from 'react-reveal/Reveal'
import ConnectWalletModal from '../../components/connect-wallet-modal'
import useWalletModal from 'hooks/useWalletModal'
import { useNFTData, useMintCallback } from 'hooks/useNFT'

const MintPage = styled.div`
  height: 100%;

  .react-reveal {
    height: 100%;
  }
`
const ContentArea = styled.div`
  padding: 40px 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
`
const Title = styled.h2`
  font-family: 'Jost';
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 164.5%;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
`

const MintBox = styled.div`
  background-color: #cfe8fc;
  background-color: rgba(10, 10, 10, 1);
  max-width: 770px;
  max-height: 619px;
  margin: auto;
  width: 100%;
  height: 100%;
  padding: 30px;
  @media (max-width: 959px) {
    padding: 25px;
  }
  @media (max-width: 600px) {
    max-width: 330px;
    max-height: 581px;
  }
`
const MinPlus = styled.ul`
  display: flex;
  margin: auto;
  width: 250px;
  justify-content: space-around;
  align-items: center;
  & span {
    font-family: 'Jost';
    font-style: normal;
    font-weight: 400;
    font-size: 31px;
    line-height: 45px;
  }

  & button {
    margin: 0;
    padding: 0;
    background-color: transparent;
    border: 0;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
  }

  .maxBTN button {
    font-family: 'Jost';
    font-style: normal !important;
    font-weight: 600 !important;
    font-size: 17px !important;
    line-height: 25px !important;
  }
`
const TextParagrap = styled.p`
  font-family: 'Jost';
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 164.5%;
  color: #ffffff;
  text-align: center;
  @media (max-width: 959px) {
  }
`

const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 20px;

  @media (max-width: 600px) {
    margin: 30px 0px;
  }
`
const MintBTN = styled.div`
  display: flex;
  justify-content: center;
  max-width: 300px;
  margin: 50px auto 0px;
  & button {
    width: 138px;
    height: 51px;

    & span {
      font-family: 'Jost';
      font-style: normal;
      font-weight: 600;
      font-size: 15px;
      line-height: 27px;
      text-transform: uppercase;
      color: #ffffff;
    }
  }

  & button:disabled {
    & span {
      color: grey;
    }
  }
`
const MyBalance = styled.div`
  font-family: 'Jost';
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 164.5%;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`
const Amount = styled.div`
  font-family: 'Jost';
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 164.5%;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`
const PriceHead = styled.div`
  font-family: 'Jost';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 164.5%;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`
const Price = styled.div`
  font-family: 'Jost';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 164.5%;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`
const TopDot = styled.div`
  display: flex;
  justify-content: space-between;
`

const BottomDot = styled.div`
  display: flex;
  justify-content: space-between;
`
const DotPoint = styled.div`
  width: 4px;
  height: 4px;
  background-color: #ffffff;
  border-radius: 50px;
`

const Mint = () => {
  const { account } = useWeb3React()
  const { open, setOpen } = useWalletModal()
  const {
    ethBalance,
    mintPrice,
    maxToMint,
    saleIsActive,
    totalSupply,
  } = useNFTData()
  const { handleMint, pending } = useMintCallback()

  const handleClose = React.useCallback(() => {
    setOpen(false)
  }, [setOpen])

  useEffect(() => {
    if (account) {
      handleClose()
    }
  }, [account, handleClose])

  useEffect(() => {
    document.body.classList.add('dark-theme-color')
    return () => {
      document.body.classList.remove('dark-theme-color')
    }
  }, [])

  const [amount, setAmount] = React.useState(1)

  const mint = async () => {
    if (pending) {
      return
    }

    if (!account) {
      setOpen(true)
      return
    }

    if (!saleIsActive) {
      NotificationManager.info('Sale is not active.')
      return
    }

    const tx = await handleMint(amount)
    if (tx) {
      NotificationManager.success('Minted successfully.', 'Mint')
    } else {
      NotificationManager.error('Something went wrong while minting.', 'Mint')
    }
  }

  return (
    <MintPage className="mintPage">
      <Reveal effect="fadeInUp" className="mintpage">
        <ContentArea>
          <MintBox>
            <TopDot>
              <DotPoint></DotPoint>
              <DotPoint></DotPoint>
            </TopDot>
            <Title>mint(coming soon)</Title>
            <TextParagrap>Amount:</TextParagrap>
            <MinPlus>
              <li>
                <button onClick={() => amount > 1 && setAmount(amount - 1)}>
                  <RemoveIcon />
                </button>
              </li>
              <li>
                <span>{amount}</span>
              </li>
              <li>
                <button
                  onClick={() => maxToMint > amount && setAmount(amount + 1)}
                >
                  <AddIcon />
                </button>
              </li>
              <li className="maxBTN">
                <button onClick={() => setAmount(maxToMint)}>Max</button>
              </li>
            </MinPlus>
            <PriceRow>
              <MyBalance>My balance:</MyBalance>
              <Amount>{ethBalance.div(1e18).toNumber().toFixed(3)} ETH</Amount>
            </PriceRow>
            <PriceRow>
              <PriceHead>Price per token:</PriceHead>
              <Price>{mintPrice.div(1e18).toNumber().toFixed(3)} ETH</Price>
            </PriceRow>
            <PriceRow>
              <PriceHead>Total Price:</PriceHead>
              <Price>
                {mintPrice.times(amount).div(1e18).toNumber().toFixed(3)} ETH
              </Price>
            </PriceRow>
            <PriceRow>
              <PriceHead>Total Supply:</PriceHead>
              <Price>{totalSupply}/5000</Price>
            </PriceRow>
            <MintBTN>
              <Button
                onClick={mint}
                variant="contained"
                className="white-button"
                disabled={pending}
              >
                MINT
              </Button>
            </MintBTN>
            <BottomDot>
              <DotPoint></DotPoint>
              <DotPoint></DotPoint>
            </BottomDot>
          </MintBox>
        </ContentArea>
      </Reveal>
      <ConnectWalletModal open={open} setOpen={setOpen} />
    </MintPage>
  )
}
export default Mint
