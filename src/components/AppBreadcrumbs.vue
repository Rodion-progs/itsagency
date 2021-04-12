<template>
  <section class="breadcrumbs">
    <div class="container">
      <ul class="breadcrumbs__list">
        <li class="breadcrumbs__item">
          <a href="/" class="breadcrumbs__link">Главная</a>
          <svg
            class="breadcrumbs__separate"
            width="3"
            height="4"
            viewBox="0 0 3 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="1.5" cy="2" r="1.5" fill="#C4C4C4" />
          </svg>
        </li>
        <li class="breadcrumbs__item">
          <a href="/" class="breadcrumbs__link">Продукты</a>
          <svg
            class="breadcrumbs__separate"
            width="3"
            height="4"
            viewBox="0 0 3 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="1.5" cy="2" r="1.5" fill="#C4C4C4" />
          </svg>
        </li>
        <li class="breadcrumbs__item">Краски</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "Breadcrumbs",
};
</script>
