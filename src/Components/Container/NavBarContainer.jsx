import { useEffect, useState } from 'react';
import { getDocuments } from '../../firebase/firebaseClient';
import Navbar from '../Stateless/Navbar';

export const NavBarContainer = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    let internalLinks = [{
        key: "all",
        description: "All"
      }];;
    getDocuments("categories").then(r => r.forEach(doc => {
        internalLinks.push(doc.data());
    })).catch(e => {
        console.error(e);
    }).finally(() => {
        setLinks(internalLinks);
    });
  }, []);

  return (
    <Navbar links={links}/>
  )
}
