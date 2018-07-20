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
        padding: 4%;
        padding-top: 1.5rem;

        box-sizing: border-box;
        ul{
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            li{
                float: left;
                width: 49%;
                margin-bottom: 0.1rem;
                height: 1rem;
                line-height: 1rem;
                text-align: center;
                background-color: #f6f6f6;
                font-size: 0.32rem;
            }
        }
    }
</style>
