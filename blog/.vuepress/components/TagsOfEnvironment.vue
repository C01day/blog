<template>
<div>
  <el-tag
    v-for="tag in dynamicTags"
    :key="tag.label"
    :type="tag.type"
    closable
    :disable-transitions="false"
    @close="handleClose(tag)"
    effect="dark"
    >
    {{tag.label}}
  </el-tag>
</div>
</template>

<script>
  export default {
    data() {
      return {
        dynamicTags: [
          { type: '', label: '源代码' },
          { type: 'success', label: 'Node.js' },
          { type: 'info', label: 'Github' },
          { type: 'danger', label: 'Git' },
          { type: 'warning', label: 'Github Desktop' }
        ],
        types: ['', 'success', 'info', 'warning', 'danger' ],
        typeNow: 0,
        inputVisible: false,
        inputValue: ''
      };
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },
    }
  }
</script>

<style>
  .el-tag {
    margin-left: 10px;
    margin-top: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    margin-top: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    margin-top: 10px;
    vertical-align: bottom;
  }
</style>