// src/pages/Dashboard/index.jsx
import { useEffect, useState } from 'react';
import { auth, db } from '../../firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function DashboardPage() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;

      if (!user) {
        navigate('/');
        return;
      }

      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (userDoc.exists()) {
        setUserData(userDoc.data());
      }
    };

    fetchUserData();
  }, [navigate]);

  if (!userData) return <p>Loading user data...</p>;

  return (
    <div className='container'>
      <h1>Welcome!</h1>
      <p>
        <strong>Name:</strong> {userData.firstName}
      </p>
      <p>
        <strong>Surname:</strong> {userData.lastName}
      </p>
      <p>
        <strong>Birth Date:</strong> {userData.birthDate}
      </p>
    </div>
  );
}

export default DashboardPage;
