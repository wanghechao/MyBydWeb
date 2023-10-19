<template>
  <div class="MySearch">
    <div class="Sreach">
            <b>搜索</b>
        <el-input v-model="input" placeholder="请输入你想要了解的消息" size="small">
            <template #append>
                <el-button>
                    GO!
                    <template #icon>
                        <i-ep-search/>
                    </template>
                </el-button>
            </template>
        </el-input>
    </div>
    
  </div>
</template>

<script setup>

</script>

<style scoped>
.MySearch {
    position: absolute;
    width: 100%;
    height: 120px;
    background: rgba(0,0,0,.9);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.Sreach {
    width: 50%;
}
</style>