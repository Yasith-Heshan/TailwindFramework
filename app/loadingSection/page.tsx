import React from 'react'
import LoadingSection from '../components/ComplexComponents/LoadingSection/LoadingSection';
import Section from './Section';
import Container from '../components/basicComponents/Container/Container';

const page = () => {
  return (
    <Container className='bg-gray-200'>
        <Section/>
    </Container>
  )
}

export default page