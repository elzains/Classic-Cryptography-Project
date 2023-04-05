var ResultINT;
var Result;
const Output = document.getElementById('Output');
const Key = document.getElementById('InputKey');
const InputanPlain = document.getElementById('InputPlain');
const Penambahan = document.getElementById('Penambahan');
function KonvCharToInt(c) {
    switch (c) {
        case 'A':
            ResultINT = 0;
            break;
        case 'B':
            ResultINT = 1;
            break;
        case 'C':
            ResultINT = 2;
            break;
        case 'D':
            ResultINT = 3;
            break;
        case 'E':
            ResultINT = 4;
            break;
        case 'F':
            ResultINT = 5;
            break;
        case 'G':
            ResultINT = 6;
            break;
        case 'H':
            ResultINT = 7;
            break;
        case 'I':
            ResultINT = 8;
            break;
        case 'J':
            ResultINT = 9;
            break;
        case 'K':
            ResultINT = 10;
            break;
        case 'L':
            ResultINT = 11;
            break;
        case 'M':
            ResultINT = 12;
            break;
        case 'N':
            ResultINT = 13;
            break;
        case 'O':
            ResultINT = 14;
            break;
        case 'P':
            ResultINT = 15;
            break;
        case 'Q':
            ResultINT = 16;
            break;
        case 'R':
            ResultINT = 17;
            break;
        case 'S':
            ResultINT = 18;
            break;
        case 'T':
            ResultINT = 19;
            break;
        case 'U':
            ResultINT = 20;
            break;
        case 'V':
            ResultINT = 21;
            break;
        case 'W':
            ResultINT = 22;
            break;
        case 'X':
            ResultINT = 23;
            break;
        case 'Y':
            ResultINT = 24;
            break;
        case 'Z':
            ResultINT = 25;
    }
    return ResultINT;
}
function KonvIntToChar(i) {
    switch (i) {
        case 0:
            Result = "A";
            break;
        case 1:
            Result = "B";
            break;
        case 2:
            Result = "C";
            break;
        case 3:
            Result = "D";
            break;
        case 4:
            Result = "E";
            break;
        case 5:
            Result = "F";
            break;
        case 6:
            Result = "G";
            break;
        case 7:
            Result = "H";
            break;
        case 8:
            Result = "I";
            break;
        case 9:
            Result = "J";
            break;
        case 10:
            Result = "K";
            break;
        case 11:
            Result = "L";
            break;
        case 12:
            Result = "M";
            break;
        case 13:
            Result = "N";
            break;
        case 14:
            Result = "O";
            break;
        case 15:
            Result = "P";
            break;
        case 16:
            Result = "Q";
            break;
        case 17:
            Result = "R";
            break;
        case 18:
            Result = "S";
            break;
        case 19:
            Result = "T";
            break;
        case 20:
            Result = "U";
            break;
        case 21:
            Result = "V";
            break;
        case 22:
            Result = "W";
            break;
        case 23:
            Result = "X";
            break;
        case 24:
            Result = "Y";
            break;
        case 25:
            Result = "Z";
    }
    return Result;
}
function convert() {
    const Chipper = (KonvCharToInt(InputanPlain.value) + parseInt(Key.value)) % 26 + parseInt(Penambahan.value);
    const Rest = KonvIntToChar(Chipper);
    Output.innerHTML = `<h1>${Rest}</h1>`;
    h1.setAttribute("font-size", "30px")
}
document.getElementById('Output').addEventListener('click', convert);