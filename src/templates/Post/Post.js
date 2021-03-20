import React from "react"
import DOMPurify from "dompurify"

const post = ({ data }) => {
  const safeHTML = DOMPurify.sanitize(data.node.content)
  return <div dangerouslySetInnerHTML={{ __html: safeHTML }}></div>
}

export default post
