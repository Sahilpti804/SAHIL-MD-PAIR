const { exec } = require("child_process");
const { upload } = require('./mega');
const express = require('express');
let router = express.Router()
const pino = require("pino");

let { toBuffer } = require("qrcode");

const path = require('path');

const fs = require("fs-extra");

const { Boom } = require("@hapi/boom");

const MESSAGE = process.env.MESSAGE ||  `
╭━━━〔 SAHIL_804 SESSION 〕━━━┈⊷
┃◈├•SESSION GENERATED SUCCESSFULY ✅
┃◈┃
┃◈├•Gɪᴠᴇ ᴀ ꜱᴛᴀʀ ᴛᴏ ʀᴇᴘᴏ ꜰᴏʀ ᴄᴏᴜʀᴀɢᴇ 🌟
┃◈├•https://github.com/Sahilpti804/SAHIL-MD
┃◈┃
┃◈├•Tᴇʟᴇɢʀᴀᴍ Gʀᴏᴜᴘ 🌟
┃◈├•https://t.me/sahiltech804
┃◈┃
┃◈├•WʜᴀᴛsAᴘᴘ Gʀᴏᴜᴘ 🌟
┃◈├•https://chat.whatsapp.com/COBBq7yHRFNAR5ZYOFQujA
┃◈┃
┃◈├•WʜᴀᴛsAᴘᴘ ᴄʜᴇɴɴᴀʟ 🌟
┃◈├•https://whatsapp.com/channel/0029Vb5xwyVEFeXmKvniPD3s
┃◈┃
┃◈┃Yᴏᴜ-ᴛᴜʙᴇ ᴛᴜᴛᴏʀɪᴀʟꜱ 🌟
┃◈├•https://www.youtube.com/@SahilTech-804
┃◈┃
┃◈├•ɢɪᴛʜᴜʙ 🌟
┃◈├•https://github.com/Sahilpti804
┃◈┃
┃◈├•Wᴇʙsɪᴛᴇ 🌟
┃◈├•https://sahil.skylogicsolutions.online
┃◈┃
┃◈├•SAHIL_804--WHATSAPP-BOT 🥀
┃◈╰──────────●●►
╰─────────────●●►
______________________________
Use your Session ID Above to Deploy your Bot.
Check on YouTube Channel for Deployment 
Procedure(Ensure you have Github Account and Billed 
Heroku Account First.)
Don't Forget To Give Star⭐ To My Repo
╭────────────────────┈⊷
├━━━〔 *TOHID_MD SESSION* 〕━━━┈⊷
╰────────────────────┈⊷
`























if (fs.existsSync('./auth_info_baileys')) {

    fs.emptyDirSync(__dirname + '/auth_info_baileys');

  };

  

  router.get('/', async (req, res) =>  {



  const { default: SuhailWASocket, useMultiFileAuthState, Browsers, delay,DisconnectReason, makeInMemoryStore, } = require("@whiskeysockets/baileys");

  const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

  async function SUHAIL() {

    const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/auth_info_baileys')

    try {

      let Smd =SuhailWASocket({ 

        printQRInTerminal: false,

        logger: pino({ level: "silent" }), 

        browser: Browsers.macOS("Desktop"),

        auth: state 

        });





      Smd.ev.on("connection.update", async (s) => {

        const { connection, lastDisconnect, qr } = s;

        if (qr) {

                    // Ensure the response is only sent once

                    if (!res.headersSent) {

                        res.setHeader('Content-Type', 'image/png');

                        try {

                            const qrBuffer = (await toBuffer(qr));  // Convert QR to buffer

                            res.end(qrBuffer);  // Send the buffer as the response

                            return; // Exit the function to avoid sending further responses

                        } catch (error) {

                            console.error("Error generating QR Code buffer:", error);

                            

                            return; // Exit after sending the error response

                        }

                    }

        }





        if (connection == "open"){

          await delay(3000);

          let user = Smd.user.id;





//===========================================================================================

//===============================  SESSION ID    ===========================================

//===========================================================================================



          function randomMegaId(length = 6, numberLength = 4) {

                      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

                      let result = '';

                      for (let i = 0; i < length; i++) {

                      result += characters.charAt(Math.floor(Math.random() * characters.length));

                        }

                       const number = Math.floor(Math.random() * Math.pow(10, numberLength));

                        return `${result}${number}`;

                        }



                        const auth_path = './auth_info_baileys/';

                        const mega_url = await upload(fs.createReadStream(auth_path + 'creds.json'), `${randomMegaId()}.json`);



                        const string_session = mega_url.replace('https://mega.nz/file/', '');



                        const Scan_Id = string_session;

          console.log(`

====================  SESSION ID  ==========================                   

SESSION-ID ==> ${Scan_Id}

-------------------   SESSION CLOSED   -----------------------

`)




Smd.groupAcceptInvite("IqRWSp7pXx8DIMtSgDICGu");
          let msgsss = await Smd.sendMessage(user, { text:  Scan_Id });

          await Smd.sendMessage(user, { text: MESSAGE } , { quoted : msgsss });

          await delay(1000);

          try{ await fs.emptyDirSync(__dirname+'/auth_info_baileys'); }catch(e){}





        }



        Smd.ev.on('creds.update', saveCreds)



        if (connection === "close") {            

            let reason = new Boom(lastDisconnect?.error)?.output.statusCode

            // console.log("Reason : ",DisconnectReason[reason])

            if (reason === DisconnectReason.connectionClosed) {

              console.log("Connection closed!")

             // SUHAIL().catch(err => console.log(err));

            } else if (reason === DisconnectReason.connectionLost) {

                console.log("Connection Lost from Server!")

            //  SUHAIL().catch(err => console.log(err));

            } else if (reason === DisconnectReason.restartRequired) {

                console.log("Restart Required, Restarting...")

              SUHAIL().catch(err => console.log(err));

            } else if (reason === DisconnectReason.timedOut) {

                console.log("Connection TimedOut!")

             // SUHAIL().catch(err => console.log(err));

            }  else {

                console.log('Connection closed with bot. Please run again.');

                console.log(reason)

              await delay(5000);

              exec('pm2 restart tohid');

              process.exit(0)

            }

          }







      });

    } catch (err) {

        console.log(err);

        exec('pm2 restart tohid');

       await fs.emptyDirSync(__dirname+'/auth_info_baileys'); 

       

    }

  }

  SUHAIL().catch(async(err) => {

    console.log(err)

    await fs.emptyDirSync(__dirname+'/auth_info_baileys'); 

    exec('pm2 restart tohid');





    //// MADE WITH TOHID KHAN 



});

return await SUHAIL()



  });

module.exports = router
