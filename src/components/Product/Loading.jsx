import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader
        speed={2}
        width={150}
        height={290}
        viewBox="0 0 150 290"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="0" rx="10" ry="10" width="140" height="130" />
        <rect x="0" y="155" rx="4" ry="4" width="150" height="14" />
        <rect x="0" y="175" rx="4" ry="4" width="91" height="14" />
        <rect x="0" y="220" rx="8" ry="8" width="78" height="25" />
        <rect x="114" y="214" rx="8" ry="8" width="32" height="32" />
    </ContentLoader>
)

export default MyLoader;