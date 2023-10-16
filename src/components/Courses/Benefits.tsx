import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from '@/styles/Home.module.scss';

import { Pagination } from 'swiper/modules';

export default function Benefits() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={50}

        className={styles.mySwiper}
      >

        <SwiperSlide className={styles.SwiperContent}>
          <div className={styles.AvatarContainer}>

            <svg className={styles.CompanyLogo} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.79 15.71 17.57V20.34H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4" />
              <path d="M11.9997 22.9996C14.9697 22.9996 17.4597 22.0196 19.2797 20.3396L15.7097 17.5696C14.7297 18.2296 13.4797 18.6296 11.9997 18.6296C9.13969 18.6296 6.70969 16.6996 5.83969 14.0996H2.17969V16.9396C3.98969 20.5296 7.69969 22.9996 11.9997 22.9996Z" fill="#34A853" />
              <path d="M5.84 14.0903C5.62 13.4303 5.49 12.7303 5.49 12.0003C5.49 11.2703 5.62 10.5703 5.84 9.91031V7.07031H2.18C1.43 8.55031 1 10.2203 1 12.0003C1 13.7803 1.43 15.4503 2.18 16.9303L5.03 14.7103L5.84 14.0903Z" fill="#FBBC05" />
              <path d="M11.9997 5.38C13.6197 5.38 15.0597 5.94 16.2097 7.02L19.3597 3.87C17.4497 2.09 14.9697 1 11.9997 1C7.69969 1 3.98969 3.47 2.17969 7.07L5.83969 9.91C6.70969 7.31 9.13969 5.38 11.9997 5.38Z" fill="#EA4335" />
            </svg>
            <img className={styles.LearnerPic} src="https://i.ibb.co/GdBcDmc/priyanshi.png" />

          </div>
          <div className={styles.Chats}>
            <div className={styles.Profile}>
              <img src="https://i.ibb.co/1RHWGB8/priyanshi-mini.png" className={styles.Avatar} />
              <h2 className={styles.Name}>Priyanshi Agarwal</h2>
            </div>

            <div className={styles.ChatContainer}>
              <div className={styles.Chatting} >
                <h3 className={styles.ChatOne}>
                  Hi, Ayush
                </h3>

                <h3 className={styles.ChatTwo}>
                  I landed a role at Google, Thanks Ayush for your Core ML Program.
                </h3>


              </div>

              <div className={styles.UserStatus}>
                <img className={styles.AvatarBadge} src="https://i.ibb.co/1RHWGB8/priyanshi-mini.png" />
                <p className={styles.Status}>now</p>
              </div>


            </div>




          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.SwiperContent}>
          <div className={styles.AvatarContainer}>

            <svg className={styles.CompanyLogo} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.79 15.71 17.57V20.34H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4" />
              <path d="M11.9997 22.9996C14.9697 22.9996 17.4597 22.0196 19.2797 20.3396L15.7097 17.5696C14.7297 18.2296 13.4797 18.6296 11.9997 18.6296C9.13969 18.6296 6.70969 16.6996 5.83969 14.0996H2.17969V16.9396C3.98969 20.5296 7.69969 22.9996 11.9997 22.9996Z" fill="#34A853" />
              <path d="M5.84 14.0903C5.62 13.4303 5.49 12.7303 5.49 12.0003C5.49 11.2703 5.62 10.5703 5.84 9.91031V7.07031H2.18C1.43 8.55031 1 10.2203 1 12.0003C1 13.7803 1.43 15.4503 2.18 16.9303L5.03 14.7103L5.84 14.0903Z" fill="#FBBC05" />
              <path d="M11.9997 5.38C13.6197 5.38 15.0597 5.94 16.2097 7.02L19.3597 3.87C17.4497 2.09 14.9697 1 11.9997 1C7.69969 1 3.98969 3.47 2.17969 7.07L5.83969 9.91C6.70969 7.31 9.13969 5.38 11.9997 5.38Z" fill="#EA4335" />
            </svg>
            <img className={styles.LearnerPic} src="https://i.ibb.co/GdBcDmc/priyanshi.png" />

          </div>
          <div className={styles.Chats}>
            <div className={styles.Profile}>
              <img src="https://i.ibb.co/1RHWGB8/priyanshi-mini.png" className={styles.Avatar} />
              <h2 className={styles.Name}>Priyanshi Agarwal</h2>
            </div>

            <div className={styles.ChatContainer}>
              <div className={styles.Chatting} >
                <h3 className={styles.ChatOne}>
                  Hi, Ayush
                </h3>

                <h3 className={styles.ChatTwo}>
                  I landed a role at Google, Thanks Ayush for your Core ML Program.
                </h3>


              </div>

              <div className={styles.UserStatus}>
                <img className={styles.AvatarBadge} src="https://i.ibb.co/1RHWGB8/priyanshi-mini.png" />
                <p className={styles.Status}>now</p>
              </div>


            </div>




          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.SwiperContent}>
          <div className={styles.AvatarContainer}>

            <svg className={styles.CompanyLogo} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.79 15.71 17.57V20.34H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4" />
              <path d="M11.9997 22.9996C14.9697 22.9996 17.4597 22.0196 19.2797 20.3396L15.7097 17.5696C14.7297 18.2296 13.4797 18.6296 11.9997 18.6296C9.13969 18.6296 6.70969 16.6996 5.83969 14.0996H2.17969V16.9396C3.98969 20.5296 7.69969 22.9996 11.9997 22.9996Z" fill="#34A853" />
              <path d="M5.84 14.0903C5.62 13.4303 5.49 12.7303 5.49 12.0003C5.49 11.2703 5.62 10.5703 5.84 9.91031V7.07031H2.18C1.43 8.55031 1 10.2203 1 12.0003C1 13.7803 1.43 15.4503 2.18 16.9303L5.03 14.7103L5.84 14.0903Z" fill="#FBBC05" />
              <path d="M11.9997 5.38C13.6197 5.38 15.0597 5.94 16.2097 7.02L19.3597 3.87C17.4497 2.09 14.9697 1 11.9997 1C7.69969 1 3.98969 3.47 2.17969 7.07L5.83969 9.91C6.70969 7.31 9.13969 5.38 11.9997 5.38Z" fill="#EA4335" />
            </svg>
            <img className={styles.LearnerPic} src="https://i.ibb.co/GdBcDmc/priyanshi.png" />

          </div>
          <div className={styles.Chats}>
            <div className={styles.Profile}>
              <img src="https://i.ibb.co/1RHWGB8/priyanshi-mini.png" className={styles.Avatar} />
              <h2 className={styles.Name}>Priyanshi Agarwal</h2>
            </div>

            <div className={styles.ChatContainer}>
              <div className={styles.Chatting} >
                <h3 className={styles.ChatOne}>
                  Hi, Ayush
                </h3>

                <h3 className={styles.ChatTwo}>
                  I landed a role at Google, Thanks Ayush for your Core ML Program.
                </h3>


              </div>

              <div className={styles.UserStatus}>
                <img className={styles.AvatarBadge} src="https://i.ibb.co/1RHWGB8/priyanshi-mini.png" />
                <p className={styles.Status}>now</p>
              </div>


            </div>




          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.SwiperContent}>
          <div className={styles.AvatarContainer}>

            <svg className={styles.CompanyLogo} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.79 15.71 17.57V20.34H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4" />
              <path d="M11.9997 22.9996C14.9697 22.9996 17.4597 22.0196 19.2797 20.3396L15.7097 17.5696C14.7297 18.2296 13.4797 18.6296 11.9997 18.6296C9.13969 18.6296 6.70969 16.6996 5.83969 14.0996H2.17969V16.9396C3.98969 20.5296 7.69969 22.9996 11.9997 22.9996Z" fill="#34A853" />
              <path d="M5.84 14.0903C5.62 13.4303 5.49 12.7303 5.49 12.0003C5.49 11.2703 5.62 10.5703 5.84 9.91031V7.07031H2.18C1.43 8.55031 1 10.2203 1 12.0003C1 13.7803 1.43 15.4503 2.18 16.9303L5.03 14.7103L5.84 14.0903Z" fill="#FBBC05" />
              <path d="M11.9997 5.38C13.6197 5.38 15.0597 5.94 16.2097 7.02L19.3597 3.87C17.4497 2.09 14.9697 1 11.9997 1C7.69969 1 3.98969 3.47 2.17969 7.07L5.83969 9.91C6.70969 7.31 9.13969 5.38 11.9997 5.38Z" fill="#EA4335" />
            </svg>
            <img className={styles.LearnerPic} src="https://i.ibb.co/GdBcDmc/priyanshi.png" />

          </div>
          <div className={styles.Chats}>
            <div className={styles.Profile}>
              <img src="https://i.ibb.co/1RHWGB8/priyanshi-mini.png" className={styles.Avatar} />
              <h2 className={styles.Name}>Priyanshi Agarwal</h2>
            </div>

            <div className={styles.ChatContainer}>
              <div className={styles.Chatting} >
                <h3 className={styles.ChatOne}>
                  Hi, Ayush
                </h3>

                <h3 className={styles.ChatTwo}>
                  I landed a role at Google, Thanks Ayush for your Core ML Program.
                </h3>


              </div>

              <div className={styles.UserStatus}>
                <img className={styles.AvatarBadge} src="https://i.ibb.co/1RHWGB8/priyanshi-mini.png" />
                <p className={styles.Status}>now</p>
              </div>


            </div>




          </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
