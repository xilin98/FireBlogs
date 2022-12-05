<template>
  <div>
    <footer>
      <div class="container">
        <div class="left">
          <div class="col-1">
            <div class="brand">Fire Blogs</div>
            <ul>
              <li>
                <a href="#" class="link">
                  <youtube class="svg-icon"></youtube>
                  youtube</a
                >
              </li>
              <li>
                <a href="#" class="link">
                  <twitter class="svg-icon"></twitter>
                  twitter
                </a>
              </li>
              <li>
                <a href="#" class="link">
                  <instagram class="svg-icon"></instagram>
                  instagram
                </a>
              </li>
              <li>
                <a href="#" class="link">
                  <linkedin class="svg-icon"></linkedin>
                  linkedin
                </a>
              </li>
            </ul>
          </div>
          <div class="col-2">
            <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
            <router-link class="link" :to="{ name: 'blogs' }"
              >Blogs</router-link
            >
            <router-link class="link" v-if="user" :to="{ name: 'newpost' }"
              >New Post</router-link
            >
            <router-link class="link" v-if="!user" :to="{ name: 'login' }"
              >Login</router-link
            >
          </div>
        </div>
        <div class="right">Copyright 2022 All Right Reserved</div>
      </div>
    </footer>
  </div>
</template>

<script>
import youtube from "../assets/Icons/youtube-brands.svg";
import twitter from "../assets/Icons/twitter-brands.svg";
import instagram from "../assets/Icons/instagram-brands.svg";
import linkedin from "../assets/Icons/linkedin-brands.svg";
export default {
  components: {
    youtube,
    twitter,
    linkedin,
    instagram,
  },
  data() {
    return {
      user: null,
    };
  },
};
</script>

<style lang="scss" scoped>
footer {
  color: #fff;
  margin-top: auto;
  padding: 100px 25px;
  background-color: #303030;

  .left {
    flex: 1;
    gap: 32px;
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    @media screen and (max-width: 800px) {
      flex-direction: column;
    }
  }

  ul {
    width: 500px;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    li {
      width: 50px;
      height: 50px;
      color: #fff;
    }
  }
  .brand {
    display: flex;
    font-size: 25px;
    flex: 1;
    margin-bottom: 2rem;
    justify-content: center;
  }

  .col-2 {
    gap: 32px;
    display: flex;
    flex-direction: column;
    @media (max-width: 800px) {
      flex-direction: row;
    }
  }
  .link {
    color: #fff;
  }
  .right {
    margin-top: 2em;
    flex: 1;
    @media (min-width: 800px) {
      margin-left: 50px;
    }
  }
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
@media screen and (min-width: 800px) {
  .container {
    flex-direction: row;
  }
}
</style>
