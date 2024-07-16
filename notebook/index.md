---
title: Notebook
layout: base
layout-variant: notebook
---

<main>
  {%- for note in collections.note reversed -%}
    <article>
      <h2><a href="{{ note.page.url }}">{{ note.data.title }}</a></h2>
      <h3 class="subtitle">{{ note.data.subtitle }}</h3>
      <time>{{ note.data.date | date: "%B %e, %Y" }}</time>
    </article>
  {%- endfor -%}
</main>
