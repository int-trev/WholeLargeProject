import React, { useState } from 'react';
import axios from 'axios';


function getAbout()
{
  window.location.href = '/createcharacterpage';
}




function CreateCharacterUI()
{

    var bp = require('./Path.js');
    var storage = require('../tokenStorage.js');
    const jwt = require("jsonwebtoken");

    
    var userName = '';
    var userId = '';

    var characterName = '';

    // class
    var class1 = '';
    var class1Lvl = '';
    var class2 = '';
    var class2Lvl = '';
    var class3 = '';
    var class3Lvl = '';
    var exp = '';

    // Character
    var alignment = '';
    var acrobatics = '';
    var animalHandling = ''; 
    var arcana = ''; 
    var athletics = ''; 
    var deception = ''; 
    var history = ''; 
    var insight = ''; 
    var intimidation = ''; 
    var investigation = ''; 
    var medicine = ''; 
    var nature = ''; 
    var perception = ''; 
    var performance = ''; 
    var persuasion = ''; 
    var religion = '';
    var sleightOfhand = ''; 
    var stealth = ''; 
    var survival = ''; 
    
    // abilities
    var str = ''; 
    var dex = ''; 
    var con = ''; 
    var int = ''; 
    var wis = '';
    var strSave = ''; 
    var dexSave = ''; 
    var conSave = ''; 
    var intSave = ''; 
    var wisSave = ''; 
    var chaSave = ''; 

    // Combat traits
    var armorClass = ''; 
    var initiative = ''; 
    var speed = ''; 
    var maxHP = '';
    var current = ''; 
    var hitDice = ''; 
    var attack1Name = ''; 
    var attack1Bonus  = '';
    var attack1Type = ''; 
    var attack2Name = '';
    var attack2Bonus = ''; 
    var attack2Type = ''; 
    var attack3Name = ''; 
    var attack3Bonus = ''; 
    var attack13ype = ''; 
    var ammoBased = ''; 
    var passivePerception = ''; 
    var profLanguages = ''; 
    
    // currency
    var cp = ''; // copper
    var sp = ''; // silver piece
    var ep = ''; // electrum piece
    var gp = ''; // gold
    var pp = ''; // platinum piece
    
    // physical appearance
    var backGround = '';
    var race = '';
    var equipment = ''; 
    var featTraits = ''; 
    var age = ''; 
    var height = ''; 
    var weight = '';
    var eyes = ''; 
    var skin = ''; 
    var hair = ''; 
    var picturePlaceholder = ''; 
    var alliedOrganizations = ''; 
    var allies = ''; 
    var backStory = ''; 
    var addfeatTraits = ''; 
    var treasure = '';

    // spells
    var spellClass = ''; 
    var spellAbility = ''; 
    var spellsaveDC = ''; 
    var spellBonus = '';
    var cantrips = ''; 
    var lvl1Spellslots = ''; 
    var lvl1Prepspells = ''; 
    var lvl1Expended = '';
    var lvl2Spellslots = ''; 
    var lvl2Prepspells = ''; 
    var lvl2Expended = ''; 
    var lvl3Spellslots = ''; 
    var lvl3Prepspells = ''; 
    var lvl3Expended = ''; 
    var lvl4Spellslots = ''; 
    var lvl4Prepspells = ''; 
    var lvl4Expended = ''; 
    var lvl5Spellslots = ''; 
    var lvl5Prepspells = ''; 
    var lvl5Expended = ''; 
    var lvl6Spellslots = ''; 
    var lvl6Prepspells = ''; 
    var lvl6Expended = ''; 
    var lvl7Spellslots = ''; 
    var lvl7Prepspells = ''; 
    var lvl7Expended = ''; 
    var lvl8Spellslots = ''; 
    var lvl8Prepspells = ''; 
    var lvl8Expended = ''; 
    var lvl9Spellslots = ''; 
    var lvl9Prepspells = ''; 
    var lvl9Expended = '';

    var search = '';

    const [message,setMessage] = useState('');
    const [searchResults,setResults] = useState('');
    const [cardList,setCardList] = useState('');

    var _ud = localStorage.getItem('user_data');
    var ud = JSON.parse(_ud);
    var userId = ud.id;
    var firstName = ud.firstName;
    var lastName = ud.lastName;
    userName = firstName + " " + lastName;

    const changeVal = async event =>
    {
        acrobatics.value = "applezzz";
    }

    const addCharacter = async event => 
    {
	    event.preventDefault();

        var tok = storage.retrieveToken();
        var obj = 
            {
                userId:userId,
                userName:userName,        
                characterName:characterName.value,
                class1:class1.value,
                class1Lvl:class1Lvl.value,
                class2:class2.value,
                class2Lvl:class2Lvl.value,
                class3:class3.value,
                class3Lvl:class3Lvl.value,
                backGround:backGround.value,
                race:race.value,
                alignment:alignment.value,
                exp:exp.value,
                acrobatics:acrobatics.value,
                animalHandling:animalHandling.value, 
                arcana:arcana.value, 
                athletics:athletics.value, 
                deception:deception.value, 
                history:history.value, 
                insight:insight.value, 
                intimidation:intimidation.value, 
                investigation:investigation.value, 
                medicine:medicine.value, 
                nature:nature.value, 
                perception:perception.value, 
                performance:performance.value, 
                persuasion:persuasion.value, 
                religion: religion.value,
                sleightOfhand:sleightOfhand.value, 
                stealth:stealth.value, 
                survival:survival.value, 
                str:str.value, 
                dex:dex.value, 
                con:con.value, 
                int:int.value, 
                wis:wis.value,
                strSave:strSave.value, 
                dexSave:dexSave.value, 
                conSave:conSave.value, 
                intSave:intSave.value, 
                wisSave:wisSave.value, 
                chaSave:chaSave.value, 
                armorClass:armorClass.value, 
                initiative:initiative.value, 
                speed:speed.value, 
                maxHP:maxHP.value,
                currHP:current.value, 
                hitDice: hitDice.value, 
                attack1Name:attack1Name.value, 
                attack1Bonus:attack1Bonus .value,
                attack1Type:attack1Type.value, 
                attack2Name:attack2Name.value,
                attack2Bonus:attack2Bonus.value, 
                attack2Type:attack2Type.value, 
                attack3Name:attack3Name.value, 
                attack3Bonus:attack3Bonus.value, 
                attack13ype:attack13ype.value, 
                ammoBased:ammoBased.value, 
                passivePerception:passivePerception.value, 
                profLanguages:profLanguages.value, 
                cp:cp.value, 
                sp:sp.value, 
                ep:ep.value, 
                gp:gp.value, 
                pp:pp.value, 
                equipment:equipment.value, 
                featTraits:featTraits.value, 
                age:age.value, 
                height:height.value, 
                weight:weight.value,
                eyes:eyes.value, 
                skin:skin.value, 
                hair:hair.value, 
                picturePlaceholder:picturePlaceholder.value, 
                alliedOrganizations:alliedOrganizations.value, 
                allies:allies.value, 
                backStory:backStory.value, 
                addfeatTraits:addfeatTraits.value, 
                treasure:treasure.value, 
                spellClass:spellClass.value, 
                spellAbility:spellAbility.value, 
                spellsaveDC:spellsaveDC.value, 
                spellBonus:spellBonus.value,
                cantrips:cantrips.value, 
                lvl1Spellslots:lvl1Spellslots.value, 
                lvl1Prepspells:lvl1Prepspells.value, 
                lvl1Expended:lvl1Expended.value,
                lvl2Spellslots:lvl2Spellslots.value, 
                lvl2Prepspells:lvl2Prepspells.value, 
                lvl2Expended:lvl2Expended.value, 
                lvl3Spellslots:lvl3Spellslots.value, 
                lvl3Prepspells:lvl3Prepspells.value, 
                lvl3Expended:lvl3Expended.value, 
                lvl4Spellslots:lvl4Spellslots.value, 
                lvl4Prepspells:lvl4Prepspells.value, 
                lvl4Expended:lvl4Expended.value, 
                lvl5Spellslots:lvl5Spellslots.value, 
                lvl5Prepspells:lvl5Prepspells.value, 
                lvl5Expended:lvl5Expended.value, 
                lvl6Spellslots:lvl6Spellslots.value, 
                lvl6Prepspells:lvl6Prepspells.value, 
                lvl6Expended:lvl6Expended.value, 
                lvl7Spellslots:lvl7Spellslots.value, 
                lvl7Prepspells:lvl7Prepspells.value, 
                lvl7Expended:lvl7Expended.value, 
                lvl8Spellslots:lvl8Spellslots.value, 
                lvl8Prepspells:lvl8Prepspells.value, 
                lvl8Expended:lvl8Expended.value, 
                lvl9Spellslots:lvl9Spellslots.value, 
                lvl9Prepspells:lvl9Prepspells.value, 
                lvl9Expended:lvl9Expended.value,
                jwtToken:tok
            };
        var js = JSON.stringify(obj);

        var config = 
        {
            method: 'post',
            url: bp.buildPath('api/addDnD'),	
            headers: 
            {
                'Content-Type': 'application/json'
            },
            data: js
        };
    
        axios(config)
            .then(function (response) 
        {
            var res = response.data;
            var retTok = res.jwtToken;
    
            if( res.error.length > 0 )
            {
                setMessage( "API Error:" + res.error );
            }
            else
            {
                console.log("hi");
            }
        })
        .catch(function (error) 
        {
            console.log(error);
        });

	};

    return(
        <div id="landingPageDiv">
            <br />
            <div>
                <p>Character Name</p>
                <input type="text" id="searchText" placeholder="Character Name" 
                    ref={(c) => characterName = c} />
                <br />
            </div>
            <div>
                <h2>Classes</h2>
                <p>Class 1</p>
                <input type="text" id="searchText" placeholder="Class 1" 
                    ref={(c) => class1 = c} />
                <br />
                <p>Class 1 Level</p>
                <input type="text" id="searchText" placeholder="Class 1 Level" 
                    ref={(c) => class1Lvl = c} />
                <br />
                <p>Class 2</p>
                <input type="text" id="searchText" placeholder="Class 2" 
                    ref={(c) => class2 = c} />
                <br />
                <p>Class 2 Level</p>
                <input type="text" id="searchText" placeholder="Class 2 Level"  
                    ref={(c) => class2Lvl = c} />
                <br />
                <p>Class 3</p>
                <input type="text" id="searchText" placeholder="Class 3" 
                    ref={(c) => class3 = c} />
                <br />
                <p>Class 3 Level</p>
                <input type="text" id="searchText" placeholder="Class 3 Level" 
                    ref={(c) => class3Lvl = c} />
                <br />
                <p>Exp</p>
                <input type="text" id="searchText" placeholder="Exp" 
                    ref={(c) => exp = c} />
                <br />
            </div>
            <div>
                <h2>Character</h2>
                <p>Alignment</p>
                <input type="text" id="searchText" placeholder="Alignment" 
                    ref={(c) => alignment = c} />
                <br />
                <p>Acrobatics</p>
                <input type="text" id="searchText" placeholder="Acrobatics" 
                    ref={(c) => acrobatics = c} />
                <br />
                <p>Animal Handling</p>
                <input type="text" id="searchText" placeholder="Animal Handling" 
                    ref={(c) => animalHandling = c} />
                <br />
                <p>Arcana</p>
                <input type="text" id="searchText" placeholder="Arcana" 
                    ref={(c) => arcana = c} />
                <br />
                <p>Athletics</p>
                <input type="text" id="searchText" placeholder="Athletics" 
                    ref={(c) => athletics = c} />
                <br />
                <p>Deception</p>
                <input type="text" id="searchText" placeholder="Deception" 
                    ref={(c) => deception = c} />
                <br />
                <p>History</p>
                <input type="text" id="searchText" placeholder="History" 
                    ref={(c) => history = c} />
                <br />
                <p>Insight</p>
                <input type="text" id="searchText" placeholder="Insight" 
                    ref={(c) => insight = c} />
                <br />
                <p>Intimidation</p>
                <input type="text" id="searchText" placeholder="Intimidation" 
                    ref={(c) => intimidation = c} />
                <br />
                <p>Investigation</p>
                <input type="text" id="searchText" placeholder="Investigation" 
                    ref={(c) => investigation = c} />
                <br />
                <p>Medicine</p>
                <input type="text" id="searchText" placeholder="Medicine" 
                    ref={(c) => medicine = c} />
                <br />
                <p>Nature</p>
                <input type="text" id="searchText" placeholder="Nature" 
                    ref={(c) => nature = c} />
                <br />
                <p>Perception</p>
                <input type="text" id="searchText" placeholder="Perception" 
                    ref={(c) => perception = c} />
                <br />
                <p>Performance</p>
                <input type="text" id="searchText" placeholder="Performance" 
                    ref={(c) => performance = c} />
                <br />
                <p>Persuasion</p>
                <input type="text" id="searchText" placeholder="Persuasion" 
                    ref={(c) => persuasion = c} />
                <br />
                <p>Religion</p>
                <input type="text" id="searchText" placeholder="Religion" 
                    ref={(c) => religion = c} />
                <br />
                <p>Sleight of Hand</p>
                <input type="text" id="searchText" placeholder="Sleight of Hand" 
                    ref={(c) => sleightOfhand = c} />
                <br />
                <p>Stealth</p>
                <input type="text" id="searchText" placeholder="Stealth" 
                    ref={(c) => stealth = c} />
                <br />
                <p>Survival</p>
                <input type="text" id="searchText" placeholder="Survival" 
                    ref={(c) => survival = c} />
                <br />
            </div>
            <div>
                <h2>Abilities</h2>
                <p>Str</p>
                <input type="text" id="searchText" placeholder="Str" 
                    ref={(c) => str = c} />
                <br />
                <p>Dex</p>
                <input type="text" id="searchText" placeholder="Dex" 
                    ref={(c) => dex = c} />
                <br />
                <p>Con</p>
                <input type="text" id="searchText" placeholder="Con" 
                    ref={(c) => con = c} />
                <br />
                <p>Int</p>
                <input type="text" id="searchText" placeholder="Int" 
                    ref={(c) => int = c} />
                <br />
                <p>Wis</p>
                <input type="text" id="searchText" placeholder="Wis" 
                    ref={(c) => wis = c} />
                <br />
                <p>Str Save</p>
                <input type="text" id="searchText" placeholder="Str Save" 
                    ref={(c) => strSave = c} />
                <br />
                <p>Dex Save</p>
                <input type="text" id="searchText" placeholder="Dex Save" 
                    ref={(c) => dexSave = c} />
                <br />
                <p>Con Save</p>
                <input type="text" id="searchText" placeholder="Con Save" 
                    ref={(c) => conSave = c} />
                <br />
                <p>Int Save</p>
                <input type="text" id="searchText" placeholder="Int Save" 
                    ref={(c) => intSave = c} />
                <br />
                <p>Wis Save</p>
                <input type="text" id="searchText" placeholder="Wis Save" 
                    ref={(c) => wisSave = c} />
                <br />
                <p>Cha Save</p>
                <input type="text" id="searchText" placeholder="Cha Save" 
                    ref={(c) => chaSave = c} />
                <br />
            </div>
            <div>
                <h2>Combat Traits</h2>
                <p>Armor Class</p>
                <input type="text" id="searchText" placeholder="Armor Class" 
                    ref={(c) => armorClass = c} />    
                <br />
                <p>Initiative</p>
                <input type="text" id="searchText" placeholder="Initiative" 
                    ref={(c) => initiative = c} />    
                <br />
                <p>Speed</p>
                <input type="text" id="searchText" placeholder="Speed" 
                    ref={(c) => speed = c} />    
                <br />
                <p>Max HP</p>
                <input type="text" id="searchText" placeholder="Max HP" 
                    ref={(c) => maxHP = c} />    
                <br />
                <p>Current</p>
                <input type="text" id="searchText" placeholder="Current" 
                    ref={(c) => current = c} />    
                <br />
                <p>Hit Dice</p>
                <input type="text" id="searchText" placeholder="Hit Dice" 
                    ref={(c) => hitDice = c} />    
                <br />
                <p>Attack 1 Name</p>
                <input type="text" id="searchText" placeholder="Attack 1 Name" 
                    ref={(c) => attack1Name = c} />    
                <br />
                <p>Attack 1 Bonus</p>
                <input type="text" id="searchText" placeholder="Attack 1 Bonus" 
                    ref={(c) => attack1Bonus = c} />    
                <br />
                <p>Attack 1 Type</p>
                <input type="text" id="searchText" placeholder="Attack 1 Type" 
                    ref={(c) => attack1Type = c} />    
                <br />
                <p>Attack 2 Name</p>
                <input type="text" id="searchText" placeholder="Attack 2 Name" 
                    ref={(c) => attack2Name = c} />    
                <br />
                <p>Attack 2 Bonus</p>
                <input type="text" id="searchText" placeholder="Attack 2 Bonus" 
                    ref={(c) => attack2Bonus = c} />    
                <br />
                <p>Attack 2 Type</p>
                <input type="text" id="searchText" placeholder="Attack 2 Type" 
                    ref={(c) => attack2Type = c} />    
                <br />
                <p>Attack 3 Name</p>
                <input type="text" id="searchText" placeholder="Attack 3 Name" 
                    ref={(c) => attack3Name = c} />    
                <br />
                <p>Attack 3 Bonus</p>
                <input type="text" id="searchText" placeholder="Attack 3 Bonus" 
                    ref={(c) => attack3Bonus = c} />    
                <br />
                <p>Attack 3 Type</p>
                <input type="text" id="searchText" placeholder="Attack 3 Type" 
                    ref={(c) => attack13ype = c} />    
                <br />
                <p>Ammo Based</p>
                <input type="text" id="searchText" placeholder="Ammo Based" 
                    ref={(c) => ammoBased = c} />    
                <br />
                <p>Passive Perception</p>
                <input type="text" id="searchText" placeholder="Passive Perception" 
                    ref={(c) => passivePerception = c} />    
                <br />
                <p>Prof Languages</p>
                <input type="text" id="searchText" placeholder="Prof Languages" 
                    ref={(c) => profLanguages = c} />    
                <br />
            </div>
            <div>
                <h2>Currency</h2>
                <p>Copper Piece</p>
                <input type="text" id="searchText" placeholder="Copper Piece" 
                    ref={(c) => cp = c} />    
                <br />
                <p>Silver Piece</p>
                <input type="text" id="searchText" placeholder="Silver Piece" 
                    ref={(c) => sp = c} />    
                <br />
                <p>Electrum Piece</p>
                <input type="text" id="searchText" placeholder="Electrum Piece" 
                    ref={(c) => ep = c} />    
                <br />
                <p>Gold Piece</p>
                <input type="text" id="searchText" placeholder="Gold Piece" 
                    ref={(c) => gp = c} />    
                <br />
                <p>Platinum Piece</p>
                <input type="text" id="searchText" placeholder="Platinum Piece" 
                    ref={(c) => pp = c} />    
                <br />
            </div>
            <div>
                <h2>Physical Appearance</h2>
                <p>Background</p>
                <input type="text" id="searchText" placeholder="Background" 
                    ref={(c) => backGround = c} />    
                <br />
                <p>Race</p>
                <input type="text" id="searchText" placeholder="Race" 
                    ref={(c) => race = c} />    
                <br />
                <p>Equipment</p>
                <input type="text" id="searchText" placeholder="Equipment" 
                    ref={(c) => equipment = c} />    
                <br />
                <p>Feat Traits</p>
                <input type="text" id="searchText" placeholder="Feat Traits" 
                    ref={(c) => featTraits = c} />    
                <br />
                <p>Age</p>
                <input type="text" id="searchText" placeholder="Age" 
                    ref={(c) => age = c} />    
                <br />
                <p>Height</p>
                <input type="text" id="searchText" placeholder="Height" 
                    ref={(c) => height = c} />    
                <br />
                <p>Weight</p>
                <input type="text" id="searchText" placeholder="Weight" 
                    ref={(c) => weight = c} />    
                <br />
                <p>Eyes</p>
                <input type="text" id="searchText" placeholder="Eyes" 
                    ref={(c) => eyes = c} />    
                <br />
                <p>Skin</p>
                <input type="text" id="searchText" placeholder="Skin" 
                    ref={(c) => skin = c} />    
                <br />
                <p>Hair</p>
                <input type="text" id="searchText" placeholder="Hair" 
                    ref={(c) => hair = c} />    
                <br />
                <p>Picture Placeholder</p>
                <input type="text" id="searchText" placeholder="Picture Placeholder" 
                    ref={(c) => picturePlaceholder = c} />    
                <br />
                <p>Allied Organizations</p>
                <input type="text" id="searchText" placeholder="Allied Organizations" 
                    ref={(c) => alliedOrganizations = c} />    
                <br />
                <p>Allies</p>
                <input type="text" id="searchText" placeholder="Allies" 
                    ref={(c) => allies = c} />    
                <br />
                <p>Backstory</p>
                <input type="text" id="searchText" placeholder="Backstory" 
                    ref={(c) => backStory = c} />    
                <br />
                <p>Add Feat Traits</p>
                <input type="text" id="searchText" placeholder="Add Feat Traits" 
                    ref={(c) => addfeatTraits = c} />    
                <br />
                <p>Treasure</p>
                <input type="text" id="searchText" placeholder="Treasure" 
                    ref={(c) => treasure = c} />    
                <br />
            </div>
            <div>
                <h2>Spells</h2>
                <p>Spell Class</p>
                <input type="text" id="searchText" placeholder="Spell Class" 
                    ref={(c) => spellClass = c} />    
                <br />
                <p>Spell Ability</p>
                <input type="text" id="searchText" placeholder="Spell Ability" 
                    ref={(c) => spellAbility = c} />  
                <br />
                <p>Spell Save DC</p>
                <input type="text" id="searchText" placeholder="Spell Save DC" 
                    ref={(c) => spellsaveDC = c} />    
                <br />
                <p>Spell Bonus</p>
                <input type="text" id="searchText" placeholder="Spell Bonus" 
                    ref={(c) => spellBonus = c} />  
                <br />
                <p>Can Trips</p>
                <input type="text" id="searchText" placeholder="Can Trips" 
                    ref={(c) => cantrips = c} />  
                <br />
                <p>Level 1 Spell Slot</p>
                <input type="text" id="searchText" placeholder="Level 1 Spell Slot" 
                    ref={(c) => lvl1Spellslots = c} />  
                <br />
                <p>Level 1 Prep Spells</p>
                <input type="text" id="searchText" placeholder="Level 1 Prep Spells" 
                    ref={(c) => lvl1Prepspells = c} />    
                <br />
                <p>Level 1 Expended</p>
                <input type="text" id="searchText" placeholder="Level 1 Expended" 
                    ref={(c) => lvl1Expended = c} />
                <br />
                <p>Level 2 Spell Slot</p>
                <input type="text" id="searchText" placeholder="Level 2 Spell Slot" 
                    ref={(c) => lvl2Spellslots = c} />  
                <br />
                <p>Level 2 Prep Spells</p>
                <input type="text" id="searchText" placeholder="Level 2 Prep Spells" 
                    ref={(c) => lvl2Prepspells = c} />    
                <br />
                <p>Level 2 Expended</p>
                <input type="text" id="searchText" placeholder="Level 2 Expended" 
                    ref={(c) => lvl2Expended = c} />
                <br />
                <p>Level 3 Spell Slot</p>
                <input type="text" id="searchText" placeholder="Level 3 Spell Slot" 
                    ref={(c) => lvl3Spellslots = c} />  
                <br />
                <p>Level 3 Prep Spells</p>
                <input type="text" id="searchText" placeholder="Level 3 Prep Spells" 
                    ref={(c) => lvl3Prepspells = c} />    
                <br />
                <p>Level 3 Expended</p>
                <input type="text" id="searchText" placeholder="Level 3 Expended" 
                    ref={(c) => lvl3Expended = c} />
                <br />
                <p>Level 4 Spell Slot</p>
                <input type="text" id="searchText" placeholder="Level 4 Spell Slot" 
                    ref={(c) => lvl4Spellslots = c} />  
                <br />
                <p>Level 4 Prep Spells</p>
                <input type="text" id="searchText" placeholder="Level 4 Prep Spells" 
                    ref={(c) => lvl4Prepspells = c} />    
                <br />
                <p>Level 4 Expended</p>
                <input type="text" id="searchText" placeholder="Level 4 Expended" 
                    ref={(c) => lvl4Expended = c} />
                <br />
                <p>Level 5 Spell Slot</p>
                <input type="text" id="searchText" placeholder="Level 5 Spell Slot" 
                    ref={(c) => lvl5Spellslots = c} />  
                <br />
                <p>Level 5 Prep Spells</p>
                <input type="text" id="searchText" placeholder="Level 5 Prep Spells" 
                    ref={(c) => lvl5Prepspells = c} />    
                <br />
                <p>Level 5 Expended</p>
                <input type="text" id="searchText" placeholder="Level 5 Expended" 
                    ref={(c) => lvl5Expended = c} />
                <br />
                <p>Level 6 Spell Slot</p>
                <input type="text" id="searchText" placeholder="Level 6 Spell Slot" 
                    ref={(c) => lvl6Spellslots = c} />  
                <br />
                <p>Level 6 Prep Spells</p>
                <input type="text" id="searchText" placeholder="Level 6 Prep Spells" 
                    ref={(c) => lvl6Prepspells = c} />    
                <br />
                <p>Level 6 Expended</p>
                <input type="text" id="searchText" placeholder="Level 6 Expended" 
                    ref={(c) => lvl6Expended = c} />
                <br />
                <p>Level 7 Spell Slot</p>
                <input type="text" id="searchText" placeholder="Level 7 Spell Slot" 
                    ref={(c) => lvl7Spellslots = c} />  
                <br />
                <p>Level 7 Prep Spells</p>
                <input type="text" id="searchText" placeholder="Level 7 Prep Spells" 
                    ref={(c) => lvl7Prepspells = c} />    
                <br />
                <p>Level 7 Expended</p>
                <input type="text" id="searchText" placeholder="Level 7 Expended" 
                    ref={(c) => lvl7Expended = c} />
                <br />
                <p>Level 8 Spell Slot</p>
                <input type="text" id="searchText" placeholder="Level 8 Spell Slot" 
                    ref={(c) => lvl8Spellslots = c} />  
                <br />
                <p>Level 8 Prep Spells</p>
                <input type="text" id="searchText" placeholder="Level 8 Prep Spells" 
                    ref={(c) => lvl8Prepspells = c} />    
                <br />
                <p>Level 8 Expended</p>
                <input type="text" id="searchText" placeholder="Level 8 Expended" 
                    ref={(c) => lvl8Expended = c} />
                <br />
                <p>Level 9 Spell Slot</p>
                <input type="text" id="searchText" placeholder="Level 9 Spell Slot" 
                    ref={(c) => lvl9Spellslots = c} />  
                <br />
                <p>Level 9 Prep Spells</p>
                <input type="text" id="searchText" placeholder="Level 9 Prep Spells" 
                    ref={(c) => lvl9Prepspells = c} />    
                <br />
                <p>Level 9 Expended</p>
                <input type="text" id="searchText" placeholder="Level 9 Expended" 
                    ref={(c) => lvl9Expended = c} />
                <br />
            </div>
            <div>
            <button type="button" id="addCardButton" class="buttons" 
                onClick={addCharacter}> Add Character </button><br />
            <button type="button" id="addCardButton" class="buttons" 
                onClick={changeVal}> Add Character </button><br />
            </div>
        </div>
    );
}



export default CreateCharacterUI;