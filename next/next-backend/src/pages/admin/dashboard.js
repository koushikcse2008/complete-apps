import CommonLayout from '@/layouts/commonlayout'
import Head from 'next/head'
import React from 'react'

const Dashboard = () => {
  return (
    <>
    <Head>
    <title>Dashboard</title>
    </Head>
      <CommonLayout>
        <h3>Dashboard</h3>
        <hr />
        <p>Here you can add chart, graph, summary, order data, payment data etc.</p>
      </CommonLayout>
    </>
  )
}

export default Dashboard
