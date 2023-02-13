// inputField er jonne

function getInputFieldValueById(inputFieldId){
const inputField=document.getElementById(inputFieldId);
// const inputFieldValue=parseFloat(inputField.value)
const inputFieldValueString=inputField.value;
const inputFieldValue=parseFloat(inputFieldValueString)
inputField.value='';
return inputFieldValue;
}

// 1st div er jonne,value update
function getElementValueById(elementId){
    const element=document.getElementById(elementId);
    const elementValueString=element.innerText;
    const elementValue=parseFloat(elementValueString);
    return elementValue;
    
}

function setTextElementValueById(elementId, newValue){
    const textElement=document.getElementById(elementId)
    textElement.innerText=newValue;
}