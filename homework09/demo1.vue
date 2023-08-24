<template>
    <div>
        <h1>{{ msg }}</h1>
        <h2>姓名：{{ name }} </h2>
        <h2>性别：{{ sex }}</h2>
        <h2>年龄：{{ age }}</h2>
    </div>
</template>

<script>
    export default {
        name:"componentA",
        components:{},
        props:['name','age','sex'],
        data(){
            return{
                msg:"个人基本信息",

            }
        }
    }
</script>
