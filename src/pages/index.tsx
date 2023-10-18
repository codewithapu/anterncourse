import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import NavBar from '@/components/NavBar'
import Link from 'next/link'

import Benefits from '@/components/Courses/Benefits';

export default function Home() {

  return (
    <>
      <Head>
        <title>Antern | Home</title>
        <meta name="description" content="Build Your Future With Antern" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.Wraper}>
        <NavBar />

        <div className={styles.Container}>

          <div className={styles.Hero}>

            <div className={styles.Left}>
              <p className={styles.Topic}>machine learning</p>

              <h1 className={styles.CourseTitle}>Core Machine Learning Engineering</h1>
              <p className={styles.CourseDescription}>Learn how to code, understand algorithms, and apply real-world projects even if you're new to the field! </p>

              <Link href="/" className={styles.Button}>Get Started</Link>
            </div>

            <img className={styles.Banner} src="./antern.png" />

          </div>

          <div className={styles.Alumni}>
            <p className={styles.RegularText}>
              Our Alumni's Work in Top Companies
            </p>

            <img src="https://i.ibb.co/WG0KLw3/j-Ckblq-GXg1-Tb64y-Ru-Cx6-CIvq-VI.webp" className={styles.CompanyImage} />
            <Benefits />
          </div>

          {/* <div className={styles.Apart}>
            <h1 className={styles.Heading}>What sets<br />our Course Apart</h1>

            <div>
              <div className={styles.FeatureContainer}>
                <img src="https://i.ibb.co/qd54Hkm/image-61.png" />
                <div className={styles.Details}>
                  <h2 className={styles.SubTitle}>Comprehensive Curriculum</h2>
                  <ul className={styles.FeaturesList}>
                    <li className={styles.Features}>Learn core of Python Programming along with design patterns & SWE principles</li>
                    <li className={styles.Features}>Learn core mathematics required for Machine learning and learn how it is used in AI</li>
                    <li className={styles.Features}>Learn Core Machine Learning (like 10 hours just for learning regression while others spend just 1 hour)</li>
                    <li className={styles.Features}>Learn Advanced ML including MLOps and it's tools and techniques </li>
                  </ul>
                </div>

              </div>

            </div>
          </div> */}


        </div>

      </div>
    </>
  )
}
