import React from 'react'
import {useState} from 'react'



const Todo = () =>{

  const[inputItem, setInputItem] = useState("");

  const[items,setItems]= useState([]);

  const addItem = () => {
    if (!inputItem) {
      alert('введите что-нибудь')
    } else {
      setItems([...items, inputItem]);
      setInputItem('')
    }
  }

  const deleteItem = (id)=>{

    const updatedItems =items.filter ((elem,ind)=>{
      return ind !== id;

    })
    setItems(updatedItems);
  }

  const [done,setDone] = useState('');

  return(
      <>
        <div className='main'>

          <div className='addItem'>
            <input type="text" placeholder="Создать заметку"
                   value={inputItem}
                   onChange={(e)=>setInputItem(e.target.value)}
            />
            <button onClick={addItem}>Создать</button>
          </div>

          <div className='ShowItems'>
            {
              items.map((elem,ind)=>{
                return(
                    <div className="eachItem" key={ind}>
                      <h3>{ elem }</h3>

                      <p>{done}</p>
                      <button onClick={()=>setDone ('выполнено')}>
                        Пометить как выполненное
                      </button>



                      <button onClick={()=>deleteItem(ind)}>Удалить</button>
                    </div>

                )
              })
            }
          </div>
        </div>
      </>
  )
}

export default Todo