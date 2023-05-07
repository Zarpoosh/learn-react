import "./NewNameForm.css";
import {  useState } from "react";

export default function NewNameForm(props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [genre,setGenre] =useState('action')

  // const title = useRef();
  // const date = useRef();

  const resetForm = () => {
    setTitle('')
    setDate('')
    setGenre('action')

  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(title.current.value);
    // console.log(date.current.value);
    const event = {
      title: title,
      date: date,
      genre:genre,
      id: Math.floor(Math.random() * 10000),
    };
    console.log(event)
    props.addName(event);
    resetForm();
  };

  // const handleChange=(e)=>{
  //     setTitle(e.target.value)
  // }
  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <label>
        <span>name</span>
        <input type="text" onChange={(e)=>setTitle(e.target.value)} />
      </label>
      <label>
        <span>date</span>
        <input type="date" onChange={(e)=>setDate(e.target.value)} />
      </label>
      <label htmlFor="">
        <span>names</span>
        <select onChange={(e)=>setGenre(e.target.value)}>
          <option value="">action</option>
          <option value="">honar</option>
          <option value="">comadi</option>
          <option value="">action</option>
          <option value="">policy</option>
          <option value="">romantic</option>
          <option value="">fantesy</option>
          <option value="">drama</option>
        </select>
      </label>
      <button>submit</button>
    </form>
  );
}
