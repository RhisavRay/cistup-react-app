import './page.css'
/* Importing the CSS file */
import json0 from "../db_JSON/sample_db_0km.json"
import json5 from "../db_JSON/sample_db_5km.json"
import json10 from "../db_JSON/sample_db_10km.json"
import json15 from "../db_JSON/sample_db_15km.json"
import json20 from "../db_JSON/sample_db_20km.json"
import json25 from "../db_JSON/sample_db_25km.json"
/* Importing the json files */

function Page2(props)
{
    var jsonUsed
    /* Variable and logic used to decide which json file to use based on the dist value, passed as a prop */
    if(props.dis === "<5")
    {
        jsonUsed = json0
    }
    else if(props.dis === "5-10")
    {
        jsonUsed = json5
    }
    else if(props.dis === "10-15")
    {
        jsonUsed = json10
    }
    else if(props.dis === "15-20")
    {
        jsonUsed = json15
    }
    else if(props.dis === "20-25")
    {
        jsonUsed = json20
    }
    else
    {
        jsonUsed = json25
    }

    const crowdHandler = (i) =>/* A function to handle the text output according to the value of crowd given in file */
    {
        if(i == 1)
        {
            return "Many seats available"
        }
        else if(i == 2)
        {
            return "Some seats available"
        }
        else if(i == 3)
        {
            return "All seats occupied; standing space available"
        }
        else
        {
            return "Fully crowded or packed"
        }
    }
    const serviceHandler = (i) =>/* A function to handle the text output according to the value of service given in file */
    {
        if(i == 1)
        {
            return "Original"
        }
        else if(i == 2)
        {
            return "Express Non-AC"
        }
        else
        {
            return "Express AC"
        }
    }
   
    /* In the table below, where ever conditions were needed, turnary operators are used(for column 4 and 5) */

    return(
        <table>
            <thead>
                <tr>
                    <th className="col1">{jsonUsed[0].mode_1}</th>
                    <th className="col2">{jsonUsed[0].mode_2}</th>
                    <th className="col3">{jsonUsed[0].mode_4}</th>
                    <th className="col4">{(props.trans === "own2Wheeler") ? jsonUsed[0].mode_9 : jsonUsed[0].mode_8}</th>
                    <th className="col5">{(props.trans === "auto") ? jsonUsed[0].mode_7 : jsonUsed[0].mode_5}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colSpan={5} className="middle-row">Total travel time spent while inside the vehicle(s)</td>
                </tr>
                <tr>
                    <td className="col1">{jsonUsed[0]["mode_1.ivtt"]} min</td>
                    <td className="col2">{jsonUsed[0]["mode_2.ivtt"]} min</td>
                    <td className="col3">{jsonUsed[0]["mode_4.ivtt"]} min</td>
                    <td className="col4">{(props.trans === "own2Wheeler") ? jsonUsed[0]["mode_9.ivtt"] : jsonUsed[0]["mode_8.ivtt"]} min</td>
                    <td className="col5">{(props.trans === "auto") ? jsonUsed[0]["mode_7.ivtt"] : jsonUsed[0]["mode_5.ivtt"]} min</td>
                </tr>
                <tr>
                    <td colSpan={5} className="middle-row">Total travel time spent outside vehicle(s)</td>
                </tr>
                <tr>
                    <td className="col1">{jsonUsed[0]["mode_1.walktime"] + jsonUsed[0]["mode_1.waittime"]} min</td>
                    <td className="col2">{jsonUsed[0]["mode_2.walktime"] + jsonUsed[0]["mode_2.waittime"]} min</td>
                    <td className="col3">{jsonUsed[0]["mode_4.walktime"] + jsonUsed[0]["mode_4.waittime"]} min</td>
                    <td className="col4">{(props.trans === "own2Wheeler") ? (jsonUsed[0]["mode_9.walktime"]) + jsonUsed[0]["mode_9.waittime"] : (jsonUsed[0]["mode_8.walktime"] + jsonUsed[0]["mode_8.waittime"])} min</td>
                    <td className="col5">{(props.trans === "auto") ? (jsonUsed[0]["mode_7.walktime"]) + jsonUsed[0]["mode_7.waittime"] : (jsonUsed[0]["mode_5.walktime"] + jsonUsed[0]["mode_5.waittime"])} min</td>
                </tr>
                <tr>
                    <td colSpan={5} className="middle-row">Possible delay due to traffic congestion or other uncertainties</td>
                </tr>
                <tr>
                    <td className="col1">...up to {jsonUsed[0]["mode_1.tvariab"]} min more</td>
                    <td className="col2">...up to {jsonUsed[0]["mode_2.tvariab"]} min more</td>
                    <td className="col3">...up to {jsonUsed[0]["mode_4.tvariab"]} min more</td>
                    <td className="col4">...up to {(props.trans === "own2Wheeler") ? jsonUsed[0]["mode_9.tvariab"] : jsonUsed[0]["mode_8.tvariab"]} min more</td>
                    <td className="col5">...up to {(props.trans === "auto") ? jsonUsed[0]["mode_7.tvariab"] : jsonUsed[0]["mode_5.tvariab"]} min more</td>
                </tr>
                <tr>
                    <td colSpan={5} className="middle-row">Total one-way cost of travel</td>
                </tr>
                <tr>
                    <td className="col1">Rs. {jsonUsed[0]["mode_1.tcost"]}</td>
                    <td className="col2">Rs. {jsonUsed[0]["mode_2.tcost"]}</td>
                    <td className="col3">Rs. {jsonUsed[0]["mode_4.tcost"]}</td>
                    <td className="col4">Rs. {(props.trans === "own2Wheeler") ? jsonUsed[0]["mode_9.tcost"] : jsonUsed[0]["mode_8.tcost"]}</td>
                    <td className="col5">Rs. {(props.trans === "auto") ? jsonUsed[0]["mode_7.tcost"] : jsonUsed[0]["mode_5.tcost"]}</td>
                </tr>
                <tr>
                    <td colSpan={5} className="middle-row">Extent of crowding in vehicle</td>
                </tr>
                <tr>
                    <td className="col1">{crowdHandler(jsonUsed[0]["mode_1.crowd"])}</td>
                    <td className="col2">{crowdHandler(jsonUsed[0]["mode_2.crowd"])}</td>
                    <td className="col3">{crowdHandler(jsonUsed[0]["mode_4.crowd"])}</td>
                    <td className="col4"></td>
                    <td className="col5"></td>
                </tr>
                <tr>
                    <td colSpan={5} className="middle-row">Service type</td>
                </tr>
                <tr>
                    <td className="col1">{serviceHandler(jsonUsed[0]["mode_1.serv"])}</td>
                    <td className="col2">{serviceHandler(jsonUsed[0]["mode_2.serv"])}</td>
                    <td className="col3"></td>
                    <td className="col4"></td>
                    <td className="col5"></td>
                </tr>
            </tbody>
        </table>
    )
}

export default Page2