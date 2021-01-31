<template>
        <Layout>
            <Types :value.sync="yyy" class-prefix="zzz"/>
            <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
        </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Types from '@/components/Money/Types.vue';
    import Tabs from '@/components/Tabs.vue';
    @Component({
        components:{Tabs, Types}
    })
    export default class Statistics extends Vue{
        yyy = '-';
        interval="day";
        intervalList = [
            {text:'天', value:'day'},
            {text:'周', value:'week'},
            {text:'月', value:'month'}
        ];

    }
</script>

<style scoped lang="scss">
   ::v-deep .zzz-item{
        background: #fff;
        &.selected{
            background:#c4c4c4;
            &::after{
                display: none;
            }
        }
    }


</style>