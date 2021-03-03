import React, { memo } from "react";
import useUser from "../../hooks/use-user";
import Suggestions from "./Suggestions";
import User from "./User";

const Sidebar = () => {
    const { user } = useUser();
    // console.log("user", user);
    return (
        <div className="p-4">
            <User user={user} />
            <Suggestions user={user} />
        </div>
    );
};

export default Sidebar;
Sidebar.whyDidYouRender = true;
