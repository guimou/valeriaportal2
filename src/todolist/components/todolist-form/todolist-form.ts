import { MTextfield } from '@modul/components/textfield/textfield';
import { dateFilter } from '@modul/filters/date/date';
import Vue from 'vue';
import Component from 'vue-class-component';
import { Emit, Prop } from 'vue-property-decorator';
import WithRender from './todolist-form.html';

@WithRender
@Component({
    components: { MTextfield },
    filters: {
        formatDate: (date: Date | undefined): string => date ? dateFilter(date) : ''
    }
})
export default class TodolistForm extends Vue {
    @Prop()
    state!: Todolist.TodolistFormState;

    @Emit('confirm-form')
    emitConfirmForm(todo: Todolist.Todo): void {
    }

    @Emit('close-form')
    emitCloseForm(): void {
    }

    title: string = '';
    description: string = '';

    onConfirm(): void {
        const todo: Todolist.Todo = {
            todoId: '-1',
            todolistId: '-1',
            title: this.title,
            description: this.description,
            status: 'open'
        };

        this.emitConfirmForm(todo);
    }

    onClose(): void {
        this.emitCloseForm();
    }
}
