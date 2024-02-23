<template>
  <article>
    <a
      :href="`https://tipeee.com/${item.slug}`"
      class="t-home-slideshow-avatar-container"
      :title="item.name"
      style="background-image: url('/img/default_avatar_1.png')"
    >
      <img :alt="item.name" :title="item.name" src="/img/default_avatar_1.png" class="t-avatar-pic" />
    </a>
    <h3 class="t-home-slideshow-title">
      <a :href="`https://tipeee.com/${item.slug}`" class="">{{ item.name }}</a>
    </h3>
    <div class="t-home-slideshow-stats-container">
      <div class="t-home-slideshow-stats"><span class="t-home-slideshow-amount">862</span> Tipeurs</div>
    </div>
    <div class="t-home-slideshow-item-footer">
      <div class="t-home-slideshow-flag">
        <img src="/img/flag_fr.svg" />
      </div>
      <a :href="`https://tipeee.com/${item.slug}`" class="t-home-slideshow-tip-btn" :title="item.name">tip!</a>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style scoped lang="scss">
article {
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 5px 0px rgb(0 0 0 / 8%);
  display: flex;
  flex-direction: column;
  padding: 0 2rem 0.5rem;
  text-align: center;
  margin-top: 50px;

  &:hover {
    box-shadow: 0 0 15px 0px rgb(255 0 0 / 9%);
  }
}
.t-home-slideshow-avatar-container {
  background-color: #fff;
  background-size: cover;
  border: 3px solid #fff;
  border-radius: 50%;
  height: 122px;
  margin-bottom: 15px;
  margin-top: -45px;
  position: relative;
  transition: border-color 0.1s ease-out;
  width: 122px;
}
.t-home-slideshow-avatar-container img {
  opacity: 0;
}
.t-home-slideshow-title {
  flex: 1;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  margin-bottom: 15px;
  margin-top: 0;
}
.t-home-slideshow-title a {
  text-decoration: none;
  color: inherit;

  &:hover {
    color: #d64758;
  }
}
.t-home-slideshow-stats-container {
  align-items: center;
  display: flex;
  margin-bottom: 5px;
  font-weight: 500;
}
.t-home-slideshow-amount {
  color: #d64758;
  font-size: 1.2rem;
  font-weight: 900;
}
.t-home-slideshow-item-footer {
  align-items: flex-end;
  align-self: stretch;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  a {
    font-family: "ChunkFive", sans-serif;
  }
}
.t-home-slideshow-flag {
  width: 20px;
}
.t-home-slideshow-tip-btn {
  background-color: #d64758;
  border-radius: 4px;
  color: #fff;
  display: block;
  font-size: 1.1rem;
  padding: 1px 14px;
  text-decoration: none;
}

@media all and (max-width: 360px) {
  .t-home-slideshow-item-footer {
    align-items: center;
    flex-direction: column;
  }
}
</style>
