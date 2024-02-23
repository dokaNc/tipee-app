<template>
  <div>
    <Banner text="Comment ça marche ?" :red="true" />
    <div class="layout-maxed">
      <p>Sur Tipeee, chaque créateur peut lancer sa page de soutien, peu importe ses besoins, ce qu’il fait ou d’où il vient.</p>
      <p>
        Sa communauté peut le soutenir financièrement en lui envoyant un Tip du montant de son choix, de façon ponctuelle ou récurrente (sans durée
        d’engagement).
      </p>
      <p>
        Ce soutien est volontaire : il permet d’aider un créateur à développer son activité et de lui dire qu'on aime son travail. S’il le souhaite,
        le créateur peut proposer différentes contreparties pour ses tipeurs.
      </p>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/misc/banner";

export default {
  name: "AboutPage",

  components: {
    Banner,
  },
};
</script>

<style scoped>
h2 {
  background-image: linear-gradient(-145deg, #d54757, #e9595b);
  color: white;
}
</style>
