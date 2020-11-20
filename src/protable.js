import React, { useState } from "react";
import Add from './protableAdd.js'

import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route,
    // useRoutematch
} from 'react-router-dom';
export default function Newtable() {
   

    var entries = [{ "id": 1, "name": "prince", "age": 22 }, { "id": 2, "name": "pk", "age": 23 }, { 'id': 3, "name": "rockky", "age": 24 }]

    return (<>
        <Router>
            <Link to="/add"><button>ADD</button></Link>
            <Link to="/table"><button>TABLE</button></Link>
            <Switch>
                <Route exact path="/add"><Add data={recieveEntries} /></Route>

                <Route exact path="/table"><Table entries={entries} /></Route>
            </Switch>

        </Router>

    </>
    )
}

function Table() {
    const [del, setDel] = useState(false);
    return (
        <>
            <table>
                {((Object.keys(entries[0])).map(val => <th> {val}</th>))}<th>actions</th>
                {entries.map((val, index) => <tbody><tr>{Object.values(val).map(val1 => <td>  {val1}  </td>)}
                    <td>
                        <Router>
                            <Link to="/table/view"> <button>view</button></Link>
                            <Link to="/table/edit"><button>edit</button> </Link>
                            <button index={index} onClick={(e) => Delete(e)}>delete</button>
                            <Switch>
                                {/* <Route  exact path="/delete"><Delete value={index}/></Route> */}
                                <Route exact path="/table/edit"><Edit value={index} /></Route>
                                <Route exact path="/table/view"><View value={index} /></Route>
                            </Switch>
                        </Router>

                    </td>
                </tr>
                </tbody>
                )}

            </table>


        </>

    )
}
var entries = [{ "id": 1, "name": "prince", "age": 22 }, { "id": 2, "name": "pk", "age": 23 }, { 'id': 3, "name": "rockky", "age": 24 }]

function recieveEntries(newentry) {
    // console.log(newentry)
    localStorage.setItem(`${newentry.id}`, JSON.stringify(newentry))
    let neweentry = localStorage.getItem(`${newentry.id}`);
    const NewEntry = JSON.parse(neweentry);
    // console.log(NewEntry);

    entries.push(NewEntry);
    //console.log("whole",entries)



}

function View(props) {



    return (
        <div>
            hello
            <table>
                <tr> {Object.keys(entries[props.value]).map(v => <th>{v}</th>)}</tr>
                <tr>{Object.values(entries[props.value]).map(v => <td>{v}</td>)}</tr>
            </table>
        </div>
    )

}



function Edit(props) {
    return (
        <h1>edit</h1>

    )
}
function Delete(e) {
    let dele = window.confirm("are you sure you want to delete this");

    if (dele) {
        console.log("e", dele);
        console.log("e", typeof (dele));
        entries.splice(e.index, 1)
        // console.log(a)

    }
    return (
        <>
            <Table />
        </>

    )

}
