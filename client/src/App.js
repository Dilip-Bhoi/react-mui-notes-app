import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { createTheme, ThemeProvider } from '@mui/material/styles'

import Notes from './pages/notes';
import Create from './pages/create';
import LayOut from './common/layOut';


const theme = createTheme({
  palette: {
    secondary: {
      main: '#c0ca33'
    }
  }
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <LayOut>
            <Routes>
              <Route path='/' element={<Notes />} />
              <Route path='/create' element={<Create />} />
            </Routes>
          </LayOut>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
