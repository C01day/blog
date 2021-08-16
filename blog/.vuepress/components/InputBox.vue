<template>
    <div align=center>
        <el-input v-model="input" placeholder="" style="width:98px"></el-input>
        <el-badge :value="input" class="item">
            <el-button size="small" :plain="true" style="height:40px">显示</el-button>
        </el-badge>
    </div>
</template>

<script>
export default {
    data() {
        return {
            input: ''
        }
    },
};
</script>
