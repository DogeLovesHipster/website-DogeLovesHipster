import { useLocation } from 'react-router-dom';

const WaterSoftHackDash = () => {
    const location = useLocation();
    const { title } = location.state || { title: "WaterSoftHack Dash" }; // Fallback title if none is provided

    return (
        <div>
            <iframe
                src="/projects/watersofthack-capstone-project-turbidity-dashboard/index.html"
                style={{ width: '100%', height: '100vh', border: 'none' }}
                title="Dashboard"
            ></iframe>
        </div>
    );
};

export default WaterSoftHackDash;