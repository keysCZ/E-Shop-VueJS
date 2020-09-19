<template>
  <div>
    <b-card
      title="Card Title"
      tag="article"
      :img-src="imagePath"
      :img-alt="imageAlt"
      img-top
      style="max-width: 20rem; max-height: 30rem;"
      class="mb-2"
    >
      <b-card-text>
        <slot name="text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </slot>
      </b-card-text>

      <b-button href="#" variant="primary">
        <slot name="button-txt"> Go somewhere </slot>
      </b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "CardS",
  props: ["imagePath", "imageAlt"],
};
</script>

<style></style>
