

const stylePara=(paraTag, condition)=>{

    if (condition) 
    {   
        paraTag.style.color='red';
        paraTag.style.display='block';
    }
    else
    { 
         return true
    }; 

}

export const formValidation=(inputs, event,element)=>{

    let paraTag, targetElement, ifCondition;

    if (event) {
        paraTag= event.target.nextElementSibling; 
        targetElement= event.target;     
    }else{
        paraTag= element.nextElementSibling;
        targetElement= element;
    }

    switch (targetElement.name) {

        case 'firstName':

            return stylePara(paraTag, !inputs.firstName);

        case 'lastName':

            return stylePara(paraTag, !inputs.lastName)

        case 'email':

            const emailString= targetElement.value;
            const atSymbolIndex= emailString.indexOf('@');
            const dotSymbolIndex= emailString.indexOf('.');

            ifCondition = atSymbolIndex < 1 || dotSymbolIndex <= atSymbolIndex + 2 || dotSymbolIndex === emailString.length - 1

           return  stylePara(paraTag, ifCondition)

        default:// for password

            ifCondition = targetElement.value.length < 8 || targetElement.value.length > 20
            
            return stylePara(paraTag, ifCondition)
    }
}


