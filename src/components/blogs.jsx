import React from "react";
import BlogBox from "./BlogBox";
import featureimage from "../images/blog1.png";
import featureimage1 from "../images/blog3.png";
import featureimage2 from "../images/blog2.png";

function Blog(){
    return(
        <div id="blogs">
            <h1 id="blogh1">Most Popular Blogs</h1>
            <div class="wrap">
                <div class="search">
                    <input type="text" class="searchTerm" placeholder="What are you looking for?"/>
                    <button type="submit" class="searchButton">
                        <i class="fa fa-search"></i>
                    </button>
                </div>
                </div>
            <div className="b-container">
                <BlogBox image={featureimage} title="Learn Linux Commands" desc="By Aarti Kumar"/>
                <BlogBox image={featureimage2} title="Web Development Using Django" desc="By Gauri Sen"/>
                <BlogBox image={featureimage1} title="Agile and Scrum Development" desc="By Astha Desai"/>
            </div>
        </div>
    )
}

export default Blog;