
<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import { UseName } from "@/stores/Names";
import ButtonOrange from "../btns/buttonOrange.vue";
import SignOutIcon from "../icons/SignOutIcon.vue";
import UserIcon from "../icons/UserIcon.vue";
import ListIcon from "../icons/ListIcon.vue";
import CloseIcon from "../icons/CloseIcon.vue";
import ProfileMain from "./ProfileMain.vue";
const isOpen: Ref<boolean> = ref(false);
const text: Ref<string> = ref("PROFILE");
const show: Ref<boolean> = ref(false);
function subMenuOpen() {
  isOpen.value = !isOpen.value;
}
function clickHandler() {
  show.value = true;
}
const name = UseName();
</script>


<template>
  <div class="text-[#FFFFFF] px-4 sm:px-20 my-10">
    <idv class="">
      <div class="flex justify-between items-center">
        <div class="flex items-start md:items-center">
          <div class="bg-[#212529] px-3 py-2 rounded-md mr-3">
            <UserIcon />
          </div>
          <div class="text-sm">
            <h1>{{ name.firstName }} {{ name.lastName }}</h1>
            <span class="text-[rgba(255,255,255,0.7)] text-xs"
              >HOTFLIX ID : 15763</span
            >
          </div>
          <ul class="md:flex text-xs ml-5 hidden">
            <router-link active-class="active" :to="{ name: 'profileTo' }">
              <button @click="clickHandler">
                <li
                  class="mr-5 text-center w-24 pb-2 hover:hover cursor-pointer"
                  :class="{ active: !show }"
                >
                  PROFILE
                </li>
              </button>
            </router-link>
            <router-link active-class="active" :to="{ name: 'subscription' }">
              <button @click="clickHandler">
                <li
                  class="mr-5 text-center w-24 pb-2 hover:hover cursor-pointer"
                >
                  SUBSCRIPTION
                </li>
              </button>
            </router-link>
            <router-link active-class="active" :to="{ path: 'setting' }">
              <button @click="clickHandler">
                <li
                  class="mr-5 text-center w-24 pb-2 hover:hover cursor-pointer"
                >
                  SETTINGS
                </li>
              </button>
            </router-link>
          </ul>
        </div>
        <ButtonOrange class="px-2 py-1 md:px-4 md:py-1">
          <SignOutIcon class="md:hidden" />
          <span class="hidden md:block">LOGOUT</span>
        </ButtonOrange>
      </div>
      <button class="text-xs md:hidden mt-8" @click="subMenuOpen">
        <span>{{ text }}</span>
        <ListIcon v-if="!isOpen" class="ml-2 text-primary" />
        <CloseIcon v-else class="ml-2 text-primary" />
      </button>
    </idv>
    <div class="relative">
      <div
        class="bg-[#222028] rounded-lg text-[#FFFFFF] -top-8 text-xs w-[220px] absolute px-4 py-5 z-50 md:hidden"
        v-if="isOpen"
      >
        <ul>
          <!-- <router-link :to="{ path: 'profileTo' }"> -->
          <!-- <li
              class="pb-3 cursor-pointer"
              @click="
                () => {
                  text = 'PROFILE';
                  isOpen = false;
                  show = true;
                }
              "
            >
              PROFILE
            </li> -->
          <router-link :to="{ name: 'profileTo' }">
            <li
              class="pb-3 cursor-pointer"
              @click="
                () => {
                  text = 'PROFILE';
                  isOpen = false;
                  show = true;
                }
              "
            >
              PROFILE
            </li>
          </router-link>
          <router-link :to="{ name: 'subscription' }">
            <li
              class="pb-3 cursor-pointer"
              @click="
                () => {
                  text = 'SUBSCRIPTION';
                  isOpen = false;
                  show = true;
                }
              "
            >
              SUBSCRIPTION
            </li>
          </router-link>
          <router-link :to="{ name: 'setting' }">
            <li
              class="pb-3 cursor-pointer"
              @click="
                () => {
                  text = 'SETTING';
                  isOpen = false;
                  show = true;
                }
              "
            >
              SETTING
            </li>
          </router-link>
        </ul>
      </div>
      <router-view v-if="show" class="mt-10" />
      <ProfileMain v-else class="mt-10" />
    </div>
  </div>
</template>

<style scoped>
.active {
  border-bottom: 2px solid #f9ab00;
}
</style>