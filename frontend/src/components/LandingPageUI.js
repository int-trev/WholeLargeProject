import React, { useState } from 'react';
import axios from 'axios';

var resultList;


function getAbout()
{
  window.location.href = '/createcharacterpage';
}


function LandingPageUI()
{

    var bp = require('./Path.js');
    var storage = require('../tokenStorage.js');
    const jwt = require("jsonwebtoken");
    
    var card = '';
    var search = '';

    const [message,setMessage] = useState('');
    const [searchResults,setResults] = useState('');
    const [cardList,setCardList] = useState('');

    var _ud = localStorage.getItem('user_data');
    var ud = JSON.parse(_ud);
    var userId = ud.id;
    var firstName = ud.firstName;
    var lastName = ud.lastName;

    const searchCard = async event => 
    {
        event.preventDefault();
        		
        var tok = storage.retrieveToken();
        var obj = {userId:userId,search:search.value,jwtToken:tok};
        var js = JSON.stringify(obj);

        var config = 
        {
            method: 'post',
            url: bp.buildPath('api/searchDnD'),	
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
              console.log(response.data);
              if(res.results[0] != null)
              {
                resultList = res.results.map((obj) =>
                <div key={obj._id}>
                  <div className = "grid-display-initial">
                        <p className="item1">Character Name</p>
                        <p className="item5">{obj.characterName}</p>
                        <p className="item2">Class 1</p>
                        <p className="item6">{obj.class1}</p>
                        <p className="item3">Class 2</p>
                        <p className="item7">{obj.class2}</p>
                        <p className="item4">Class 3</p>
                        <p className="item8">{obj.class3}</p>
                        <div className="itemlong">
                        <ViewComp obj = {obj}/>
                        </div>
                  </div>
                </div>
                );
              }
                
              setResults('Card(s) have been retrieved');

              //setCardList(resultText);
              storage.storeToken( {accessToken:retTok} );
            }
        })
        .catch(function (error) 
        {
            console.log(error);
        });

    };

    // document.getElementById("idName").style.display("none");
    // edit the ids, maybe add a hash 
    // 

    return(
        <div id="landingPageDiv">
            <br />
            <input type="text" id="searchText" placeholder="Card To Search For" 
                ref={(c) => search = c} />
            <span id="cardSearchResult">{searchResults}</span>
            <input type="submit" id="loginButton" class="buttons" value = "Do It"
             onClick={searchCard} />
             <div id="component">
                    <span>{resultList}</span>
             </div>
        </div>
    );
}

function UserGreeting(props) {
    return <div></div>;
  }
  
  function GuestGreeting(props) {
    return <div></div>;
  }

  function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Show
      </button>
    );
  }
  
  function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Hide
      </button>
    );
  }


function ViewComp(props) 
{ 
    return(
        <div>
        <LoginControl obj={props.obj}/>
        </div>
    );
}

