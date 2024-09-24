let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `✉️ 𝙈𝙀𝙉𝙎𝘼𝙅𝙀: ${pesan}\n👤 𝙈𝙄𝙀𝙈𝘽𝙍𝙊𝙎: _*${participants.length}*_`;
  let teks = `𝘼𝙉𝙊𝙏𝙀𝙀𝙉𝙎𝙀 𝙋𝙇𝘼𝙉𝙏𝘼𝙎
${oi}\n\n┏・ 𝘼𝙉𝙏𝙊 𝘿𝙕𝙉 - 𝙈𝘿\n`
  for (let mem of participants) {
  teks += `┣・︎︎︎💗 @${mem.id.split('@')[0]}\n`}
  teks += `┗・𝘼𝙉𝙏𝙊 𝘿𝙕𝙉 - 𝙈𝘿`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
  handler.admin = true
  handler.group = true
  export default handler