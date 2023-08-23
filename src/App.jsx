// import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import { Container } from 'react-bootstrap'
import Navigation from './components/Navigation/Navigation'
import Header from './components/Header/Header'
import Chart from './components/Chart/Chart'
import Days from './components/Footer/Days'

function App() {
      return (
            <>
                  <Container>
                        <Navigation />
                        <Header />
                        <Chart />
                        <Days />
                  </Container>
            </>
      )
}

export default App
