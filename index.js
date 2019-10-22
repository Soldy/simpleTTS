



const speakClass = {
     let errors = [];
     let buffer = "";
     let conf={
         pitch:100,
         speed:100,
     }
     let errorAdd = function (from, error) {
         errors.push({
             'from' :from,
             'error':error
         });
         return false;
     };
     let testNumber = function (form, numb) {
         if(numb > 256)
             return errorAdd(from, 'to high value');
         if(0>numb)
             return errorAdd(from, 'to low number');
         return true;
     }
     this.set=function(confName, confValue){
         if(!testNumber(speed))
             return false;
         conf[confName] = confValue;
     }
     const unsigned char stressInputTable=[
        '*', '1', '2', '3', '4', '5', '6', '7', '8'
     ];
     
     
     const unsigned char signInputTable1[]={
        ' ', '.', '?', ',', '-', 'I', 'I', 'E',
        'A', 'A', 'A', 'A', 'U', 'A', 'I', 'E',
        'U', 'O', 'R', 'L', 'W', 'Y', 'W', 'R',
        'L', 'W', 'Y', 'M', 'N', 'N', 'D', 'Q',
        'S', 'S', 'F', 'T', '/', '/', 'Z', 'Z',
        'V', 'D', 'C', '*', 'J', '*', '*', '*',
        'E', 'A', 'O', 'A', 'O', 'U', 'B', '*',
        '*', 'D', '*', '*', 'G', '*', '*', 'G',
        '*', '*', 'P', '*', '*', 'T', '*', '*',
        'K', '*', '*', 'K', '*', '*', 'U', 'U',
        'U'
     ];
     
     const unsigned char signInputTable2=[
        '*', '*', '*', '*', '*', 'Y', 'H', 'H',
        'E', 'A', 'H', 'O', 'H', 'X', 'X', 'R',
        'X', 'H', 'X', 'X', 'X', 'X', 'H', '*',
        '*', '*', '*', '*', '*', 'X', 'X', '*',
        '*', 'H', '*', 'H', 'H', 'X', '*', 'H',
        '*', 'H', 'H', '*', '*', '*', '*', '*',
        'Y', 'Y', 'Y', 'W', 'W', 'W', '*', '*',
        '*', '*', '*', '*', '*', '*', '*', 'X',
        '*', '*', '*', '*', '*', '*', '*', '*',
        '*', '*', '*', 'X', '*', '*', 'L', 'M',
        'N'
     ];
     
     const flags=[
        0x00 , 0x00 , 0x00 , 0x00 , 0x00 , 0xA4 , 0xA4 , 0xA4 ,
        0xA4 , 0xA4 , 0xA4 , 0x84 , 0x84 , 0xA4 , 0xA4 , 0x84 ,
        0x84 , 0x84 , 0x84 , 0x84 , 0x84 , 0x84 , 0x44 , 0x44 ,
        0x44 , 0x44 , 0x44 , 0x4C , 0x4C , 0x4C , 0x48 , 0x4C ,
        0x40 , 0x40 , 0x40 , 0x40 , 0x40 , 0x40 , 0x44 , 0x44 ,
        0x44 , 0x44 , 0x48 , 0x40 , 0x4C , 0x44 , 0x00 , 0x00 ,
        0xB4 , 0xB4 , 0xB4 , 0x94 , 0x94 , 0x94 , 0x4E , 0x4E ,
        0x4E , 0x4E , 0x4E , 0x4E , 0x4E , 0x4E , 0x4E , 0x4E ,
        0x4E , 0x4E , 0x4B , 0x4B , 0x4B , 0x4B , 0x4B , 0x4B ,
        0x4B , 0x4B , 0x4B , 0x4B , 0x4B , 0x4B , 0x80 , 0xC1 ,
        0xC1
     ];
     
     
     const char flags2 =[ 
        0x80 , 0xC1 , 0xC1 , 0xC1 , 0xC1 , 0x00 , 0x00 , 0x00 ,
        0x00 , 0x00 , 0x00 , 0x00 , 0x00 , 0x00 , 0x00 , 0x00 ,
        0x00 , 0x00 , 0x00 , 0x00 , 0x00 , 0x00 , 0x00 , 0x10 ,
        0x10 , 0x10 , 0x10 , 0x08 , 0x0C , 0x08 , 0x04 , 0x40 ,
        0x24 , 0x20 , 0x20 , 0x24 , 0x00 , 0x00 , 0x24 , 0x20 ,
        0x20 , 0x24 , 0x20 , 0x20 , 0x00 , 0x20 , 0x00 , 0x00 ,
        0x00 , 0x00 , 0x00 , 0x00 , 0x00 , 0x00 , 0x00 , 0x00 ,
        0x00 , 0x04 , 0x04 , 0x04 , 0x00 , 0x00 , 0x00 , 0x00 ,
        0x00 , 0x00 , 0x00 , 0x00 , 0x00 , 0x04 , 0x04 , 0x04 ,
        0x00 , 0x00 , 0x00 , 0x00 , 0x00 , 0x00
     ];
     
     
     const phonemeStressedLengthTable=[
        0x00 , 0x12 , 0x12 , 0x12 , 8 ,0xB , 9 ,0xB ,
        0xE ,0xF ,0xB , 0x10 ,0xC , 6 , 6 ,0xE ,
        0xC ,0xE ,0xC ,0xB , 8 , 8 ,0xB ,0xA ,
        9 , 8 , 8 , 8 , 8 , 8 , 3 , 5 ,
        2 , 2 , 2 , 2 , 2 , 2 , 6 , 6 ,
        8 , 6 , 6 , 2 , 9 , 4 , 2 , 1 ,
        0xE ,0xF ,0xF ,0xF ,0xE ,0xE , 8 , 2 ,
        2 , 7 , 2 , 1 , 7 , 2 , 2 , 7 ,
        2 , 2 , 8 , 2 , 2 , 6 , 2 , 2 ,
        7 , 2 , 4 , 7 , 1 , 4 , 5 , 5
     ];
     
     
     const phonemeLengthTable =[
        0 , 0x12 , 0x12 , 0x12 , 8 , 8 , 8 , 8 ,
        8 ,0xB , 6 ,0xC ,0xA , 5 , 5 ,0xB ,
        0xA ,0xA ,0xA , 9 , 8 , 7 , 9 , 7 ,
        6 , 8 , 6 , 7 , 7 , 7 , 2 , 5 ,
        2 , 2 , 2 , 2 , 2 , 2 , 6 , 6 ,
        7 , 6 , 6 , 2 , 8 , 3 , 1 , 0x1E ,
        0xD ,0xC ,0xC ,0xC ,0xE , 9 , 6 , 1 ,
        2 , 5 , 1 , 1 , 6 , 1 , 2 , 6 ,
        1 , 2 , 8 , 2 , 2 , 4 , 2 , 2 ,
        6 , 1 , 4 , 6 , 1 , 4 , 0xC7 , 0xFF
     ];
}
