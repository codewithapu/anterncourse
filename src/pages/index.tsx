import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import NavBar from '@/components/NavBar'
import Link from 'next/link'
import Footer from '@/components/Footer'
import Benefits from '@/components/Courses/Benefits';
import List from '@/components/Courses/List'



export default function Home() {

  const curriculum = [
    "Design Patterns & SWE Principles",
    "Understand AI: Essential Math Concepts",
    "Comprehensive ML: Focus on Regression",
    "Advanced ML: MLOps & Key Techniques"
  ];

  const earn = [
    "Get freelancing gigs worth of 100$+",
    "No Unpaid Internships, Just Real Value",
    "Pass an Exam, Secure Your Gig!"
  ];


  const community = [
    "Learn with 500+ Passionate Members",
    "Connect with Google, IBM Experts",
    "Community Learning: Your Success Key"
  ];

  const research =[
    "Collaborate on Research with Ayush Singh",
    "Publish Your Own Research Paper",
    "Fast-Track Hiring with Premier Projects"
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
              <img src="./curriculum.png" className={styles.Image} />
              <div className={styles.MoreDetails}>
                <h2 className={styles.FeaturesLabel}>Comprehensive Curriculum</h2>
                <div className={styles.ListContainer}>
                  <List items={curriculum} />
                </div>
              </div>
            </div>


            <div className={styles.FeatureCardReverse}>
              <img src="./curriculum.png" className={styles.Image} />
              <div className={styles.MoreDetails}>
                <h2 className={styles.FeaturesLabel}>Get Paid Throughout the course</h2>
                <div className={styles.ListContainer}>
                  <List items={earn} />
                </div>
              </div>
            </div>


            <div className={styles.FeatureCard}>
              <img src="./curriculum.png" className={styles.Image} />
              <div className={styles.MoreDetails}>
                <h2 className={styles.FeaturesLabel}>Work On Research Paper</h2>
                <div className={styles.ListContainer}>
                  <List items={research} />
                </div>
              </div>
            </div>


            <div className={styles.FeatureCardReverse}>
              <img src="./curriculum.png" className={styles.Image} />
              <div className={styles.MoreDetails}>
                <h2 className={styles.FeaturesLabel}>Access to Exclusive Community</h2>
                <div className={styles.ListContainer}>
                  <List items={community} />
                </div>
              </div>
            </div>

          </div>


        </div>

      </div>
      <Footer/>
    </>
  )
}
