import {model, Schema} from 'mongoose';

const Bots = new Schema({
  _id : {
    default : () => new Date(),
    type : Date,
  }, // added at
  id : {
    type : String,
    unique : true,
    required : true,
  }, // botId
  username : {type : String, required : true},
  avatar : {type : String, required : true},
  discriminator : {type : String, required : true},
  status : String,
  owners : [ {type : String} ], // owners
  lib : {type : String},
  short : {
    type : String,
    required : true,
  }, // short desc
  desc : {
    type : String,
    required : true,
  },                                            // description
  prefix : String,                              // bot prefix
  verified : {type : Boolean, default : false}, // verified bot or not
  added : {type : Boolean, default : false},
  code : {type : String},
  webhook : String,
  support : String, // support server id
  bg : String,      // background image link
  github : String,  // github link
  website : String, // website link
  donate : String,  // donate account link
  invite : String,  // invite link
  servers : {type : Number, default : 1},
  promoted : {type : Boolean, default : false},
  votes : {type : Number, default : 0},
  badges : [ {type : String} ],
  slug : {
    type : String,
    default : function() { return this.id; },
    unique : true,
  },
  opted_coins : {type : Boolean, default : false}
},
                        {
                          versionKey : false,
                          toJSON : {virtuals : true},
                          toObject : {virtuals : true},
                        });

Bots.virtual("avatarURL").get(function() {
  if (this.avatar == "1" || this.avatar == "2" || this.avatar == "3" ||
      this.avatar == "4")
    return `https://cdn.discordapp.com/embed/avatars/${this.avatar}.png`;
  var ani = false;
  if (this.avatar?.startsWith("a_"))
    ani = true;
  const aniurl =
      `https://cdn.discordapp.com/avatars/${this.id}/${this.avatar}.gif`;
  const nonurl =
      `https://cdn.discordapp.com/avatars/${this.id}/${this.avatar}.png`;
  const url = ani ? aniurl : nonurl;
  return url;
});

Bots.virtual("tag").get(
    function() { return `${this.username}#${this.discriminator}`; });
Bots.virtual("vanity").get(
    function() { return `https://dscrdly.com/b/${this.slug}`; });
Bots.virtual("mainowner").get(function() { return `${this.owners[0]}`; });
Bots.virtual("timestamp").get(function() { return `${~~(this._id / 1000)}`; });

console.log("%c[DB] %cCompiling Schema into Model - %cBots", "color: #eb4590",
            "color: white", "color: #57f287");

export default model("Bots", Bots);
