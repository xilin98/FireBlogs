<template>
  <div class="home">
    <BlogPost :post="welcomeScreen"></BlogPost>
    <BlogPost v-for="(post, index) in sampleBlogPost" :key="index"></BlogPost>
  </div>
</template>

<script>
import BlogPost from "../component/BlogPost";
export default {
  name: "Home",
  components: { BlogPost },
  data() {
    return {
      welconScreen: {
        title: "welcome",
        blogPost:
          "Weekly blog article with all things programming, including HTML CSS JavaScript and more, Register today to never miss a post",
        welcomeScreen: true,
        photo: "coding",
      },

      sampleBlogPost: [
        {
          title: "This is a Filler Title",
          blogHTML: "This is a blog post title!",
          blogCoverPhoto: "beautiful stories",
        },
        {
          title: "This is a Filler Title",
          blogHTML: "This is a blog post title!",
          blogCoverPhoto: "design for everyone",
        },
      ],
    };
  },
};
</script>
