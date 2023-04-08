import { useState } from "react"

function Page1()
{
    const [transMode, setTransMode] = useState('bus')
    
    return(
        <form>
            <h3>What is your most frequently used means of travel from your home to work location?</h3>
            <input type="radio" />
            <label>Bus</label>
            <br/>
            <input type="radio" />
            <label>Metro</label>
            <br/>
            <input type="radio" />
            <label>Own Two-wheeler</label>
            <br/>
            <input type="radio" />
            <label>Own Car</label>
            <br/>
            <input type="radio" />
            <label>Walk / Bicycle</label>
            <br/>
            <input type="radio" />
            <label>Auto</label>
            <br/>
            <input type="radio" />
            <label>App based ride hailing cab services including Ola / Uber</label>
            <br/>
            <br/>
            <h3>What is the total distance between your home and workplace?</h3>
            <input type="radio" />
            <label>&lt;5km</label>
            <br/>
            <input type="radio" />
            <label>5-10km</label>
            <br/>
            <input type="radio" />
            <label>10-15km</label>
            <br/>
            <input type="radio" />
            <label>15-20km</label>
            <br/>
            <input type="radio" />
            <label>20-25km</label>
            <br/>
            <input type="radio" />
            <label>&gt;25km</label>
            <br/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Page1