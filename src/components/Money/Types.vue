<template>
    <div>
        <ul class="types">
            <!--如果对象的属性名里面有变量就可以这么写：用【】中括号括起来-->
            <li :class="{[classPrefix+'-item']:classPrefix,selected:value==='-'}"
                @click="selectType('-')">
                支出
            </li>
            <li :class="{[classPrefix+'-item']:classPrefix,selected:value==='+'}"
                @click="selectType('+')">
                收入
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop, Watch} from 'vue-property-decorator';

    @Component

    export default class Types extends Vue {
        @Prop() readonly value!: string; // ！意味他的值一定不可以是空的
        @Prop() classPrefix?: string; //?意为他的值可以是空

        selectType(type: string){
            if(type !== '-' && type !== '+'){
                throw new Error('type is unknown');
            }
            this.$emit('update:value', type);
        }

    }
</script>

<style scoped lang="scss">
    .types {
        background: #c4c4c4;
        display: flex;
        text-align: center;
        font-size: 24px;

        > li {
            width: 50%;
            height: 64px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;

            &.selected::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 4px;
                background: #333;

            }
        }
    }

</style>