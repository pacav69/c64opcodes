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
        command: "index",
        pageTitle: "Welcome"
    });
}

function cmdTEST() {
    vscode.postMessage({
        command: "test",
        pageTitle: "Test Page"
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
        pageTitle: "CLV"
    });
}

function cmdCMP() {
    vscode.postMessage({
        command: "cmp",
        pageTitle: "CMP"
    });
}

function cmdCPX() {
    vscode.postMessage({
        command: "cpx",
        pageTitle: "CPX"
    });
}

function cmdCPY() {
    vscode.postMessage({
        command: "cpy",
        pageTitle: "CPY"
    });
}

function cmdDEC() {
    vscode.postMessage({
        command: "dec",
        pageTitle: "DEC"
    });
}

function cmdDEX() {
    vscode.postMessage({
        command: "dex",
        pageTitle: "DEX"
    });
}

function cmdDEY() {
    vscode.postMessage({
        command: "dey",
        pageTitle: "DEY"
    });
}

function cmdEOR() {
    vscode.postMessage({
        command: "eor",
        pageTitle: "EOR"
    });
}

function cmdINC() {
    vscode.postMessage({
        command: "inc",
        pageTitle: "INC"
    });
}

function cmdINX() {
    vscode.postMessage({
        command: "inx",
        pageTitle: "INX"
    });
}

function cmdINY() {
    vscode.postMessage({
        command: "iny",
        pageTitle: "INY"
    });
}

function cmdJMP() {
    vscode.postMessage({
        command: "jmp",
        pageTitle: "JMP"
    });
}

function cmdJSR() {
    vscode.postMessage({
        command: "jsr",
        pageTitle: "JSR"
    });
}

function cmdLDA() {
    vscode.postMessage({
        command: "lda",
        pageTitle: "LDA"
    });
}

function cmdLDX() {
    vscode.postMessage({
        command: "ldx",
        pageTitle: "LDX"
    });
}

function cmdLDY() {
    vscode.postMessage({
        command: "ldy",
        pageTitle: "LDY"
    });
}

function cmdLSR() {
    vscode.postMessage({
        command: "lsr",
        pageTitle: "LSR"
    });
}

function cmdNOP() {
    vscode.postMessage({
        command: "nop",
        pageTitle: "NOP"
    });
}

function cmdORA() {
    vscode.postMessage({
        command: "ora",
        pageTitle: "ORA"
    });
}

function cmdPHA() {
    vscode.postMessage({
        command: "pha",
        pageTitle: "PHA"
    });
}

function cmdPHP() {
    vscode.postMessage({
        command: "php",
        pageTitle: "PHP"
    });
}

function cmdPLA() {
    vscode.postMessage({
        command: "pla",
        pageTitle: "PLA"
    });
}

function cmdPLP() {
    vscode.postMessage({
        command: "plp",
        pageTitle: "PLP"
    });
}

function cmdROL() {
    vscode.postMessage({
        command: "rol",
        pageTitle: "ROL"
    });
}

function cmdROR() {
    vscode.postMessage({
        command: "ror",
        pageTitle: "ROR"
    });
}

function cmdRTI() {
    vscode.postMessage({
        command: "rti",
        pageTitle: "RTI"
    });
}

function cmdRTS() {
    vscode.postMessage({
        command: "rts",
        pageTitle: "RTS"
    });
}

function cmdSBC() {
    vscode.postMessage({
        command: "sbc",
        pageTitle: "SBC"
    });
}

function cmdSEC() {
    vscode.postMessage({
        command: "sec",
        pageTitle: "SEC"
    });
}

function cmdSED() {
    vscode.postMessage({
        command: "sed",
        pageTitle: "SED"
    });
}

function cmdSEI() {
    vscode.postMessage({
        command: "sei",
        pageTitle: "SEI"
    });
}

function cmdSTA() {
    vscode.postMessage({
        command: "sta",
        pageTitle: "STA"
    });
}

function cmdSTX() {
    vscode.postMessage({
        command: "stx",
        pageTitle: "STX"
    });
}

function cmdSTY() {
    vscode.postMessage({
        command: "sty",
        pageTitle: "STY"
    });
}

function cmdTAX() {
    vscode.postMessage({
        command: "tax",
        pageTitle: "TAX"
    });
}

function cmdTAY() {
    vscode.postMessage({
        command: "tay",
        pageTitle: "TAY"
    });
}

function cmdTSX() {
    vscode.postMessage({
        command: "tsx",
        pageTitle: "TSX"
    });
}

function cmdTXA() {
    vscode.postMessage({
        command: "txa",
        pageTitle: "TXA"
    });
}

function cmdTXS() {
    vscode.postMessage({
        command: "txs",
        pageTitle: "TXS"
    });
}

function cmdTYA() {
    vscode.postMessage({
        command: "tya",
        pageTitle: "TYA"
    });
}

function cmdASO() {
    vscode.postMessage({
        command: "slo",
        pageTitle: "ASO - SLO"
    });
}

function cmdSLO() {
    vscode.postMessage({
        command: "slo",
        pageTitle: "SLO - ASO"
    });
}

function cmdRLA() {
    vscode.postMessage({
        command: "rla",
        pageTitle: "RLA"
    });
}

