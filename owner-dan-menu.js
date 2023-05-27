const fs = require('fs')

global.namabot = "Bot Store"
global.namaowner = "Zeeoneofc"
global.footer_text = "© " + namabot
global.pp_bot = fs.readFileSync("./image/foto.jpg")
global.qris = fs.readFileSync("./image/qris.jpg")
global.owner = ['628577776666','628577775555']
global.sessionName = 'session'
global.prefa = ['-_-']
global.caption_pay = `Qris All Pay
Ovo
Dana
Gopay

Mau ganti payment? ketik .setpay
`
//menu bot rapihin sendiri ya, belajar lah jadi anak mandiri.
module.exports.helpMenu = (pushname) =>{
  return `*「 ZENI CAT BOT 」*
────────────────────────────  
  Halo *${pushname}*
────────────────────────────

*KETIK LIST UNTUK MELIHAT DAFTAR PRODUK*

» Ketik _*.Owner*_ Untuk menghubungi owner
» Ketik _*allmenu*_ untuk melihat semua menu

📝 *NOTE*: 
Fitur bisa dipakai dengan atau tanpa prefix.
Jangan Spam BOT! :)
`
}