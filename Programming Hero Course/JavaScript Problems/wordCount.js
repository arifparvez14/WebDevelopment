var info = "I am a good person. I don't snore at night."
console.log(info.length);
console.log(info[2]);

var c = 0;
for (var i = 0; i < info.length; i++){
    var char = info[i];
    if(char == " " && info[i-1] != " "){
        c++;
    }
}
c++;
console.log(c);