function cmdLSE() {
    vscode.postMessage({
        command: "sre",
        pageTitle: "LSE - SRE"
    });
}

function cmdSRE() {
    vscode.postMessage({
        command: "sre",
        pageTitle: "SRE - LSE"
    });
}

function cmdRRA() {
    vscode.postMessage({
        command: "rra",
        pageTitle: "RRA"
    });
}

function cmdAXS() {
    vscode.postMessage({
        command: "sax",
        pageTitle: "AXS - SAX - AAX"
    });
}

function cmdSAX() {
    vscode.postMessage({
        command: "sax",
        pageTitle: "SAX - AXS - AAX"
    });
}

function cmdAAX() {
    vscode.postMessage({
        command: "sax",
        pageTitle: "AAX - SAX - AXS"
    });
}

function cmdLAX() {
    vscode.postMessage({
        command: "lax",
        pageTitle: "LAX"
    });
}

function cmdDCM() {
    vscode.postMessage({
        command: "dcp",
        pageTitle: "DCM - DCP"
    });
}

function cmdDCP() {
    vscode.postMessage({
        command: "dcp",
        pageTitle: "DCP - DCM"
    });
}

function cmdISC() {
    vscode.postMessage({
        command: "isc",
        pageTitle: "ISC - ISB - INS"
    });
}

function cmdISB() {
    vscode.postMessage({
        command: "isc",
        pageTitle: "ISB - ISC - INS"
    });
}

function cmdINS() {
    vscode.postMessage({
        command: "isc",
        pageTitle: "INS - ISC - ISB"
    });
}

function cmdANC2() {
    vscode.postMessage({
        command: "anc2",
        pageTitle: "ANC2"
    });
}

function cmdANC() {
    vscode.postMessage({
        command: "anc",
        pageTitle: "ANC"
    });
}

function cmdALR() {
    vscode.postMessage({
        command: "alr",
        pageTitle: "ALR - ASR"
    });
}

function cmdASR() {
    vscode.postMessage({
        command: "alr",
        pageTitle: "ASR - ALR"
    });
}

function cmdARR() {
    vscode.postMessage({
        command: "arr",
        pageTitle: "ARR"
    });
}

function cmdANE() {
    vscode.postMessage({
        command: "ane",
        pageTitle: "ANE - XAA"
    });
}

function cmdXAA() {
    vscode.postMessage({
        command: "ane",
        pageTitle: "XAA - ANE"
    });
}

function cmdSBX() {
    vscode.postMessage({
        command: "sbx",
        pageTitle: "SBX"
    });
}

function cmdUSBC() {
    vscode.postMessage({
        command: "usbc",
        pageTitle: "USBC - SBC2"
    });
}

function cmdSBC2() {
    vscode.postMessage({
        command: "usbc",
        pageTitle: "SBC2 - USBC"
    });
}

function cmdLAS() {
    vscode.postMessage({
        command: "las",
        pageTitle: "LAS - LAR"
    });
}

function cmdLAR() {
    vscode.postMessage({
        command: "las",
        pageTitle: "LAR - LAS"
    });
}

function cmdILLEGALNOP() {
    vscode.postMessage({
        command: "illegalnop",
        pageTitle: "Illegal NOP's"
    });
}

function cmdJAM() {
    vscode.postMessage({
        command: "jam",
        pageTitle: "JAM - KIL - HLT"
    });
}

function cmdKIL() {
    vscode.postMessage({
        command: "jam",
        pageTitle: "KIL - JAM - HLT"
    });
}

function cmdHLT() {
    vscode.postMessage({
        command: "jam",
        pageTitle: "HLT - JAM - KIL"
    });
}

function cmdSHA() {
    vscode.postMessage({
        command: "sha",
        pageTitle: "SHA - AXA - AHX"
    });
}

function cmdAXA() {
    vscode.postMessage({
        command: "sha",
        pageTitle: "AXA - SHA - AHX"
    });
}

function cmdAHX() {
    vscode.postMessage({
        command: "sha",
        pageTitle: "AHX - SHA - AXA"
    });
}

function cmdSHX() {
    vscode.postMessage({
        command: "shx",
        pageTitle: "SHX - SXA - XAS"
    });
}

function cmdSXA() {
    vscode.postMessage({
        command: "shx",
        pageTitle: "SXA - SHX - XAS"
    });
}

function cmdXAS() {
    vscode.postMessage({
        command: "shx",
        pageTitle: "XAS - SHX - SXA"
    });
}

function cmdSHY() {
    vscode.postMessage({
        command: "shy",
        pageTitle: "SHY - SYA - SAY"
    });
}

function cmdSYA() {
    vscode.postMessage({
        command: "shy",
        pageTitle: "SYA - SHY - SAY"
    });
}

function cmdSAY() {
    vscode.postMessage({
        command: "shy",
        pageTitle: "SAY - SHY - SYA"
    });
}

function cmdTAS() {
    vscode.postMessage({
        command: "tas",
        pageTitle: "TAS - SHS"
    });
}

function cmdSHS() {
    vscode.postMessage({
        command: "tas",
        pageTitle: "SHS - TAS"
    });
}

function cmdLXA() {
    vscode.postMessage({
        command: "lxa",
        pageTitle: "LXA"
    });
}