class LoginControl extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      //this.state = {isLoggedIn: false};
      this.state = {isLoggedIn: false, obj: props.obj};
    }

  
    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }
  
    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }
  
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;
      if (isLoggedIn) {
        button = <LogoutButton onClick={this.handleLogoutClick}/>;
      } else {
        button = <LoginButton onClick={this.handleLoginClick} />;
      }
  
      return (
        <div>
          <Greeting isLoggedIn={isLoggedIn} obj = {this.props.obj}/>
          {button}
          <br />
        </div>
      );
    }
  }


  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    var bp = require('./Path.js');
    var storage = require('../tokenStorage.js');
    const jwt = require("jsonwebtoken");

    var objectId = props.obj._id;
    
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

    const updateCharacter = async event => 
    {
	    event.preventDefault();

        var tok = storage.retrieveToken();
        var obj = 
            {
                userId:userId,
                objectId:objectId,
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
            url: bp.buildPath('api/updateDnD'),	
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
            console.log(retTok);
    
            if( res.error.length > 0 )
            {
                setMessage( "API Error:" + res.error );
            }
            else
            {
                console.log("hi");
                storage.storeToken({accessToken:retTok});
            }
        })
        .catch(function (error) 
        {
            console.log(error);
        });

	};
    const deleteCharacter = async event => 
    {
	    event.preventDefault();

        var tok = storage.retrieveToken();
        var obj = 
            {
                characterID: props.obj._id,
                jwtToken:tok
            };
        var js = JSON.stringify(obj);

        var config = 
        {
            method: 'post',
            url: bp.buildPath('api/deleteDND'),	
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
            console.log(retTok);
    
            if( res.error != "Character successfully  (•_•) ( •_•)>⌐■-■ (⌐■_■)  TERMINATED!   ")
            {
                setMessage( "API Error:" + res.error );
            }
            else
            {
                console.log("hi");
                storage.storeToken({accessToken:retTok});
            }
        })
        .catch(function (error) 
        {
            console.log("hewooo");
            console.log(error);
        });

	};
  if(isLoggedIn)
  {
    return(
        <div id="landingPageDiv">
            <br />
            <div>
                <p>Character Name</p>
                <input type="text" id="searchText1" placeholder="Character Name" defaultValue={props.obj.characterName}
                    ref={(c) => characterName = c} />
                <br />
            </div>
            <div>
                <h2>Classes</h2>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <p>Class 1</p>
                            <input type="text"   placeholder="Class 1" defaultValue={props.obj.class1}
                    ref={(c) => class1 = c} />
                        </td>
                        <td>
                            <p>Class 2</p>
                            <input type="text"   placeholder="Class 2" defaultValue={props.obj.class2}
                    ref={(c) => class2 = c} />
                        </td>
                        <td>
                            <p>Class 3</p>
                            <input type="text"   placeholder="Class 3" defaultValue={props.obj.class3}
                    ref={(c) => class3 = c} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Class 1 Level</p>
                            <input type="text"   placeholder="Class 1 Level" defaultValue={props.obj.class1lvl}
                        ref={(c) => class1Lvl = c} />  
                        </td>
                        <td>
                            <p>Class 2 Level</p>
                            <input type="text"   placeholder="Class 2 Level"  defaultValue={props.obj.class2lvl}
                        ref={(c) => class2Lvl = c} /> 
                        </td>
                        <td>
                            <p>Class 3 Level</p>
                            <input type="text"   placeholder="Class 3 Level" defaultValue={props.obj.class3lvl}
                        ref={(c) => class3Lvl = c} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Exp</p>
                        </td>
                        <td>
                            <input type="text"   placeholder="Exp" defaultValue={props.obj.exp}
                        ref={(c) => exp = c} />
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <h2>Character</h2>
                <table>
                <tbody>
                    <tr>
                        <td>
                            <p>Alignment</p>
                            <input type="text"   placeholder="Alignment" defaultValue={props.obj.alignment}
                        ref={(c) => alignment = c} />
                        </td>
                        <td>
                            <p>Acrobatics</p>
                            <input type="text"   placeholder="Acrobatics" defaultValue={props.obj.acrobatics}
                        ref={(c) => acrobatics = c} />
                        </td>
                        <td>
                            <p>Animal Handling</p>
                            <input type="text"   placeholder="Animal Handling" defaultValue={props.obj.animalHandling}
                        ref={(c) => animalHandling = c} />
                        </td>
                        <td>
                            <p>Arcana</p>
                            <input type="text"   placeholder="Arcana" defaultValue={props.obj.arcana}
                        ref={(c) => arcana = c} />
                        </td>
                        <td>
                            <p>Athletics</p>
                            <input type="text"   placeholder="Athletics" defaultValue={props.obj.athletics}
                        ref={(c) => athletics = c} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <p>Deception</p>
                        <input type="text"   placeholder="Deception" defaultValue={props.obj.deception}
                    ref={(c) => deception = c} />
                        </td>
                        <td>
                        <p>History</p>
                        <input type="text"   placeholder="History" defaultValue={props.obj.history}
                    ref={(c) => history = c} />
                        </td>
                        <td>
                        <p>Insight</p>
                        <input type="text"   placeholder="Insight" defaultValue={props.obj.insight}
                    ref={(c) => insight = c} />
                        </td>
                        <td>
                        <p>Intimidation</p>
                        <input type="text"   placeholder="Intimidation" defaultValue={props.obj.intimidation}
                    ref={(c) => intimidation = c} />
                        </td>
                        <td>
                        <p>Investigation</p>
                        <input type="text"   placeholder="Investigation" defaultValue={props.obj.investigation}
                    ref={(c) => investigation = c} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <p>Medicine</p>
                        <input type="text"   placeholder="Medicine" defaultValue={props.obj.medicine}
                    ref={(c) => medicine = c} />
                        </td>
                        <td>
                        <p>Nature</p>
                        <input type="text"   placeholder="Nature" defaultValue={props.obj.nature}
                    ref={(c) => nature = c} />
                        </td>
                        <td>
                        <p>Perception</p>
                        <input type="text"   placeholder="Perception" defaultValue={props.obj.perception}
                    ref={(c) => perception = c} />
                        </td>
                        <td>
                        <p>Performance</p>
                        <input type="text"   placeholder="Performance" defaultValue={props.obj.performance}
                    ref={(c) => performance = c} />
                        </td>
                        <td>
                        <p>Persuasion</p>
                        <input type="text"   placeholder="Persuasion" defaultValue={props.obj.persuasion}
                    ref={(c) => persuasion = c} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <p>Religion</p>
                        <input type="text"   placeholder="Religion" defaultValue={props.obj.religion}
                    ref={(c) => religion = c} />
                        </td>
                        <td>
                        <p>Sleight of Hand</p>
                        <input type="text"   placeholder="Sleight of Hand" defaultValue={props.obj.sleightOfhand}
                    ref={(c) => sleightOfhand = c} />
                        </td>
                        <td>
                        <p>Stealth</p>
                        <input type="text"   placeholder="Stealth" defaultValue={props.obj.stealth}
                    ref={(c) => stealth = c} />
                        </td>
                        <td>
                        <p>Survival</p>
                        <input type="text"   placeholder="Survival" defaultValue={props.obj.survival}
                    ref={(c) => survival = c} />
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <h2>Abilities</h2>
                <table>
                <tbody>
                <tr>
                        <td>
                        <p>Str</p>
                        <input type="text"   placeholder="Str" defaultValue={props.obj.str}
                    ref={(c) => str = c} />
                        </td>
                        <td>
                        <p>Dex</p>
                        <input type="text"   placeholder="Dex" defaultValue={props.obj.dex}
                    ref={(c) => dex = c} />
                        </td>
                        <td>
                        <p>Con</p>
                        <input type="text"   placeholder="Con" defaultValue={props.obj.con}
                    ref={(c) => con = c} />
                        </td>
                        <td>
                        <p>Int</p>
                        <input type="text"   placeholder="Int" defaultValue={props.obj.int}
                    ref={(c) => int = c} />
                        </td>
                        <td>
                        <p>Wis</p>
                        <input type="text"   placeholder="Wis" defaultValue={props.obj.wis}
                    ref={(c) => wis = c} />
                        </td>
                    </tr>

                    <tr>
                        <td>
                        <p>Str Save</p>
                        <input type="text"   placeholder="Str Save" defaultValue={props.obj.strSave}
                    ref={(c) => strSave = c} />
                        </td>
                        <td>
                        <p>Dex Save</p>
                        <input type="text"   placeholder="Dex Save" defaultValue={props.obj.dexSave}
                    ref={(c) => dexSave = c} />
                        </td>
                        <td>
                        <p>Con Save</p>
                        <input type="text"   placeholder="Con Save" defaultValue={props.obj.conSave}
                    ref={(c) => conSave = c} />
                        </td>
                        <td>
                        <p>Int Save</p>
                        <input type="text"   placeholder="Int Save" defaultValue={props.obj.intSave}
                    ref={(c) => intSave = c} />
                        </td>
                        <td>
                        <p>Wis Save</p>
                        <input type="text"   placeholder="Wis Save" defaultValue={props.obj.wisSave}
                    ref={(c) => wisSave = c} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <p>Cha Save</p>
                        </td>
                        <td>
                        <input type="text"   placeholder="Cha Save" defaultValue={props.obj.chaSave}
                    ref={(c) => chaSave = c} />
                        </td>
                    </tr>
                    </tbody>
                </table>

            </div>
            <div>
                <h2>Combat Traits</h2>
                <table>
                <tbody>
                    <tr>
                        <td>
                            <p>Armor Class</p>
                            <input type="text"   placeholder="Armor Class" defaultValue={props.obj.armorClass}
                    ref={(c) => armorClass = c} /> 
                        </td>
                        <td>
                            <p>Initiative</p>
                            <input type="text"   placeholder="Initiative" defaultValue={props.obj.initiative}
                                ref={(c) => initiative = c} />    
                        </td>
                        <td>
                        <p>Speed</p>
                <input type="text"   placeholder="Speed" defaultValue={props.obj.speed}
                    ref={(c) => speed = c} />  
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Max HP</p>
                            <input type="text"   placeholder="Max HP" defaultValue={props.obj.maxHP}
                                ref={(c) => maxHP = c} />   
                        </td>
                        <td>
                            <p>Current</p>
                            <input type="text"   placeholder="Current HP" defaultValue={props.obj.currHP}
                                ref={(c) => current = c} />   
                        </td>
                        <td>
                            <p>Hit Dice</p>
                            <input type="text"   placeholder="Hit Dice" defaultValue={props.obj.hitDice}
                                ref={(c) => hitDice = c} /> 
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <p>Attack 1 Name</p>
                <input type="text"   placeholder="Attack 1 Name" defaultValue={props.obj.attack1Name}
                    ref={(c) => attack1Name = c} />    
                        </td>
                        <td>
                        <p>Attack 1 Bonus</p>
                <input type="text"   placeholder="Attack 1 Bonus" defaultValue={props.obj.attack1Bonus}
                    ref={(c) => attack1Bonus = c} />    
            
                        </td>
                        <td>
                        <p>Attack 1 Type</p>
                        <input type="text"   placeholder="Attack 1 Type" defaultValue={props.obj.attack1Type}
                            ref={(c) => attack1Type = c} />    
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <p>Attack 2 Name</p>
                <input type="text"   placeholder="Attack 2 Name" defaultValue={props.obj.attack2Name}
                    ref={(c) => attack2Name = c} />    
                        </td>
                        <td>
                        <p>Attack 2 Bonus</p>
                <input type="text"   placeholder="Attack 2 Bonus" defaultValue={props.obj.attack2Bonus}
                    ref={(c) => attack2Bonus = c} />    
                        </td>
                        <td>
                        <p>Attack 2 Type</p>
                <input type="text"   placeholder="Attack 2 Type" defaultValue={props.obj.attack2Type}
                    ref={(c) => attack2Type = c} /> 
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <p>Attack 3 Name</p>
                <input type="text"   placeholder="Attack 3 Name" defaultValue={props.obj.attack3Name}
                    ref={(c) => attack3Name = c} />  
                        </td>
                        <td>
                        <p>Attack 3 Bonus</p>
                <input type="text"   placeholder="Attack 3 Bonus" defaultValue={props.obj.attack3Bonus}
                    ref={(c) => attack3Bonus = c} />   
                        </td>
                        <td>
                        <p>Attack 3 Type</p>
                <input type="text"   placeholder="Attack 3 Type" defaultValue={props.obj.attack13ype}
                    ref={(c) => attack13ype = c} />  
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <p>Ammo Based</p>
                <input type="text"   placeholder="Ammo Based" defaultValue={props.obj.ammoBased}
                    ref={(c) => ammoBased = c} />   
                        </td>
                        <td>
                        <p>Passive Perception</p>
                <input type="text"   placeholder="Passive Perception" defaultValue={props.obj.passivePerception}
                    ref={(c) => passivePerception = c} />  
                        </td>
                        <td>
                        <p>Prof Languages</p>
                <input type="text"   placeholder="Prof Languages" defaultValue={props.obj.profLanguages}
                    ref={(c) => profLanguages = c} />    
                        </td>
                    </tr>
                    </tbody>
                </table>

            </div>
            <div>
                <h2>Currency</h2>
                <table>
                <tbody>
                    <tr>
                        <td>
                        <p>Copper Piece</p>
                <input type="text"   placeholder="Copper Piece" defaultValue={props.obj.cp}
                    ref={(c) => cp = c} />  
                        </td>
                        <td>
                        <p>Silver Piece</p>
                <input type="text"   placeholder="Silver Piece" defaultValue={props.obj.sp}
                    ref={(c) => sp = c} /> 
                        </td>
                        <td>
                        <p>Electrum Piece</p>
                <input type="text"   placeholder="Electrum Piece" defaultValue={props.obj.ep}
                    ref={(c) => ep = c} />  
                        </td>
                        <td>
                        <p>Gold Piece</p>
                <input type="text"   placeholder="Gold Piece" defaultValue={props.obj.gp}
                    ref={(c) => gp = c} />
                        </td>
                        <td>
                        <p>Platinum Piece</p>
                <input type="text"   placeholder="Platinum Piece" defaultValue={props.obj.pp}
                    ref={(c) => pp = c} />  
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <h2>Physical Appearance</h2>
                <table>
                <tbody>
                    <tr>
                        <td>
                        <p>Background</p>
                <input type="text"   placeholder="Background" defaultValue={props.obj.backGround}
                    ref={(c) => backGround = c} /> 
                        </td>
                        <td>
                        <p>Race</p>
                <input type="text"   placeholder="Race" defaultValue={props.obj.race}
                    ref={(c) => race = c} /> 
                        </td>
                        <td>
                        <p>Equipment</p>
                <input type="text"   placeholder="Equipment" defaultValue={props.obj.equipment}
                    ref={(c) => equipment = c} /> 
                        </td>
                        <td>
                        <p>Feat Traits</p>
                <input type="text"   placeholder="Feat Traits" defaultValue={props.obj.featTraits}
                    ref={(c) => featTraits = c} /> 
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <p>Age</p>
                <input type="text"   placeholder="Age" defaultValue={props.obj.age}
                    ref={(c) => age = c} />  
                        </td>
                        <td>
                        <p>Height</p>
                <input type="text"   placeholder="Height" defaultValue={props.obj.height}
                    ref={(c) => height = c} /> 
                        </td>
                        <td>
                        <p>Weight</p>
                <input type="text"   placeholder="Weight" defaultValue={props.obj.weight}
                    ref={(c) => weight = c} />      
                        </td>
                        <td>
                        <p>Eyes</p>
                <input type="text"   placeholder="Eyes" defaultValue={props.obj.eyes}
                    ref={(c) => eyes = c} />   
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <p>Skin</p>
                <input type="text"   placeholder="Skin" defaultValue={props.obj.skin}
                    ref={(c) => skin = c} />
                        </td>
                        <td>
                        <p>Hair</p>
                <input type="text"   placeholder="Hair" defaultValue={props.obj.hair}
                    ref={(c) => hair = c} /> 
                        </td>
                        <td>
                        <p>Picture Placeholder</p>
                <input type="text"   placeholder="Picture Placeholder" defaultValue={props.obj.picturePlaceholder}
                    ref={(c) => picturePlaceholder = c} />  
                        </td>
                        <td>
                        <p>Allied Organizations</p>
                <input type="text"   placeholder="Allied Organizations" defaultValue={props.obj.alliedOrganizations}
                    ref={(c) => alliedOrganizations = c} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <p>Allies</p>
                <input type="text"   placeholder="Allies" defaultValue={props.obj.allies}
                    ref={(c) => allies = c} />  
                        </td>
                        <td>
                        <p>Backstory</p>
                <input type="text"   placeholder="Backstory" defaultValue={props.obj.backStory}
                    ref={(c) => backStory = c} />  
                        </td>
                        <td>
                        <p>Add Feat Traits</p>
                <input type="text"   placeholder="Add Feat Traits" defaultValue={props.obj.addfeatTraits}
                    ref={(c) => addfeatTraits = c} /> 
                        </td>
                        <td>
                        <p>Treasure</p>
                <input type="text"   placeholder="Treasure" defaultValue={props.obj.treasure}
                    ref={(c) => treasure = c} />  
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <h2>Spells</h2>
                <table>
                <tbody>
                    <tr>
                        <td>
                        <p>Spell Class</p>
                <input type="text"   placeholder="Spell Class" defaultValue={props.obj.spellClass}
                    ref={(c) => spellClass = c} /> 
                        </td>
                        <td>
                        <p>Spell Ability</p>
                <input type="text"   placeholder="Spell Ability" defaultValue={props.obj.spellAbility}
                    ref={(c) => spellAbility = c} /> 
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <p>Spell Save DC</p>
                <input type="text"   placeholder="Spell Save DC" defaultValue={props.obj.spellsaveDC}
                    ref={(c) => spellsaveDC = c} />  
                        </td>
                        <td>
                        <p>Spell Bonus</p>
                <input type="text"   placeholder="Spell Bonus" defaultValue={props.obj.spellBonus}
                    ref={(c) => spellBonus = c} /> 
                        </td>
                        <td>
                        <p>Can Trips</p>
                <input type="text"   placeholder="Can Trips" defaultValue={props.obj.cantrips}
                    ref={(c) => cantrips = c} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <p>Level 1 Spell Slot</p>
                <input type="text"   placeholder="Level 1 Spell Slot" defaultValue={props.obj.lvl1Spellslots}
                    ref={(c) => lvl1Spellslots = c} /> 
                        </td>
                        <td>
                        <p>Level 1 Prep Spells</p>
                <input type="text"   placeholder="Level 1 Prep Spells" defaultValue={props.obj.lvl1Prepspells}
                    ref={(c) => lvl1Prepspells = c} />
                        </td>
                        <td>
                        <p>Level 1 Expended</p>
                <input type="text"   placeholder="Level 1 Expended" defaultValue={props.obj.lvl1Expended}
                    ref={(c) => lvl1Expended = c} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <p>Level 2 Spell Slot</p>
                <input type="text"   placeholder="Level 2 Spell Slot" defaultValue={props.obj.lvl2Spellslots} 
                    ref={(c) => lvl2Spellslots = c} /> 
                        </td>
                        <td>
                        <p>Level 2 Prep Spells</p>
                <input type="text"   placeholder="Level 2 Prep Spells" defaultValue={props.obj.lvl2Prepspells}
                    ref={(c) => lvl2Prepspells = c} />
                        </td>
                        <td>
                        <p>Level 2 Expended</p>
                <input type="text"   placeholder="Level 2 Expended" defaultValue={props.obj.lvl2Expended}
                    ref={(c) => lvl2Expended = c} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <p>Level 3 Spell Slot</p>
                <input type="text"   placeholder="Level 3 Spell Slot" defaultValue={props.obj.lvl3Spellslots}
                    ref={(c) => lvl3Spellslots = c} /> 
                        </td>
                        <td>
                        <p>Level 3 Prep Spells</p>
                <input type="text"   placeholder="Level 3 Prep Spells" defaultValue={props.obj.lvl3Prepspells}
                    ref={(c) => lvl3Prepspells = c} />
                        </td>
                        <td>
                        <p>Level 3 Expended</p>
                <input type="text"   placeholder="Level 3 Expended" defaultValue={props.obj.lvl3Expended}
                    ref={(c) => lvl3Expended = c} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <p>Level 4 Spell Slot</p>
                <input type="text"   placeholder="Level 4 Spell Slot" defaultValue={props.obj.lvl4Spellslots}
                    ref={(c) => lvl4Spellslots = c} />
                        </td>
                        <td>
                        <p>Level 4 Prep Spells</p>
                <input type="text"   placeholder="Level 4 Prep Spells" defaultValue={props.obj.lvl4Prepspells}
                    ref={(c) => lvl4Prepspells = c} /> 
                        </td>
                        <td>
                        <p>Level 4 Expended</p>
                <input type="text"   placeholder="Level 4 Expended" defaultValue={props.obj.lvl4Expended}
                    ref={(c) => lvl4Expended = c} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <p>Level 5 Spell Slot</p>
                <input type="text"   placeholder="Level 5 Spell Slot" defaultValue={props.obj.lvl5Spellslots}
                    ref={(c) => lvl5Spellslots = c} /> 
                        </td>
                        <td>
                        <p>Level 5 Prep Spells</p>
                <input type="text"   placeholder="Level 5 Prep Spells" defaultValue={props.obj.lvl5Prepspells}
                    ref={(c) => lvl5Prepspells = c} /> 
                        </td>
                        <td>
                        <p>Level 5 Expended</p>
                <input type="text"   placeholder="Level 5 Expended" defaultValue={props.obj.lvl5Expended}
                    ref={(c) => lvl5Expended = c} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <p>Level 6 Spell Slot</p>
                <input type="text"   placeholder="Level 6 Spell Slot" defaultValue={props.obj.lvl6Spellslots}
                    ref={(c) => lvl6Spellslots = c} />
                        </td>
                        <td>
                        <p>Level 6 Prep Spells</p>
                <input type="text"   placeholder="Level 6 Prep Spells" defaultValue={props.obj.lvl6Prepspells}
                    ref={(c) => lvl6Prepspells = c} />
                        </td>
                        <td>
                        <p>Level 6 Expended</p>
                <input type="text"   placeholder="Level 6 Expended" defaultValue={props.obj.lvl6Expended}
                    ref={(c) => lvl6Expended = c} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <p>Level 7 Spell Slot</p>
                <input type="text"   placeholder="Level 7 Spell Slot" defaultValue={props.obj.lvl7Spellslots}
                    ref={(c) => lvl7Spellslots = c} />
                        </td>
                        <td>
                        <p>Level 7 Prep Spells</p>
                <input type="text"   placeholder="Level 7 Prep Spells" defaultValue={props.obj.lvl7Prepspells}
                    ref={(c) => lvl7Prepspells = c} />  
                        </td>
                        <td>
                        <p>Level 7 Expended</p>
                <input type="text"   placeholder="Level 7 Expended" defaultValue={props.obj.lvl7Expended}
                    ref={(c) => lvl7Expended = c} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <p>Level 8 Spell Slot</p>
                <input type="text"   placeholder="Level 8 Spell Slot" defaultValue={props.obj.lvl8Spellslots}
                    ref={(c) => lvl8Spellslots = c} />
                        </td>
                        <td>
                        <p>Level 8 Prep Spells</p>
                <input type="text"   placeholder="Level 8 Prep Spells" defaultValue={props.obj.lvl8Prepspells}
                    ref={(c) => lvl8Prepspells = c} /> 
                        </td>
                        <td>
                        <p>Level 8 Expended</p>
                <input type="text"   placeholder="Level 8 Expended" defaultValue={props.obj.lvl8Expended}
                    ref={(c) => lvl8Expended = c} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <p>Level 9 Spell Slot</p>
                <input type="text"   placeholder="Level 9 Spell Slot" defaultValue={props.obj.lvl9Spellslots}
                    ref={(c) => lvl9Spellslots = c} /> 
                        </td>
                        <td>
                        <p>Level 9 Prep Spells</p>
                <input type="text"   placeholder="Level 9 Prep Spells" defaultValue={props.obj.lvl9Prepspells}
                    ref={(c) => lvl9Prepspells = c} />
                        </td>
                        <td>
                        <p>Level 9 Expended</p>
                <input type="text"   placeholder="Level 9 Expended" defaultValue={props.obj.lvl9Expendedlvl9}
                    ref={(c) => lvl9Expended = c} />
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div>
            <button class="blue" onClick={updateCharacter}> Update Character </button>
            <button class="blue" onClick={deleteCharacter}> Delete Character </button>
            </div>
            <div>
          <UserGreeting />
          </div>
        </div>
        
    );
  }
  return <GuestGreeting />
    
    
    
    
    
    /*if (isLoggedIn) {
      return (
        <div>
          <UserGreeting />
          <p>LOOK HERE</p>
          <p>{props.obj.Login}</p>
        </div>
      );
    }
    return <GuestGreeting />;*/

    //do everything here...declare vars, use values, same as the others etc.
  }



export default LandingPageUI;
