import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/screens/HomeScreen'

export default function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1 className="text-center"> Welcome to E-shop 🛒</h1>
          <Home />
        </Container>
      </main>
      <Footer />
    </>
  )
}
