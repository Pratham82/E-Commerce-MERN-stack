import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/screens/HomeScreen'
import ProductScreen from './components/screens/ProductScreen'

export default function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <h1 className="text-center"> Welcome to E-shop 🛒</h1>
          <Route path="/" component={Home} exact={true} />
          <Route path="/product/:id" component={ProductScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}
