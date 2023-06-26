import {BrowserRouter} from 'react-router-dom'
import { Navbar } from './components';
function App() {
  return (
    <BrowserRouter>
        <div className='relative z-0 bg-primary'>
            <Navbar/>
        </div>
    </BrowserRouter>
)
}
export default App;