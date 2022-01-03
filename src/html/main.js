// This script will be run within the webview itself
// It cannot access the main VS Code APIs directly.

const vscode = acquireVsCodeApi();

// Handle messages sent from the extension to the webview
let dataVariable;
window.addEventListener('message', event => {
    const message = event.data; // The json data that the extension sent
    // switch (message.command) {
    //     case 'refactor':
    //         currentCount = Math.ceil(currentCount * 0.5);
    //         counter.textContent = currentCount;
    //         break;
    dataVariable = message.data;
    // }
    console.log("message:", message);
    //    cmdADC();
});


function cmdHOME() {
    vscode.postMessage({
        command: "welcome",
        pageTitle: "Welcome Home Page"
    });
}

function cmdVIEWALL() {
    vscode.postMessage({
        command: "viewall",
        pageTitle: "View all Opcodes List"
    });
}

function cmdPFLAGS() {
    vscode.postMessage({
        command: "pflags",
        pageTitle: "Processor Flags"
    });
}

function cmdBITWISE() {
    vscode.postMessage({
        command: "bitwise",
        pageTitle: "Bitwise Instructions"
    });
}

function cmdBRANCH() {
    vscode.postMessage({
        command: "branch",
        pageTitle: "Branch Instructions"
    });
}

function cmdCOMPARE() {
    vscode.postMessage({
        command: "compare",
        pageTitle: "Compare Instructions"
    });
}

function cmdFLAG() {
    vscode.postMessage({
        command: "flag",
        pageTitle: "Flag Instructions"
    });
}

function cmdJUMP() {
    vscode.postMessage({
        command: "jump",
        pageTitle: "Jump Instructions"
    });
}

function cmdMATH() {
    vscode.postMessage({
        command: "math",
        pageTitle: "Math Instructions"
    });
}

function cmdMEMORY() {
    vscode.postMessage({
        command: "memory",
        pageTitle: "Memory Instructions"
    });
}

function cmdREGISTER() {
    vscode.postMessage({
        command: "register",
        pageTitle: "Register Instructions"
    });
}

function cmdSTACK() {
    vscode.postMessage({
        command: "stack",
        pageTitle: "Stack Instructions"
    });
}

function cmdOTHER() {
    vscode.postMessage({
        command: "other",
        pageTitle: "Other Instructions"
    });
}

function cmdILLEGAL() {
    vscode.postMessage({
        command: "illegal",
        pageTitle: "Illegal Opcodes"
    });
}

function cmdADC() {
    vscode.postMessage({
        command: "adc",
        pageTitle: "ADC"
    });
}

function cmdAND() {
    vscode.postMessage({
        command: "and",
        pageTitle: "AND"
    });
}

function cmdASL() {
    vscode.postMessage({
        command: "asl",
        pageTitle: "ASL"
    });
}

function cmdBCC() {
    vscode.postMessage({
        command: "bcc",
        pageTitle: "BCC"
    });
}

function cmdBCS() {
    vscode.postMessage({
        command: "bcs",
        pageTitle: "BCS"
    });
}

function cmdBEQ() {
    vscode.postMessage({
        command: "beq",
        pageTitle: "BEQ"
    });
}

function cmdBIT() {
    vscode.postMessage({
        command: "bit",
        pageTitle: "BIT"
    });
}

function cmdBMI() {
    vscode.postMessage({
        command: "bmi",
        pageTitle: "BMI"
    });
}

function cmdBNE() {
    vscode.postMessage({
        command: "bne",
        pageTitle: "BNE"
    });
}

function cmdBPL() {
    vscode.postMessage({
        command: "bpl",
        pageTitle: "BPL"
    });
}

function cmdBRK() {
    vscode.postMessage({
        command: "brk",
        pageTitle: "BRK"
    });
}

function cmdBVC() {
    vscode.postMessage({
        command: "bvc",
        pageTitle: "BVC"
    });
}

function cmdBVS() {
    vscode.postMessage({
        command: "bvs",
        pageTitle: "BVS"
    });
}

function cmdCLC() {
    vscode.postMessage({
        command: "clc",
        pageTitle: "CLC"
    });
}

function cmdCLD() {
    vscode.postMessage({
        command: "cld",
        pageTitle: "CLD"
    });
}

function cmdCLI() {
    vscode.postMessage({
        command: "cli",
        pageTitle: "CLI"
    });
}

function cmdCLV() {
    vscode.postMessage({
        command: "clv",
        pageTitle: "CLV BUTTON PRESSED!"
    });
}

function cmdCMP() {
    vscode.postMessage({
        command: "cmp",
        pageTitle: "CMP BUTTON PRESSED!"
    });
}

function cmdCPX() {
    vscode.postMessage({
        command: "cpx",
        pageTitle: "CPX BUTTON PRESSED!"
    });
}

function cmdCPY() {
    vscode.postMessage({
        command: "cpy",
        pageTitle: "CPY BUTTON PRESSED!"
    });
}

function cmdDEC() {
    vscode.postMessage({
        command: "dec",
        pageTitle: "DEC BUTTON PRESSED!"
    });
}

