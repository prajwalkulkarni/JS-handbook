//Render props are a react pattern where a component that needs to be rendered is passed as a prop to the container componnet. This again, address code reusability 
//and avoid code duplication.
import "./RenderProps.css";

export default function RenderProps(props) {
  return (
    <div className="parent">
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Sitemap</li>
          <li>Misc</li>
        </ul>
      </nav>

      <section>
        <h3 style={{ textAlign: "center" }}>Prajwal's Blog!</h3>
      </section>

      <div className="container">
        <aside>
          <p>Most popular article this month is: XYZ</p>
        </aside>

        <main>
          <h3>Main content goes here</h3>
          {props.render()}
        </main>
      </div>

      <footer>
        <h5>Brand logo</h5>
      </footer>
    </div>
  );
}


//---------------

import React from "react";
import { render } from "react-dom";

export default class ContentComponent extends React.Component{    

    render(){
      return(
        <div>
          <h2>Today's date is {new Date().getDate()}</h2>

          <article>
            <p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
            </p>
          </article>
        </div>
      )
    }
}
