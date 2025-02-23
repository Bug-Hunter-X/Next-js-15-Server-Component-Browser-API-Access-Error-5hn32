// pages/api/route.js (Server Component)

import {getServerSession} from "next-auth";

export default async function MyServerComponent() {
  // Fetch data from API or database here
  const session = await getServerSession();//example of server side method call
  console.log(session);
  const locationData = {url:"some url"};// sample data for demonstration purposes

  return (
    <div>
      <ClientComponent location={locationData}/>
    </div>
  );
}

// pages/client.js (Client Component)

function ClientComponent({ location }) {
  console.log(window.location); //This is fine now
  return (
    <div>
      <h1>Client Component</h1>
      <p>Location from server: {location.url}</p>
    </div>
  );
}

export default ClientComponent;