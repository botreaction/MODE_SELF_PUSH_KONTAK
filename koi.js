const fs = require('fs')
const chalk = require('chalk')
const moment = require('moment-timezone')

global.grup = 'https://chat.whatsapp.com/LmhtsDi82OBKJpjvThwAeA'
global.ig = '@Ntah'
global.thumb = fs.readFileSync("./datakoi/image/thumb.jpg")
global.email = 'botsw1994@gmail.com'
global.region = 'indonesia'
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'WilyKun'
global.domain = 'https://panel.qyuunee.my.id'
global.apikey2 = '' // Isi Apikey Pltc Lu
global.capikey2 = ''
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location

global.owner = ['6289688206739']

global.keyopenai = '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'
global.ibeng = 'Yl4h5x9wiA'

global.apikoi = '' // ambil di https://api.koi.pics

global.botname = 'WilyKun-MD'
global.packname = 'Wilyakun-MD'
global.author = `Date: ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}\nYouTube: Wilyakun\nBot: 6289688206739`
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'WilyKun-MD'
global.sp = '⭔'
global.anticall = false

global.mess = {
    success: '🤗 Done, Oke Desu~',
    admin: '❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !',
    botAdmin: '❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: '❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: '❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !',
    private: '❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !',
    bot: '🤖 Fitur Khusus Pengguna Nomor Bot !',
    wait: '⏳ Sedang Di Proses !',
    endLimit: '🕊️ Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12 !\n\n🎯 *Premium Cuma 10k Permanen* 😋',
    error: '🚫 Fitur Sedang Error !',
    prem: '🚫 Fitur Khusus Premium!\n\n♨️ Buy Premium Cuma 10k Permanen',
}

global.limitawal = {
    premium: "Infinity",
    free: 100
}

global.multiplier = 1000

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})