import styled from 'styled-components'
import CofDetsPage from './CofDetsPage'
import CoffeeDescBox from './CoffeeDescBox'
import CustomersReview from './CustomerReview'
import Faq from './Faq'
import FeqOrder from './FeqOrder'

const Wrapper = styled.section`display:flex; flex-direction:column; gap:2.5rem; padding:1rem;`
export default function CoffeeDetails() {
  return (
    <Wrapper>
      <CofDetsPage />
      <FeqOrder />
      <CoffeeDescBox />
      <CustomersReview />
      <Faq />
    </Wrapper>
  )
}
