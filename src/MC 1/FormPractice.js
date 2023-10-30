import { useEffect, useState } from "react"

const FormPractice = () => {
    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        gender: "",
        dateOfBirth : "",
        country: [],

    })

    useEffect(()=>{
        const date = new Date();
        const currentDate = `${date.getFullYear()}-${date.getMonth()+1 < 10 ? `0${date.getMonth()+1}` : date.getMonth()+1}-${date.getDate()}`;
        console.log(currentDate,"at here 88")
        setUserDetails((prev)=>{
            return {
                ...prev,
                dateOfBirth: currentDate
            }
        })
    },[])
    //Updateding single state
    const updateName = (val) => {
        const updatedObj = {
            ...userDetails,
            name: val
        }
        setUserDetails(updatedObj)
    }
    const handelOnChange = (e) => {
        console.log(e)
        const { name, value, type, checked } = e?.target;
        if (type === "checkbox") {
            if (checked) {
                setUserDetails((prev) => {
                    return {
                        ...prev,
                        //spread the array elements and adding value in array
                        [name]: [...prev.country, value]
                    }
                })
            }
            else {
                setUserDetails((prev) => {
                    return {
                        ...prev,
                        // filtering the array elemets and removeig by name
                        [name]: prev.country.filter((val) => val !== value)
                    }
                })
            }
        }
        else {
            setUserDetails((prev) => {
                return {
                    ...prev,
                    [name]: value
                }
            })
        }

        //setting details with copying the object and changeing the value
        /* 
           setUserDetails({
            ...userDetails,
            [name] : value
        })
        */

        //useing the prev value

    }
    const handelSubmit = (e) => {
        //it willl stop reloading on submit
        e.preventDefault();
        console.log(userDetails);
    }

    return (
        <div style={{
            height: '100vh',
            width: '100vh',
            padding: '100px',
            backgroundColor: 'mintcream'
        }}>
            <form onSubmit={handelSubmit}>
                {/* text type */}
                <label>Full Name</label> : <input type="text" name="name" onChange={handelOnChange} />
                <br /><p />

                {/* email */}
                <label>email</label> : <input type="email" name="email" onChange={(e) => { handelOnChange(e) }} />
                <br /><p />

                {/* radio */}
                <label>Gender</label> :
                <br /><input type="radio" name="Gender" value="MALE" onChange={(e) => { handelOnChange(e) }} />
                <span>MALE: </span><input type="radio" name="Gender" value="FEMALE" onChange={(e) => { handelOnChange(e) }} /><span>FEMALE: </span>
                <br /><p />

                {/* datePicker and Time*/}
                <label> Date :
                    <input type="date" name="dateOfBirth" value={userDetails.dateOfBirth} onChange={handelOnChange} />
                </label>
                <label> Time :
                    <input type="time" name="timeOfBirth" onChange={handelOnChange} />
                </label>
                <br /><p />

                {/* CheckBox */}
                <label>Country</label><br />
                <label>India</label><input type="checkbox" name="country" value="India" onChange={(e) => { handelOnChange(e) }} />
                <label>America</label><input type="checkbox" name="country" value="America" onChange={(e) => { handelOnChange(e) }} />
                <br /><p />

                
                <button type='submit'>Submit </button>


            </form>
        </div>
    )
}
export default FormPractice;