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
        spaceBetween={10}

        className={styles.mySwiper}
      >
        <SwiperSlide className={styles.SwiperContent}>
          <img className={styles.LearnerPic} src="https://i.ibb.co/GdBcDmc/priyanshi.png" />
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
          <img className={styles.LearnerPic} src="https://i.ibb.co/GdBcDmc/priyanshi.png" />
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
          <img className={styles.LearnerPic} src="https://i.ibb.co/GdBcDmc/priyanshi.png" />
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
          <img className={styles.LearnerPic} src="https://i.ibb.co/GdBcDmc/priyanshi.png" />
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
