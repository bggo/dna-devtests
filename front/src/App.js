import { BrowserRouter } from 'react-router-dom'
import Routes from './Config/Routes'
import './Styles/globalStyles.sass'

function App() {

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

export default App;
