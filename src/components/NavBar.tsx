import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/components/NavBar.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';



const NavBar: React.FC = () => {



  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>


        <nav className={styles.NavBar}>

          <Link href="/" className={styles.LogoLink}>

            <svg className={styles.Logo} xmlns="http://www.w3.org/2000/svg" width="73" height="69" viewBox="0 0 73 69" fill="none">
              <path d="M36.0626 0V32.4728C36.0626 43.4113 24.693 50.6404 14.7876 46L36.0626 0Z" fill="white" />
              <path d="M37.5959 0V32.4728C37.5959 43.4113 48.9655 50.6404 58.8709 46L37.5959 0Z" fill="white" />
              <path d="M0 69L3.79526 57.9982H6.39435L10.1896 69H8.00402L7.22134 66.6372H2.96828L2.17083 69H0ZM3.54421 64.8651H6.6454L4.81422 59.3863H5.37539L3.54421 64.8651Z" fill="white" />
              <path d="M14.3676 69V57.9982H15.9329L21.9876 66.1499L21.1754 66.3123V57.9982H23.1838V69H21.6037L15.6376 60.7892L16.376 60.6268V69H14.3676Z" fill="white" />
              <path d="M30.2163 69V59.7703H27.3661V57.9982H35.0453V59.7703H32.2394V69H30.2163Z" fill="white" />
              <path d="M39.2244 69V57.9982H46.5343V59.7703H41.2327V62.5909H46.239V64.363H41.2327V67.2279H46.5343V69H39.2244Z" fill="white" />
              <path d="M50.9605 69V57.9982H55.0511C55.7994 57.9982 56.459 58.136 57.03 58.4117C57.6109 58.6775 58.0637 59.0713 58.3886 59.5931C58.7135 60.105 58.8759 60.7302 58.8759 61.4685C58.8759 62.2266 58.6938 62.8715 58.3295 63.4031C57.9751 63.9347 57.4927 64.3285 56.8823 64.5845L59.4076 69H57.1334L54.4309 64.171L55.7305 64.9389H52.9689V69H50.9605ZM52.9689 63.1668H55.0807C55.4449 63.1668 55.76 63.0979 56.0258 62.9601C56.2916 62.8124 56.4984 62.6106 56.646 62.3546C56.7937 62.0986 56.8676 61.8033 56.8676 61.4685C56.8676 61.124 56.7937 60.8286 56.646 60.5825C56.4984 60.3265 56.2916 60.1296 56.0258 59.9918C55.76 59.8441 55.4449 59.7703 55.0807 59.7703H52.9689V63.1668Z" fill="white" />
              <path d="M63.6774 69V57.9982H65.2427L71.2974 66.1499L70.4852 66.3123V57.9982H72.4936V69H70.9135L64.9474 60.7892L65.6857 60.6268V69H63.6774Z" fill="white" />
            </svg>
          </Link>


          <div className={styles.NavLinkContainer}>
            <Link className={styles.Active} href="/">Home</Link>
            <Link className={styles.NavLink} href="/">Courses</Link>
            <Link className={styles.NavLink} href="/">About Us</Link>
          </div>


          <Link className={styles.Button} href="/">
            register now
          </Link>

        </nav>




    </>
  )
}

export default NavBar;