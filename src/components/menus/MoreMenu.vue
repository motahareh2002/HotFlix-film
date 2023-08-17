

<template>
  <ul
    class="flex flex-col items-start px-5 bg-[#222028] text-[#FFFFFF] rounded-lg overflow-y-auto mt-4 z-50"
  >
    <router-link :to="{ path: '/about' }">
      <button class="py-2 hover:hover">
        <li>About</li>
      </button>
    </router-link>
    <router-link :to="{ path: '/Profile' }">
      <button class="py-2 hover:hover">
        <li>Profile</li>
      </button>
    </router-link>
    <router-link :to="{ path: '/contact' }">
      <button class="py-2 hover:hover">
        <li>Contacts</li>
      </button>
    </router-link>
    <router-link :to="{ path: '/helpCenter' }">
      <button class="py-2 hover:hover">
        <li>Help center</li>
      </button>
    </router-link>
    <router-link :to="{ path: '/privacy' }">
      <button class="py-2 hover:hover">
        <li>Privacy policy</li>
      </button>
    </router-link>
    <button class="py-2 hover:hover">
      <li>Admin pages</li>
    </button>
    <router-link :to="{ path: '/signIn' }">
      <button class="py-2 hover:hover">
        <li>Sign in</li>
      </button>
    </router-link>
    <router-link :to="{ path: '/signUp' }">
      <button class="py-2 hover:hover">
        <li>Sign up</li>
      </button>
    </router-link>
    <router-link :to="{ path: '/forgotPass' }">
      <button class="py-2 hover:hover">
        <li>Forgot password</li>
      </button>
    </router-link>
    <router-link :to="{ name: 'NotFound' }">
      <button class="py-2 hover:hover">
        <li>404 Page</li>
      </button>
    </router-link>
  </ul>
</template>
