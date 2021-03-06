Blockly.Blocks['move'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Gehe nach")
            .appendField(new Blockly.FieldDropdown([
                ["Rechts", "right"],
                ["Oben", "up"],
                ["Unten", "down"],
            ]), "direction");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle('custom_game_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['pickup'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Nimm Schild aus Truhe");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle('custom_game_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['shieldNearby'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Schild in Truhe?");
        this.setOutput(true, "Boolean");
        this.setStyle('custom_control_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};