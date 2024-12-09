const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "menu2",
    react: "👾",
    desc: "get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `*┋* ${commands[i].pattern}\n`;
 }
}

let madeMenu = `*╭─────────────────❒⁠⁠⁠⁠*

*⇆ 𝐇𝐈𝐈 𝐌𝐘 𝐃𝐑𝐀𝐑 𝐅𝐑𝐈𝐄𝐍𝐃⇆*

     *${𝐩𝐮𝐬𝐡𝐧𝐚𝐦𝐞}*

*┕─────────────────❒*

┏━━━━━━━━━━━━━━━━━━━━━━━━━━
   *𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐓𝐎 𝐏𝐀𝐍𝐇𝐖𝐀𝐑-𝐌𝐃 𝐅𝐔𝐋𝐋 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐋𝐈𝐒𝐓*
┗━━━━━━━━━━━━━━━━━━━━━━━━━━

*𝐂𝐑𝐄𝐀𝐓𝐄𝐃 𝐁𝐘 𝐀𝐍𝐒𝐀𝐑-𝐏𝐀𝐍𝐇𝐖𝐀𝐑*


*╭───────────────❒⁠⁠⁠⁠*
*│* *_https://github.com/Panhwar110/Panhwar-MD*
*┕───────────────❒*

*╭───────────────❒⁠⁠⁠⁠*
*│* *❂𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒❂*
*┕───────────────❒*
*╭──────────  ►*
${𝐦𝐞𝐧𝐮.𝐝𝐨𝐰𝐧𝐥𝐨𝐚𝐝}
*╰──────────  ►*

*╭───────────────❒⁠⁠⁠⁠*
*│* *❂𝐌𝐀𝐈𝐍 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒❂*
*┕───────────────❒*
*╭──────────  ►*
${𝐦𝐞𝐧𝐮.𝐦𝐚𝐢𝐧}
*╰──────────  ►*

*╭───────────────❒⁠⁠⁠⁠*
*│* *❂𝐆𝐑𝐎𝐔𝐏 𝐂𝐎𝐌𝐌𝐀𝐌𝐃𝐒❂*
*┕───────────────❒*

*╭──────────  ►*
${𝐦𝐞𝐧𝐮.𝐠𝐫𝐨𝐮𝐩}
*╰──────────  ►*

*╭───────────────❒⁠⁠⁠⁠*
*│* *❂𝐎𝐖𝐍𝐄𝐑 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒❂*
*┕───────────────❒*

*╭──────────  ►*
${𝐦𝐞𝐧𝐮.𝐨𝐰𝐧𝐞𝐫}
*╰──────────  ►*

*╭───────────────❒⁠⁠⁠⁠*
*│* *❂𝐂𝐎𝐍𝐕𝐄𝐑𝐓 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒❂*
*┕───────────────❒*

*╭──────────  ►*
${𝐦𝐞𝐧𝐮.𝐜𝐨𝐧𝐯𝐞𝐫𝐭}
*╰──────────  ►*

*╭─────────────────❒⁠⁠⁠⁠*
*│* *❂𝐒𝐄𝐀𝐑𝐂𝐇 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒❂*
*┕─────────────────❒*

*╭──────────  ►*
${𝐦𝐞𝐧𝐮.𝐬𝐞𝐚𝐫𝐜𝐡}
*╰──────────  ►*

*❒⁠⁠⁠⁠▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭❒*⁠⁠⁠⁠

> *𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐏𝐀𝐍𝐇𝐖𝐀𝐑*

╰━❁ ═══ ❃•⇆•❃ ═══ ❁━╯
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})