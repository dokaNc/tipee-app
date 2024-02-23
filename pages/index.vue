<template>
  <div class="mb-24">
    <Banner text="Liste des pages" />
    <div class="layout-maxed">
      <section class="grids flex align-items-start md:grid-cols-2">
        <Card>
          <CardTitle class="mb-16" title="Ajouter une page" :blue="true" />
          <form ref="form">
            <div>
              <InputLabel label="Nom de la page :" />
              <InputText v-model="pageName" />
            </div>
            <div>
              <InputLabel label="Nom du slug :" />
              <InputText v-model="slugName" />
            </div>
            <ButtonDefault class="mt-8" name="Ajouter la page" @action="submitForm" />
          </form>
          <div class="status mt-16">
            <div v-if="status !== null" :class="{ success: status, error: !status }">
              {{ status ? "Votre page a été ajouté aves succès !" : "Veuillez vérifier le formulaire." }}
            </div>
          </div>
        </Card>
        <Card>
          <div class="flex align-items-center justify-between mb-16">
            <CardTitle title="Page des créateurs" />
          </div>
          <List :data="lists.lists" />
        </Card>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import List from "@/components/list/list";
import Banner from "@/components/misc/banner";
import Card from "@/components/card/card";
import CardTitle from "@/components/card/cardTitle";
import InputText from "@/components/controls/inputText";
import InputLabel from "@/components/controls/inputLabel";
import ButtonDefault from "@/components/buttons/buttonDefault";
import CounterCreator from "@/components/misc/CounterCreator.vue";

export default {
  name: "IndexPage",

  data() {
    return {
      pageName: null,
      slugName: null,
      status: null,
    };
  },

  computed: {
    ...mapState({
      lists: "lists",
    }),
  },

  methods: {
    ...mapMutations({ addCreator: "lists/addItem" }),

    submitForm() {
      this.$axios
        .$post("/projects", { name: this.pageName, slug: this.stringifySlug(this.slugName) })
        .then(() => {
          this.addItem();
          this.resetForm();
          this.status = true;
        })
        .catch(() => (this.status = false));
    },

    addItem() {
      this.addCreator({ name: this.pageName, slug: this.stringifySlug(this.slugName) });
    },

    resetForm() {
      this.$refs.form.reset();
      this.pageName = null;
      this.slugName = null;
    },

    stringifySlug(slug) {
      return slug?.toLowerCase().trim().replace(/ /g, "-");
    },
  },

  components: {
    List,
    Banner,
    Card,
    CardTitle,
    InputText,
    InputLabel,
    ButtonDefault,
    CounterCreator,
  },
};
</script>

<style scoped lang="scss">
h2 {
  background-image: linear-gradient(90deg, #86b3e4, #6f8fe7);
  color: white;
}

@media all and (max-width: 990px) {
  .grids {
    display: flex !important;
    flex-direction: column;
    align-items: stretch;
  }
}

.grids {
  display: grid;
  gap: 2.5rem;
  grid-template-columns: 1fr 2fr;
}

.btn {
  background-color: #16ba16;
  color: white;
  border-radius: 2px;
}

.status {
  font-weight: 600;
  font-size: 0.9rem;

  .success {
    color: #109e00;
  }
  .error {
    color: #d64758;
  }
}
</style>
