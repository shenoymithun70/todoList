import './App.css';
import styled from 'styled-components';
import InputPage from './components/input/input.component.jsx'
import ListPage from './components/listContainer/listContainer.component.jsx'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center
`;

function App() {

  return (
    <MainContainer>
        <InputPage />
        <ListPage />
    </MainContainer>
  );
}

export default App;
