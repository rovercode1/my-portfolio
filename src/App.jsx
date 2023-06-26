import {BrowserRouter} from 'react-router-dom'
import { Navbar } from './components';
function App() {
  return (
    <BrowserRouter>
        <div className='relative z-0 bg-primary'>
            <h2>Is this working?</h2>
            <Navbar/>
        </div>
    </BrowserRouter>
)
}
export default App;