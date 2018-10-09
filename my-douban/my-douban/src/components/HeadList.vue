<template>
    <div class="headlist">
        <ul>
            <li>影院热映</li>
            <li>同城活动</li>
            <li>豆瓣时间</li>
            <li>使用豆瓣app</li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'headlist'
}
</script>
<style lang="scss" scoped>
    .headlist{
        width: 100%;
        padding: 5%;
        padding-top: 3rem;

        box-sizing: border-box;
        ul{
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            li{
                float: left;
                width: 49%;
                margin-bottom: 0.3rem;
                height: 2rem;
                line-height: 2rem;
                text-align: center;
                background-color: #f6f6f6;
                font-size: 0.5rem;
            }
        }
    }
</style>
