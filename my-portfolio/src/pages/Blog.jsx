import React, { useEffect, useState } from "react";
import { GoogleLogin } from "react-google-login";
import axios from "axios";

const BlogPosts = ({ clientId }) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/blogger/v3/blogs/8755340565947956750/posts`,
          {
            headers: {
              Authorization: `Bearer ${
                1019470818500 -
                hs8k90pf2u81l8ab0kenqhuhinjtf4jt.apps.googleusercontent.com
              }`,
            },
          }
        );

        setBlogPosts(response.data.items);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    if (accessToken) {
      fetchBlogPosts();
    }
  }, [accessToken]);

  const handleLoginSuccess = (response) => {
    setAccessToken(response.accessToken);
  };

  const handleLoginFailure = (error) => {
    console.error("Login failed:", error);
  };

  return (
    <div>
      <h2>Blog Posts</h2>
      {accessToken ? (
        <ul>
          {blogPosts.map((post) => (
            <li key={post.id}>
              <a href={post.url}>{post.title}</a>
              <p>{post.published}</p>
            </li>
          ))}
        </ul>
      ) : (
        <GoogleLogin
          clientId={clientId}
          buttonText="Login with Google"
          onSuccess={handleLoginSuccess}
          onFailure={handleLoginFailure}
          cookiePolicy={"single_host_origin"}
        />
      )}
    </div>
  );
};

export default BlogPosts;
