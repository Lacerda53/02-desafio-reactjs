import './styles/global.scss';
import { GenreIdProvider } from './Contexts/GenreIdContext';
import { Content } from './components/Content';
import { SideBar } from './components/SideBar';


export function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <GenreIdProvider>
        <SideBar />
        <Content/>
      </GenreIdProvider>
    </div>
  )
}