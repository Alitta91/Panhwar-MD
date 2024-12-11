const config = require('../config')
const {cmd , commands} = require('../command')
cmd({

    pattern: "menu3",

    react: "🛸",

    alias: ["panel","list","commands"],

    desc: "Get bot\'s command list.",

    category: "main",

    use: '.menu3',

    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
let madeMenu = `❁ ════ ❃•◯•❃ ════ ❁

*⇆ 𝐇𝐈𝐈 𝐌𝐘 𝐃𝐄𝐀𝐑 𝐅𝐑𝐈𝐄𝐍𝐃 ⇆*

     *${pushname}*
     
❁ ════ ❃•◯•❃ ════ ❁

┏━━━━━━━━━━━━━━━━━━━━━━━━━━
      *𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐓𝐎 𝐏𝐀𝐍𝐇𝐖𝐀𝐑 𝐅𝐔𝐋𝐋 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒 𝐋𝐈𝐒𝐓*
┗━━━━━━━━━━━━━━━━━━━━━━━━━━

*𝐂𝐑𝐄𝐀𝐓𝐄𝐃 𝐁𝐘 𝐀𝐍𝐒𝐀𝐑 𝐏𝐀𝐍𝐇𝐖𝐀𝐑*


*╭──❮ 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐒 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒 ❯*
│
│📖 𝐂𝐎𝐌𝐌𝐀𝐍𝐃: .𝐩𝐥𝐚𝐲
│ℹ️ 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 Audio from yt
│ 
│📖 𝐂𝐎𝐌𝐌𝐀𝐍𝐃: .𝐬𝐨𝐧𝐠
│ℹ️ 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 song from yt
│ 
│📖 𝐂𝐎𝐌𝐌𝐀𝐍𝐃: .𝐚𝐩𝐤
│ℹ️ 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 apk from playstore
│ 
│📖 𝐂𝐎𝐌𝐌𝐀𝐍𝐃: .𝐯𝐢𝐝𝐞𝐨
│ℹ️ 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 video from yt
│ 
│📖 𝐂𝐎𝐌𝐌𝐀𝐍𝐃: .𝐟𝐛
│ℹ️ 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝  video from fb
│ 
│📖 𝐂𝐎𝐌𝐌𝐀𝐍𝐃: .𝐭𝐤
│ℹ️ 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 video from tiktok
│ 
│📖 𝐂𝐎𝐌𝐌𝐀𝐍𝐃: .𝐢𝐠
│ℹ️ 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 video from ig
│ 
│📖 𝐂𝐎𝐌𝐌𝐀𝐍𝐃: .𝐠𝐝𝐫𝐢𝐯𝐞
│ℹ️ 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 drive files
│ 
│📖 𝐂𝐎𝐌𝐌𝐀𝐍𝐃: .𝐰𝐚𝐦𝐨𝐝
│ℹ️ 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 wamod apk
│
│📖 𝐂𝐎𝐌𝐌𝐀𝐍𝐃: .𝐢𝐦𝐠
│ℹ️ 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 image
│
│📖 𝐂𝐎𝐌𝐌𝐀𝐍𝐃: .𝐝𝐚𝐫𝐚𝐦𝐚
│ℹ️ 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 full episode video
╰────────────⦁ 

*╭──❮ 𝐒𝐄𝐀𝐑𝐂𝐇 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒 ❯*
│
│📖 𝐂𝐎𝐌𝐌𝐀𝐍𝐃: .𝐲𝐭𝐬
│ℹ️ 𝐒𝐞𝐚𝐫𝐜𝐡 videos from yt
╰────────────⦁  

*╭──❮‍ MAIN 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒 ❯*
│
│📖 𝐂𝐎𝐌𝐌𝐀𝐍𝐃: .𝐚𝐥𝐢𝐯𝐞
│ℹ️ 𝐂𝐡𝐞𝐜𝐤 online or not
│  
│📖 𝐂𝐎𝐌𝐌𝐀𝐍𝐃: .𝐩𝐢𝐧𝐠
│ℹ️ 𝐂𝐡𝐞𝐜𝐤 bot speed
│  
│📖 𝐂𝐎𝐌𝐌𝐀𝐍𝐃: .𝐦𝐞𝐧𝐮
│ℹ️ 𝐍𝐞𝐫𝐨 main menu
│
│📖 𝐂𝐎𝐌𝐌𝐀𝐍𝐃: .𝐦𝐞𝐧𝐮2
│ℹ️ 𝐍𝐞𝐫𝐨 main menu2
│ 
│📖 𝐂𝐎𝐌𝐌𝐀𝐍𝐃: .𝐚𝐢
│ℹ️ 𝐜𝐡𝐚𝐭 with ai bot
│
│📖 𝐂𝐎𝐌𝐌𝐀𝐍𝐃: .𝐬𝐲𝐬𝐭𝐞𝐦
│ℹ️ 𝐜𝐡𝐞𝐜𝐤 bot systems
│
│📖 𝐂𝐎𝐌𝐌𝐀𝐍𝐃: .𝐨𝐰𝐧𝐞𝐫
│ℹ️ 𝐠𝐞𝐭 owner info
│ 
│📖 𝐂𝐎𝐌𝐌𝐀𝐍𝐃: .𝐬𝐭𝐚𝐭𝐮𝐬
│ℹ️ 𝐜𝐡𝐞𝐜𝐤 bot runtime
╰────────────⦁

*╭──❮ 𝐎𝐓𝐇𝐄𝐑 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒 ❯*
│
│📖 𝐂𝐎𝐌𝐌𝐀𝐍𝐃: .𝐡𝐢𝐫𝐮𝐧𝐞𝐰𝐬/𝐧𝐞𝐰𝐬
│ℹ️ 𝐆𝐞𝐭 𝐧𝐞𝐰𝐬 result for life
│ 
│📖 𝐂𝐎𝐌𝐌𝐀𝐍𝐃: .𝐰𝐞𝐛𝐚𝐭𝐚
│ℹ️ 𝐆𝐞𝐭 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩 beta news
│
│📖 𝐂𝐎𝐌𝐌𝐀𝐍𝐃: .𝐬𝐢𝐭𝐞𝐜𝐡
│ℹ️ 𝐆𝐞𝐭 𝐭𝐞𝐜𝐡 news
│ 
│📖 𝐂𝐎𝐌𝐌𝐀𝐍𝐃: .𝐧𝐚𝐬𝐚
│ℹ️ 𝐆𝐞𝐭 𝐧𝐚𝐬𝐚 news
╰────────────⦁

*╭──❮ 𝐆𝐑𝐎𝐔𝐏 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒 ❯*
│
│📖 𝐂𝐎𝐌𝐌𝐀𝐍𝐃: .𝐦𝐮𝐭𝐞
│ℹ️ 𝐌𝐮𝐭𝐞 group
│
│📖 𝐂𝐎𝐌𝐌𝐀𝐍𝐃: .𝐔𝐧𝐦𝐮𝐭𝐞
│ℹ️ 𝐔𝐧𝐦𝐮𝐭𝐞 group
│
│📖 𝐂𝐎𝐌𝐌𝐀𝐍𝐃: .𝐥𝐞𝐟𝐭
│ℹ️ 𝐥𝐞𝐟𝐭 group
│
│📖 𝐂𝐎𝐌𝐌𝐀𝐍𝐃: .𝐣𝐢𝐝
│ℹ️ 𝐠𝐫𝐨𝐮𝐩 jid
╰────────────⦁

*╭──❮ 𝐎𝐖𝐍𝐄𝐑 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒 ❯*
│
│📖 𝐂𝐎𝐌𝐌𝐀𝐍𝐃: .𝐮𝐩𝐝𝐚𝐭𝐞
│ℹ️ 𝐮𝐩𝐝𝐚𝐭𝐞 bot velue 
│
│📖 𝐂𝐎𝐌𝐌𝐀𝐍𝐃: .𝐫𝐞𝐬𝐭𝐚𝐫𝐭
│ℹ️ 𝐫𝐞𝐬𝐭𝐚𝐫𝐭 your bot
╰────────────⦁

*╭──❮ 𝐂𝐎𝐍𝐕𝐄𝐑𝐓 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒 ❯*
│
│📖 𝐂𝐎𝐌𝐌𝐀𝐍𝐃: .𝐬𝐭𝐢𝐜𝐤𝐞𝐫
│ℹ️ 𝐜𝐨𝐧𝐯𝐞𝐫𝐭 photo to sticker
╰────────────⦁



┏━━━━━━━━━━━━━━━━━━━━━━━━━━

> *https://github.com/Panhwar110/Panhwar-MD*

┗━━━━━━━━━━━━━━━━━━━━━━━━━━

> *𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐀𝐍𝐒𝐀𝐑 𝐏𝐀𝐍𝐇𝐖𝐀𝐑*

╰━❁ ═══ ❃•⇆•❃ ═══ ❁━╯
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
