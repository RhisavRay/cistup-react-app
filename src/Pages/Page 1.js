import { useState } from "react"

function Page1()
{
    const [transMode, setTransMode] = useState("")
    const [dist, setDist] = useState("")

    const transChangeHandler = (e) =>
    {
        setTransMode(e.target.value)
    }
    const distChangeHandler = (e) =>
    {
        setDist(e.target.value)
    }
    
    return(
        <form>
            <h3>What is your most frequently used means of travel from your home to work location?</h3>
            <input type="radio" name="trans" id="bus" value="bus" onChange={transChangeHandler} checked={transMode==="bus"}/>
            <label htmlFor="bus">Bus</label>
            <br/>
            <input type="radio" name="trans" id="metro" value="metro" onChange={transChangeHandler} checked={transMode==="metro"}/>
            <label htmlFor="metro">Metro</label>
            <br/>
            <input type="radio" name="trans" id="own2Wheeler" value="own2Wheeler" onChange={transChangeHandler} checked={transMode==="own2Wheeler"}/>
            <label htmlFor="own2Wheeler">Own Two-wheeler</label>
            <br/>
            <input type="radio" name="trans" id="ownCar" value="ownCar" onChange={transChangeHandler} checked={transMode==="ownCar"}/>
            <label htmlFor="ownCar">Own Car</label>
            <br/>
            <input type="radio" name="trans" id="walk/bicycle" value="walk/bicycle" onChange={transChangeHandler} checked={transMode==="walk/bicycle"}/>
            <label htmlFor="walk/bicycle">Walk / Bicycle</label>
            <br/>
            <input type="radio" name="trans" id="auto" value="auto" onChange={transChangeHandler} checked={transMode==="auto"}/>
            <label htmlFor="auto">Auto</label>
            <br/>
            <input type="radio" name="trans" id="cab" value="cab" onChange={transChangeHandler} checked={transMode==="cab"}/>
            <label htmlFor="cab">App based ride hailing cab services including Ola / Uber</label>
            

            <br/><br/>


            <h3>What is the total distance between your home and workplace?</h3>
            <input type="radio" name="dist" id="<5" value="<5" onChange={distChangeHandler} checked={dist==="<5"}/>
            <label htmlFor="<5">&lt;5km</label>
            <br/>
            <input type="radio" name="dist" id="5-10" value="5-10" onChange={distChangeHandler} checked={dist==="5-10"}/>
            <label htmlFor="5-10">5-10km</label>
            <br/>
            <input type="radio" name="dist" id="10-15" value="1-15" onChange={distChangeHandler} checked={dist==="10-15"}/>
            <label htmlFor="10-15">10-15km</label>
            <br/>
            <input type="radio" name="dist" id="15-20" value="15-20" onChange={distChangeHandler} checked={dist==="15-20"}/>
            <label htmlFor="15-20">15-20km</label>
            <br/>
            <input type="radio" name="dist" id="20-25" value="20-25" onChange={distChangeHandler} checked={dist==="20-25"}/>
            <label htmlFor="20-25">20-25km</label>
            <br/>
            <input type="radio" name="dist" id=">25" value=">25" onChange={distChangeHandler} checked={dist===">25"}/>
            <label htmlFor=">25">&gt;25km</label>
            <br/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Page1