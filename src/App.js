
import './App.css';

function App() {
  return (
    <div className="cad">
      <Details
      tick="✔"
      cross="❌"
      free="free"
      plan="$0/"
      month="month"
      user="single user"
      gb="500 GB user"
      public="unlimited pulic access"
      community=" user communinty"
      projects="Unlimited Private Projects"
      support="Dedicated Phone Support"
      domain="Free Subdomain"
      status="Monthly Status Reports"
      />
        <Details
      tick="✔"
      cross="❌"
      free="pro"
      plan="$9/"
      month="month"
      user="single user"
      gb="500 GB user"
      public="unlimited pulic access"
      community=" user communinty"
      projects="Unlimited Private Projects"
      support="Dedicated Phone Support"
      domain="Free Subdomain"
      status="Monthly Status Reports"
      />
        <Details
      tick="✔"
      cross="❌"
      free="plus"
      plan="$49/"
      month="month"
      user="single user"
      gb="500 GB user"
      public="unlimited pulic access"
      community=" user communinty"
      projects="Unlimited Private Projects"
      support="Dedicated Phone Support"
      domain="Free Subdomain"
      status="Monthly Status Reports"
      />
    </div>
    
  );
}

export default App;

function Details(props){
  return(
    <div className="bg">
    <div className="card">
          <h2>{props.free}</h2>
          <p><span className="sp">{props.plan}</span>{props.month}</p>
          <hr/>
          <p><span >{props.tick}</span>{props.user}</p>
          <p><span>{props.tick}</span>{props.gb}</p>
          <p><span>{props.tick}</span>{props.public}</p>
          <p><span>{props.tick}</span>{props.community}</p>
          <p><span>{props.cross}</span>{props.projects}</p>
          <p><span>{props.cross}</span>{props.support}</p>
          <p><span>{props.cross}</span>{props.domain}</p>
          <p><span>{props.cross}</span>{props.status}</p>
          <p><span>{props.cross}</span>{props.user}</p>
          <button className="btn" type="submit">Button</button>
        </div>
        </div>
  )
}
