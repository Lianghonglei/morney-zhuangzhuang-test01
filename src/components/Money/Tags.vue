<template>
    <div class="tags">
        <ul class="current">
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
        </ul>
        <div class="new">
            <button>新增标签</button>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'Tags'
    };
</script>

<style scoped lang="scss">
    .tags{
        flex-grow: 1;
        justify-content: flex-end;
        display: flex;
        flex-direction: column;
        font-size: 14px;
        padding: 16px;
        /*overflow: auto;*/
        > .current{
            display: flex;
            flex-wrap: wrap;
            > li{
                background: #d9d9d9;
                $h: 24px;
                height: $h;
                border-radius: $h/2;
                padding: 0 16px;
                margin-right: 12px;
                line-height: $h;
                margin-top: 4px;
            }
        }
        > .new{
            padding-top: 16px;
            button{
                background: transparent;
                border: none;
                color: #999;
                border-bottom: 1px solid;
                padding: 0 4px;
            }
        }
    }

</style>