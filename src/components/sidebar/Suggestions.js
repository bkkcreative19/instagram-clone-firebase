import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getSuggestedProfiles } from "../../services/firebase";
import Skeleton from "react-loading-skeleton";
import SuggestedProfile from "./SuggestedProfile";

const Suggestions = ({ userId, following }) => {
    const [profiles, setProfiles] = useState(null);
    // console.log(profiles);
    useEffect(() => {
        const getProfiles = async () => {
            const suggestedProfiles = await getSuggestedProfiles(
                userId,
                following
            );
            setProfiles(suggestedProfiles);
        };
        if (userId) {
            getProfiles();
        }
    }, [userId]);
    const renderProfiles =
        profiles === null
            ? ""
            : profiles.map((profile) => {
                  return (
                      <SuggestedProfile
                          key={profile.docId}
                          profile={profile}
                          userId={userId}
                      />
                  );
              });

    return (
        <>
            {profiles === null ? (
                <Skeleton count={1} height={61} className="mt-5" />
            ) : (
                <div className="rounded flex flex-col">
                    <div className="text-sm flex items-center align-items justify-between mb-2">
                        <p className="font-bold text-gray-base">
                            Suggestions for you
                        </p>
                    </div>
                    <div className="mt-4 grid gap-5">{renderProfiles}</div>
                </div>
            )}
        </>
    );
};

Suggestions.propTypes = {
    userId: PropTypes.string,
    following: PropTypes.array,
};

export default Suggestions;
