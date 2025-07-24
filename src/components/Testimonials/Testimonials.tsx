"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import styles from "./Testimonials.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Diezi Zenki",
    date: "April 2023",
    rating: 5,
    source: "Google",
    content:
      "Ich habe mit Alex an meiner neuen Website gearbeitet und bin absolut begeistert! Von der ersten Idee bis zur finalen Umsetzung war alles professionell, schnell und auf meine Wünsche abgestimmt.",
  },
  {
    id: 2,
    name: "Lirim Zenki",
    date: "Februar 2023",
    rating: 5,
    source: "Google",
    content:
      "Meine Erwartungen wurden weit übertroffen. Schnelle Umsetzung, leichte Einrichtung und top Support! Vielen Dank Alex! Grüsse aus der Schweiz :)",
  },
  {
    id: 3,
    name: "Paul-Cornelius Peter",
    date: "Januar 2023",
    rating: 5,
    source: "Google",
    content:
      "Sehr professionelles Webdesign in Fürstenfeldbruck. Schnelle Umsetzung und zeitgemäßes Design. Ich bin mit meiner neuen Website sehr zufrieden. Klare Empfehlung.",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <motion.section
      className={styles.testimonialsSection}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className={styles.header}
        initial={{ y: 50, opacity: 0 }}
        animate={
          isInView
            ? {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.6,
                  ease: "easeOut",
                },
              }
            : {}
        }
      >
        <div className={styles.headerContent}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ x: -30 }}
            animate={
              isInView
                ? {
                    x: 0,
                    transition: {
                      delay: 0.1,
                      type: "spring",
                      stiffness: 100,
                    },
                  }
                : {}
            }
          >
            Kundenstimmen
          </motion.h2>
          <motion.p
            className={styles.sectionDesc}
            initial={{ x: -30 }}
            animate={
              isInView
                ? {
                    x: 0,
                    transition: {
                      delay: 0.2,
                      type: "spring",
                      stiffness: 100,
                    },
                  }
                : {}
            }
          >
            Was meine Kunden über die Zusammenarbeit mit AG WebDev sagen
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        className={styles.testimonialsContainer}
        initial={{ y: 50, opacity: 0 }}
        animate={
          isInView
            ? {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.3,
                  duration: 0.6,
                  ease: "easeOut",
                },
              }
            : {}
        }
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={{
            clickable: true,
            el: `.${styles.pagination}`,
            bulletClass: styles.bullet,
            bulletActiveClass: styles.bulletActive,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          onInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id}>
              <motion.div
                className={styles.testimonialCard}
                initial={{ y: 30, opacity: 0 }}
                animate={
                  isInView
                    ? {
                        y: 0,
                        opacity: 1,
                        transition: {
                          delay: 0.4 + index * 0.1,
                          duration: 0.6,
                        },
                      }
                    : {}
                }
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className={styles.testimonialHeader}>
                  <div className={styles.source}>{testimonial.source}</div>
                  <div className={styles.rating}>
                    {[...Array(5)].map((_, i) => (
                      <motion.span
                        key={i}
                        className={
                          i < testimonial.rating
                            ? styles.starActive
                            : styles.star
                        }
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>
                </div>
                <div className={styles.testimonialContent}>
                  <p>{testimonial.content}</p>
                </div>
                <div className={styles.testimonialFooter}>
                  <div className={styles.author}>{testimonial.name}</div>
                  <div className={styles.date}>{testimonial.date}</div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <motion.div
          className={styles.controls}
          initial={{ opacity: 0 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  transition: {
                    delay: 0.7,
                    duration: 0.6,
                  },
                }
              : {}
          }
        >
          <motion.button
            ref={prevRef}
            className={styles.navButton}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18l-6-6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </motion.button>
          <div className={styles.pagination}></div>
          <motion.button
            ref={nextRef}
            className={styles.navButton}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 18l6-6-6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
