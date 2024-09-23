"use client"
import React from 'react'
import LoadingSection from '../components/ComplexComponents/LoadingSection/LoadingSection';
import CenterBox from '../components/basicComponents/CenterBox/CenterBox';

const Section = () => {
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        const asyncFunction = async () => {
            setLoading(true);
            await new Promise((resolve) => setTimeout(resolve, 3000));
            setLoading(false);
        }
        asyncFunction();
    }, []);
  return (
    <div className='h-[88vh]'>
        <LoadingSection loading={loading}>
            <CenterBox>
            <h1>Page Content</h1>
            <p>This is the content of the page</p>
            </CenterBox>
        </LoadingSection>
    </div>
  )
}

export default Section