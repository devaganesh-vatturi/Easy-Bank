import { useNavigate } from 'react-router-dom';
import '../../Styles/Logout.css';
const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session data (e.g., auth tokens, user info)
    localStorage.removeItem('authToken'); // Example of clearing token
    sessionStorage.clear(); // Clear session data

    // Navigate to the main page
    navigate('/', { replace: true });

    // Prevent navigating back to the previous page
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function () {
      window.history.go(1);
    };
  };

  return (
    <button className="logout" onClick={handleLogout}>Logout</button>
  );
};

export default Logout;