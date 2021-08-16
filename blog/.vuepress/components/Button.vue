<template>
<!-- <div align=center>  -->
  <el-row>
    <el-button @click="def">默认按钮</el-button>
    <el-button type="primary" @click="main">主要按钮</el-button>
    <el-button type="success" @click="success">成功按钮</el-button>
    <el-button type="info" @click="info">信息按钮</el-button>
    <el-button type="warning" @click="warning">警告按钮</el-button>
    <el-button type="danger" @click="error">危险按钮</el-button>
  </el-row>
<!-- </div>   -->
</template>

<script>
export default {
  methods: {
      def() {
        this.$notify({
          title: '提示',
          message: "这是默认按钮",
        });
      },
      main() {
        this.$notify({
          title: '提示',
          message: "这是主要按钮",
          type: 'success',
        });
      },
      success() {
        this.$message({
          message: "成功按钮",
          type: 'success',
          showClose: true,
        });
      },
      info() {
        this.$message({
          message: "信息按钮",
          showClose: true,
        });
      },
      warning() {
        this.$message({
          message: "警告按钮",
          type: 'warning',
          showClose: true,
        });
      },
      error() {
        this.$message({
          message: "危险按钮",
          type: 'error',
          showClose: true,
        });
      },
  }
};
</script>

<style scoped>
  .el-button {
    margin-left: 10px;
    margin-top: 10px;
  }
</style>