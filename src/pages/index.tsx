import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import NavBar from '@/components/NavBar'
import Link from 'next/link'

import Benefits from '@/components/Courses/Benefits';

export default function Home() {
  const cards = [
    { title: "Card 1", content: "This is card 1 content." },
    { title: "Card 2", content: "This is card 2 content." },
    { title: "Card 3", content: "This is card 3 content." },
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
            <h1 className={styles.CourseTitle}>Core Machine Learning Engineering</h1>

            <p className={styles.CourseDescription}>Learn how to code, understand algorithms, and apply real-world projects even if you're new to the field! </p>


            {/* <div className={styles.MoreDetails}>
              <Link href="/" className={styles.AuthorLink}>
                <div className={styles.Author}>
                  <img className={styles.AuthorAvatar} src="https://i.ibb.co/HN3WX0w/image-56.jpg" />
                  <p className={styles.Name}>Ayush Singh</p>
                </div>
              </Link>
            </div> */}


          </div>

          <div className={styles.Alumni}>
              <p className={styles.RegularText}>
                Our Alumni's Work in Top Companies
              </p>

              <img src="https://i.ibb.co/WG0KLw3/j-Ckblq-GXg1-Tb64y-Ru-Cx6-CIvq-VI.webp" className={styles.CompanyImage} />
            </div>

          <Benefits />

        </div>

      </div>
    </>
  )
}
