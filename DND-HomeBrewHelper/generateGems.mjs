import { rollD100, rollD12 } from "./diceRolls.mjs";
import { generateGrade } from "./grade.mjs";

// eventually gems will need a model that had a type and grade value
export function generateGems(amount){
    const gems = {}
    const gemTable= {1:"Jade",2:"Opal",3:"Ruby",4:"Citrine",5:"Lapis",6:"Jet",7:"Emerald",8:"Topaz",9:"Diamond",10:"Sapphire",11:"Spinel"}

    for(let i = 1; i<=amount;i++){
        let x = rollD12()
        let y = rollD100()
        let multiplier = 1
        const grade = generateGrade(y)

        // double for gems on a 12 roll
        while(x==12){
            x = rollD12()
            multiplier++
            console.log("a twelve? thats x"+multiplier+" now")
        }

        //while loop to add gem to gems dictionary
        while(multiplier>=1){
            if(gems[gemTable[x]+' '+grade]>0){
            gems[gemTable[x]+' '+grade] = gems[gemTable[x]+' '+grade] +1
            }
            else{
                gems[gemTable[x]+' '+grade] = 1 
            }
            multiplier--
        }

    }
    return gems
}

