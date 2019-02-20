export class TemplateModel {
    templateModel;
    constructor() {
        this.templateModel = new Map();
    }
    addRow(templateRow) {
        this.templateModel.add(templateRow);
    }
    getModel() {
        return this.templateModel;
    }
}
