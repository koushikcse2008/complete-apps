import Footer from '@/component/common/footer'
import Header from '@/component/common/header'
import Head from 'next/head'
import React from 'react'

const GuestLayout = ({children} : any) => {
  return (
    <div>
        <Head>
            <title>Here it is home</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"></link>
        </Head>
        <Header />
            { children }
        <Footer />
    </div>
  )
}

export default GuestLayout
