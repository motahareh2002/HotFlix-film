<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Ref } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
interface movieType {
  id: number;
  src: string;
  rate: number;
  detail: string;
  category: string;
  releaseYear: number;
  country: string;
  director: string;
}
const movies: movieType[] = [
  {
    id: 1,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/laCJxobHoPVaLQTKxc14Y2zV64J.jpg",
    detail: "Ahsoka",
    category: "Sci-Fi & Fantasy, Action & Adventure",
    rate: 8.4,
    releaseYear: 2023,
    country: "ARG",
    director: "Quentin Tarantino",
  },
  {
    id: 2,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/i6ye8ueFhVE5pXatgyRrZ83LBD8.jpg",
    detail: "The Monkey King",
    category: "Animation, Fantasy, Adventure",
    rate: 7.1,
    releaseYear: 2019,
    country: "BGD",
    director: "Alfred Hitchcock",
  },
  {
    id: 3,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/6oH378KUfCEitzJkm07r97L0RsZ.jpg",
    detail: "Elemental",
    category: "Animation, Comedy, Family",
    rate: 2.3,
    releaseYear: 2020,
    country: "BEN",
    director: "Steven Spielberg",
  },
  {
    id: 4,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/lZ2sOCMCcGaPppaXj0Wiv0S7A08.jpg",
    detail: "Blue Beetle",
    category: "Action, Science Fiction",
    rate: 6.8,
    releaseYear: 1999,
    country: "BFA",
    director: "Martin Scorsese",
  },
  {
    id: 5,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    detail: "Across the Spider-Verse",
    category: "Animation, Action, Adventure",
    rate: 3.9,
    releaseYear: 1950,
    country: "CPV",
    director: "Stanley Kubrick",
  },
  {
    id: 6,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    detail: "Barbie",
    category: "Comedy, Adventure, Fantasy",
    rate: 7.1,
    releaseYear: 2002,
    country: "CXR",
    director: "Akira Kurosawa",
  },
  {
    id: 7,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
    detail: "The Flash",
    category: "Action, Adventure",
    rate: 2.8,
    releaseYear: 2008,
    country: "DOM",
    director: "Tim Burton",
  },
  {
    id: 8,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    detail: "Oppenheimer",
    category: "Drama, History",
    rate: 5.5,
    releaseYear: 2021,
    country: "FRA",
    director: "Jean-Luc Godard",
  },
  {
    id: 9,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/8vfyhKkTwvxbV5UuuIMBP0BLILv.jpg",
    detail: "The List",
    category: "Romance, Comedy",
    rate: 6.6,
    releaseYear: 2019,
    country: "GIB",
    director: "Wes Anderson",
  },
  {
    id: 10,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/vB8o2p4ETnrfiWEgVxHmHWP9yRl.jpg",
    detail: "Heart of Stone",
    category: "Thriller, Action",
    rate: 5.6,
    releaseYear: 2017,
    country: "HND",
    director: "Francis Ford Coppola",
  },
  {
    id: 11,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/3O8uTUpt76ShtEtNNrOJpcwQROH.jpg",
    detail: "Mask Girl",
    category: "Comedy, Drama",
    rate: 9.2,
    releaseYear: 1998,
    country: "IRN",
    director: "Andrei Tarkovsky",
  },
  {
    id: 12,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/4K7gQjD19CDEPd7A9KZwr2D9Nco.jpg",
    detail: "No Hard Feelings",
    category: "Comedy, Romance",
    rate: 5.6,
    releaseYear: 2019,
    country: "ITA",
    director: "Ridley Scott",
  },
  {
    id: 13,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/fYx5q9hPAmbDrWzsYUDhxZJnigC.jpg",
    detail: "The Winter King",
    category: "Drama",
    rate: 4.9,
    releaseYear: 2023,
    country: "KOR",
    director: "Orson Welles",
  },
  {
    id: 14,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/q17tXNROOslj7uCGicKNlIf9Rx6.jpg",
    detail: "The Castle Quest",
    category: "Animation",
    rate: 7.2,
    releaseYear: 2022,
    country: "LBR",
    director: "David Fincher",
  },
  {
    id: 15,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/fcXdJlbSdUEeMSJFsXKsznGwwok.jpg",
    detail: "One Piece",
    category: "Action & Adventure",
    rate: 5.9,
    releaseYear: 2021,
    country: "OMN",
    director: "Brian De Palma",
  },
  {
    id: 16,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/kgrLpJcLBbyhWIkK7fx1fM4iSvf.jpg",
    detail: "Ruby Gillman,",
    category: "Animation, Family",
    rate: 2.5,
    releaseYear: 2005,
    country: "QAT",
    director: "David Lynch",
  },
  {
    id: 17,
    src: "	https://www.themoviedb.org/t/p/w220_and_h330_face/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    detail: "Guardians of Galaxy...",
    category: "Adventure, Action",
    rate: 6.8,
    releaseYear: 2010,
    country: "TUV",
    director: "Howard Hawks",
  },
  {
    id: 18,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/ckW6FZqMFEKA9DonixjZSAPxJMo.jpg",
    detail: "Gran Turismo",
    category: "Action, Drama",
    rate: 3.9,
    releaseYear: 2012,
    country: "USA",
    director: "Christopher Nolan",
  },
  {
    id: 19,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/3O3klyyYpAZBBE4n7IngzTomRDp.jpg",
    detail: "Scream",
    category: "Crime, Horror, Mystery",
    rate: 2.8,
    releaseYear: 2023,
    country: "ARG",
    director: "Quentin Tarantino",
  },
  {
    id: 20,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/2yYP0PQjG8zVqturh1BAqu2Tixl.jpg",
    detail: "Shrek 2",
    category: "Family, Comedy",
    rate: 5.5,
    releaseYear: 2019,
    country: "BGD",
    director: "Alfred Hitchcock",
  },
  {
    id: 21,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/ruW3malZtlg66ODfg614dFbXO68.jpg",
    detail: "The Expendables",
    category: "Adventure, Thriller",
    rate: 6.6,
    releaseYear: 2020,
    country: "BEN",
    director: "Steven Spielberg",
  },
  {
    id: 22,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/j5jM5pq78ObAXX1WhTsb115EkLl.jpg",
    detail: "The Twilight Saga",
    category: "Drama, Romance",
    rate: 5.6,
    releaseYear: 1999,
    country: "BFA",
    director: "Martin Scorsese",
  },
  {
    id: 23,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/h3NJDiaaliUH35ApXPu8PFKZwWz.jpg",
    detail: "Waiting...",
    category: "Comedy",
    rate: 9.2,
    releaseYear: 1950,
    country: "CPV",
    director: "Stanley Kubrick",
  },
  {
    id: 24,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/ez1EDULOCUUCySHOZU6tz97qbtM.jpg",
    detail: "Just Go with It",
    category: "Comedy, Romance",
    rate: 5.6,
    releaseYear: 2002,
    country: "CXR",
    director: "Akira Kurosawa",
  },
  {
    id: 25,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/38Xr1JnV1ZcLQ55zmdSp6n475cZ.jpg",
    detail: "Predestination",
    category: "Science Fiction",
    rate: 4.9,
    releaseYear: 2008,
    country: "DOM",
    director: "Tim Burton",
  },
  {
    id: 26,
    src: "	https://www.themoviedb.org/t/p/w220_and_h330_face/fLzlNq3fjNQ64TRRLKlNkrDpYLt.jpg",
    detail: "Megalodon",
    category: "Science Fiction",
    rate: 7.2,
    releaseYear: 2021,
    country: "FRA",
    director: "Jean-Luc Godard",
  },
  {
    id: 27,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/g8KB77SPA7SyU8eid6TAEpt9skU.jpg",
    detail: "Redemptio",
    category: "Action, Thriller",
    rate: 5.9,
    releaseYear: 2019,
    country: "GIB",
    director: "Wes Anderson",
  },
  {
    id: 28,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg",
    detail: "Far From Home",
    category: "Action, Adventure",
    rate: 2.5,
    releaseYear: 2017,
    country: "HND",
    director: "Francis Ford Coppola",
  },
  {
    id: 29,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/eoMsojXOiO18leSgHHOxzYOtG5o.jpg",
    detail: "Grotesque",
    category: "Horror, Comedy",
    rate: 6.8,
    releaseYear: 1998,
    country: "IRN",
    director: "Andrei Tarkovsky",
  },
  {
    id: 30,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/dnN1ncxEOO1TY0gYL2FWxJqlhlL.jpg",
    detail: "The Silencing",
    category: "Thriller, Action",
    rate: 3.9,
    releaseYear: 2019,
    country: "ITA",
    director: "Ridley Scott",
  },
  {
    id: 31,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/7RRHbCUtAsVmKI6FEMzZB6Re88P.jpg",
    detail: "Futurama ",
    category: "Animation, Comedy",
    rate: 6.8,
    releaseYear: 2023,
    country: "KOR",
    director: "Orson Welles",
  },
  {
    id: 32,
    src: "	https://www.themoviedb.org/t/p/w220_and_h330_face/klL4yhwiU8aF4AuF5dCfJA9sRnS.jpg",
    detail: "Modern Family ",
    category: "Comedy",
    rate: 3.9,
    releaseYear: 2022,
    country: "LBR",
    director: "David Fincher",
  },
  {
    id: 33,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/6X2hftdC8y78SKMSgfzeUItqaVq.jpg",
    detail: "Ancient Aliens ",
    category: "Documentary, Mystery",
    rate: 7.1,
    releaseYear: 2021,
    country: "OMN",
    director: "Brian De Palma",
  },
  {
    id: 34,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/f496cm9enuEsZkSPzCwnTESEK5s.jpg",
    detail: "Friends",
    category: "Comedy, Drama",
    rate: 2.8,
    releaseYear: 2005,
    country: "QAT",
    director: "David Lynch",
  },
  {
    id: 35,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/daSFbrt8QCXV2hSwB0hqYjbj681.jpg",
    detail: "Grey's Anatomy",
    category: "Drama",
    rate: 5.5,
    releaseYear: 2010,
    country: "TUV",
    director: "Howard Hawks",
  },
  {
    id: 36,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/oGE7FI29ihpWlO4TAC7bJiswW4H.jpg",
    detail: "Beverly Hillbillies ",
    category: "Comedy",
    rate: 6.6,
    releaseYear: 2012,
    country: "USA",
    director: "Christopher Nolan",
  },
  {
    id: 37,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",
    detail: "Peaky Blinders",
    category: "Drama, Crime",
    rate: 5.6,
    releaseYear: 2023,
    country: "ARG",
    director: "Quentin Tarantino",
  },
  {
    id: 38,
    src: "	https://www.themoviedb.org/t/p/w220_and_h330_face/r935SMphvXppx5bJjbIBNx02fwc.jpg",
    detail: "The Blacklist",
    category: "Crime, Mystery",
    rate: 9.2,
    releaseYear: 2019,
    country: "BGD",
    director: "Alfred Hitchcock",
  },
  {
    id: 39,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/ceqomvL0e1jGkJAPVWFlq2hGl7i.jpg",
    detail: "Blue Bloods",
    category: "Drama, Crime",
    rate: 5.6,
    releaseYear: 2020,
    country: "BEN",
    director: "Steven Spielberg",
  },
  {
    id: 40,
    src: "	https://www.themoviedb.org/t/p/w220_and_h330_face/joPhJJblNtFDOpp6zQlx0xJWsmM.jpg",
    detail: "Bob's Burgers ",
    category: "Comedy, Animation",
    rate: 4.9,
    releaseYear: 1999,
    country: "BFA",
    director: "Martin Scorsese",
  },
  {
    id: 41,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/516MFML05KWiPfiQNAsVCGMySc7.jpg",
    detail: "The Seven Deadly Sins",
    category: "Fantasy, Animation",
    rate: 7.1,
    releaseYear: 1950,
    country: "CPV",
    director: "Stanley Kubrick",
  },
  {
    id: 42,
    src: "	https://www.themoviedb.org/t/p/w220_and_h330_face/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
    detail: "Puss in Boots",
    category: "Adventure, Comedy, Action",
    rate: 2.8,
    releaseYear: 2002,
    country: "CXR",
    director: "Akira Kurosawa",
  },
  {
    id: 43,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    detail: "Guardians of the Galaxy",
    category: "Science Fiction",
    rate: 5.5,
    releaseYear: 2008,
    country: "DOM",
    director: "Tim Burton",
  },
  {
    id: 44,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/zI3E2a3WYma5w8emI35mgq5Iurx.jpg",
    detail: "The Simpsons ",
    category: " Animation, Comedy",
    rate: 6.6,
    releaseYear: 2021,
    country: "FRA",
    director: "Jean-Luc Godard",
  },
  {
    id: 45,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/aLB7psB9N81n5GecHNOudXWW3AI.jpg",
    detail: "Family Guy ",
    category: "Animation, Comedy",
    rate: 5.6,
    releaseYear: 2019,
    country: "GIB",
    director: "Wes Anderson",
  },
  {
    id: 46,
    src: "https://www.themoviedb.org/t/p/w220_and_h330_face/xnFFz3etm1vftF0ns8RMHA8XdqT.jpg",
    detail: "American Dad",
    category: "Animation, Comedy",
    rate: 9.2,
    releaseYear: 2017,
    country: "HND",
    director: "Francis Ford Coppola",
  },
];

