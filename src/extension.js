const vscode = require("vscode");
const path = require("path");
const fs = require("fs");

// • Extension Optional Settings • 
const settings = vscode.workspace.getConfiguration("c64opcodes");
const useC64Font = settings.get("useC64Font");
const useC64SidePanel = settings.get("useSidePanel");

//  ╭──────────────────────────────────────────────────────────────────────────────╮
//  │                            ● Function activate ●                             │
//  │                                                                              │
//  │            • This Method is Called When Extension is Activated •             │
//  ╰──────────────────────────────────────────────────────────────────────────────╯
function activate(context) {

    // • Track currently webview panel • 
    let webviewPanel = undefined;
    context.subscriptions.push(vscode.commands.registerCommand('c64opcodes.openOpcodesList', () => {
        if (webviewPanel) {
            webviewPanel.dispose();
        };
        if (useC64SidePanel) {
            // • Create a new panel in side panel • 
            webviewPanel = vscode.window.createWebviewPanel('c64opcodes', 'C64 Opcodes', vscode.ViewColumn.Beside, {
                localResourceRoots: [vscode.Uri.file(path.join(context.extensionPath, 'src', 'html'))],
                enableScripts: true,
                enableFindWidget: true,
            });
            //            console.log("col 2");
        } else {
            // • Create a new panel in current column • 
            webviewPanel = vscode.window.createWebviewPanel('c64opcodes', 'C64 Opcodes', vscode.ViewColumn.Active, {
                localResourceRoots: [vscode.Uri.file(path.join(context.extensionPath, 'src', 'html'))],
                enableScripts: true,
                enableFindWidget: true,
            });
            //            console.log("col 1");
        }

        // Use a nonce to only allow a specific script to be run.
        // const nonce = getNonce();
        //---------------------------------------------

        // • Local path to main script run in the webview • 
        const scriptPathOnDisk = vscode.Uri.file(path.join(context.extensionPath, 'src', 'html', 'main.js'));
        // • And the uri we use to load this script in the webview • 
        const scriptUri = (scriptPathOnDisk).with({ 'scheme': 'vscode-resource' });
        // • Get path to C64 Font resource on disk • 
        const fontc64opcodesPath = vscode.Uri.file(path.join(context.extensionPath, 'src', 'html', 'c64font.ttf'));
        // • Uri to load C64 Font into webview • 
        const fontc64opcodesUri = (fontc64opcodesPath).with({ 'scheme': 'vscode-resource' });
        // • Get path to CSS resource on disk • 
        const stylesc64opcodesPath = vscode.Uri.file(path.join(context.extensionPath, 'src', 'html', 'c64opcodes.css'));
        // • Uri to load styles into webview • 
        const stylesc64opcodesUri = (stylesc64opcodesPath).with({ 'scheme': 'vscode-resource' });
        // • Get path to C64 screen image resource on disk • 
        const imgc64screenPath = vscode.Uri.file(path.join(context.extensionPath, 'src', 'html', 'c64_mainscreen.gif'));
        // • Uri to load styles into webview • 
        const imgc64screenUri = (imgc64screenPath).with({ 'scheme': 'vscode-resource' });
        // • Get word under cursor for (name).html file • 
        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
        let wordRange = editor.document.getWordRangeAtPosition(editor.selection.start);
        let wordText = editor.document.getText(wordRange);
        const lowWordText = wordText.toLowerCase(); // Convert to lower case for comparison
        const highWordText = wordText.toUpperCase(); // Convert to Upper case for Title

        // • If word is opcode then display its html page in webview • 
        if (lowWordText.match(/^(adc|and|asl|bcc|bcs|beq|bit|bmi|bne|bpl|brk|bvc|bvs|clc|cld|cli|clv|cmp|cpx|cpy|dec|dex|dey|eor|inc|inx|iny|jmp|jsr|lda|ldx|ldy|lsr|nop|ora|pha|php|pla|plp|rol|ror|rti|rts|sbc|sec|sed|sei|sta|stx|sty|tax|tay|tsx|txa|txs|tya|aso|slo|rla)$/)) {
            // • Local path to html file • 
            const htmlFilePath = vscode.Uri.file(path.join(context.extensionPath, 'src', 'html', lowWordText + '.html'));
            var localhtml = fs.readFileSync(htmlFilePath.fsPath, 'utf8').toString();
            localhtml = localhtml.replace('${stylesc64opcodesUri}', stylesc64opcodesUri.toString());
            localhtml = localhtml.replace('${scriptUri}', scriptUri.toString());
            // localhtml = localhtml.replace('${nonce}', nonce);
            if (useC64Font) {
                localhtml = localhtml.replace('/*C64FONT*/', '@font-face {\nfont-family: c64font;\nsrc: url("${fontc64opcodesUri}");\n}\np {\nfont-family: c64font;\n}');
            }
            localhtml = localhtml.replace('${imgc64screenUri}', imgc64screenUri.toString());
            localhtml = localhtml.replace('${fontc64opcodesUri}', fontc64opcodesUri.toString());
            // console.log(localhtml);
            webviewPanel.webview.html = localhtml;
            webviewPanel.title = 'C64 Opcodes - ' + highWordText;
            // • Otherwise display Home Page • 
        } else {
            const htmlFilePath = vscode.Uri.file(path.join(context.extensionPath, 'src', 'html', 'index.html'));
            var localhtml = fs.readFileSync(htmlFilePath.fsPath, 'utf8').toString();
            // webviewPanel.webview.html = getOpcodeHomeContent();
            localhtml = localhtml.replace('${stylesc64opcodesUri}', stylesc64opcodesUri.toString());
            localhtml = localhtml.replace('${scriptUri}', scriptUri.toString());
            // localhtml = localhtml.replace('${nonce}', nonce);
            localhtml = localhtml.replace('${imgc64screenUri}', imgc64screenUri.toString());
            webviewPanel.webview.html = localhtml;
            webviewPanel.title = 'C64 Opcodes - Welcome';
        };

        // • Reset when the current panel is closed • 
        webviewPanel.onDidDispose(() => {
            webviewPanel = undefined;
        }, null, context.subscriptions);

        // • Display User Selected Page on Button Clicked • 
        webviewPanel.webview.onDidReceiveMessage(message => {
            if (webviewPanel) {
                const filePath = vscode.Uri.file(path.join(context.extensionPath, 'src', 'html', message.command + '.html'));
                var localhtml = fs.readFileSync(filePath.fsPath, 'utf8').toString();
                localhtml = localhtml.replace('${stylesc64opcodesUri}', stylesc64opcodesUri.toString());
                localhtml = localhtml.replace('${scriptUri}', scriptUri.toString());
                // localhtml = localhtml.replace('${nonce}', nonce);
                localhtml = localhtml.replace('${imgc64screenUri}', imgc64screenUri.toString());
                webviewPanel.webview.html = localhtml;
                webviewPanel.title = 'C64 Opcodes - ' + message.pageTitle;
            }
        }, undefined, context.subscriptions);
    }));
}

function getOpcodeHomeContent() {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>C64 Opcodes List</title>
</head>
<body>
   <h1>Show Opcode List</h1>
   <button class="button button1">Green</button>
   <button class="button button2">Blue</button>
   <img src="C:/c64/code/my_code/c64opcodes/src/html/rolgraf1.png" width="300" />
   <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" width="300" />
  </body>
</html>`;
}
// function getNonce() {
// 	let text = '';
// 	const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// 	for (let i = 0; i < 32; i++) {
// 		text += possible.charAt(Math.floor(Math.random() * possible.length));
// 	}
// 	return text;
// }
// this method is called when your extension is deactivated

//  ╭──────────────────────────────────────────────────────────────────────────────╮
//  │                           ● Function deactivate ●                            │
//  │                                                                              │
//  │           • This Method is Called When Extension is Deactivated •            │
//  ╰──────────────────────────────────────────────────────────────────────────────╯
function deactivate() {};

//  ╭──────────────────────────────────────────────────────────────────────────────╮
//  │                              ● Export modules ●                              │
//  ╰──────────────────────────────────────────────────────────────────────────────╯
module.exports = {
    activate,
    deactivate
};