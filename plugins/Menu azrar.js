import fetch from 'node-fetch';




const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
  const tradutor = _translate.plugins.menu_audios

  try {
    const pp = imagen4;
    const vn = './media/menu.mp3'
    const img = 'https://telegra.ph/file/9ea7c13e92000839267ab.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'ar';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    await conn.sendMessage(m.chat, { react: { text: '📂', key: m.key } });
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `> *❆╎━⌯╌⌬╵🧭╷⌬╌⌯━╎❆*
> *بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ*

> *ليس المؤمن بالطعان ولا اللعان ولا الفاحش ولا البذيء*
> *❆╎━⌯╌⌬╵🧭╷⌬╌⌯━╎❆*
> *▫️خذ الاوامر يا عسل, ${taguser}*
> *▫️اسم البوت: اونوهانا 🧭*
> *▫️اســم الـمطور : إبراهيم:♡*
> *▫️حط قبل كل امر( . )*
> *▫️لـطـلـب اوامـر الـمـطـور : قسم_المطور*
> *▫️هذا البوت صنع بواسطه بروس واين:♡* 
> *❆╎━⌯╌⌬╵🧭╷⌬╌⌯━╎❆*
*𝚂𝙿𝙴𝙴𝙳╵⚜️╷𝙱𝙾𝚃*
> *❆╎━⌯╌⌬╵🧭╷⌬╌⌯━╎❆*
> *「قـســم╎🏮╎القـروبــات」*
*◞🏮◜╎.بوت 』*
*◞🏮◜╎.اونوهانا 』*
*◞🏮◜╎.ابلاغ 』*
*◞🏮◜╎.منشن 』*
*◞🏮◜╎.مخفي 』*
*◞🏮◜╎.المشرفين 』*
*◞🏮◜╎.تدوير 』*
*◞🏮◜╎مجموعه_الدين 』*
*◞🏮◜╎استقبال_المطور 』*
*◞🏮◜╎.جروب قفل 』*
*◞🏮◜╎.جروب فتح 』*
*◞🏮◜╎.توب 』*
*◞🏮◜╎.لفل 』*
*◞🏮◜╎.معلومات 』*
*◞🏮◜╎.شخصية 』*
*◞🏮◜╎.انمي 』*
*◞🏮◜╎.رونالدو 』*
*◞🏮◜╎.ميسي 』*
*◞🏮◜╎.يومي 』*
*◞🏮◜╎.هجوم 』*
> *❆╎━⌯╌⌬╵🧭╷⌬╌⌯━╎❆*
> *「قـسـم╎🍷╎الـمـشـرفـيـن」*
*◞🍷◜╎.طرد 』*
*◞🍷◜╎.ترقيه 』*
*◞🍷◜╎.اعفاء 』*
*◞🍷◜╎.حذف 』*
*◞🍷◜╎.تسجيل 』*
*◞🍷◜╎.حذف_لقب 』*
*◞🍷◜╎.لقبه 』*
*◞🍷◜╎.لقب 』*
*◞🍷◜╎.الالقاب 』*
> *❆╎━⌯╌⌬╵🧭╷⌬╌⌯━╎❆*
> *「قـسـم╎🕋╎الـديــن」*
*◞🕋◜╎.الله 』*
*◞🕋◜╎.حديث 』*
*◞🕋◜╎.ايات 』*
*◞🕋◜╎.تسبيح 』*
*◞🕋◜╎.اذكار الصباح 』*
*◞🕋◜╎.اذكار المساء 』*
*◞🕋◜╎.أية_الكرسي 』*
*◞🕋◜╎.أية_الإخلاص 』*
*◞🕋◜╎.نصيحه 』*
*◞🕋◜╎.فيديو_قران 』*
*◞🕋◜╎.الصلاة 』*

> *❆╎━⌯╌⌬╵🧭╷⌬╌⌯━╎❆*
> *「قـسـم╎🎮╎التـرفـيـه」*
*◞🎮◜╎.اكس او 』*
*◞🎮◜╎.فعاليه 』*
*◞🎮◜╎.كوره 』*
*◞🎮◜╎.دين 』*
*◞🎮◜╎.الغاز 』*
*◞🎮◜╎.ثقافه 』*
*◞🎮◜╎.ثقافة 』*
*◞🎮◜╎.سؤال 』*
*◞🎮◜╎.رياضه 』*
*◞🎮◜╎.ايموجي 』*
*◞🎮◜╎.حيوانات 』*
*◞🎮◜╎.تفكيك 』* 
*◞🎮◜╎.احزر 』*
*◞🎮◜╎.عين 』*
*◞🎮◜╎.علم 』*
*◞🎮◜╎.قلب 』*
*◞🎮◜╎.اديت 』*
*◞🎮◜╎.اديت-سيارات 』*
*◞🎮◜╎.زواج 』*
*◞🎮◜╎.طلاق 』*
*◞🎮◜╎.هل 』*
*◞🎮◜╎.لو 』*
*◞🎮◜╎.كت 』*
*◞🎮◜╎.تاج 』*
*◞🎮◜╎.حكمه 』*
*◞🎮◜╎.غباء 』*
*◞🎮◜╎.جمال 』*
*◞🎮◜╎.الحب 』*
*◞🎮◜╎.ذكاء 』*
> *❆╎━⌯╌⌬╵🧭╷⌬╌⌯━╎❆* 
> *「قـسـم╎📲╎التـنـزيـلات」*
*◞📲◜╎.ويكيبيديا 』*
*◞📲◜╎.شغل 』*
*◞📲◜╎.اغنيه 』*
*◞📲◜╎.فيديو 』*
*◞📲◜╎.اغنية 』*
*◞📲◜╎.كلمات-اغنيه 』*
*◞📲◜╎.اسم_الاغنية 』*
*◞📲◜╎.تصفح 』*
*◞📲◜╎.تطقيم 』*
*◞📲◜╎.طقم2 』*
*◞📲◜╎.طقمي 』*
*◞📲◜╎.خلفيات 』*
*◞📲◜╎.تطبيق 』*
*◞📲◜╎.بحث 』*
*◞📲◜╎.ابحاث 』*
> *❆╎━⌯╌⌬╵🧭╷⌬╌⌯━╎❆*
> *「قـسـم╎🌀╎التـحـويـلات」*
*◞🌀◜╎.ملصق 』*
*◞🌀◜╎.سرقة 』*
*◞🌀◜╎.لصوره 』*
*◞🌀◜╎.تخيل 』*
*◞🌀◜╎.باركود 』*
*◞🌀◜╎.جوده 』*
*◞🌀◜╎.مسح 』*
*◞🌀◜╎.تصميم 』*
*◞🌀◜╎.زخرفه 』*
*◞🌀◜╎.خط 』*
> *❆╎━⌯╌⌬╵🧭╷⌬╌⌯━╎❆*
*◞مجموعه دينية الدال على الخير كفاعله◜╎https://chat.whatsapp.com/DUyetZwq1ozLHLhIjCVAks 』*
> *❆╎━⌯╌⌬╵🧭╷⌬╌⌯━╎❆*
*𝚄𝚗𝚘𝚑𝚊𝚗𝚊╵🧭╷𝙱𝙾𝚃*
> *˼‏◈┋تـوقـيـع ⇆ ˼‏✒️˹ ↯*
> *〔𝚂𝙿𝙴𝙴𝙳╵⚜️╷𝙺𝙸𝙽𝙶𝙳𝙾𝙼〕*
> *❆╎━⌯╌⌬〔🧭〕⌬╌⌯━╎❆*
`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, tradutor.texto2, m);
  }
};
handler.command = /^(اوامر|المهام|الاوامر|Menu)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
                                                                                                                                                         }
