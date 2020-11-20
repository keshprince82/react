import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

function BlogPost() {
  let { slug } = useParams();
  console.log(slug);
  return <div>Now showing post {slug}</div>;
}
export default function shivi(){


return(
  <Router>
    <Switch>
      <Route exact path="/blog">
       <h1>shivam</h1>
      </Route>
      <Route path="/blog/:slug">
        <BlogPost />
      </Route>
    </Switch>
  </Router>
  
);
}