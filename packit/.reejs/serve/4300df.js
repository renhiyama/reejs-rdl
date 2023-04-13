import{model as t,Schema as e}from"https://esm.sh/mongoose@7.0.3?bundle";const a=new e({id:{type:String,unique:!0,required:!0},_id:{default:()=>new Date,type:Date},username:{type:String,required:!0},avatar:{type:String,required:!0},discriminator:{type:String,required:!0},email:{type:String},bal:{type:Number,default:50},bio:{type:String,default:"The user doesn't have bio set!"},banner:{type:String},badges:[{type:String}],promoted:{type:Boolean,default:!1},address:{type:String},lang:{type:String,default:"en"},lastLogin:{type:Date,default:()=>new Date},mfa:{type:Boolean},nitro:{type:Number},old:{type:Boolean,default:!0},votes:[{bot:{type:String},at:{type:Date,default:()=>new Date}}],keys:[{access_token:{type:String},expires_in:{type:Number},refresh_token:{type:String},scope:{type:String},expireTimestamp:{type:Number}}]},{versionKey:!1,toJSON:{virtuals:!0},toObject:{virtuals:!0}});a.virtual("avatarURL").get((function(){if("1"==this.avatar||"2"==this.avatar||"3"==this.avatar||"4"==this.avatar)return`https://cdn.discordapp.com/embed/avatars/${this.avatar}.png`;{var t=!1;(function(t){let e,a=t[0],r=1;for(;r<t.length;){const i=t[r],n=t[r+1];if(r+=2,("optionalAccess"===i||"optionalCall"===i)&&null==a)return;"access"===i||"optionalAccess"===i?(e=a,a=n(a)):"call"!==i&&"optionalCall"!==i||(a=n(((...t)=>a.call(e,...t))),e=void 0)}return a})([this,"access",t=>t.avatar,"optionalAccess",t=>t.startsWith,"call",t=>t("a_")])&&(t=!0);const e=`https://cdn.discordapp.com/avatars/${this.id}/${this.avatar}.gif`,a=`https://cdn.discordapp.com/avatars/${this.id}/${this.avatar}.png`;return t?e:a}})),a.virtual("tag").get((function(){return`${this.username}#${this.discriminator}`})),console.log("%c[DB] %cCompiling Schema into Model - %cUsers","color: #eb4590","","color: #57f287");export default t("Users",a);