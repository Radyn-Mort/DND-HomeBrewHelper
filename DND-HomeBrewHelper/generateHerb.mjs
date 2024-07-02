import { generateGrade } from "./grade.mjs"
import { rollD100,rollD12 } from "./diceRolls.mjs"

export function generateHerb(amount){
    const   herbs = {}
    const herbTable = {1:"Needle Of Hay",2:"Tall Man's Blood",3:"Sarsaparilla",4:"Bamboo",5:"Grave Shroom",6:"Blue Flame",7:"Quick Leaf",8:"Nightshade",9:"Watchless Eye",10:"Seeping Tentacle",11:"Hero's Blood"}

    for(let i = 1; i<=amount;i++){
        let x = rollD12()
        let y = rollD100()
        let multiplier = 1
        const grade = generateGrade(y)

        // double for herbs on a 12 roll
        while(x==12){
            x = rollD12()
            multiplier++
            console.log("a twelve? thats x"+multiplier+" now")
        }

        //while loop to add herbs to herbs dictionary
        while(multiplier>=1){
            if(herbs[herbTable[x]+' '+grade]>0){
            herbs[herbTable[x]+' '+grade] = herbs[herbTable[x]+' '+grade] +1
            }
            else{
                herbs[herbTable[x]+' '+grade] = 1 
            }
            multiplier--
        }

    }
    return herbs
}
