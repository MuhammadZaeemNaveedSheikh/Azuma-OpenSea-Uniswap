import styled from 'styled-components'
import { Link } from 'react-router-dom'
import CallReceivedIcon from '@material-ui/icons/CallReceived'
import { Container, Grid } from '@material-ui/core'
const Footers = styled.footer`
  padding: 15px 0px;
`
const FooterRight = styled.div`
  display: flex;
  justify-content: right;
`
const RoundedButton = styled.div`
  display: flex;
  align-items: center;
  font-weight: 800;
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
  margin: 0;

  & a {
    border: 2px solid #ffffff;
    border-radius: 50px;
    width: 60px;
    height: 60px;
    font-size: 41px;
    text-align: center;
    margin-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & svg {
    transform: rotate(282deg);
  }
`

const Footer = () => {
  return (
    <Footers>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FooterRight>
              <RoundedButton>
                Explore{' '}
                <Link href="#" to={''}>
                  <CallReceivedIcon style={{ fontSize: 30 }} />
                </Link>
              </RoundedButton>
            </FooterRight>
          </Grid>
        </Grid>
      </Container>
    </Footers>
  )
}

export default Footer
