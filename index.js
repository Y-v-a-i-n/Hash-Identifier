exports.identifier=function(i){
    if(i){
        var t=[];
        const e=require("./hash.json");
        var n=!1,
            r=!1,
            a=!1;
        String(i).match(/([0-9])*/gi)[0]==i&&!0!==n&&(n=!0),String(i).match(/([a-zA-Z])*/gi)[0]==i&&!0!==r&&(r=!0),String(i).match(/([0-9a-zA-Z])*/gi)[0]==i&&!0!==a&&(a=!0);
        let h=0;
        return e.hash.forEach((e=>{
            if(String(i).split("").length===e.hash.split("").length&&e.isdigit===n&&e.isalpha===r&&e.isalnum===a)
                if(null!==e.find){
                    var s="";
                    for(let t=e.find.location;t<String(i).length;t++)s+=String(i)[t];
                    s.startsWith(e.find.chars)&&(t[h]=e.name,h++)
                } else t[h]=e.name,h++
        })),t[0]?t:"Not Found."
    }
    return "An error has been occurred."
};