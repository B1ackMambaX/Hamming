function code(){
    let str = document.getElementById('inpStr').value.split('');
    for (let i = 0; i < str.length; i++){
        str[i] *= 1;
    }
    let controlBites = new Array();
    let firstBite = (str[0] + str[1]+ str[2]) % 2;
    let secondBite = (str[1] + str[2]+ str[3]) % 2;
    let thirdBite = (str[0] + str[1]+ str[3]) % 2;
    controlBites.push(firstBite);
    controlBites.push(secondBite);
    controlBites.push(thirdBite);
    document.getElementById('codedStr').value = str.join('') + controlBites.join('');
}

function decode(){
    let codedStr = document.getElementById('codedStr').value.split('');
    
    for (let i = 0; i < codedStr.length; i++){
        codedStr[i] *= 1;
    }

    let firstSynd = (codedStr[0] + codedStr[1] + codedStr[2] + codedStr[4]) % 2;
    console.log(firstSynd);
    let secondSynd = (codedStr[1] + codedStr[2] + codedStr[3] + codedStr[5]) % 2;
    console.log(secondSynd);
    let thirdSynd = (codedStr[0] + codedStr[1] + codedStr[3] + codedStr[6]) % 2;
    console.log(thirdSynd);
    
    if (firstSynd !=0 && secondSynd == 0 && thirdSynd !=0) {
        switch (codedStr[0]){
            case 1:
                codedStr[0] = 0;
                break;
            case 0:
            codedStr[0] = 1;
                break;
        }
        document.getElementById('bError').textContent = 'Error on first bit';
        console.log(1);
    }
    if (firstSynd !=0 && secondSynd !=0 && thirdSynd  !=0) {
        switch (codedStr[1]){
            case 1:
                codedStr[1] = 0;
                break;
            case 0:
            codedStr[1] = 1;
                break;
            }
            document.getElementById('bError').textContent = 'Error on second bit';
            console.log(2);     
    }
    if (firstSynd !=0 && secondSynd  !=0 && thirdSynd == 0) {
        switch (codedStr[2]){
            case 1:
                codedStr[2] = 0;
                break;
            case 0:
            codedStr[2] = 1;
                break;
        }
        document.getElementById('bError').textContent = 'Error on third bit';
        console.log(3);         
    }
    if (firstSynd == 0 && secondSynd !=0 && thirdSynd  !=0) {
        switch (codedStr[3]){
            case 1:
                codedStr[3] = 0;
                break;
            case 0:
            codedStr[3] = 1;
                break;
        } 
        document.getElementById('bError').textContent = 'Error on fourth bit';
        console.log(4);       
    }
    if (firstSynd !=0 && secondSynd == 0 && thirdSynd == 0) {        
        document.getElementById('bError').textContent = 'Error on first control bit';
    }
    if (firstSynd == 0 && secondSynd !=0 && thirdSynd == 0) {      
        document.getElementById('bError').textContent = 'Error on second control bit';
    }
    if (thirdSynd !=0 && firstSynd == 0 && secondSynd == 0) {      
        document.getElementById('bError').textContent = 'Error on third control bite';
    } 
    
    let decStr = codedStr[0]+''+codedStr[1]+''+codedStr[2]+''+codedStr[3];
    document.getElementById('decodedStr').value = decStr;   
}
    
