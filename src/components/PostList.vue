<template class="notranslate">
  <div class="notranslate">
    <v-layout row wrap mw-700>
      <v-flex v-for="i in posts.length > limits ? limits : posts.length" :class="'xs' + 12 / column" px-3>
        <Post
        :date="posts[i - 1].created_at"
        :title="posts[i - 1].title"
        :body="posts[i - 1].body"></Post>
        <v-divider></v-divider>
      </v-flex>
      <v-flex xs12 text-xs-center round my-5 v-if="loadMore">
        <v-btn v-if="this.limits<=posts.length" v-on:click="loadMorePosts" class="movebtn button2"><v-icon size="25" class="mr-2">fa-plus</v-icon>View more</v-btn>
        <router-link to="/postwriter"><v-btn v-if="$store.state.user" class="movebtn button3">
        <v-icon size="25" class="mr-2 notranslate">create</v-icon>Write</v-btn></router-link>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import Post from '@/components/Post'
import FirebaseService from '@/services/FirebaseService'
export default {
  name: 'PostList',
  props: {
    column: {type: Number, default: 1},
    limits: {type: Number, default: 4},
    loadMore: {type: Boolean, default: false}
  },
  data() {
    return {
      posts: []
    }
  },
  components: {
    Post
  },
  mounted() {
    this.getPosts()
  },
  methods: {
    async getPosts() {
      this.posts = await FirebaseService.getPosts()
    },
    async postPost(title, body){
      await FirebaseService.postPost(title, body)
    },
    loadMorePosts() {
        this.limits = this.limits*2;
    } 
  }
}
</script>
<style>
.mw-700 {
  max-width: 700px;
  margin: auto;
}
</style>
