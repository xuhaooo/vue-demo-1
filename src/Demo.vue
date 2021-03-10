<template>
     <div class="red">
         <button @click="fn">call fn</button>
         {{message}}
    </div>
</template>

<script>
export default {
    props: ['message', 'fn']
}
</script>

<style scoped>
.red {
    color: red;
}
</style>