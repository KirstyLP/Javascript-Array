// IDs of the dead links from Lorem Picsum
let duds = [
    86,
    97,
    105,
    138,
    148,
    150,
    205,
    207, 
    224,
    226,
    245,
    246,
    262,
    285,
    286,
    298,
    303,
    332,
    333,
    346,
    359,
    394,
    414,
    422,
    438,
    462,
    463,
    470,
    489,
    540,
    561,
    578,
    587,
    589,
    592,
    595,
    597,
    601,
    624,
    632,
    636,
    644,
    647,
    673,
    697,
    706,
    707,
    708,
    709,
    710,
    711,
    712,
    713,
    714,
    720,
    725,
    734,
    745,
    746,
    747,
    748,
    749,
    750,
    751,
    752,
    753,
    754,
    759,
    761,
    762,
    763,
    771,
    792,
    801,
    812,
    843,
    850,
    854,
    895,
    897,
    899,
    917,
    920,
    934,
    956,
    963,
    968,
    1007,
    1017,
    1030,
    1034,
    1046
];

// Used for finding the dead links
function dudHunter() {
    let pics = "";
    for (let i = 0; i <= 1085; i++) {
        pics += `<li><img src="https://picsum.photos/id/${i}/500"></li>`;
    }
    return pics;
}