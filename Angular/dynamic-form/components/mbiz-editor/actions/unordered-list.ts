﻿import { EditorAction } from './interface/editor-action';
import { EditorUtils } from '../utils/editor-utils';

export class UnorderedListEditorAction extends EditorAction {
    constructor(contentElement: HTMLElement) {
        super(contentElement);
    }

    public updateState(): void {
        const selection = EditorUtils.getSelection();

        if (selection.rangeCount === 0) {
            this.isDisabled = true;
            this.isActive = false;
        }
        else {
            this.isDisabled = false;
            this.isActive = EditorUtils.queryCommandState('insertUnorderedList');
        }
    }

    public isKeybindingPressed(event: KeyboardEvent): boolean {
        return false;
    }

    protected onExecute(): void {
        EditorUtils.executeCommand('insertUnorderedList');
    };
}