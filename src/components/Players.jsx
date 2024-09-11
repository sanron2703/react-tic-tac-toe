import { useState } from 'react' 

export default function Players({name, symbol, isActive, onChangeName}){
    const [playerName, setPlayerName] = useState(name)
    const [isEdit, setIsEdit] = useState(false)

    function handleEditClick() {
        setIsEdit((isEditing)=> !isEditing)

        if(isEdit){
            onChangeName(symbol, playerName)
        }
    }

    function handleName(event){
        setPlayerName(event.target.value)
    }

    let editName = <span className='player-name'>{playerName}</span>

    if(isEdit){
        editName = <input type="text" required value={playerName} onChange={handleName}/>
    }
    return(
        <li className={isActive ? 'active' : ''}>    
            <span className='player-name'>
                {editName}
                
            </span>
            <span className='player-symbol'>{symbol}</span>
            <button onClick={handleEditClick}>{isEdit ? 'Save' : 'Edit'}</button>
        </li>
    )
}