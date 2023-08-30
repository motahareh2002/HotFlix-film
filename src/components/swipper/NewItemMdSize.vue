


<script setup lang="ts">
import CardImg from "../cardImage/CardImg.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
interface slider {
  id: number;
  src: string;
  rate: number;
  detail: string;
  category: string;
}
const sliderImages: slider[] = [
  {
    id: 34,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/f496cm9enuEsZkSPzCwnTESEK5s.jpg",
    detail: "Friends",
    category: "Comedy, Drama",
    rate: 2.8,
  },
  {
    id: 35,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/daSFbrt8QCXV2hSwB0hqYjbj681.jpg",
    detail: "Grey's Anatomy",
    category: "Drama",
    rate: 5.5,
  },
  {
    id: 36,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/oGE7FI29ihpWlO4TAC7bJiswW4H.jpg",
    detail: "Beverly Hillbillies ",
    category: "Comedy",
    rate: 6.6,
  },
  {
    id: 37,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",
    detail: "Peaky Blinders",
    category: "Drama, Crime",
    rate: 5.6,
  },
  {
    id: 38,
    src: "	https://www.themoviedb.org/t/p/w220_and_h330_face/r935SMphvXppx5bJjbIBNx02fwc.jpg",
    detail: "The Blacklist",
    category: "Crime, Mystery",
    rate: 9.2,
  },
  {
    id: 10,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/vB8o2p4ETnrfiWEgVxHmHWP9yRl.jpg",
    detail: "Heart of Stone",
    category: "Thriller, Action",
    rate: 5.6,
  },
  {
    id: 11,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/3O8uTUpt76ShtEtNNrOJpcwQROH.jpg",
    detail: "Mask Girl",
    category: "Comedy, Drama",
    rate: 9.2,
  },
  {
    id: 12,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/4K7gQjD19CDEPd7A9KZwr2D9Nco.jpg",
    detail: "No Hard Feelings",
    category: "Comedy, Romance",
    rate: 5.6,
  },
  {
    id: 13,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/fYx5q9hPAmbDrWzsYUDhxZJnigC.jpg",
    detail: "The Winter King",
    category: "Drama",
    rate: 4.9,
  },
  {
    id: 14,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/q17tXNROOslj7uCGicKNlIf9Rx6.jpg",
    detail: "The Castle Quest",
    category: "Animation",
    rate: 7.2,
  },
  {
    id: 15,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/fcXdJlbSdUEeMSJFsXKsznGwwok.jpg",
    detail: "One Piece",
    category: "Action & Adventure",
    rate: 5.9,
  },
  {
    id: 16,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/kgrLpJcLBbyhWIkK7fx1fM4iSvf.jpg",
    detail: "Ruby Gillman,",
    category: "Animation, Family",
    rate: 2.5,
  },
];
</script>
<template>
  <div>
    <Swiper
      :rewind="true"
      :modules="[Navigation]"
      :pagination="{
        clickable: true,
      }"
      :breakpoints="{
        '100': {
          slidesPerView: 2,
          spaceBetween: 1,
        },
        '640': {
          slidesPerView: 3,
          spaceBetween: 5,
        },
        '768': {
          slidesPerView: 4,
          spaceBetween: 5,
        },
        '1000': {
          slidesPerView: 6,
          spaceBetween: 5,
        },
        '1180': {
          slidesPerView: 7,
          spaceBetween: 5,
        },
      }"
      :navigation="{
        nextEl: '.next',
        prevEl: '.prev',
      }"
      class="mySwiper"
    >
      <SwiperSlide
        v-for="sliderImage in sliderImages"
        :key="sliderImage.id"
        class=""
      >
        <CardImg
          :img="sliderImage.src"
          :id="sliderImage.id"
          :rate="sliderImage.rate"
          :details="sliderImage.detail"
          :category="sliderImage.category"
          :borderColor="
            sliderImage.rate > 7
              ? 'green'
              : sliderImage.rate > 5.6
              ? 'yellow'
              : 'red'
          "
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>