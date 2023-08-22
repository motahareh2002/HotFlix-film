
<script setup lang="ts">
import ButtonOrange from "../btns/buttonOrange.vue";
import { ref } from "vue";
import type { Ref } from "vue";
import { UseName } from "@/stores/Names";
const isChanged: Ref<boolean> = ref(false);
const oldPassword: Ref<string> = ref("");
const newPassword: Ref<string> = ref("");
const confirmPassword: Ref<string> = ref("");
const firstNames: Ref<string> = ref("");
const lastNames: Ref<string> = ref("");
function clickHandler() {
  if (
    (oldPassword.value != "" && newPassword.value != "",
    confirmPassword.value != "")
  ) {
    isChanged.value = true;
    setInterval(() => {
      isChanged.value = false;
    }, 1500);
  }
  oldPassword.value = "";
  newPassword.value = "";
  confirmPassword.value = "";
}
const name = UseName();
function changeFirstName() {
  if (firstNames.value != "" && lastNames.value != "") {
    name.firstName = firstNames.value;
    name.lastName = lastNames.value;
  }

  firstNames.value = "";
  lastNames.value = "";
}
</script>

<template>
  <div class="md:flex items-start">
    <div
      class="border border-[#222028] p-3 md:p-6 rounded-md mb-6 md:w-1/2 mr-5"
    >
      <h3 class="text-xl">Profile Details</h3>
      <form class="flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-3">
        <div class="flex flex-col">
          <label class="text-xs mt-4 mb-2">Username</label>
          <input type="text" placeholder="User 123" class="form-input p-2.5" />
        </div>
        <div class="flex flex-col">
          <label class="text-xs mt-4 mb-2">Email</label>
          <input
            type="email"
            placeholder="email@gmail.com"
            class="form-input p-2.5"
          />
        </div>
        <div class="flex flex-col">
          <label class="text-xs mt-4 mb-2">First Name</label>
          <input
            type="text"
            placeholder="Motahareh"
            class="form-input p-2.5"
            v-model="firstNames"
          />
        </div>
        <div class="flex flex-col">
          <label class="text-xs mt-4 mb-2">Last Name</label>
          <input
            type="text"
            placeholder="Jafarian"
            class="form-input p-2.5"
            v-model="lastNames"
          />
        </div>
        <ButtonOrange
          class="w-1/2 mt-6 mb-3 py-2"
          @click.prevent="changeFirstName"
          >SAVE</ButtonOrange
        >
      </form>
    </div>
    <div
      class="border border-[#222028] p-3 md:p-6 rounded-md md:w-1/2 md:h-[475px] lg:h-auto"
    >
      <h3 class="text-xl">Change Password</h3>
      <form class="flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-3">
        <div class="flex flex-col col-span-2">
          <label class="text-xs mt-4 mb-2">Old Password</label>
          <input
            type="password"
            class="form-input p-2.5"
            v-model="oldPassword"
          />
        </div>
        <div class="flex flex-col">
          <label class="text-xs mt-4 mb-2">New Password</label>
          <input
            type="password"
            class="form-input p-2.5"
            v-model="newPassword"
          />
        </div>

        <div class="flex flex-col">
          <label class="text-xs mt-4 mb-2">Confirm new password</label>
          <input
            type="password"
            class="form-input p-2.5"
            v-model="confirmPassword"
          />
        </div>
        <div class="flex items-center">
          <ButtonOrange
            class="w-1/2 mt-6 mb-3 py-2"
            @click.prevent="clickHandler"
            >CHANGE</ButtonOrange
          >
          <div
            class="bg-[#222028] p-2 mt-3 mx-2 rounded-lg text-xs"
            v-show="isChanged"
          >
            <fa icon="check" />
            <span>changed</span>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

