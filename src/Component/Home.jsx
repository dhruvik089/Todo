import { useState } from "react"

const Home = () => {

    const [input, setInput] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputValue.length === 0) {
            return alert('Please enter ')
        }
        setInput([...input, inputValue])
        setInputValue('')
    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleDelete = (index) => {
        const newTodos = [...input]
        newTodos.splice(index, 1)
        setInput(newTodos)
    }

    return (
        <>
            <div className="mx-auto w-50 my-5 border-2 ">
                <h1 className="text-center">Todo</h1>

                <form className="p-4 bg-secondary text-center d-flex justify-content-around rounded-3 " >
                    <input className="border-0 rounded-3 w-75" type="text" value={inputValue} onChange={handleChange} />
                    <button className="border-0 rounded-3" onClick={handleSubmit}>Add</button>
                </form>
                <div className="my-5 container-fluid bg-secondary rounded-3">

                    {input.map((item, index) => {
                        return (
                            <div className="row my-1 p-3  ">
                                <div className="col-10 text-white h4">{item}</div>
                                <button key={index} className="border-0 rounded-5 bg-danger col-2 text-white h5" onClick={() => handleDelete(index)}>Delete</button>
                            </div>
                        )
                    })}

                </div>
            </div>

        </>
    )
}
export default Home