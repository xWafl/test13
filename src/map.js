var thomashousemap = [
    /*1 is walls
    2 is floors
    3 is frames
    4 is doors
    5 is stained carpet
    6 is paper
    7 is trash can border
    8-10 are trash can inside
    11 is desk border
    12 is desk
    13 is pillow
    14 is sheets
    15 is blankets
    16 is light wood
    17 is darker wood
    18 is wood handle
    19 is doorknob*/
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 4, 4, 4, 4, 4, 4, 4, 3, 2, 2, 2, 2, 2, 7, 7, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 19, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 7, 8, 9, 7, 2, 2, 1],
        [1, 2, 5, 5, 5, 5, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 7, 8, 10, 7, 2, 2, 1],
        [1, 2, 2, 5, 5, 2, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 7, 7, 2, 2, 2, 1],
        [1, 2, 5, 5, 2, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 5, 5, 5, 5, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 5, 2, 5, 2, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 2, 1],
        [1, 11, 11, 11, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 2, 6, 6, 2, 1],
        [1, 11, 12, 12, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 2, 6, 6, 2, 1],
        [1, 11, 12, 12, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 2, 2, 2, 2, 2, 1],
        [1, 11, 12, 12, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 2, 2, 2, 1],
        [1, 11, 12, 12, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
        [1, 11, 12, 12, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
        [1, 11, 11, 11, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
        [3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 16, 16, 16, 17],
        [3, 4, 2, 2, 2, 2, 2, 2, 2, 2, 3, 15, 15, 15, 15, 15, 15, 15, 3, 2, 2, 2, 2, 2, 2, 2, 16, 16, 16, 17, 1],
        [3, 4, 2, 2, 2, 2, 2, 2, 2, 2, 3, 15, 15, 15, 15, 15, 15, 15, 3, 2, 2, 2, 2, 2, 2, 18, 16, 16, 16, 17, 1],
        [3, 4, 2, 2, 2, 2, 2, 2, 2, 2, 3, 15, 15, 15, 15, 15, 15, 15, 3, 2, 2, 2, 2, 2, 2, 2, 16, 16, 16, 17, 1],
        [3, 4, 2, 2, 2, 2, 2, 2, 2, 2, 3, 15, 15, 15, 15, 15, 15, 15, 3, 2, 2, 2, 2, 2, 2, 2, 16, 16, 16, 17, 1],
        [3, 4, 2, 2, 2, 2, 2, 2, 2, 2, 3, 15, 15, 15, 15, 15, 15, 15, 3, 2, 2, 2, 2, 2, 2, 18, 16, 16, 16, 17, 1],
        [3, 4, 19, 2, 2, 2, 2, 2, 2, 2, 3, 15, 15, 15, 15, 15, 15, 15, 3, 2, 2, 2, 2, 2, 2, 2, 16, 16, 16, 17, 1],
        [3, 4, 2, 2, 2, 2, 2, 2, 2, 2, 3, 15, 15, 15, 15, 15, 15, 15, 3, 2, 2, 2, 2, 2, 2, 2, 17, 17, 17, 17, 1],
        [3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 3, 14, 14, 13, 13, 13, 14, 14, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 14, 13, 13, 13, 13, 13, 14, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]

function drawthomasbedroommap () {
    O('header').style.display = 'none';
    O('titlescreen').style.display = 'none';
    S('maparea').display = 'inline-block';
    S('status').display = 'inline-block';
    localStorage.setItem('texttutorialfinished', 1);
    for (var i = 0; i < 40; i++) {
        for (var j = 0; j < 30; j++) {
            if (parseInt(thomashousemap[i][j]) == 1) {
                $('#maparea').append('<div class="purplewall"></div>');
            }
            if (parseInt(thomashousemap[i][j]) == 2) {
                $('#maparea').append('<div class="orangefloor"></div>');
            }
            if (parseInt(thomashousemap[i][j]) == 3) {
                $('#maparea').append('<div class="blackframe"></div>');
            }
            if (parseInt(thomashousemap[i][j]) == 4) {
                $('#maparea').append('<div class="browndoor"></div>');
            }
            if (parseInt(thomashousemap[i][j]) == 5) {
                $('#maparea').append('<div class="orangecarpet"></div>');
            }
            if (parseInt(thomashousemap[i][j]) == 6) {
                $('#maparea').append('<div class="whitepaper"></div>');
            }
            if (parseInt(thomashousemap[i][j]) == 7) {
                $('#maparea').append('<div class="trashcanborder"></div>');
            }
            if (parseInt(thomashousemap[i][j]) == 8) {
                $('#maparea').append('<div class="trashcaninside1"></div>');
            }
            if (parseInt(thomashousemap[i][j]) == 9) {
                $('#maparea').append('<div class="trashcaninside2"></div>');
            }
            if (parseInt(thomashousemap[i][j]) == 10) {
                $('#maparea').append('<div class="trashcaninside3"></div>');
            }
            if (parseInt(thomashousemap[i][j]) == 11) {
                $('#maparea').append('<div class="browndeskborder"></div>');
            }
            if (parseInt(thomashousemap[i][j]) == 12) {
                $('#maparea').append('<div class="browndesk"></div>');
            }
            if (parseInt(thomashousemap[i][j]) == 13) {
                $('#maparea').append('<div class="purplepillow"></div>');
            }
            if (parseInt(thomashousemap[i][j]) == 14) {
                $('#maparea').append('<div class="tealsheets"></div>');
            }
            if (parseInt(thomashousemap[i][j]) == 15) {
                $('#maparea').append('<div class="blueblanket"></div>');
            }
            if (parseInt(thomashousemap[i][j]) == 16) {
                $('#maparea').append('<div class="tancabinet"></div>');
            }
            if (parseInt(thomashousemap[i][j]) == 17) {
                $('#maparea').append('<div class="browncabinet"></div>');
            }
            if (parseInt(thomashousemap[i][j]) == 18) {
                $('#maparea').append('<div class="brownhandle"></div>');
            }
            if (parseInt(thomashousemap[i][j]) == 19) {
                $('#maparea').append('<div class="goldhandle"></div>');
            }
        }
    }
}
