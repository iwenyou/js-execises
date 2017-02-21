function isValidWalk(walk) {
    //insert brilliant code here
    var n = 0;
    var s = 0;
    var e = 0;
    var w = 0;

    for (var i = 0; i < walk.length; i++) {
        if (walk[i] == 'n') {
            n++;
        } else if (walk[i] == 's') {
            s++;
        } else if (walk[i] == 'e') {
            e++;
        } else {
            w++;
        }
    }

    if (walk.length === 10 & n == s & w == e) {
        return true;
    } else {
        return false;
    }
}

isValidWalk(['n','s','n','s','n','s','n','s','n','s']);
