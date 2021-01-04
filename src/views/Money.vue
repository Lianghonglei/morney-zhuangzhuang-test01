<template>
    <div>
        <Layout class-prefix="layout">
            <!--            标签-->
            <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
            <!--            备注-->
            <Notes @update:value="onUpdateNotes"/>
            <!--            收支选择-->
            <Types :value.sync="record.type"/>
            <!--            数字键盘-->
            <NumberPad :value.sync="record.amount" @sumbit="saveRecord"/>
        </Layout>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Tags from '@/components/Money/Tags.vue';
    import Notes from '@/components/Money/Notes.vue';
    import Types from '@/components/Money/Types.vue';
    import NumberPad from '@/components/Money/NumberPad.vue';
    import {Component, Watch} from 'vue-property-decorator';

    type Record = {
        tags: string[];
        notes: string;
        type: string;
        amount: number;
    }

    @Component({
        components: {
            NumberPad,
            Types,
            Notes,
            Tags,
        }
    })
    export default class Money extends Vue{
        tags = ['衣','食','住','行'];
        recordList: Record[] = [];
        record: Record = {
            tags:[], notes:'', type:'-', amount:0
        };

        onUpdateTags(value: string[]){
            console.log(value);
            this.record.tags = value;
        }

        onUpdateNotes(value: string){
            this.record.notes = value;
        }

        saveRecord(){
            const record2 = JSON.parse(JSON.stringify(this.record));
            this.recordList.push(record2);
        }

        @Watch('recordList')
        onRecordListChange(){
            window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
        }

    }

</script>

<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
</style>

