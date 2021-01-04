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
    import model from '@/model';

    // const recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');
    const recordList = model.fetch()

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
        recordList: RecordItem[] = recordList;
        record: RecordItem = {
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
            const record2: RecordItem= JSON.parse(JSON.stringify(this.record));
            record2.createdAt = new Date();
            this.recordList.push(record2);
        }

        @Watch('recordList')
        onRecordListChange(){
            model.save(this.recordList);
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

