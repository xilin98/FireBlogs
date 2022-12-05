<template>
  <div>
    <header>
      <nav class="container">
        <div class="branding">
          <router-link class="header" :to="{ name: 'Home' }"
            >x-blog</router-link
          >
        </div>
        <div>
          <ul v-show="!mobile">
            <router-link class="link" to="#">Home</router-link>
            <router-link class="link" to="#">Blogs</router-link>
            <router-link class="link" to="#">Create Post</router-link>
            <router-link class="link" to="#">Login/Register</router-link>
          </ul>
        </div>
      </nav>
      <menuIcon
        @click="toggleMobileNav"
        class="menu-icon"
        v-show="mobile"
      ></menuIcon>
    </header>
    <transition name="slide">
      <ul v-show="mobileNav" class="mobile-nav">
        <router-link class="link" to="#">Home</router-link>
        <router-link class="link" to="#">Blogs</router-link>
        <router-link class="link" to="#">Create Post</router-link>
        <router-link class="link" to="#">Login/Register</router-link>
      </ul>
    </transition>
  </div>
</template>

<script>
import menuIcon from "../assets/Icons/bars-regular.svg";
export default {
  name: "navigation",
  components: { menuIcon },
  data() {
    return {
      mobile: false,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: #fff;
  padding: 0 25px;
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1),
    0px 2px 4px -1px rgba(0, 0, 0, 0.06);

  z-index: 99;
  .link {
    font-weight: 500;
    padding: 0px 8px;
    &:hover {
      color: #1eb8b8;
    }
  }
  nav {
    display: flex;
    padding: 25px 0px;
    .branding {
      display: flex;
      align-items: center;
      .header {
        font-weight: 600;
        font-size: 24px;
        color: #000;
        text-decoration: none;
      }
    }
    align-items: center;
    justify-content: space-between;
    ul {
      margin-right: 32px;
      .link {
        margin-right: 32px;
      }
      .link:last-child {
        margin-right: 0;
      }
    }
  }
  .menu-icon {
    cursor: pointer;
    position: absolute;
    top: 32px;
    right: 25px;
    height: 25px;
    width: auto;
  }
}
.mobile-nav {
  position: absolute;
  padding: 25px;
  width: 70%;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #303030;
  top: 0;
  left: 0;
  .link {
    padding: 15px 0;
    color: #fff;
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: all 1s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-250px);
}
.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
}
</style>
