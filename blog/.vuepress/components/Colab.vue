<template>
<div class="devsite-table-wrapper"><table class="tfo-notebook-buttons" align="left">
  <tbody><tr>
  <td>
    <a target="_blank" href="https://colab.research.google.com/github/tensorflow/docs/blob/master/site/en/tutorials/structured_data/time_series.ipynb?hl=zh-cn"><img :src="$withBase('/img/colab_logo.png')">Run in Google Colab</a>
  </td>
</tr></tbody></table></div>
</template>

<script>
export default {

}
</script>

<style scoped>
:root {
    --devsite-primary-font-family: Roboto,Noto Sans,Noto Sans JP,Noto Sans KR,Noto Naskh Arabic,Noto Sans Thai,Noto Sans Hebrew,Noto Sans Bengali,sans-serif;
}
div {
    display: block;
}
.devsite-table-wrapper {
    margin: var(--devsite-table-margin,16px 0);
    overflow: auto;
}
.devsite-table-wrapper .tfo-notebook-buttons {
    display: inline-block;
    margin-left: 3px;
    width: auto;
}
.devsite-table-wrapper table {
    margin: 0;
}
table {
    border: 0;
    border-collapse: collapse;
    border-spacing: 0;
    font: 14px/20px var(--devsite-primary-font-family);
    margin: 16px 0 15px;
    width: 100%;
}
table {
    --devsite-alt-table-cell-background: rgba(241,243,244,0.75);
    --devsite-h2-border: 0;
    --devsite-responsive-table-first-column-background: #f1f3f4;
    --devsite-table-cell-background: hsla(0,0%,100%,0.95);
    --devsite-table-heading-background: #e8eaed;
}
tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
}
.tfo-notebook-buttons tr {
    background: 0;
    border: 0;
}
.tfo-notebook-buttons td {
    padding-left: 0;
    padding-right: 20px;
}
td {
    display: table-cell;
    padding: var(--devsite-table-cell-padding,7px 8px 8px);
}
tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
}
.tfo-notebook-buttons a:hover, .tfo-notebook-buttons a:focus {
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, .3), 0 2px 6px 2px rgba(60, 64, 67, .15);
}
.tfo-notebook-buttons a, .tfo-notebook-buttons :link, .tfo-notebook-buttons :visited {
    border-radius: 8px;
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, .3), 0 1px 3px 1px rgba(60, 64, 67, .15);
    color: #202124;
    padding: 12px 17px;
    transition: box-shadow 0.2s;
}
.tfo-notebook-buttons td > a {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
table :link, table :visited {
    word-break: normal;
}
.tfo-notebook-buttons td > a {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.tfo-notebook-buttons td > a > img {
  margin-right: 8px;
}

</style>
