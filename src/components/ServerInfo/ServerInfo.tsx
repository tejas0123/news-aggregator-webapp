import { useEffect, useState } from 'react';
import fetchServerDetails from '../../services/admin/fetchServerDetails';
import Navbar from '../Navbar/Navbar';
import "./ServerInfo.css"

type Server = {
  serverId: number;
  name: string;
  apiKey: string;
  active: boolean;
};

const ServerInfo = () => {
  const [servers, setServers] = useState<Server[]>([]);

  useEffect(() => {
    const loadServerData = async () => {
      const response = await fetchServerDetails();
      if (response?.data.isOperationSuccessful) {
        setServers(response.data.data);
      } else {
        console.log('Failed to fetch server data');
      }
    };

    loadServerData();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>API Key</th>
              <th>Active</th>
            </tr>
          </thead>
          <tbody>
            {servers.map((server) => (
              <tr key={server.serverId}>
                <td>{server.name}</td>
                <td>{server.apiKey}</td>
                <td>{server.active ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ServerInfo;
