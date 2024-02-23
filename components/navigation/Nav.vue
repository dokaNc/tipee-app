<template>
  <div class="layout-maxed">
    <div class="navbar flex align-items-center">
      <div class="logo-icon">
        <img src="/img/tipeee-logo.svg" alt="tipee logo" />
        <div>
          <span @click="showDrop = true"><Icon v-if="!showDrop" icon="Burger" /></span>
          <span @click="showDrop = false">
            <Icon v-if="showDrop" icon="Cross" />
          </span>
        </div>
      </div>
      <div class="links flex align-items-center">
        <div class="link flex">
          <NuxtLink v-for="link in links" :key="link.name" :to="link.path">
            {{ link.name }}
          </NuxtLink>
        </div>
        <CounterCreator />
      </div>

      <div class="dropdown-links" v-if="showDrop">
        <NuxtLink v-for="link in links" :key="link.name" :to="link.path">
          {{ link.name }}
        </NuxtLink>
        <CounterCreator />
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/misc/Icon.vue";
import CounterCreator from "@/components/misc/CounterCreator.vue";

export default {
  data() {
    return {
      links: [
        { name: "Liste des pages", path: "/" },
        { name: "À propos", path: "/about" },
      ],
      showDrop: false,
    };
  },

  components: {
    Icon,
    CounterCreator,
  },
};
</script>

<style scoped lang="scss">
.layout-maxed {
  @media all and (max-width: 720px) {
    display: block;
    .navbar {
      // flex-direction: column;
      flex-direction: column;
      align-items: flex-start;
    }

    .logo-icon {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }

    svg {
      display: block !important;
    }

    .dropdown-links {
      display: flex !important;
      flex-direction: column;
      gap: 1rem;
      align-items: flex-start;
    }

    .links {
      display: none;
      flex-direction: column;
      gap: 1rem;
    }
  }
  .navbar {
    padding: 2rem 0;
    gap: 2rem;

    .dropdown-links,
    svg {
      display: none;
    }

    .links {
      gap: 2rem;
      justify-content: space-between;
      width: 100%;
    }

    .link {
      gap: 1.5rem;
    }

    img {
      width: 110px;
    }

    a {
      color: #898b8c;
      text-decoration: none;
      font-size: 1rem;
      font-weight: 600;
      position: relative;

      &:hover {
        &::before {
          content: "";
          position: absolute;
          background: #d64758;
          bottom: -3px;
          height: 2px;
          width: 70%;
          animation: run 0.3s;
        }
      }
    }

    .nuxt-link-exact-active {
      color: #404040;

      &::before {
        content: "";
        position: absolute;
        background: #d64758;
        bottom: -3px;
        height: 2px;
        width: 100%;
        animation: run 0.3s;
        transition: all 0.3s;
      }
    }
  }
}

@keyframes run {
  0% {
    width: 0;
  }
  100% {
    width: 70%;
  }
}
</style>
