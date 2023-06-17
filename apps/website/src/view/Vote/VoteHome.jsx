import {useState} from 'react'
import {voteContract} from '../../utils/contract'
import {Button, Container, Row } from 'react-bootstrap'
import Web3 from 'web3'
import Swal from 'sweetalert2'

const VoteHome = () => {
    const [account, setAccount] = useState("")
    const [balance, setBalance] = useState(0)
    const [connect, setConnect] = useState(false)
    const vContract = voteContract()

    const onConnect = async () => {
      if (window.ethreum) {
        const web3 = new Web3(window.ethreum)
        const accounts =  await web3.eth.requestAccounts()
        const balances = await web3.eth.getBalance(accounts)

        setAccount(accounts)
        setBalance(balances)
      }else{
        Swal("No Metamask Found", "")
      }
    }

  return (
    <Container>
      <Row>
        <Col md={6}>
          <h1>Voting Section</h1>
          <p>SIlahkan Log In Terlebih Dahulu</p>
          {
            connect ? 
            <>
              <Button onClick={onConnect}>
                Connect to Database
              </Button>
            </> 
            : 
            <>
            </>
          }
        </Col>
      </Row>
    </Container>
  )
}

export default VoteHome