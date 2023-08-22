// import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import { Container } from 'react-bootstrap'
import Navigation from './Navigation'
import Header from './components/Header/Header'
import Chart from './components/Chart/Chart'

function App() {
      return (
            <>
                  <Container>
                        <Navigation />
                        <Header />
                        <Chart />
                  </Container>
            </>
      )
}

export default App
