import React from "react";
import FeatureBox from "./featureBox";
import featureimage from "../images/feature_1.png";
import featureimage1 from "../images/feature_2.png";
import featureimage2 from "../images/feature_3.png";

function Feature(){
    return(
        <div id="features">
            <h1>Our Features</h1>
            <div className="a-container">
                <FeatureBox image={featureimage} title="Learn from Blogs" desc="Learn from different tech blogs available on the platform. Ask your queries and get your doubts cleared."/>
                <FeatureBox image={featureimage2} title="Share your Knowledge" desc="want to fluant your knowledge? Write blogs on any topic in technology. Help others learn and grow."/>
                <FeatureBox image={featureimage1} title="Win Exciting Prizes" desc="Share your blogs with others, write the most liked blog in a month and win exciting cash prizes."/>
            </div>
        </div>
    )
}

export default Feature;