
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
