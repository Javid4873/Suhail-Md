const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_41_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODksXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMsXG4gICAgICAgIDEsXG4gICAgICAgIDk0LFxuICAgICAgICA0MixcbiAgICAgICAgOTQsXG4gICAgICAgIDE2LFxuICAgICAgICA3LFxuICAgICAgICAxODksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxLFxuICAgICAgICAxODcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODMsXG4gICAgICAgIDcyLFxuICAgICAgICA2NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA3OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODYsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjgsXG4gICAgICAgIDk1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODUsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDQ5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjMwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDgxLFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDc4LFxuICAgICAgICA5NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEyLFxuICAgICAgICA5NixcbiAgICAgICAgNzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOSxcbiAgICAgICAgMixcbiAgICAgICAgOTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDk5LFxuICAgICAgICAxODEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2LFxuICAgICAgICAxNCxcbiAgICAgICAgMjMzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2NixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjksXG4gICAgICAgIDIwNixcbiAgICAgICAgNzQsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NixcbiAgICAgICAgODIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0LFxuICAgICAgICA5MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgODksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyMixcbiAgICAgICAgOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDksXG4gICAgICAgIDEzNyxcbiAgICAgICAgODEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTEyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDQsXG4gICAgICAgIDc5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTcxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjYsXG4gICAgICAgIDI5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDc5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRUhvSmhXdWRIOVNSc1NOQTdOSmxaajZkUmh2Q1oycnd0T3BoditYcTltYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicG85NUl6akZSR090TU1SamY2MTFoUVwiLFxuICBcInBob25lSWRcIjogXCJkN2Q3MmY3MC02YjliLTQwMWQtYjRkYi03MTM2MmFjNTg2ZGVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODAsXG4gICAgICAxNzUsXG4gICAgICAyMjYsXG4gICAgICAxMzQsXG4gICAgICA3NCxcbiAgICAgIDEyOCxcbiAgICAgIDE3MSxcbiAgICAgIDE4LFxuICAgICAgODUsXG4gICAgICAxNixcbiAgICAgIDEwNCxcbiAgICAgIDI1LFxuICAgICAgMTAyLFxuICAgICAgMjI1LFxuICAgICAgMzcsXG4gICAgICA1MSxcbiAgICAgIDExMyxcbiAgICAgIDE4MixcbiAgICAgIDEzNCxcbiAgICAgIDE2MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODMsXG4gICAgICA1MCxcbiAgICAgIDk0LFxuICAgICAgOTMsXG4gICAgICAyNDMsXG4gICAgICAzMyxcbiAgICAgIDM3LFxuICAgICAgMTg1LFxuICAgICAgMjA0LFxuICAgICAgMjI1LFxuICAgICAgNzYsXG4gICAgICA4LFxuICAgICAgMjIxLFxuICAgICAgMzYsXG4gICAgICA2NCxcbiAgICAgIDIxNixcbiAgICAgIDE5OSxcbiAgICAgIDIwNCxcbiAgICAgIDI0NixcbiAgICAgIDQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIllCUzFKWDRQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0MTQ4NzMzNDg6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTMyMDQ5MTcyMjMwMzQ4OjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3VvdVZrUXRxU1p0QVlZQXlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ2bnVNYjhnakwzRm5yejZTeHA4UmlMeGJKVjlVRkVyL3BaSnYraWxrRTJnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm84K1pMbTJBc1NiREU1bk1lWFIzdXpkM1ZHcCtRZlZ6aThLTlNUeWtHMjAwL2swK3JLK3luWEJaZVN3WUdCektFdXd0ZzVySEV5K1JPQmdPWkRMV0RnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm13K0pUMUxaZi81TUUvek14c2pVQXhoeHo3dUxtWmRybUNDUVZ4Vy9Ga3RJR3VTSENCSnJ0eitWOXZlZ3ljZi83U1dhNHI2ZkZ2SGZWTHlPSEV0V2hBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQxNDg3MzM0ODo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMDc4OTA1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBZ0FBQUVCXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFnQUFBRUIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJhQTlzZldUdWZWWmR4RXNaRTIvQ1ZHM3Rxc3ZQcHUrQ2Z0ODZOK3BhSTk4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4NzU4NTY0MyxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSw4XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTc2NjI4MTE4NjNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
