console.log(
    (![] + [])[+[]]                   // ((!true).toString() + '')[Number([])] => f

    + (![] + [])[+!+[]]               // 'false'[Number(!false)] => a

    + ([![]] + [][[]])[+!+[] + [+[]]] // [false].toString + undefined.toString()
                                      //    'falseundefined'[1.toString() + [0].toString()]
                                      //     'falseundefined'[Number('10')] => i XDDDDD

    + (![] + [])[!+[] + !+[]]);       //  'false'[Number(true) + Number(true)] => l xD