const src: Ref<string> = ref("");
const rate: Ref<number> = ref(0);
const detail: Ref<string> = ref("");
const category: Ref<string> = ref("");
const borderColor: Ref<string> = ref("");
const releaseYear: Ref<number> = ref(0);
const country: Ref<string> = ref("");
const director: Ref<string> = ref("");
const router = useRouter();
onMounted(() => {
  const index = +route.params.id - 1;
  const result = movies.find(({ id }) => id === +route.params.id);
  if (result) {
    src.value = movies[index].src;
    rate.value = movies[index].rate;
    detail.value = movies[index].detail;
    category.value = movies[index].category;
    borderColor.value =
      movies[index].rate > 7.5
        ? "green"
        : movies[index].rate > 5.6
        ? "yellow"
        : "red";
    releaseYear.value = movies[index].releaseYear;
    country.value = movies[index].country;
    director.value = movies[index].director;
  } else {
    router.push("/404");
  }
});
</script>



<template>
  <div
    class="bg-[url('http://hotflix.volkovdesign.com/main/img/section/details.jpg')] pb-10"
  >
    <div class="text-[#FFFFFF] mt-10 px-3 sm:px-20">
      <div class="px-3 lg:flex ">
        <div class="flex justify-center lg:w-[30%]">
          <img
            :src="src"
            class="rounded-lg brightness-90 w-full hover:brightness-100 md:w-[50%] lg:w-[75%]"
          />
        </div>

        <div class="lg:w-[70%]">
          <div class="lg:flex flex-col items-start">
            <h1 class="text-2xl mt-5 mb-3 text-center">
              {{ detail }} ({{ releaseYear }})
            </h1>
            <div class="flex items-center justify-center rounded-lg py-2">
              <div
                id="rate"
                class="w-[40px] rounded-full border-4 text-white p-1 mr-4"
                :style="{
                  backgroundColor: 'rgba(26,25,31,0.6)',
                  borderColor: borderColor,
                }"
              >
                <span>{{ rate }}</span>
              </div>
              <span class="text-lg">User Score</span>
            </div>
          </div>
          <div class="">
            <div class="text-center my-4 py-3 bg-[#222028] lg:bg-transparent lg:text-left">
              <span class="mb-2 text-center text-primary">{{ category }}</span>
            </div>
            <div class="leading-relaxed py-4 text-sm rounded-lg mb-4 md:flex md:flex-col md:items-center lg:items-start">
              <span class="text-xl">Overview :</span>
              <p class="mt-3 md:text-center lg:text-left">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy. The
                point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English.
              </p>
              <div class="grid grid-cols-2 mt-5 md:grid-cols-3">
                <span class=""
                  >Release Year :
                  <span class="text-primary">{{ releaseYear }}</span></span
                >
                <span class=""
                  >Country :
                  <span class="text-primary">{{ country }}</span></span
                >
                <span class="mt-3 md:mt-0"
                  >Director :
                  <span class="text-primary">{{ director }}</span></span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

