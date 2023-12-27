import { useState } from 'react';
import './markdown.css';
import Markdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { railscasts } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const MarkdownPreview = ({ post, isEdit }) => {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const renderCodeBlock = ({ className, ...rest }) => {
    const match = /language-(\w+)/.exec(className || '');

    if (match) {
      return (
        <SyntaxHighlighter
          {...rest}
          PreTag="p"
          language={match[1]}
          style={railscasts}
        />
      );
    }

    return (
      <code {...rest} className={className}>
        {rest.children}
      </code>
    );
  };

  return (
    <div className="markdown-section">
      <textarea
        className={`textarea ${isEdit ? 'block' : 'hidden'}`}
        value={input}
        onChange={handleInputChange}
        cols="50"
        rows="10"
        placeholder="Enter markdown text here"
      />
      <Markdown
        className={`markdown ${isEdit ? 'markdown-half' : 'markdown-full'}`}
        components={{ code: renderCodeBlock }}
      >
        {isEdit ? input : post}
      </Markdown>
    </div>
  );
};

export default MarkdownPreview;
