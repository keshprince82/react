import { render } from '@testing-library/react';
import React from 'react';

import  Calc from './calc.js'
import Table from './Table.js'
import Stopwatch from './sw.js'
import Hooks from './compHooks.js'
import Home from "./user/home"
import Newtable from './protable.js'
import Advform from "./finalform/finalform"

import { BrowserRouter as Router,
    Switch,
    Link,
    Route
    
} from 'react-router-dom';
import NewTable from './protable.js';

export default function Routing(){
    return(
        <Router>
            <ul>
                
                    <Link to="/" ><button>Home</button></Link>
            
                
                    <Link to="/calculator" ><button>calculator</button></Link>
                
                
                    <Link to="/table" ><button> user</button>
                    </Link>
                
                
                    <Link to="/stopwatch" ><button> stopwatch</button></Link>
                
                
                    <Link to="/hooks" ><button> comphooks</button></Link>
                    <Link to="/chotaProject"><button>users table</button></Link>
                    <Link to="/badaProject"><button>badaProject</button></Link>
                    
            
                    </ul>
            <Switch>
            <Route exact path="/">
                    <Hom/>
                </Route>
                <Route exact path="/calculator">
                    <Calc/>
                </Route>
                <Route exact path="/table">
                    <Table/>
                </Route>
                <Route exact path="/stopwatch">
                    <Stopwatch/>
                </Route>
                <Route exact path="/hooks">
                    <Hooks/>
                </Route>
                <Route exact path="/chotaProject">
                    <Home/>
                </Route>
                <Route exact path="/badaProject">
                    <Advform/>
                    </Route>

            </Switch>

        </Router>
    )

}

function Hom(){
    return(
        <h1>Welcome to the world of programs</h1>
    )
}

