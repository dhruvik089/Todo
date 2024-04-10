import { useEffect, useState } from "react"
import axios from 'axios'

const Home = () => {

    const [input, setInput] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [btnupdate, setBtnUpdate] = useState('Add');
    const [updateId,setUpdateId] = useState('')
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        if(btnupdate === 'Update'){
            console.log('update')
            await axios.put(`http://localhost:8888/update/${updateId}`,{
                value:inputValue
            }).then(()=>showData()).catch((err)=>console.log(err))
            setBtnUpdate('Add')
            setInputValue('')
        }else{
            if (inputValue.length === 0) {
                return alert('Please enter ')
            }
            await axios.post('http://localhost:8888/add', {
                value: inputValue
            })
            showData()
            setInputValue('')
        }
        
    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:8888/delete/${id}`).then(() => showData())
    }
    
    const handleUpdate = async (ind) => {
        setBtnUpdate('Update')
        let {_id,value} = input[ind]
        setInputValue(value)
        setUpdateId(_id)
    }

    const showData = async () => {
        console.log('here')
        await axios.get('http://localhost:8888/data').then(res => setInput(res.data))
            .catch(e => e)
    }

    useEffect(() => {
        showData()
    }, [])

    return (
        <>
            <div className="mx-auto w-50 my-5 border-2 ">
                <h1 className="text-center">Todo</h1>

                <form className="p-4 bg-secondary text-center d-flex justify-content-around rounded-3 " >
                    <input className="border-0 rounded-3 w-75" type="text" value={inputValue} onChange={handleChange} />
                    <button className="border-0 rounded-3" onClick={handleSubmit}>{btnupdate}</button>
                </form>
                <div className="my-5 container-fluid bg-secondary rounded-3">

                    {input?.map((item,index) => {
                        return (
                            // eslint-disable-next-line react/jsx-key
                            <div key={index} className="row my-1 p-3">
                                <div className="col-8 text-white h4">{item.value}</div>
                                <button className="border-0 rounded-5 bg-danger col-2 text-white h5" onClick={() => handleDelete(item._id)}>Delete</button>
                                <button className="border-0 rounded-5 bg-success col-2 text-white h5" onClick={() => handleUpdate(index)}>Update</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default Home