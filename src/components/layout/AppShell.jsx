import styled from 'styled-components';
import Footer from './../../ui/Footer';
import Header from './Header';


const Shell = styled.div`
min-height: 100vh;
display: flex;
flex-direction: column;
`


const Main = styled.main`
flex: 1 0 auto;
width: 100%;
`;


export function AppShell({ children }) {
  return (
    <Shell>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </Shell>
  )
}