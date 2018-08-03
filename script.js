function canSwap(str1, str2) {
    if(str1.length != str2.length) return false;

    for( let i = 0; i < str1.length; i++ ) {
        let posStr1Even = i % 2 == 0;

        let indexPosStr2 = str2.indexOf(str1[i]);

        if( !~indexPosStr2 ) return false;

        let posStr2Even = indexPosStr2 % 2 == 0;

        if( posStr1Even !== posStr2Even ) return false;
    }

    return true;
}

console.log(canSwap('abcd','cdab'))
