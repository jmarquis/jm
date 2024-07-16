---
layout: base
layout-variant: notebook
---

<main>
  <ul>
    {%- for note in collections.note reversed -%}
    <li><a href="{{ note.page.url }}">{{ note.data.title }}</a><time>{{ note.data.date | date: "%B %e, %Y" }}</time>
    </li>
    {%- endfor -%}
  </ul>
</main>
