import {useState} from "react";

import {Users} from "./components";
import {Posts} from "./components";

const App = () => {
    const [userId, setUserId] = useState(null)
    return (
        <div>
            <Users serUserId={setUserId}/>
            {userId && <Posts userId={userId}/>}
        </div>
    );
}

export {App};