function cmdDEX() {
    vscode.postMessage({
        command: "dex",
        pageTitle: "DEX BUTTON PRESSED!"
    });
}

function cmdDEY() {
    vscode.postMessage({
        command: "dey",
        pageTitle: "DEY BUTTON PRESSED!"
    });
}

function cmdEOR() {
    vscode.postMessage({
        command: "eor",
        pageTitle: "EOR BUTTON PRESSED!"
    });
}

function cmdINC() {
    vscode.postMessage({
        command: "inc",
        pageTitle: "INC BUTTON PRESSED!"
    });
}

function cmdINX() {
    vscode.postMessage({
        command: "inx",
        pageTitle: "INX BUTTON PRESSED!"
    });
}

function cmdINY() {
    vscode.postMessage({
        command: "iny",
        pageTitle: "INY BUTTON PRESSED!"
    });
}

function cmdJMP() {
    vscode.postMessage({
        command: "jmp",
        pageTitle: "JMP BUTTON PRESSED!"
    });
}

function cmdJSR() {
    vscode.postMessage({
        command: "jsr",
        pageTitle: "JSR BUTTON PRESSED!"
    });
}

function cmdLDA() {
    vscode.postMessage({
        command: "lda",
        pageTitle: "LDA BUTTON PRESSED!"
    });
}

function cmdLDX() {
    vscode.postMessage({
        command: "ldx",
        pageTitle: "LDX BUTTON PRESSED!"
    });
}

function cmdLDY() {
    vscode.postMessage({
        command: "ldy",
        pageTitle: "LDY BUTTON PRESSED!"
    });
}

function cmdLSR() {
    vscode.postMessage({
        command: "lsr",
        pageTitle: "LSR BUTTON PRESSED!"
    });
}

function cmdNOP() {
    vscode.postMessage({
        command: "nop",
        pageTitle: "NOP BUTTON PRESSED!"
    });
}

function cmdORA() {
    vscode.postMessage({
        command: "ora",
        pageTitle: "ORA BUTTON PRESSED!"
    });
}

function cmdPHA() {
    vscode.postMessage({
        command: "pha",
        pageTitle: "PHA BUTTON PRESSED!"
    });
}

function cmdPHP() {
    vscode.postMessage({
        command: "php",
        pageTitle: "PHP BUTTON PRESSED!"
    });
}

function cmdPLA() {
    vscode.postMessage({
        command: "pla",
        pageTitle: "PLA BUTTON PRESSED!"
    });
}

function cmdPLP() {
    vscode.postMessage({
        command: "plp",
        pageTitle: "PLP BUTTON PRESSED!"
    });
}

function cmdROL() {
    vscode.postMessage({
        command: "rol",
        pageTitle: "ROL BUTTON PRESSED!"
    });
}

function cmdROR() {
    vscode.postMessage({
        command: "ror",
        pageTitle: "ROR BUTTON PRESSED!"
    });
}

function cmdRTI() {
    vscode.postMessage({
        command: "rti",
        pageTitle: "RTI BUTTON PRESSED!"
    });
}

function cmdRTS() {
    vscode.postMessage({
        command: "rts",
        pageTitle: "RTS BUTTON PRESSED!"
    });
}

function cmdSBC() {
    vscode.postMessage({
        command: "sbc",
        pageTitle: "SBC BUTTON PRESSED!"
    });
}

function cmdSEC() {
    vscode.postMessage({
        command: "sec",
        pageTitle: "SEC BUTTON PRESSED!"
    });
}

function cmdSED() {
    vscode.postMessage({
        command: "sed",
        pageTitle: "SED BUTTON PRESSED!"
    });
}

function cmdSEI() {
    vscode.postMessage({
        command: "sei",
        pageTitle: "SEI BUTTON PRESSED!"
    });
}

function cmdSTA() {
    vscode.postMessage({
        command: "sta",
        pageTitle: "STA BUTTON PRESSED!"
    });
}

function cmdSTX() {
    vscode.postMessage({
        command: "stx",
        pageTitle: "STX BUTTON PRESSED!"
    });
}

function cmdSTY() {
    vscode.postMessage({
        command: "sty",
        pageTitle: "STY BUTTON PRESSED!"
    });
}

function cmdTAX() {
    vscode.postMessage({
        command: "tax",
        pageTitle: "TAX BUTTON PRESSED!"
    });
}

function cmdTAY() {
    vscode.postMessage({
        command: "tay",
        pageTitle: "TAY BUTTON PRESSED!"
    });
}

function cmdTSX() {
    vscode.postMessage({
        command: "tsx",
        pageTitle: "TSX BUTTON PRESSED!"
    });
}

function cmdTXA() {
    vscode.postMessage({
        command: "txa",
        pageTitle: "TXA BUTTON PRESSED!"
    });
}

function cmdTXS() {
    vscode.postMessage({
        command: "txs",
        pageTitle: "TXS BUTTON PRESSED!"
    });
}

function cmdTYA() {
    vscode.postMessage({
        command: "tya",
        pageTitle: "TYA BUTTON PRESSED!"
    });
}