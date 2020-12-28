<template>
    <div>
        <Layout class-prefix="layout">
            <!--            标签-->
            <Tags />
            <!--            备注-->
            <Notes/>
            <!--            收支选择-->
            <Types/>
            <!--            数字键盘-->
            <NumberPad/>
        </Layout>
    </div>
</template>

<script lang="ts">
    import Tags from '@/components/Tags.vue';
    import Notes from '@/components/Notes.vue';
    import Types from '@/components/Types.vue';
    import NumberPad from '@/components/NumberPad.vue';
    export default {
        name: 'Money',
        components:{
            NumberPad,
            Types,
            Notes,
            Tags,
        }
    };
</script>

<style lang="scss">
    .layout-content{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
</style>

