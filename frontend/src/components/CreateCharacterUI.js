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

            </div>     
        </div>
    );
}



export default CreateCharacterUI;