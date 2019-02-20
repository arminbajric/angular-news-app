export class TemplateModelRow {
    labelText;
    inputType;
    checkButton;
    checkButtonNum;
    radioButton;
    radioButtonNum;
    inputRestriction;
    constructor(labelText, inputType, checkButton, checkButtonNum, radioButton, radioButtonNum, inputRestriction) {
        this.labelText = labelText;
        this.inputType = inputType;
        this.checkButton = checkButton;
        this.checkButtonNum = checkButtonNum;
        this.radioButton = radioButton;
        this.radioButtonNum = radioButtonNum;
        this.inputRestriction = inputRestriction;

    }
}
