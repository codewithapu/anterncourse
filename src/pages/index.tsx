import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import NavBar from '@/components/NavBar'
import Link from 'next/link'

import Benefits from '@/components/Courses/Benefits';
import List from '@/components/Courses/List'

export default function Home() {

  const reasons = [
    "Design Patterns & SWE Principles",
    "Understand AI: Essential Math Concepts",
    "Comprehensive ML: Focus on Regression",
    "Advanced ML: MLOps & Key Techniques"
  ];

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

          <div className={styles.Features}>
            <h1 className={styles.SectionHeading}>
              Why Is Our Course a Top Choice?
            </h1>

            <div className={styles.FeatureCard}>
              <img src="./curriculum.png" className={styles.Image}/>
              <div className={styles.MoreDetails}>
                <h2 className={styles.FeaturesLabel}>Comprehensive Curriculum</h2>
                <div className={styles.ListContainer}>
                  <List items={reasons} />
                </div>
              </div>

            </div>
          </div>


        </div>

      </div>
    </>
  )
}
